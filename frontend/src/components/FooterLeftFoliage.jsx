import React from 'react';

/**
 * Authentic Kashi Botanical Foliage (Bottom-Left Footer Corner)
 * Crafted in Pure SVG Vector Code — 100% vector, zero flowers.
 * Features a short, graceful organic branch with sacred emerald leaves
 * rising gently from the bottom floor of the footer:
 * - Zero flowers — pure botanical emerald foliage with vein networks
 * - Grounded at the footer floor, rising only a short distance
 * - Deep forest green and jade tones with luminous pale-green veins
 */
export default function FooterLeftFoliage({ className = '' }) {
  return (
    <svg
      viewBox="0 0 140 230"
      preserveAspectRatio="xMinYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`footer-left-foliage-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Deep Emerald Leaf Gradients */}
        <linearGradient id="shortLeafDark" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4D8C65" />
          <stop offset="50%" stopColor="#255D3C" />
          <stop offset="100%" stopColor="#0B2B19" />
        </linearGradient>

        <linearGradient id="shortLeafLight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6DBA89" />
          <stop offset="50%" stopColor="#317A4E" />
          <stop offset="100%" stopColor="#103E23" />
        </linearGradient>

        {/* Stem Gradient */}
        <linearGradient id="shortStemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#123B25" />
          <stop offset="50%" stopColor="#1F5336" />
          <stop offset="100%" stopColor="#2F754E" />
        </linearGradient>

        {/* Subtle Drop Shadow */}
        <filter id="shortLeafGlow" x="-20%" y="-10%" width="140%" height="120%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter="url(#shortLeafGlow)">

        {/* Main Short Organic Stem (Grounded at y=230 floor, rising gently to y=25) */}
        <path
          d="M 12 230 C 22 195, 14 165, 32 125 C 44 95, 36 60, 48 24"
          stroke="url(#shortStemGrad)"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary Offshoot Branch */}
        <path
          d="M 24 150 Q 45 138, 62 118"
          stroke="url(#shortStemGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Delicate Curled Tendril at Tip */}
        <path
          d="M 48 24 Q 54 14, 62 18 Q 66 24, 60 28"
          stroke="#3D8E5D"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* =================================================================
            SACRED EMERALD BOTANICAL LEAFLETS (BOTTOM TO TOP)
            ================================================================= */}

        {/* 1. Base Floor Left Leaf (y ~ 222) */}
        <g transform="translate(14, 222) rotate(-30)">
          <path d="M 0 0 C -12 -12, -28 -10, -36 0 C -28 10, -12 12, 0 0 Z" fill="url(#shortLeafDark)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q -20 0, -32 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
          <path d="M -10 0 Q -15 -4, -18 -5" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
          <path d="M -10 0 Q -15 4, -18 5" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
        </g>

        {/* 2. Base Floor Right Leaf (y ~ 215) */}
        <g transform="translate(16, 215) rotate(45)">
          <path d="M 0 0 C 12 -12, 28 -10, 36 0 C 28 10, 12 12, 0 0 Z" fill="url(#shortLeafLight)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q 20 0, 32 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
          <path d="M 10 0 Q 15 -4, 18 -5" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
          <path d="M 10 0 Q 15 4, 18 5" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
        </g>

        {/* 3. Lower Left Leaf (y ~ 178) */}
        <g transform="translate(16, 178) rotate(-40)">
          <path d="M 0 0 C -13 -13, -30 -11, -40 0 C -30 11, -13 13, 0 0 Z" fill="url(#shortLeafDark)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q -22 0, -36 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
          <path d="M -12 0 Q -17 -5, -22 -6" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
          <path d="M -12 0 Q -17 5, -22 6" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
        </g>

        {/* 4. Lower Right Leaf (y ~ 168) */}
        <g transform="translate(20, 168) rotate(50)">
          <path d="M 0 0 C 13 -13, 30 -11, 40 0 C 30 11, 13 13, 0 0 Z" fill="url(#shortLeafLight)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q 22 0, 36 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
          <path d="M 12 0 Q 17 -5, 22 -6" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
          <path d="M 12 0 Q 17 5, 22 6" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
        </g>

        {/* 5. Mid Offshoot Right Leaf (y ~ 125) */}
        <g transform="translate(56, 122) rotate(35)">
          <path d="M 0 0 C 12 -12, 28 -10, 36 0 C 28 10, 12 12, 0 0 Z" fill="url(#shortLeafDark)" stroke="#061A0E" strokeWidth="0.9" />
          <path d="M 0 0 Q 20 0, 32 0" stroke="#8AE2AA" strokeWidth="0.7" fill="none" />
        </g>

        {/* 6. Mid Left Leaf (y ~ 122) */}
        <g transform="translate(32, 122) rotate(-50)">
          <path d="M 0 0 C -13 -13, -30 -11, -38 0 C -30 11, -13 13, 0 0 Z" fill="url(#shortLeafLight)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q -21 0, -34 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
          <path d="M -11 0 Q -16 -4, -20 -5" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
          <path d="M -11 0 Q -16 4, -20 5" stroke="#8AE2AA" strokeWidth="0.5" fill="none" />
        </g>

        {/* 7. Upper-Mid Right Leaf (y ~ 85) */}
        <g transform="translate(38, 85) rotate(42)">
          <path d="M 0 0 C 12 -11, 26 -9, 34 0 C 26 9, 12 11, 0 0 Z" fill="url(#shortLeafLight)" stroke="#061A0E" strokeWidth="0.9" />
          <path d="M 0 0 Q 18 0, 30 0" stroke="#8AE2AA" strokeWidth="0.7" fill="none" />
        </g>

        {/* 8. Upper Left Leaf (y ~ 72) */}
        <g transform="translate(39, 72) rotate(-45)">
          <path d="M 0 0 C -11 -10, -25 -8, -32 0 C -25 8, -11 10, 0 0 Z" fill="url(#shortLeafDark)" stroke="#061A0E" strokeWidth="0.9" />
          <path d="M 0 0 Q -17 0, -28 0" stroke="#8AE2AA" strokeWidth="0.7" fill="none" />
        </g>

        {/* 9. Top Pinnacle Left Leaflet (y ~ 38) */}
        <g transform="translate(45, 38) rotate(-35)">
          <path d="M 0 0 C -9 -8, -20 -7, -26 0 C -20 7, -9 8, 0 0 Z" fill="url(#shortLeafLight)" stroke="#061A0E" strokeWidth="0.8" />
          <path d="M 0 0 Q -14 0, -22 0" stroke="#8AE2AA" strokeWidth="0.6" fill="none" />
        </g>

        {/* 10. Top Crown Leaflet (y ~ 24) */}
        <g transform="translate(48, 24) rotate(25)">
          <path d="M 0 0 C 9 -8, 20 -7, 26 0 C 20 7, 9 8, 0 0 Z" fill="url(#shortLeafDark)" stroke="#061A0E" strokeWidth="0.8" />
          <path d="M 0 0 Q 14 0, 22 0" stroke="#8AE2AA" strokeWidth="0.6" fill="none" />
        </g>

        {/* Tiny Delicate Red/Gold Berries Nestled in Leaves */}
        <circle cx="28" cy="142" r="2.4" fill="#D32F2F" stroke="#3E0000" strokeWidth="0.5" />
        <circle cx="33" cy="147" r="2" fill="#D32F2F" stroke="#3E0000" strokeWidth="0.5" />
        <circle cx="42" cy="78" r="2.2" fill="#D32F2F" stroke="#3E0000" strokeWidth="0.5" />

      </g>
    </svg>
  );
}
