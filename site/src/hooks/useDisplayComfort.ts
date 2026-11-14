import { useCallback, useEffect, useState } from 'react';

export type ComfortThemeId = 'claro' | 'suave' | 'sepia' | 'noturno';

export interface DisplayComfortSettings {
  theme: ComfortThemeId;
  brightness: number; // 45 to 100
  warmth: number; // 0 to 65
}

export interface ComfortPreset {
  id: string;
  label: string;
  hint: string;
  settings: DisplayComfortSettings;
}

const STORAGE_KEY = 'bacen2027_display_comfort_v1';

export const DEFAULT_COMFORT_SETTINGS: DisplayComfortSettings = {
  theme: 'claro',
  brightness: 100,
  warmth: 0,
};

export const COMFORT_PRESETS: ComfortPreset[] = [
  {
    id: 'dia',
    label: 'Dia Nítido',
    hint: 'Claro padrão (100%)',
    settings: { theme: 'claro', brightness: 100, warmth: 0 },
  },
  {
    id: 'suave',
    label: 'Claro Suave',
    hint: 'Claro sem estourar a vista',
    settings: { theme: 'suave', brightness: 90, warmth: 8 },
  },
  {
    id: 'sepia',
    label: 'Papel Quente',
    hint: 'Tom Kindle para leitura',
    settings: { theme: 'sepia', brightness: 86, warmth: 18 },
  },
  {
    id: 'madrugada',
    label: 'Madrugada',
    hint: 'Escuro suave + filtro quente',
    settings: { theme: 'noturno', brightness: 82, warmth: 16 },
  },
];

export const THEME_OPTIONS: { id: ComfortThemeId; label: string; desc: string }[] = [
  { id: 'claro', label: 'Claro', desc: 'Branco nítido' },
  { id: 'suave', label: 'Suave', desc: 'Gelo fosco' },
  { id: 'sepia', label: 'Sépia', desc: 'Papel quente' },
  { id: 'noturno', label: 'Noturno', desc: 'Grafite escuro' },
];

function clamp(val: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Math.round(val)));
}

function loadComfortSettings(): DisplayComfortSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_COMFORT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<DisplayComfortSettings>;
    const validTheme: ComfortThemeId =
      parsed.theme === 'suave' || parsed.theme === 'sepia' || parsed.theme === 'noturno'
        ? parsed.theme
        : 'claro';
    return {
      theme: validTheme,
      brightness:
        typeof parsed.brightness === 'number' ? clamp(parsed.brightness, 45, 100) : 100,
      warmth: typeof parsed.warmth === 'number' ? clamp(parsed.warmth, 0, 65) : 0,
    };
  } catch {
    return DEFAULT_COMFORT_SETTINGS;
  }
}

export function useDisplayComfort() {
  const [settings, setSettings] = useState<DisplayComfortSettings>(loadComfortSettings);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', settings.theme);
    root.style.colorScheme = settings.theme === 'noturno' ? 'dark' : 'light';

    // Continuous dimming & blue-light warmth overlays
    const dimOpacity = ((100 - settings.brightness) / 100) * 0.85;
    const warmthOpacity = (settings.warmth / 100) * 0.78;
    root.style.setProperty('--comfort-dim-opacity', dimOpacity.toFixed(3));
    root.style.setProperty('--comfort-warmth-opacity', warmthOpacity.toFixed(3));

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore storage quota errors
    }
  }, [settings]);

  const setTheme = useCallback((theme: ComfortThemeId) => {
    setSettings((prev) => ({ ...prev, theme }));
  }, []);

  const setBrightness = useCallback((brightness: number) => {
    setSettings((prev) => ({ ...prev, brightness: clamp(brightness, 45, 100) }));
  }, []);

  const setWarmth = useCallback((warmth: number) => {
    setSettings((prev) => ({ ...prev, warmth: clamp(warmth, 0, 65) }));
  }, []);

  const applyPreset = useCallback((presetSettings: DisplayComfortSettings) => {
    setSettings({
      theme: presetSettings.theme,
      brightness: clamp(presetSettings.brightness, 45, 100),
      warmth: clamp(presetSettings.warmth, 0, 65),
    });
  }, []);

  const resetComfort = useCallback(() => {
    setSettings(DEFAULT_COMFORT_SETTINGS);
  }, []);

  return {
    settings,
    setTheme,
    setBrightness,
    setWarmth,
    applyPreset,
    resetComfort,
  };
}
