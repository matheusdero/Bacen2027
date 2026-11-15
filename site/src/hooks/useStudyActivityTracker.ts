import { useCallback, useEffect, useRef, useState } from 'react';
import { StudyDayRecord } from '../types';
import {
  getLocalDateKey,
  MIN_STUDY_INTERACTIONS,
  MIN_STUDY_SECONDS,
} from './useTrainerState';

const IDLE_TIMEOUT_MS = 90_000; // Pausa contagem se ficar > 90s sem mexer/rolar
const INTERACTION_COOLDOWN_MS = 1_200; // Evita múltiplos cliques rápidos contarem como várias ações
const MOTION_REFRESH_THROTTLE_MS = 2_000;
const FLUSH_INTERVAL_SECONDS = 60;

interface UseStudyActivityTrackerArgs {
  studyDays: Record<string, StudyDayRecord>;
  onRecordHeartbeat: (
    dateKey: string,
    activeSeconds: number,
    interactions: number,
    bumpCloudSync: boolean
  ) => boolean;
}

export function useStudyActivityTracker({
  studyDays,
  onRecordHeartbeat,
}: UseStudyActivityTrackerArgs) {
  const initialDate = getLocalDateKey();
  const storedToday = studyDays[initialDate];

  const dateKeyRef = useRef(initialDate);
  const secondsRef = useRef(storedToday?.activeSeconds ?? 0);
  const interactionsRef = useRef(storedToday?.interactions ?? 0);
  const qualifiedRef = useRef(Boolean(storedToday?.qualified));

  const lastActivityMsRef = useRef<number>(Date.now());
  const lastInteractionCountMsRef = useRef<number>(0);
  const lastMotionRefreshMsRef = useRef<number>(0);
  const lastFlushedSecondsRef = useRef<number>(storedToday?.activeSeconds ?? 0);
  const lastFlushedInteractionsRef = useRef<number>(storedToday?.interactions ?? 0);

  const [todayProgress, setTodayProgress] = useState<StudyDayRecord>(() => ({
    date: initialDate,
    activeSeconds: storedToday?.activeSeconds ?? 0,
    interactions: storedToday?.interactions ?? 0,
    qualified: Boolean(storedToday?.qualified),
    qualifiedAt: storedToday?.qualifiedAt,
  }));
  const [justQualifiedNotice, setJustQualifiedNotice] = useState<string | null>(null);

  const onRecordRef = useRef(onRecordHeartbeat);
  onRecordRef.current = onRecordHeartbeat;

  // Sincroniza refs caso o perfil tenha sido atualizado da nuvem (GitHub Gist)
  useEffect(() => {
    const today = getLocalDateKey();
    const fromProfile = studyDays[today];
    if (!fromProfile) return;

    let changed = false;
    if (fromProfile.activeSeconds > secondsRef.current) {
      secondsRef.current = fromProfile.activeSeconds;
      lastFlushedSecondsRef.current = fromProfile.activeSeconds;
      changed = true;
    }
    if (fromProfile.interactions > interactionsRef.current) {
      interactionsRef.current = fromProfile.interactions;
      lastFlushedInteractionsRef.current = fromProfile.interactions;
      changed = true;
    }
    if (fromProfile.qualified && !qualifiedRef.current) {
      qualifiedRef.current = true;
      changed = true;
    }

    if (changed) {
      setTodayProgress({
        date: today,
        activeSeconds: secondsRef.current,
        interactions: interactionsRef.current,
        qualified: qualifiedRef.current,
        qualifiedAt: fromProfile.qualifiedAt,
      });
    }
  }, [studyDays]);

  const dismissQualifiedNotice = useCallback(() => {
    setJustQualifiedNotice(null);
  }, []);

  useEffect(() => {
    const flushState = (forceBumpCloud: boolean) => {
      const sec = secondsRef.current;
      const inter = interactionsRef.current;
      if (
        sec === lastFlushedSecondsRef.current &&
        inter === lastFlushedInteractionsRef.current
      ) {
        return;
      }

      const qualifiesNow =
        !qualifiedRef.current &&
        sec >= MIN_STUDY_SECONDS &&
        inter >= MIN_STUDY_INTERACTIONS;

      const shouldBumpCloud = forceBumpCloud || qualifiesNow;
      onRecordRef.current(dateKeyRef.current, sec, inter, shouldBumpCloud);

      lastFlushedSecondsRef.current = sec;
      lastFlushedInteractionsRef.current = inter;

      if (qualifiesNow) {
        qualifiedRef.current = true;
        setJustQualifiedNotice('Dia de estudo validado! +1 dia na sua sequência.');
        window.setTimeout(() => setJustQualifiedNotice(null), 5000);
      }
    };

    const handleIntentionalAction = (event: Event) => {
      const now = Date.now();
      lastActivityMsRef.current = now;

      if (event.type === 'keydown') {
        const key = (event as KeyboardEvent).key;
        if (
          key === 'Shift' ||
          key === 'Control' ||
          key === 'Alt' ||
          key === 'Meta' ||
          key === 'Escape' ||
          key === 'Tab' ||
          key === 'CapsLock'
        ) {
          return;
        }
      }

      const target = event.target as HTMLElement | null;
      const isStudyAreaClick =
        Boolean(target?.closest('.main-container')) || Boolean(target?.closest('.nav-tab'));
      if (!isStudyAreaClick) return;

      if (now - lastInteractionCountMsRef.current < INTERACTION_COOLDOWN_MS) {
        return;
      }
      lastInteractionCountMsRef.current = now;
      interactionsRef.current += 1;

      const becameQualified =
        !qualifiedRef.current &&
        secondsRef.current >= MIN_STUDY_SECONDS &&
        interactionsRef.current >= MIN_STUDY_INTERACTIONS;

      setTodayProgress((prev) => ({
        ...prev,
        date: dateKeyRef.current,
        activeSeconds: secondsRef.current,
        interactions: interactionsRef.current,
        qualified: qualifiedRef.current || becameQualified,
      }));

      if (becameQualified) {
        flushState(true);
      }
    };

    const handlePassiveMotion = () => {
      const now = Date.now();
      if (now - lastMotionRefreshMsRef.current < MOTION_REFRESH_THROTTLE_MS) return;
      lastMotionRefreshMsRef.current = now;
      lastActivityMsRef.current = now;
    };

    const handleVisibilityOrHide = () => {
      if (document.visibilityState === 'hidden') {
        const deltaSec = secondsRef.current - lastFlushedSecondsRef.current;
        if (deltaSec >= 10 || interactionsRef.current > lastFlushedInteractionsRef.current) {
          flushState(qualifiedRef.current && deltaSec >= 15);
        }
      } else {
        lastActivityMsRef.current = Date.now();
      }
    };

    window.addEventListener('pointerdown', handleIntentionalAction, { passive: true });
    window.addEventListener('keydown', handleIntentionalAction, { passive: true });
    window.addEventListener('scroll', handlePassiveMotion, { passive: true });
    window.addEventListener('wheel', handlePassiveMotion, { passive: true });
    window.addEventListener('mousemove', handlePassiveMotion, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityOrHide);
    window.addEventListener('pagehide', handleVisibilityOrHide);

    const intervalId = window.setInterval(() => {
      const todayKey = getLocalDateKey();
      if (todayKey !== dateKeyRef.current) {
        flushState(qualifiedRef.current);
        dateKeyRef.current = todayKey;
        secondsRef.current = 0;
        interactionsRef.current = 0;
        qualifiedRef.current = false;
        lastFlushedSecondsRef.current = 0;
        lastFlushedInteractionsRef.current = 0;
        setTodayProgress({
          date: todayKey,
          activeSeconds: 0,
          interactions: 0,
          qualified: false,
        });
      }

      if (document.visibilityState !== 'visible') return;
      const now = Date.now();
      if (now - lastActivityMsRef.current > IDLE_TIMEOUT_MS) return;

      secondsRef.current += 1;

      const sec = secondsRef.current;
      const inter = interactionsRef.current;
      const becomesQualified =
        !qualifiedRef.current &&
        sec >= MIN_STUDY_SECONDS &&
        inter >= MIN_STUDY_INTERACTIONS;

      setTodayProgress((prev) => ({
        ...prev,
        date: todayKey,
        activeSeconds: sec,
        interactions: inter,
        qualified: qualifiedRef.current || becomesQualified,
      }));

      if (becomesQualified) {
        flushState(true);
      } else if (sec - lastFlushedSecondsRef.current >= FLUSH_INTERVAL_SECONDS) {
        flushState(qualifiedRef.current);
      }
    }, 1000);

    return () => {
      window.removeEventListener('pointerdown', handleIntentionalAction);
      window.removeEventListener('keydown', handleIntentionalAction);
      window.removeEventListener('scroll', handlePassiveMotion);
      window.removeEventListener('wheel', handlePassiveMotion);
      window.removeEventListener('mousemove', handlePassiveMotion);
      document.removeEventListener('visibilitychange', handleVisibilityOrHide);
      window.removeEventListener('pagehide', handleVisibilityOrHide);
      window.clearInterval(intervalId);
    };
  }, []);

  return {
    todayProgress,
    justQualifiedNotice,
    dismissQualifiedNotice,
  };
}
