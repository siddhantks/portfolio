// "use client";
// import { motion } from "framer-motion";

// export default function ResumeIQThumbnail() {
//   return (
//     <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
//       {/* Document */}
//       <rect x="25" y="10" width="45" height="60" rx="2" stroke="var(--accent)" strokeWidth="1.2" fill="var(--surface)" />
//       {/* Doc lines */}
//       {[22, 30, 38, 46, 54].map((y, i) => (
//         <line key={i} x1="32" y1={y} x2={i % 2 === 0 ? 62 : 55} y2={y} stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
//       ))}
//       {/* ATS Score ring */}
//       <circle cx="87" cy="38" r="18" stroke="var(--border)" strokeWidth="3" fill="none" />
//       <motion.circle
//         cx="87"
//         cy="38"
//         r="18"
//         stroke="var(--accent)"
//         strokeWidth="3"
//         fill="none"
//         strokeLinecap="round"
//         strokeDasharray="113"
//         initial={{ strokeDashoffset: 113 }}
//         animate={{ strokeDashoffset: 25 }}
//         transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 1 }}
//         style={{ transformOrigin: "87px 38px", transform: "rotate(-90deg)" }}
//       />
//       <text x="87" y="37" textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="var(--accent)" fontFamily="monospace" fontWeight="bold">92</text>
//       <text x="87" y="46" textAnchor="middle" dominantBaseline="middle" fontSize="4" fill="var(--foreground)" opacity="0.5" fontFamily="monospace">ATS</text>
//       {/* Match arrow */}
//       <motion.path
//         d="M70 38 L69 38"
//         stroke="var(--accent)"
//         strokeWidth="1"
//         strokeLinecap="round"
//         animate={{ d: ["M70 38 L69 38", "M70 38 L67 38"] }}
//         transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
//       />
//     </svg>
//   );
// }
"use client";
import { motion } from "framer-motion";

export default function ResumeIQThumbnail() {
  // Variable fallbacks prevent blank render if CSS vars are missing
  const accent = "var(--accent, #38bdf8)";
  const surface = "var(--surface, #0f172a)";
  const border = "var(--border, #334155)";

  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full h-full min-h-[120px] block"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Background Grid */}
      <line x1="6" y1="20" x2="114" y2="20" stroke={accent} strokeWidth="0.3" opacity="0.1" />
      <line x1="6" y1="40" x2="114" y2="40" stroke={accent} strokeWidth="0.3" opacity="0.1" />
      <line x1="6" y1="60" x2="114" y2="60" stroke={accent} strokeWidth="0.3" opacity="0.1" />

      {/* 1. LEFT: Gemini AI Sparkle & Inngest Async Trigger */}
      <g id="gemini-spark">
        {/* Animated Gemini Spark Star */}
        <motion.path
          d="M 16 32 Q 16 40 8 40 Q 16 40 16 48 Q 16 40 24 40 Q 16 40 16 32 Z"
          fill={accent}
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "16px 40px" }}
        />
        <text x="16" y="55" textAnchor="middle" fontSize="3" fill={accent} opacity="0.8" fontWeight="bold">
          GEMINI
        </text>
      </g>

      {/* Connection arrow into Inngest / Document Flow */}
      <motion.path
        d="M 25 40 L 33 40"
        stroke={accent}
        strokeWidth="1"
        strokeDasharray="1.5 1.5"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* 2. CENTER: Real-Time Resume Generation Document */}
      <rect x="34" y="16" width="40" height="52" rx="2.5" stroke={accent} strokeWidth="1.2" fill={surface} />

      {/* Document Header / Avatar */}
      <circle cx="42" cy="24" r="3" fill={accent} opacity="0.8" />
      <line x1="48" y1="23" x2="68" y2="23" stroke={accent} strokeWidth="1" opacity="0.9" />
      <line x1="48" y1="26" x2="60" y2="26" stroke={accent} strokeWidth="0.6" opacity="0.5" />

      {/* Real-time Streaming Resume Lines (Inngest Pipeline output) */}
      {[33, 39, 45, 51, 57].map((y, i) => (
        <motion.line
          key={i}
          x1="40"
          y1={y}
          x2={i % 2 === 0 ? 68 : 62}
          y2={y}
          stroke={accent}
          strokeWidth="0.8"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Lightning Speed Badge (<4s Generation) */}
      <g id="speed-badge">
        <rect x="79" y="16" width="34" height="24" rx="2" stroke={accent} strokeWidth="0.8" fill={surface} />
        {/* Animated Lightning Bolt */}
        <motion.path
          d="M 86 21 L 83 27 L 86 27 L 84 33 L 89 25 L 86 25 Z"
          fill={accent}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <text x="98" y="25" textAnchor="middle" fontSize="4.5" fill={accent} fontWeight="bold">
          &lt; 4s
        </text>
        <text x="98" y="32" textAnchor="middle" fontSize="2.8" fill={accent} opacity="0.7">
          LATENCY
        </text>
      </g>

      {/* 3. RIGHT BOTTOM: Career Insights Analytics Chart */}
      <g id="career-insights">
        <rect x="79" y="44" width="34" height="24" rx="2" stroke={border} strokeWidth="0.8" fill={surface} />
        <text x="96" y="50" textAnchor="middle" fontSize="2.8" fill={accent} fontWeight="bold">
          INSIGHTS
        </text>

        {/* Dynamic Growth Bars */}
        <line x1="84" y1="62" x2="84" y2="54" stroke={accent} strokeWidth="2" opacity="0.4" />
        <line x1="89" y1="62" x2="89" y2="52" stroke={accent} strokeWidth="2" opacity="0.7" />
        <motion.line
          x1="94"
          y1="62"
          x2="94"
          y2="50"
          stroke={accent}
          strokeWidth="2"
          animate={{ y2: [54, 48, 54] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ATS Score Ring */}
        <circle cx="105" cy="56" r="5" stroke={border} strokeWidth="1.2" fill="none" />
        <circle cx="105" cy="56" r="5" stroke={accent} strokeWidth="1.2" strokeDasharray="31" strokeDashoffset="6" fill="none" />
        <text x="105" y="57" textAnchor="middle" fontSize="2.8" fill={accent} fontWeight="bold">
          96
        </text>
      </g>

      {/* 4. TOP BADGE: SENS-AI Platform */}
      <rect x="6" y="6" width="42" height="9" rx="2" fill={accent} opacity="0.95" />
      <text
        x="27"
        y="11.5"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="3.5"
        fill="#0a0a0a"
        fontWeight="bold"
      >
        RESUME
      </text>
    </svg>
  );
}