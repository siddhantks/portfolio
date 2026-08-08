// "use client";
// import { motion } from "framer-motion";

// const DOTS = [
//   { cx: 60, cy: 40 },
//   { cx: 25, cy: 20 }, { cx: 95, cy: 20 },
//   { cx: 20, cy: 55 }, { cx: 100, cy: 55 },
//   { cx: 60, cy: 68 },
// ];

// const CONNECTIONS = [
//   [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
//   [1, 2], [3, 5], [4, 5],
// ];

// export default function ConnectiveThumbnail() {
//   return (
//     <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
//       {CONNECTIONS.map(([a, b], i) => (
//         <motion.line
//           key={i}
//           x1={DOTS[a].cx} y1={DOTS[a].cy}
//           x2={DOTS[b].cx} y2={DOTS[b].cy}
//           stroke="var(--accent)"
//           strokeWidth="0.7"
//           animate={{ opacity: [0.15, 0.7, 0.15] }}
//           transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
//         />
//       ))}
//       {DOTS.map((d, i) => (
//         <motion.circle
//           key={i}
//           cx={d.cx}
//           cy={d.cy}
//           r={i === 0 ? 6 : 4}
//           fill={i === 0 ? "var(--accent)" : "var(--surface)"}
//           stroke="var(--accent)"
//           strokeWidth="1.2"
//           animate={{ scale: [1, 1.15, 1] }}
//           transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
//           style={{ transformOrigin: `${d.cx}px ${d.cy}px` }}
//         />
//       ))}
//     </svg>
//   );
// }
"use client";
import { motion } from "framer-motion";

export default function ConnectiveThumbnail() {
  // Variable fallbacks prevent blank render if CSS vars are missing
  const accent = "var(--accent, #38bdf8)";
  const surface = "var(--surface, #0f172a)";
  const border = "var(--border, #334155)";

  // Seat layout coordinates
  const row1 = [28, 36, 44, 52, 60, 68];
  const row2 = [24, 32, 40, 48, 56, 64, 72];
  const row3 = [28, 36, 44, 52, 60, 68];

  // Selected seat indices in Row 2
  const selectedSeats = [2, 3];

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

      {/* 1. CINEMA SCREEN & LIGHT BEAM */}
      {/* Light projection beam from screen onto seats */}
      <polygon points="24,20 80,20 88,68 16,68" fill={accent} opacity="0.04" />

      {/* Curved Screen */}
      <path
        d="M 24 20 Q 52 24 80 20"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <text x="52" y="17.5" textAnchor="middle" fontSize="2.8" fill={accent} opacity="0.7" fontWeight="bold">
        SCREEN
      </text>

      {/* 2. INTERACTIVE SEAT SELECTION MAP */}
      {/* Row 1 Seats */}
      {row1.map((x, i) => (
        <rect
          key={`r1-${i}`}
          x={x - 2.5}
          y="29"
          width="5"
          height="5"
          rx="1"
          stroke={accent}
          strokeWidth="0.6"
          fill={surface}
          opacity="0.4"
        />
      ))}

      {/* Row 2 Seats (With selected animated seats) */}
      {row2.map((x, i) => {
        const isSelected = selectedSeats.includes(i);
        return isSelected ? (
          <g key={`r2-${i}`}>
            <motion.rect
              x={x - 2.5}
              y="40"
              width="5"
              height="5"
              rx="1"
              stroke={accent}
              strokeWidth="0.8"
              fill={accent}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              style={{ transformOrigin: `${x}px 42.5px` }}
            />
          </g>
        ) : (
          <rect
            key={`r2-${i}`}
            x={x - 2.5}
            y="40"
            width="5"
            height="5"
            rx="1"
            stroke={accent}
            strokeWidth="0.6"
            fill={i % 2 === 0 ? border : surface}
            opacity={i % 2 === 0 ? "0.8" : "0.4"}
          />
        );
      })}

      {/* Row 3 Seats */}
      {row3.map((x, i) => (
        <rect
          key={`r3-${i}`}
          x={x - 2.5}
          y="51"
          width="5"
          height="5"
          rx="1"
          stroke={accent}
          strokeWidth="0.6"
          fill={surface}
          opacity="0.4"
        />
      ))}

      {/* Seat Map Legend below */}
      <circle cx="36" cy="65" r="1.3" fill={accent} />
      <text x="40" y="66" fontSize="2.5" fill={accent} fontWeight="bold">SELECTED</text>
      
      <circle cx="58" cy="65" r="1.3" fill={border} />
      <text x="62" y="66" fontSize="2.5" fill={accent} opacity="0.6">BOOKED</text>

      {/* 3. MOVIE TICKET STUB (RIGHT SIDE) */}
      <g id="ticket-stub">
        {/* Ticket Base Card */}
        <rect x="83" y="22" width="31" height="48" rx="2" stroke={accent} strokeWidth="1" fill={surface} />

        {/* Perforation Cutouts */}
        <circle cx="83" cy="48" r="2.2" fill={surface} stroke={accent} strokeWidth="0.8" />
        <circle cx="114" cy="48" r="2.2" fill={surface} stroke={accent} strokeWidth="0.8" />

        {/* Perforated Dotted Line */}
        <line x1="86" y1="48" x2="111" y2="48" stroke={accent} strokeWidth="0.7" strokeDasharray="1.5 1.5" opacity="0.6" />

        {/* Film Play Icon inside Ticket */}
        <circle cx="98.5" cy="34" r="5" stroke={accent} strokeWidth="0.8" fill={surface} />
        <polygon points="97,31.5 97,36.5 101,34" fill={accent} />

        {/* Ticket Header Text */}
        <text x="98.5" y="27" textAnchor="middle" fontSize="2.6" fill={accent} fontWeight="bold">
          SPIDERMAN
        </text>

        {/* Barcode Lines at Bottom of Ticket */}
        <g id="barcode">
          <line x1="88" y1="54" x2="88" y2="63" stroke={accent} strokeWidth="0.8" />
          <line x1="90" y1="54" x2="90" y2="63" stroke={accent} strokeWidth="1.4" />
          <line x1="93" y1="54" x2="93" y2="63" stroke={accent} strokeWidth="0.6" />
          <line x1="95" y1="54" x2="95" y2="63" stroke={accent} strokeWidth="1.2" />
          <line x1="98" y1="54" x2="98" y2="63" stroke={accent} strokeWidth="0.8" />
          <line x1="101" y1="54" x2="101" y2="63" stroke={accent} strokeWidth="1.5" />
          <line x1="104" y1="54" x2="104" y2="63" stroke={accent} strokeWidth="0.6" />
          <line x1="107" y1="54" x2="107" y2="63" stroke={accent} strokeWidth="1.2" />

          {/* Animated Laser Scanner Line */}
          <motion.line
            x1="86"
            y1="58.5"
            x2="109"
            y2="58.5"
            stroke={accent}
            strokeWidth="0.8"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </g>
      </g>
    </svg>
  );
}