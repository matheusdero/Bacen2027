import React, { useMemo } from 'react';
import {
  CalendarCheck2,
  CheckCircle2,
  Clock,
  Flame,
  MousePointerClick,
  Trophy,
} from 'lucide-react';
import { StudyDayRecord } from '../types';
import {
  addDaysToDateKey,
  computeStudyDaysStats,
  getLocalDateKey,
  MIN_STUDY_INTERACTIONS,
  MIN_STUDY_SECONDS,
} from '../hooks/useTrainerState';

interface StudyConsistencyCardProps {
  studyDays: Record<string, StudyDayRecord>;
  todayProgress: StudyDayRecord;
}

function formatShortMinutes(seconds: number): string {
  const safe = Math.max(0, Math.round(seconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

function formatTotalHours(seconds: number): string {
  const safe = Math.max(0, Math.round(seconds));
  if (safe < 60) return `${safe}s`;
  const totalMins = Math.floor(safe / 60);
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  if (hours === 0) return `${mins} min`;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

function formatPtBrDate(dateKey: string): string {
  const [y, m, d] = dateKey.split('-');
  if (!y || !m || !d) return dateKey;
  return `${d}/${m}/${y}`;
}

function getHeatLevel(record?: StudyDayRecord): 0 | 1 | 2 | 3 {
  if (!record) return 0;
  if (!record.qualified) {
    return record.activeSeconds > 0 || record.interactions > 0 ? 1 : 0;
  }
  if (record.activeSeconds >= 1800) return 3; // >= 30 min
  return 2; // validated (>= 2 min + 3 interactions)
}

const WEEKDAY_LABELS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

export const StudyConsistencyCard: React.FC<StudyConsistencyCardProps> = ({
  studyDays,
  todayProgress,
}) => {
  const todayKey = todayProgress.date || getLocalDateKey();

  // Merge live in-progress today counts with persisted studyDays
  const mergedStudyDays = useMemo(() => {
    const existing = studyDays?.[todayKey];
    const bestToday: StudyDayRecord = existing
      ? {
          date: todayKey,
          activeSeconds: Math.max(existing.activeSeconds, todayProgress.activeSeconds),
          interactions: Math.max(existing.interactions, todayProgress.interactions),
          qualified: existing.qualified || todayProgress.qualified,
          qualifiedAt: existing.qualifiedAt || todayProgress.qualifiedAt,
        }
      : todayProgress;

    return {
      ...(studyDays || {}),
      [todayKey]: bestToday,
    };
  }, [studyDays, todayKey, todayProgress]);

  const stats = useMemo(
    () => computeStudyDaysStats(mergedStudyDays, todayKey),
    [mergedStudyDays, todayKey]
  );

  // Build 12-week Monday..Sunday grid ending on the week containing today
  const weeks = useMemo(() => {
    const [y, m, d] = todayKey.split('-').map(Number);
    const todayDate = new Date(y, (m || 1) - 1, d || 1);
    const jsDay = todayDate.getDay(); // 0=Sun..6=Sat
    const mondayOffset = jsDay === 0 ? -6 : 1 - jsDay;
    const currentWeekMonday = addDaysToDateKey(todayKey, mondayOffset);
    const startMonday = addDaysToDateKey(currentWeekMonday, -11 * 7);

    const cols: Array<
      Array<{
        dateKey: string;
        isFuture: boolean;
        isToday: boolean;
        record?: StudyDayRecord;
        level: 0 | 1 | 2 | 3;
      }>
    > = [];

    for (let w = 0; w < 12; w += 1) {
      const col = [];
      for (let r = 0; r < 7; r += 1) {
        const key = addDaysToDateKey(startMonday, w * 7 + r);
        const isFuture = key > todayKey;
        const record = isFuture ? undefined : mergedStudyDays[key];
        col.push({
          dateKey: key,
          isFuture,
          isToday: key === todayKey,
          record,
          level: isFuture ? 0 : getHeatLevel(record),
        });
      }
      cols.push(col);
    }
    return cols;
  }, [mergedStudyDays, todayKey]);

  const todayRec = stats.todayRecord;
  const secondsProgress = Math.min(100, Math.round((todayRec.activeSeconds / MIN_STUDY_SECONDS) * 100));
  const interactionsProgress = Math.min(
    100,
    Math.round((todayRec.interactions / MIN_STUDY_INTERACTIONS) * 100)
  );
  const overallProgress = todayRec.qualified
    ? 100
    : Math.round((secondsProgress + interactionsProgress) / 2);

  return (
    <section className="study-consistency-card" aria-label="Frequência de Estudo Real">
      <div className="study-consistency-header">
        <div>
          <h3>
            <CalendarCheck2 size={18} />
            Frequência de Estudo Real
          </h3>
          <p className="study-consistency-subtitle">
            Um dia só é contabilizado quando há <strong>uso efetivo</strong>: pelo menos{' '}
            {Math.floor(MIN_STUDY_SECONDS / 60)} min ativos na aba (pausa após 90s parado) e{' '}
            {MIN_STUDY_INTERACTIONS} interações reais na área de estudo.
          </p>
        </div>

        <span
          className={`study-today-badge ${
            todayRec.qualified ? 'study-today-badge--ok' : 'study-today-badge--pending'
          }`}
        >
          {todayRec.qualified ? (
            <>
              <CheckCircle2 size={14} />
              Dia de Hoje Validado
            </>
          ) : (
            <>
              <Clock size={14} />
              Hoje em validação ({overallProgress}%)
            </>
          )}
        </span>
      </div>

      <div className="study-stats-row">
        <div className="study-stat-tile">
          <span className="study-stat-label">
            <CalendarCheck2 size={13} />
            Dias Validados
          </span>
          <strong className="study-stat-value">{stats.qualifiedDaysCount}</strong>
          <span className="study-stat-hint">
            {stats.last30DaysQualified} nos últimos 30 dias
          </span>
        </div>

        <div className="study-stat-tile">
          <span className="study-stat-label">
            <Flame size={13} />
            Sequência Atual
          </span>
          <strong className="study-stat-value">
            {stats.currentStreak} {stats.currentStreak === 1 ? 'dia' : 'dias'}
          </strong>
          <span className="study-stat-hint">
            {todayRec.qualified ? 'Mantida hoje' : 'Estude hoje para manter/iniciar'}
          </span>
        </div>

        <div className="study-stat-tile">
          <span className="study-stat-label">
            <Trophy size={13} />
            Maior Sequência
          </span>
          <strong className="study-stat-value">
            {stats.longestStreak} {stats.longestStreak === 1 ? 'dia' : 'dias'}
          </strong>
          <span className="study-stat-hint">Recorde consecutivo</span>
        </div>

        <div className="study-stat-tile">
          <span className="study-stat-label">
            <Clock size={13} />
            Tempo Ativo Total
          </span>
          <strong className="study-stat-value">{formatTotalHours(stats.totalActiveSeconds)}</strong>
          <span className="study-stat-hint">Tempo efetivo medido</span>
        </div>
      </div>

      <div className="study-today-box">
        <div className="study-today-metrics">
          <div className="study-metric-progress">
            <div className="study-metric-head">
              <span>
                <Clock size={13} />
                Tempo ativo hoje
              </span>
              <strong>
                {formatShortMinutes(todayRec.activeSeconds)} /{' '}
                {formatShortMinutes(MIN_STUDY_SECONDS)}
              </strong>
            </div>
            <div className="study-progress-track">
              <div
                className={`study-progress-fill ${
                  todayRec.activeSeconds >= MIN_STUDY_SECONDS ? 'study-progress-fill--done' : ''
                }`}
                style={{ width: `${secondsProgress}%` }}
              />
            </div>
          </div>

          <div className="study-metric-progress">
            <div className="study-metric-head">
              <span>
                <MousePointerClick size={13} />
                Interações reais hoje
              </span>
              <strong>
                {todayRec.interactions} / {MIN_STUDY_INTERACTIONS} ações
              </strong>
            </div>
            <div className="study-progress-track">
              <div
                className={`study-progress-fill ${
                  todayRec.interactions >= MIN_STUDY_INTERACTIONS
                    ? 'study-progress-fill--done'
                    : ''
                }`}
                style={{ width: `${interactionsProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="study-heatmap-section">
        <div className="study-heatmap-header">
          <span>Calendário das últimas 12 semanas</span>
          <div className="study-heatmap-legend" aria-hidden="true">
            <span>Menos</span>
            <span className="heat-cell heat-level-0" />
            <span className="heat-cell heat-level-1" title="Abertura breve (não validado)" />
            <span className="heat-cell heat-level-2" title="Dia validado (2+ min e 3+ ações)" />
            <span className="heat-cell heat-level-3" title="Sessão intensa (30+ min)" />
            <span>Mais</span>
          </div>
        </div>

        <div className="study-heatmap-wrap">
          <div className="study-heatmap-weekdays" aria-hidden="true">
            {WEEKDAY_LABELS.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div className="study-heatmap-grid" role="grid" aria-label="Calendário de 12 semanas">
            {weeks.map((week, wIdx) => (
              <div className="study-heatmap-col" key={wIdx}>
                {week.map((cell) => {
                  const rec = cell.record;
                  const statusLabel = cell.isFuture
                    ? 'Dia futuro'
                    : rec?.qualified
                    ? rec.activeSeconds >= 1800
                      ? 'Sessão intensa validada'
                      : 'Dia de estudo validado'
                    : rec && (rec.activeSeconds > 0 || rec.interactions > 0)
                    ? 'Acesso breve (ainda não validado)'
                    : 'Sem estudo registrado';
                  const detailText =
                    rec && !cell.isFuture
                      ? ` · ${formatTotalHours(rec.activeSeconds)} · ${rec.interactions} ${
                          rec.interactions === 1 ? 'ação' : 'ações'
                        }`
                      : '';
                  const tooltip = `${formatPtBrDate(cell.dateKey)} — ${statusLabel}${detailText}`;

                  return (
                    <span
                      key={cell.dateKey}
                      className={`heat-cell heat-level-${cell.level}${
                        cell.isFuture ? ' heat-cell--future' : ''
                      }${cell.isToday ? ' heat-cell--today' : ''}`}
                      title={tooltip}
                      aria-label={tooltip}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
