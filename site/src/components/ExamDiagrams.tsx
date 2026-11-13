import React from 'react';

interface ExamDiagramProps {
  diagramKey: 'chart-estruturalista' | 'chart-embrapa' | 'chart-fpp' | 'tree-bancos';
}

export const ExamDiagram: React.FC<ExamDiagramProps> = ({ diagramKey }) => {
  if (diagramKey === 'chart-estruturalista') {
    return (
      <figure className="diagram-card">
        <figcaption className="diagram-caption">
          Gráfico da Prova (Item 47) — Deslocamento de demanda D₁ → D₂ com oferta positivamente inclinada
        </figcaption>
        <svg viewBox="0 0 360 250" className="exam-svg" role="img" aria-label="Gráfico oferta e demanda item 47">
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#475569" />
            </marker>
            <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#2563eb" />
            </marker>
          </defs>
          {/* Eixos */}
          <line x1="50" y1="210" x2="50" y2="22" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="50" y1="210" x2="335" y2="210" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="34" y="30" className="svg-axis">P</text>
          <text x="328" y="228" className="svg-axis">Q</text>

          {/* Oferta positivamente inclinada S1 e S2 */}
          <line x1="80" y1="190" x2="275" y2="42" stroke="#0f766e" strokeWidth="2.4" />
          <text x="279" y="45" className="svg-curve" fill="#0f766e">S₁</text>
          <line x1="115" y1="195" x2="305" y2="52" stroke="#14b8a6" strokeWidth="1.8" strokeDasharray="5,4" />
          <text x="309" y="55" className="svg-curve" fill="#0f766e">S₂</text>

          {/* Demanda D1 e D2 */}
          <line x1="85" y1="65" x2="215" y2="195" stroke="#2563eb" strokeWidth="2.4" />
          <text x="219" y="196" className="svg-curve" fill="#2563eb">D₁</text>
          <line x1="145" y1="45" x2="285" y2="185" stroke="#1d4ed8" strokeWidth="2.4" />
          <text x="289" y="186" className="svg-curve" fill="#1d4ed8">D₂</text>

          {/* Seta D1 -> D2 */}
          <line x1="140" y1="95" x2="176" y2="75" stroke="#2563eb" strokeWidth="1.6" markerEnd="url(#arrowBlue)" />

          {/* Equilíbrios */}
          <line x1="50" y1="138" x2="152" y2="138" stroke="#94a3b8" strokeDasharray="4,3" />
          <line x1="152" y1="138" x2="152" y2="210" stroke="#94a3b8" strokeDasharray="4,3" />
          <circle cx="152" cy="138" r="4.5" fill="#1e293b" />
          <text x="26" y="142" className="svg-tick">p₁</text>
          <text x="147" y="226" className="svg-tick">q₁</text>

          <line x1="50" y1="112" x2="214" y2="112" stroke="#94a3b8" strokeDasharray="4,3" />
          <line x1="214" y1="112" x2="214" y2="210" stroke="#94a3b8" strokeDasharray="4,3" />
          <circle cx="214" cy="112" r="4.5" fill="#b91c1c" />
          <text x="26" y="116" className="svg-tick">p₂</text>
          <text x="209" y="226" className="svg-tick">q₂</text>
        </svg>
        <p className="diagram-note">
          Observe que S₁ na prova é positivamente inclinada (e não vertical/inelástica como na tese estruturalista), gerando expansão clara de q₁ para q₂.
        </p>
      </figure>
    );
  }

  if (diagramKey === 'chart-embrapa') {
    return (
      <figure className="diagram-card">
        <figcaption className="diagram-caption">
          Gráfico da Prova (Item 48) — Ganhos de produtividade (EMBRAPA): ΔS &gt; ΔD
        </figcaption>
        <svg viewBox="0 0 360 250" className="exam-svg" role="img" aria-label="Gráfico oferta e demanda item 48">
          <defs>
            <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#475569" />
            </marker>
            <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#0f766e" />
            </marker>
          </defs>
          <line x1="50" y1="210" x2="50" y2="22" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow2)" />
          <line x1="50" y1="210" x2="335" y2="210" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow2)" />
          <text x="34" y="30" className="svg-axis">P</text>
          <text x="328" y="228" className="svg-axis">Q</text>

          {/* S1 -> S2 grande deslocamento à direita */}
          <line x1="75" y1="175" x2="200" y2="45" stroke="#0f766e" strokeWidth="2.4" />
          <text x="204" y="48" className="svg-curve" fill="#0f766e">S₁</text>
          <line x1="155" y1="195" x2="305" y2="55" stroke="#0d9488" strokeWidth="2.4" />
          <text x="309" y="58" className="svg-curve" fill="#0d9488">S₂</text>
          <line x1="145" y1="115" x2="212" y2="128" stroke="#0f766e" strokeWidth="1.6" markerEnd="url(#arrowGreen)" />

          {/* D1 -> D2 deslocamento menor */}
          <line x1="80" y1="55" x2="225" y2="195" stroke="#2563eb" strokeWidth="2.4" />
          <text x="229" y="196" className="svg-curve" fill="#2563eb">D₁</text>
          <line x1="125" y1="45" x2="275" y2="190" stroke="#1d4ed8" strokeWidth="2.4" />
          <text x="279" y="191" className="svg-curve" fill="#1d4ed8">D₂</text>

          {/* E1 (q1, p1) */}
          <line x1="50" y1="108" x2="136" y2="108" stroke="#94a3b8" strokeDasharray="4,3" />
          <line x1="136" y1="108" x2="136" y2="210" stroke="#94a3b8" strokeDasharray="4,3" />
          <circle cx="136" cy="108" r="4.5" fill="#1e293b" />
          <text x="26" y="112" className="svg-tick">p₁</text>
          <text x="131" y="226" className="svg-tick">q₁</text>

          {/* E2 (q2, p2) com p2 < p1 e q2 > q1 */}
          <line x1="50" y1="136" x2="217" y2="136" stroke="#94a3b8" strokeDasharray="4,3" />
          <line x1="217" y1="136" x2="217" y2="210" stroke="#94a3b8" strokeDasharray="4,3" />
          <circle cx="217" cy="136" r="4.5" fill="#0f766e" />
          <text x="26" y="140" className="svg-tick">p₂</text>
          <text x="212" y="226" className="svg-tick">q₂</text>
        </svg>
        <p className="diagram-note">
          Como a oferta se desloca mais para a direita que a demanda (S₁ → S₂ &gt; D₁ → D₂), o preço cai (p₁ → p₂) e a quantidade consumida cresce (q₁ → q₂).
        </p>
      </figure>
    );
  }

  if (diagramKey === 'chart-fpp') {
    return (
      <figure className="diagram-card">
        <figcaption className="diagram-caption">
          Gráfico da Prova (Itens 49 e 50) — Fronteira de Possibilidades de Produção (FPP)
        </figcaption>
        <svg viewBox="0 0 360 250" className="exam-svg" role="img" aria-label="Fronteira de Possibilidades de Produção">
          <defs>
            <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#475569" />
            </marker>
          </defs>
          <line x1="62" y1="205" x2="62" y2="20" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow3)" />
          <line x1="62" y1="205" x2="325" y2="205" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow3)" />
          <text x="14" y="34" className="svg-axis">alimento</text>
          <text x="275" y="228" className="svg-axis">vestuário</text>

          {/* FPP côncava */}
          <path d="M 62 45 Q 235 48 275 205" fill="none" stroke="#1d4ed8" strokeWidth="2.8" />

          {/* Projeções b=(x1,y1), e=(x2,y2), c=(x1,y2) */}
          <line x1="62" y1="76" x2="168" y2="76" stroke="#94a3b8" strokeDasharray="4,3" />
          <line x1="168" y1="76" x2="168" y2="205" stroke="#94a3b8" strokeDasharray="4,3" />
          <line x1="62" y1="126" x2="236" y2="126" stroke="#94a3b8" strokeDasharray="4,3" />
          <line x1="236" y1="126" x2="236" y2="205" stroke="#94a3b8" strokeDasharray="4,3" />

          <text x="38" y="80" className="svg-tick">y₁</text>
          <text x="38" y="130" className="svg-tick">y₂</text>
          <text x="163" y="222" className="svg-tick">x₁</text>
          <text x="231" y="222" className="svg-tick">x₂</text>

          {/* Ponto a (externo) */}
          <circle cx="242" cy="68" r="4.5" fill="#dc2626" />
          <text x="250" y="68" className="svg-curve" fill="#dc2626">a (inatingível)</text>

          {/* Ponto b (sobre FPP) */}
          <circle cx="168" cy="76" r="5" fill="#1d4ed8" />
          <text x="174" y="69" className="svg-curve" fill="#1d4ed8">b</text>

          {/* Ponto e (sobre FPP) */}
          <circle cx="236" cy="126" r="5" fill="#1d4ed8" />
          <text x="245" y="124" className="svg-curve" fill="#1d4ed8">e</text>

          {/* Ponto c (interno) */}
          <circle cx="168" cy="126" r="4.5" fill="#0f766e" />
          <text x="150" y="121" className="svg-curve" fill="#0f766e">c</text>

          {/* Ponto d (interno abaixo de c) */}
          <circle cx="168" cy="166" r="4.5" fill="#475569" />
          <text x="150" y="166" className="svg-curve" fill="#475569">d</text>
        </svg>
        <p className="diagram-note">
          Pontos b e e são eficientes (sobre a FPP); c e d são ineficientes (internos); a é inatingível com a tecnologia/recursos atuais.
        </p>
      </figure>
    );
  }

  // tree-bancos (Itens 71-72)
  return (
    <figure className="diagram-card">
      <figcaption className="diagram-caption">
        Árvore do Jogo Sequencial (Itens 71 e 72) — Payoffs (B1, B2)
      </figcaption>
      <svg viewBox="0 0 420 245" className="exam-svg" role="img" aria-label="Árvore de jogo sequencial B1 e B2">
        {/* Ramos de B1 */}
        <line x1="60" y1="122" x2="185" y2="62" stroke="#1e293b" strokeWidth="2.2" />
        <line x1="60" y1="122" x2="185" y2="182" stroke="#1e293b" strokeWidth="2.2" />

        {/* Ramos de B2 superior */}
        <line x1="185" y1="62" x2="315" y2="30" stroke="#0f766e" strokeWidth="2" />
        <line x1="185" y1="62" x2="315" y2="94" stroke="#0f766e" strokeWidth="2" />

        {/* Ramos de B2 inferior */}
        <line x1="185" y1="182" x2="315" y2="150" stroke="#0f766e" strokeWidth="2" />
        <line x1="185" y1="182" x2="315" y2="214" stroke="#0f766e" strokeWidth="2" />

        {/* Nós */}
        <circle cx="60" cy="122" r="14" fill="#1d4ed8" />
        <text x="51" y="127" fill="#ffffff" fontSize="12" fontWeight="700">B1</text>

        <circle cx="185" cy="62" r="14" fill="#0f766e" />
        <text x="176" y="67" fill="#ffffff" fontSize="12" fontWeight="700">B2</text>

        <circle cx="185" cy="182" r="14" fill="#0f766e" />
        <text x="176" y="187" fill="#ffffff" fontSize="12" fontWeight="700">B2</text>

        {/* Rótulos das ações */}
        <text x="95" y="82" className="svg-tick" fill="#1e293b">mantém</text>
        <text x="98" y="170" className="svg-tick" fill="#1e293b">reduz</text>

        <text x="232" y="38" className="svg-tick" fill="#0f766e">mantém</text>
        <text x="235" y="92" className="svg-tick" fill="#0f766e">reduz</text>
        <text x="232" y="158" className="svg-tick" fill="#0f766e">mantém</text>
        <text x="235" y="212" className="svg-tick" fill="#0f766e">reduz</text>

        {/* Payoffs */}
        <circle cx="315" cy="30" r="4" fill="#334155" />
        <text x="326" y="34" className="svg-payoff">(30, 20)</text>

        <circle cx="315" cy="94" r="4" fill="#334155" />
        <text x="326" y="98" className="svg-payoff">(18, 30)</text>

        <circle cx="315" cy="150" r="4" fill="#334155" />
        <text x="326" y="154" className="svg-payoff">(40, 8)</text>

        <circle cx="315" cy="214" r="4.5" fill="#b91c1c" />
        <text x="326" y="218" className="svg-payoff" fontWeight="700">(35, 25)</text>
      </svg>
      <p className="diagram-note">
        Por indução retroativa, B2 sempre escolhe &quot;reduz&quot; (30 &gt; 20 e 25 &gt; 8). Antecipando isso, B1 compara 18 vs. 35 e escolhe &quot;reduz&quot; → ENPS = (reduz, reduz-reduz) com payoffs (35, 25).
      </p>
    </figure>
  );
};
