import React from 'react';

/**
 * Royal Heritage Golden Lotus & Filigree Divider
 * Pure SVG vector art representing sacred temple brass filigree.
 * Adds luxurious, symmetrical Indian royal heritage ornamentation.
 */
export default function SacredFiligreeDivider({ className = '' }) {
  return (
    <svg
      viewBox="0 0 460 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`sacred-filigree-divider-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="filigreeGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C59B27" stopOpacity="0" />
          <stop offset="20%" stopColor="#C59B27" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#FFF2B2" stopOpacity="1" />
          <stop offset="80%" stopColor="#C59B27" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#C59B27" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="lotusGoldShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7D6" />
          <stop offset="40%" stopColor="#F5D061" />
          <stop offset="75%" stopColor="#C59B27" />
          <stop offset="100%" stopColor="#78550B" />
        </linearGradient>

        <linearGradient id="pearlGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      {/* Left Symmetrical Flourish Line */}
      <path
        d="M 15 21 L 175 21 C 188 21, 196 16, 203 11 Q 210 6, 214 14"
        stroke="url(#filigreeGold)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="12" cy="21" r="2.2" fill="#D4AF37" />
      <circle cx="35" cy="21" r="1.6" fill="#D4AF37" />
      <circle cx="65" cy="21" r="1.2" fill="#D4AF37" />

      {/* Left Spiral Scroll & Floral Tendril */}
      <path
        d="M 178 21 C 186 28, 198 30, 205 23 C 210 18, 204 12, 196 14 C 188 16, 188 25, 198 26"
        stroke="#C59B27"
        strokeWidth="1.1"
        fill="none"
      />
      <circle cx="205" cy="23" r="1.8" fill="url(#pearlGold)" />

      {/* Right Symmetrical Flourish Line */}
      <path
        d="M 445 21 L 285 21 C 272 21, 264 16, 257 11 Q 250 6, 246 14"
        stroke="url(#filigreeGold)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="448" cy="21" r="2.2" fill="#D4AF37" />
      <circle cx="425" cy="21" r="1.6" fill="#D4AF37" />
      <circle cx="395" cy="21" r="1.2" fill="#D4AF37" />

      {/* Right Spiral Scroll & Floral Tendril */}
      <path
        d="M 282 21 C 274 28, 262 30, 255 23 C 250 18, 256 12, 264 14 C 272 16, 272 25, 262 26"
        stroke="#C59B27"
        strokeWidth="1.1"
        fill="none"
      />
      <circle cx="255" cy="23" r="1.8" fill="url(#pearlGold)" />

      {/* Central Sacred Blooming Lotus Medallion */}
      <g transform="translate(230, 21)">
        {/* Outer Aura Glow */}
        <circle cx="0" cy="0" r="14" fill="#FBF3DB" fillOpacity="0.45" />

        {/* Central Crown Petal */}
        <path
          d="M 0 -15 C -5 -9, -4 -3, 0 4 C 4 -3, 5 -9, 0 -15 Z"
          fill="url(#lotusGoldShine)"
          stroke="#78550B"
          strokeWidth="0.8"
        />
        {/* Left Lotus Petal (Inner) */}
        <path
          d="M 0 4 C -6 1, -12 -5, -13 -11 C -8 -12, -3 -6, 0 4 Z"
          fill="url(#lotusGoldShine)"
          stroke="#78550B"
          strokeWidth="0.8"
        />
        {/* Right Lotus Petal (Inner) */}
        <path
          d="M 0 4 C 6 1, 12 -5, 13 -11 C 8 -12, 3 -6, 0 4 Z"
          fill="url(#lotusGoldShine)"
          stroke="#78550B"
          strokeWidth="0.8"
        />
        {/* Outer Flaring Petals */}
        <path
          d="M 0 4 C -8 4, -18 -1, -20 -7 C -15 -8, -9 -1, 0 4 Z"
          fill="url(#lotusGoldShine)"
          stroke="#78550B"
          strokeWidth="0.7"
        />
        <path
          d="M 0 4 C 8 4, 18 -1, 20 -7 C 15 -8, 9 -1, 0 4 Z"
          fill="url(#lotusGoldShine)"
          stroke="#78550B"
          strokeWidth="0.7"
        />
        {/* Lower Calyx Base */}
        <path
          d="M -10 5 Q 0 11, 10 5 Q 0 16, -10 5 Z"
          fill="url(#lotusGoldShine)"
          stroke="#78550B"
          strokeWidth="0.8"
        />
        {/* Core Jewel Pearl */}
        <circle cx="0" cy="2" r="2.4" fill="url(#pearlGold)" stroke="#78550B" strokeWidth="0.6" />
        {/* Auspicious Diya Flame Apex Glow */}
        <circle cx="0" cy="-17" r="1.5" fill="#FFA000" />
      </g>
    </svg>
  );
}
