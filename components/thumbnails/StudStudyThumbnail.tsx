// "use client";
// import { motion } from "framer-motion";

// export default function StudStudyThumbnail() {
//   return (
//     <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
//       {/* Open book */}
//       <path d="M60 20 Q40 18 20 22 L20 62 Q40 58 60 60 Q80 58 100 62 L100 22 Q80 18 60 20Z"
//         stroke="var(--accent)" strokeWidth="1.2" fill="var(--surface)" />
//       {/* Spine */}
//       <line x1="60" y1="20" x2="60" y2="60" stroke="var(--accent)" strokeWidth="1.5" />
//       {/* Left page lines */}
//       {[30, 36, 42, 48].map((y, i) => (
//         <line key={`l${i}`} x1="28" y1={y} x2="54" y2={y} stroke="var(--accent)" strokeWidth="0.7" opacity="0.4" />
//       ))}
//       {/* Right page lines */}
//       {[30, 36, 42, 48].map((y, i) => (
//         <line key={`r${i}`} x1="66" y1={y} x2="92" y2={y} stroke="var(--accent)" strokeWidth="0.7" opacity="0.4" />
//       ))}
//       {/* Play button on right page — YouTube reference */}
//       <motion.circle
//         cx="79"
//         cy="40"
//         r="10"
//         stroke="var(--accent)"
//         strokeWidth="1"
//         fill="var(--surface)"
//         animate={{ scale: [1, 1.05, 1] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         style={{ transformOrigin: "79px 40px" }}
//       />
//       <polygon points="76,36 76,44 85,40" fill="var(--accent)" opacity="0.9" />
//       {/* "First project" badge */}
//       <rect x="8" y="8" width="28" height="10" rx="2" fill="var(--accent)" opacity="0.9" />
//       <text x="22" y="14" textAnchor="middle" dominantBaseline="middle" fontSize="4" fill="#0a0a0a" fontWeight="bold">FIRST</text>
//     </svg>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function StudStudyThumbnail() {
  // Safe fallbacks to prevent blank renders if CSS variables are undefined
  const accent = "var(--accent, #38bdf8)";
  const surface = "var(--surface, #0f172a)";

  const stages = [
    { label: "W", active: false, y: 22 },
    { label: "N1", active: false, y: 32 },
    { label: "N2", active: true, y: 42 }, // Highlighted predicted stage
    { label: "N3", active: false, y: 52 },
    { label: "REM", active: false, y: 62 },
  ];

  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full h-full min-h-[120px] block"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Background Grid Lines */}
      <line x1="6" y1="20" x2="114" y2="20" stroke={accent} strokeWidth="0.3" opacity="0.1" />
      <line x1="6" y1="40" x2="114" y2="40" stroke={accent} strokeWidth="0.3" opacity="0.1" />
      <line x1="6" y1="60" x2="114" y2="60" stroke={accent} strokeWidth="0.3" opacity="0.1" />

      {/* 1. INPUT: Single-Channel EEG Signal */}
      <motion.path
        d="M 6 42 Q 10 32 14 42 T 22 42 T 26 28 T 30 54 T 34 42 T 38 42"
        stroke={accent}
        strokeWidth="1.2"
        fill="none"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <text x="22" y="68" textAnchor="middle" fontSize="3" fill={accent} opacity="0.7" fontWeight="bold">
        EEG (1-Ch)
      </text>

      {/* Connection arrow into Transformer */}
      <path d="M 38 42 L 44 42" stroke={accent} strokeWidth="0.8" strokeDasharray="1 1" opacity="0.6" />

      {/* 2. CORE: Transformer Architecture Box */}
      <rect x="44" y="22" width="34" height="42" rx="3" stroke={accent} strokeWidth="1.2" fill={surface} />
      
      {/* Self-Attention Matrix / Multi-Head Query-Key-Value visual representation */}
      <text x="61" y="29" textAnchor="middle" fontSize="3.2" fill={accent} fontWeight="bold">
        TRANSFORMER
      </text>

      {/* Attention Arcs inside Transformer */}
      <path d="M 50 48 Q 61 36 72 48" stroke={accent} strokeWidth="0.8" fill="none" opacity="0.7" />
      <path d="M 53 48 Q 61 40 69 48" stroke={accent} strokeWidth="0.8" fill="none" opacity="0.8" />
      
      {/* Attention Nodes */}
      <circle cx="50" cy="48" r="1.2" fill={accent} />
      <circle cx="57" cy="48" r="1.2" fill={accent} />
      <circle cx="65" cy="48" r="1.2" fill={accent} />
      <circle cx="72" cy="48" r="1.2" fill={accent} />

      {/* Pulsing Self-Attention Focus */}
      <motion.circle
        cx="61"
        cy="40"
        r="2"
        fill={accent}
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{ transformOrigin: "61px 40px" }}
      />

      {/* 29 Features Sub-label */}
      <text x="61" y="58" textAnchor="middle" fontSize="2.8" fill={accent} opacity="0.7">
        29 FEAT / SLEEP-EDF
      </text>

      {/* Connection arrow to Classifier */}
      <path d="M 78 42 L 85 42" stroke={accent} strokeWidth="0.8" strokeDasharray="1 1" opacity="0.6" />

      {/* 3. OUTPUT: 5 Sleep Stage Classification (W, N1, N2, N3, REM) */}
      {stages.map((stage, i) => (
        <g key={i}>
          {/* Connecting line from transformer center to active predicted stage */}
          {stage.active && (
            <line x1="78" y1="42" x2="86" y2={stage.y} stroke={accent} strokeWidth="0.8" opacity="0.8" />
          )}

          {/* Stage Node Box */}
          <rect
            x="86"
            y={stage.y - 3.5}
            width="28"
            height="7"
            rx="1.5"
            stroke={accent}
            strokeWidth={stage.active ? "1" : "0.5"}
            fill={stage.active ? accent : surface}
            opacity={stage.active ? 1 : 0.4}
          />

          {/* Stage Label */}
          <text
            x="100"
            y={stage.y + 0.8}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="3.2"
            fill={stage.active ? "#0a0a0a" : accent}
            fontWeight="bold"
          >
            {stage.label}
          </text>
        </g>
      ))}

      {/* Active prediction glow indicator on N2 stage */}
      <motion.circle
        cx="111"
        cy="42"
        r="1.2"
        fill={accent}
        animate={{ scale: [1, 1.6, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{ transformOrigin: "111px 42px" }}
      />

      {/* 4. TOP BADGE: 91.25% Accuracy */}
      <rect x="6" y="6" width="40" height="9" rx="2" fill={accent} opacity="0.95" />
      <text
        x="26"
        y="11.5"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="3.5"
        fill="#0a0a0a"
        fontWeight="bold"
      >
        91.25% ACCURACY
      </text>
    </svg>
  );
}