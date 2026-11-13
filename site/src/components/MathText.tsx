import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

type Segment =
  | { kind: 'text'; value: string }
  | { kind: 'inline'; value: string }
  | { kind: 'block'; value: string };

/**
 * Divide texto contendo fórmulas LaTeX ($...$ e $$...$$) preservando valores
 * monetários como "R$ 200" ou "US$ 100" sem disparar modo matemático.
 */
function tokenizeMath(input: string): Segment[] {
  const segments: Segment[] = [];
  // Primeiro procura $$...$$ ou $...$ onde $ não vem logo após letra (R$, US$)
  // e não possui espaço logo após o delimitador de abertura.
  const pattern = /\$\$([\s\S]+?)\$\$|(?<![A-Za-z0-9\\])\$(?!\s)([^\n$]+?)(?<!\s)\$/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(input)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ kind: 'text', value: input.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      segments.push({ kind: 'block', value: match[1].trim() });
    } else if (match[2] !== undefined) {
      segments.push({ kind: 'inline', value: match[2].trim() });
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < input.length) {
    segments.push({ kind: 'text', value: input.slice(lastIndex) });
  }

  return segments;
}

export const MathText: React.FC<MathTextProps> = ({ text, className }) => {
  const segments = useMemo(() => tokenizeMath(text), [text]);

  return (
    <span className={className}>
      {segments.map((seg, idx) => {
        if (seg.kind === 'text') {
          return <React.Fragment key={idx}>{seg.value}</React.Fragment>;
        }
        const isBlock = seg.kind === 'block';
        let html = '';
        try {
          html = katex.renderToString(seg.value, {
            displayMode: isBlock,
            throwOnError: false,
            strict: false
          });
        } catch {
          return <code key={idx}>{seg.value}</code>;
        }
        if (isBlock) {
          return (
            <span
              key={idx}
              className="math-block"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }
        return (
          <span
            key={idx}
            className="math-inline"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </span>
  );
};

interface FormulaBlockProps {
  latex: string;
  label?: string;
  note?: string;
}

export const FormulaBlock: React.FC<FormulaBlockProps> = ({ latex, label, note }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode: true,
        throwOnError: false,
        strict: false
      });
    } catch {
      return '';
    }
  }, [latex]);

  return (
    <div className="formula-card">
      {label && <div className="formula-label">{label}</div>}
      {html ? (
        <div className="formula-render" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <code>{latex}</code>
      )}
      {note && <div className="formula-note">{note}</div>}
    </div>
  );
};
