import React, { useEffect, useRef, useState } from 'react';
import {
  Flame,
  Minus,
  Moon,
  Plus,
  RotateCcw,
  Sun,
  SunDim,
  SunMedium,
} from 'lucide-react';
import {
  COMFORT_PRESETS,
  ComfortThemeId,
  DEFAULT_COMFORT_SETTINGS,
  DisplayComfortSettings,
  THEME_OPTIONS,
} from '../hooks/useDisplayComfort';

interface DisplayComfortControlProps {
  settings: DisplayComfortSettings;
  onChangeTheme: (theme: ComfortThemeId) => void;
  onChangeBrightness: (brightness: number) => void;
  onChangeWarmth: (warmth: number) => void;
  onApplyPreset: (preset: DisplayComfortSettings) => void;
  onReset: () => void;
}

export const DisplayComfortControl: React.FC<DisplayComfortControlProps> = ({
  settings,
  onChangeTheme,
  onChangeBrightness,
  onChangeWarmth,
  onApplyPreset,
  onReset,
}) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const ThemeIcon =
    settings.theme === 'noturno'
      ? Moon
      : settings.theme === 'sepia'
      ? SunDim
      : settings.theme === 'suave'
      ? SunMedium
      : Sun;

  const currentThemeLabel =
    THEME_OPTIONS.find((t) => t.id === settings.theme)?.label ?? 'Claro';

  const isDefault =
    settings.theme === DEFAULT_COMFORT_SETTINGS.theme &&
    settings.brightness === DEFAULT_COMFORT_SETTINGS.brightness &&
    settings.warmth === DEFAULT_COMFORT_SETTINGS.warmth;

  return (
    <div className="comfort-control-wrap" ref={wrapRef}>
      <button
        type="button"
        className={`comfort-trigger-btn ${open ? 'open' : ''} ${
          !isDefault ? 'customized' : ''
        }`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        title="Ajustar brilho, tom claro suave e conforto para madrugada"
      >
        <ThemeIcon size={16} />
        <span className="comfort-trigger-text">
          <span className="comfort-trigger-mode">{currentThemeLabel}</span>
          <span className="comfort-trigger-pct">{settings.brightness}%</span>
        </span>
      </button>

      {open && (
        <div
          className="comfort-popover"
          role="dialog"
          aria-label="Brilho e Conforto Visual"
        >
          <div className="comfort-popover-header">
            <div>
              <strong>Brilho &amp; Conforto Visual</strong>
              <span>Salvo automaticamente neste dispositivo</span>
            </div>
            {!isDefault && (
              <button
                type="button"
                className="comfort-reset-btn"
                onClick={onReset}
                title="Voltar para Claro 100%"
              >
                <RotateCcw size={13} /> Padrão
              </button>
            )}
          </div>

          {/* 1-Click Presets */}
          <div className="comfort-section">
            <div className="comfort-section-label">Perfis Rápidos</div>
            <div className="comfort-presets-grid">
              {COMFORT_PRESETS.map((preset) => {
                const active =
                  settings.theme === preset.settings.theme &&
                  settings.brightness === preset.settings.brightness &&
                  settings.warmth === preset.settings.warmth;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    className={`comfort-preset-btn preset-${preset.settings.theme} ${
                      active ? 'active' : ''
                    }`}
                    onClick={() => onApplyPreset(preset.settings)}
                  >
                    <span className="preset-swatch" aria-hidden="true" />
                    <span className="preset-copy">
                      <strong>{preset.label}</strong>
                      <small>{preset.hint}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme Base Selector */}
          <div className="comfort-section">
            <div className="comfort-section-label">Fundo da Tela (4 tons)</div>
            <div className="comfort-theme-pills" role="radiogroup" aria-label="Modo de fundo">
              {THEME_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  role="radio"
                  aria-checked={settings.theme === opt.id}
                  className={`comfort-theme-pill theme-opt-${opt.id} ${
                    settings.theme === opt.id ? 'active' : ''
                  }`}
                  onClick={() => onChangeTheme(opt.id)}
                  title={opt.desc}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Continuous Brightness Slider */}
          <div className="comfort-section">
            <div className="comfort-slider-head">
              <label htmlFor="comfort-brightness-range">
                <SunMedium size={14} /> Brilho da Tela
              </label>
              <strong className="comfort-val-badge">{settings.brightness}%</strong>
            </div>
            <div className="comfort-slider-row">
              <button
                type="button"
                className="comfort-step-btn"
                onClick={() => onChangeBrightness(settings.brightness - 5)}
                disabled={settings.brightness <= 45}
                aria-label="Diminuir brilho em 5%"
              >
                <Minus size={13} />
              </button>
              <input
                id="comfort-brightness-range"
                type="range"
                min={45}
                max={100}
                step={1}
                value={settings.brightness}
                onChange={(e) => onChangeBrightness(Number(e.target.value))}
              />
              <button
                type="button"
                className="comfort-step-btn"
                onClick={() => onChangeBrightness(settings.brightness + 5)}
                disabled={settings.brightness >= 100}
                aria-label="Aumentar brilho em 5%"
              >
                <Plus size={13} />
              </button>
            </div>
          </div>

          {/* Continuous Warmth / Night Shift Slider */}
          <div className="comfort-section">
            <div className="comfort-slider-head">
              <label htmlFor="comfort-warmth-range">
                <Flame size={14} /> Filtro Quente (Luz Azul)
              </label>
              <strong className="comfort-val-badge">{settings.warmth}%</strong>
            </div>
            <div className="comfort-slider-row">
              <button
                type="button"
                className="comfort-step-btn"
                onClick={() => onChangeWarmth(settings.warmth - 5)}
                disabled={settings.warmth <= 0}
                aria-label="Diminuir filtro quente em 5%"
              >
                <Minus size={13} />
              </button>
              <input
                id="comfort-warmth-range"
                type="range"
                min={0}
                max={65}
                step={1}
                value={settings.warmth}
                onChange={(e) => onChangeWarmth(Number(e.target.value))}
              />
              <button
                type="button"
                className="comfort-step-btn"
                onClick={() => onChangeWarmth(settings.warmth + 5)}
                disabled={settings.warmth >= 65}
                aria-label="Aumentar filtro quente em 5%"
              >
                <Plus size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
