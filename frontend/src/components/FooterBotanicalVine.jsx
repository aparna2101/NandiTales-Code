import React from 'react';

/**
 * Ultra-Realistic Kashi Botanical Floral Vine for Royal Footer
 * Crafted in Pure SVG Vector Code — 100% vector, zero external image files.
 * Designed to mirror authentic Indian botanical watercolor art:
 * - Slender, graceful organic vine climbing along the far-right edge from bottom to top
 * - Realistic multi-layered coral/terracotta blossoms with fine petal striations and saffron stamen cores
 * - Auspicious golden champa/marigold bloom
 * - Realistic pinnate emerald leaves with pale-green central and lateral vein lines
 * - Clustered buds and sacred red berries
 */
export default function FooterBotanicalVine({ className = '' }) {
  return (
    <svg
      viewBox="0 0 160 760"
      preserveAspectRatio="xMaxYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`footer-realistic-botanical-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* --- Realistic Coral/Terracotta Watercolor Gradients --- */}
        <radialGradient id="ftRealCoralBack" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FA7D5E" />
          <stop offset="50%" stopColor="#D94520" />
          <stop offset="100%" stopColor="#7E1C06" />
        </radialGradient>

        <radialGradient id="ftRealCoralFront" cx="35%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#FFA68D" />
          <stop offset="45%" stopColor="#EE5631" />
          <stop offset="100%" stopColor="#962207" />
        </radialGradient>

        <radialGradient id="ftRealCoralSoft" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFBFAF" />
          <stop offset="45%" stopColor="#F46B49" />
          <stop offset="100%" stopColor="#9C260B" />
        </radialGradient>

        {/* --- Golden Champa / Marigold Gradients --- */}
        <radialGradient id="ftRealGoldBloom" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFF9CF" />
          <stop offset="45%" stopColor="#F9AA1E" />
          <stop offset="85%" stopColor="#C46E02" />
          <stop offset="100%" stopColor="#6C3901" />
        </radialGradient>

        {/* --- Realistic Botanical Foliage Gradients --- */}
        <linearGradient id="ftRealLeafDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4D8C65" />
          <stop offset="45%" stopColor="#255D3C" />
          <stop offset="100%" stopColor="#0B2B19" />
        </linearGradient>

        <linearGradient id="ftRealLeafLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6DBA89" />
          <stop offset="50%" stopColor="#317A4E" />
          <stop offset="100%" stopColor="#103E23" />
        </linearGradient>

        {/* --- Saffron Stamen Center --- */}
        <radialGradient id="ftRealStamen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFDE9" />
          <stop offset="40%" stopColor="#FFC824" />
          <stop offset="80%" stopColor="#D98104" />
          <stop offset="100%" stopColor="#693B01" />
        </radialGradient>

        {/* --- Brass Gold Metallic Glow --- */}
        <linearGradient id="ftRealBrass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5C2" />
          <stop offset="35%" stopColor="#E2B13B" />
          <stop offset="70%" stopColor="#AA7814" />
          <stop offset="100%" stopColor="#5E4003" />
        </linearGradient>

        <filter id="ftNaturalGlow" x="-20%" y="-10%" width="140%" height="120%">
          <feDropShadow dx="-2" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.45" />
        </filter>
      </defs>

      <g filter="url(#ftNaturalGlow)">

        {/* =================================================================
            1. ORGANIC SLENDER BOTANICAL STEM (CLIMBING FROM Y=760 TO Y=40)
            ================================================================= */}
        {/* Main climbing vine axis */}
        <path
          d="M 148 760 C 130 680, 142 610, 118 530 C 95 450, 138 370, 115 280 C 92 195, 134 125, 112 40"
          stroke="#1F4730"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary gentle branch offshoots */}
        <path
          d="M 118 530 Q 90 510, 68 475 Q 58 450, 72 425"
          stroke="#27563C"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 115 280 Q 85 260, 65 228 Q 56 200, 74 175"
          stroke="#27563C"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Top delicate tendril & golden temple bell finial */}
        <path
          d="M 112 40 Q 128 25, 142 38 Q 148 48, 144 60"
          stroke="url(#ftRealBrass)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="144" cy="66" r="1.8" fill="#FFC824" />
        <ellipse cx="144" cy="72" rx="5" ry="2.2" fill="url(#ftRealBrass)" stroke="#3E2A02" strokeWidth="0.7" />
        <path d="M 140 72 Q 144 78, 137 84 Q 144 87, 151 84 Q 144 78, 148 72 Z" fill="url(#ftRealBrass)" stroke="#3E2A02" strokeWidth="0.8" />
        <circle cx="144" cy="88" r="1.5" fill="#FFC824" />


        {/* =================================================================
            2. BOTANICAL LEAFLETS (EMERALD GREEN WITH LIGHT VEINS)
            ================================================================= */}
        {/* Leaf 1 - Base Right (y ~ 690) */}
        <g transform="translate(142, 690) rotate(35)">
          <path d="M 0 0 C 14 -14, 34 -12, 44 0 C 34 12, 14 14, 0 0 Z" fill="url(#ftRealLeafDark)" stroke="#061A0E" strokeWidth="1.1" />
          <path d="M 0 0 Q 24 0, 40 0" stroke="#8AE2AA" strokeWidth="0.9" fill="none" />
          <path d="M 12 0 Q 17 -5, 22 -6" stroke="#8AE2AA" strokeWidth="0.6" fill="none" />
          <path d="M 12 0 Q 17 5, 22 6" stroke="#8AE2AA" strokeWidth="0.6" fill="none" />
        </g>

        {/* Leaf 2 - Base Left (y ~ 645) */}
        <g transform="translate(132, 645) rotate(-60)">
          <path d="M 0 0 C 15 -15, 36 -13, 46 0 C 36 13, 15 15, 0 0 Z" fill="url(#ftRealLeafLight)" stroke="#061A0E" strokeWidth="1.1" />
          <path d="M 0 0 Q 25 0, 42 0" stroke="#8AE2AA" strokeWidth="0.9" fill="none" />
          <path d="M 14 0 Q 20 -5, 26 -6" stroke="#8AE2AA" strokeWidth="0.6" fill="none" />
          <path d="M 14 0 Q 20 5, 26 6" stroke="#8AE2AA" strokeWidth="0.6" fill="none" />
        </g>

        {/* Leaf 3 - Mid-Lower Right (y ~ 560) */}
        <g transform="translate(126, 560) rotate(40)">
          <path d="M 0 0 C 14 -14, 34 -12, 44 0 C 34 12, 14 14, 0 0 Z" fill="url(#ftRealLeafLight)" stroke="#061A0E" strokeWidth="1.1" />
          <path d="M 0 0 Q 24 0, 40 0" stroke="#8AE2AA" strokeWidth="0.9" fill="none" />
        </g>

        {/* Leaf 4 - Mid-Lower Left branch (y ~ 490) */}
        <g transform="translate(98, 490) rotate(-45)">
          <path d="M 0 0 C 15 -14, 35 -12, 45 0 C 35 12, 15 14, 0 0 Z" fill="url(#ftRealLeafDark)" stroke="#061A0E" strokeWidth="1.1" />
          <path d="M 0 0 Q 24 0, 41 0" stroke="#8AE2AA" strokeWidth="0.9" fill="none" />
        </g>

        {/* Leaf 5 - Center Right (y ~ 380) */}
        <g transform="translate(122, 380) rotate(30)">
          <path d="M 0 0 C 15 -15, 36 -13, 46 0 C 36 13, 15 15, 0 0 Z" fill="url(#ftRealLeafDark)" stroke="#061A0E" strokeWidth="1.1" />
          <path d="M 0 0 Q 25 0, 42 0" stroke="#8AE2AA" strokeWidth="0.9" fill="none" />
        </g>

        {/* Leaf 6 - Center Left (y ~ 335) */}
        <g transform="translate(108, 335) rotate(-55)">
          <path d="M 0 0 C 14 -14, 34 -12, 44 0 C 34 12, 14 14, 0 0 Z" fill="url(#ftRealLeafLight)" stroke="#061A0E" strokeWidth="1.1" />
          <path d="M 0 0 Q 24 0, 40 0" stroke="#8AE2AA" strokeWidth="0.9" fill="none" />
        </g>

        {/* Leaf 7 - Mid-Upper Right (y ~ 220) */}
        <g transform="translate(124, 220) rotate(35)">
          <path d="M 0 0 C 14 -13, 32 -11, 42 0 C 32 11, 14 13, 0 0 Z" fill="url(#ftRealLeafLight)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q 22 0, 38 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
        </g>

        {/* Leaf 8 - Upper Left (y ~ 145) */}
        <g transform="translate(104, 145) rotate(-50)">
          <path d="M 0 0 C 13 -12, 30 -10, 38 0 C 30 10, 13 12, 0 0 Z" fill="url(#ftRealLeafDark)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q 20 0, 35 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
        </g>

        {/* Additional Lush Foliage Filling Negative Space */}
        {/* Leaf 9 - Near Lower Flower (y ~ 525) */}
        <g transform="translate(112, 525) rotate(-35)">
          <path d="M 0 0 C 14 -13, 32 -11, 42 0 C 32 11, 14 13, 0 0 Z" fill="url(#ftRealLeafLight)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q 22 0, 38 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
        </g>
        {/* Leaf 10 - Near Champa Flower (y ~ 410) */}
        <g transform="translate(85, 410) rotate(50)">
          <path d="M 0 0 C 13 -12, 30 -10, 38 0 C 30 10, 13 12, 0 0 Z" fill="url(#ftRealLeafDark)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q 20 0, 34 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
        </g>
        {/* Leaf 11 - Between Champa & Grand Lotus (y ~ 360) */}
        <g transform="translate(128, 355) rotate(45)">
          <path d="M 0 0 C 14 -13, 32 -11, 40 0 C 32 11, 14 13, 0 0 Z" fill="url(#ftRealLeafLight)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q 21 0, 36 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
        </g>
        {/* Leaf 12 - Above Grand Lotus (y ~ 240) */}
        <g transform="translate(108, 240) rotate(-45)">
          <path d="M 0 0 C 13 -12, 30 -10, 38 0 C 30 10, 13 12, 0 0 Z" fill="url(#ftRealLeafDark)" stroke="#061A0E" strokeWidth="1" />
          <path d="M 0 0 Q 20 0, 34 0" stroke="#8AE2AA" strokeWidth="0.8" fill="none" />
        </g>
        {/* Leaf 13 - Crown Area (y ~ 85) */}
        <g transform="translate(126, 85) rotate(25)">
          <path d="M 0 0 C 12 -11, 26 -9, 34 0 C 26 9, 12 11, 0 0 Z" fill="url(#ftRealLeafLight)" stroke="#061A0E" strokeWidth="0.9" />
          <path d="M 0 0 Q 18 0, 30 0" stroke="#8AE2AA" strokeWidth="0.7" fill="none" />
        </g>


        {/* =================================================================
            3. REALISTIC INDIAN WATERCOLOR FLOWERS (4 TIERS)
            ================================================================= */}

        {/* --- FLOWER 1: BOTTOM FULL BLOOM (y ~ 610) --- */}
        <g transform="translate(128, 610) scale(0.88) rotate(-10)">
          {/* Petal 1 Top */}
          <path d="M 0 0 C -14 -16, -8 -36, 0 -42 C 8 -36, 14 -16, 0 0 Z" fill="url(#ftRealCoralBack)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q 0 -18, 0 -36" stroke="#661401" strokeWidth="0.8" fill="none" />

          {/* Petal 2 Top-Right */}
          <path d="M 0 0 C 10 -18, 28 -28, 38 -20 C 42 -12, 26 6, 0 0 Z" fill="url(#ftRealCoralFront)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q 16 -14, 30 -16" stroke="#661401" strokeWidth="0.8" fill="none" />

          {/* Petal 3 Right */}
          <path d="M 0 0 C 18 -6, 36 8, 34 20 C 28 28, 12 16, 0 0 Z" fill="url(#ftRealCoralBack)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q 20 4, 28 14" stroke="#661401" strokeWidth="0.8" fill="none" />

          {/* Petal 4 Bottom-Right */}
          <path d="M 0 0 C 10 16, 12 32, 2 38 C -8 38, -12 18, 0 0 Z" fill="url(#ftRealCoralFront)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q 6 16, 2 30" stroke="#661401" strokeWidth="0.8" fill="none" />

          {/* Petal 5 Bottom-Left */}
          <path d="M 0 0 C -10 16, -26 22, -34 14 C -38 4, -18 -4, 0 0 Z" fill="url(#ftRealCoralBack)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q -18 12, -28 10" stroke="#661401" strokeWidth="0.8" fill="none" />

          {/* Petal 6 Top-Left */}
          <path d="M 0 0 C -18 -4, -32 -16, -26 -26 C -18 -30, -6 -14, 0 0 Z" fill="url(#ftRealCoralFront)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q -18 -12, -22 -20" stroke="#661401" strokeWidth="0.8" fill="none" />

          {/* Saffron Stamen Center */}
          <circle cx="0" cy="0" r="11" fill="#C9320E" />
          <ellipse cx="0" cy="0" rx="7.8" ry="7" fill="url(#ftRealStamen)" stroke="#522C00" strokeWidth="1" />
          <circle cx="-2.2" cy="-2.2" r="1.1" fill="#FFFDE9" />
          <circle cx="2.2" cy="-2.2" r="1.1" fill="#FFFDE9" />
          <circle cx="0" cy="2.2" r="1.1" fill="#FFFDE9" />
        </g>


        {/* --- FLOWER 2: MID-LOWER GOLDEN CHAMPA BLOOM (y ~ 445) --- */}
        <g transform="translate(68, 445) scale(0.85) rotate(18)">
          <path d="M 0 0 C -7 -12, -3 -24, 0 -27 C 3 -24, 7 -12, 0 0 Z" fill="url(#ftRealGoldBloom)" stroke="#331E01" strokeWidth="1.1" />
          <path d="M 0 0 C 6 -12, 18 -16, 22 -12 C 24 -7, 14 2, 0 0 Z" fill="url(#ftRealGoldBloom)" stroke="#331E01" strokeWidth="1.1" />
          <path d="M 0 0 C 12 4, 18 16, 14 21 C 8 23, 2 12, 0 0 Z" fill="url(#ftRealGoldBloom)" stroke="#331E01" strokeWidth="1.1" />
          <path d="M 0 0 C -4 12, -14 18, -19 13 C -22 8, -10 2, 0 0 Z" fill="url(#ftRealGoldBloom)" stroke="#331E01" strokeWidth="1.1" />
          <path d="M 0 0 C -12 -2, -20 -10, -18 -16 C -14 -20, -4 -10, 0 0 Z" fill="url(#ftRealGoldBloom)" stroke="#331E01" strokeWidth="1.1" />

          <circle cx="0" cy="0" r="6" fill="#D84315" stroke="#331E01" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="3" fill="#FFF59D" />
        </g>


        {/* --- FLOWER 3: MID-UPPER GRAND CORAL LOTUS (y ~ 290) --- */}
        <g transform="translate(122, 290) scale(0.92) rotate(22)">
          {/* Subtle wireframe aura */}
          <circle cx="0" cy="0" r="22" fill="#FFFDF5" fillOpacity="0.08" stroke="#E2B13B" strokeWidth="1" strokeDasharray="3 3" />

          {/* 6 Layered Petals */}
          <path d="M 0 0 C -14 -16, -8 -36, 0 -42 C 8 -36, 14 -16, 0 0 Z" fill="url(#ftRealCoralBack)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q 0 -18, 0 -36" stroke="#661401" strokeWidth="0.8" fill="none" />

          <path d="M 0 0 C 10 -18, 28 -28, 38 -20 C 42 -12, 26 6, 0 0 Z" fill="url(#ftRealCoralFront)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q 16 -14, 30 -16" stroke="#661401" strokeWidth="0.8" fill="none" />

          <path d="M 0 0 C 18 -6, 36 8, 34 20 C 28 28, 12 16, 0 0 Z" fill="url(#ftRealCoralBack)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q 20 4, 28 14" stroke="#661401" strokeWidth="0.8" fill="none" />

          <path d="M 0 0 C 10 16, 12 32, 2 38 C -8 38, -12 18, 0 0 Z" fill="url(#ftRealCoralFront)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q 6 16, 2 30" stroke="#661401" strokeWidth="0.8" fill="none" />

          <path d="M 0 0 C -10 16, -26 22, -34 14 C -38 4, -18 -4, 0 0 Z" fill="url(#ftRealCoralBack)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q -18 12, -28 10" stroke="#661401" strokeWidth="0.8" fill="none" />

          <path d="M 0 0 C -18 -4, -32 -16, -26 -26 C -18 -30, -6 -14, 0 0 Z" fill="url(#ftRealCoralSoft)" stroke="#1C0902" strokeWidth="1.2" />
          <path d="M 0 0 Q -18 -12, -22 -20" stroke="#661401" strokeWidth="0.8" fill="none" />

          {/* Stamen Core */}
          <circle cx="0" cy="0" r="11" fill="#C9320E" />
          <ellipse cx="0" cy="0" rx="8" ry="7.2" fill="url(#ftRealStamen)" stroke="#522C00" strokeWidth="1" />
          <circle cx="-2.4" cy="-2.4" r="1.1" fill="#FFFDE9" />
          <circle cx="2.4" cy="-2.4" r="1.1" fill="#FFFDE9" />
          <circle cx="0" cy="2.4" r="1.1" fill="#FFFDE9" />
        </g>


        {/* --- FLOWER 4: UPPER CORAL BLOSSOM (y ~ 140) --- */}
        <g transform="translate(82, 140) scale(0.78) rotate(-16)">
          <path d="M 0 0 C -8 -13, -3 -24, 0 -28 C 3 -24, 8 -13, 0 0 Z" fill="url(#ftRealCoralBack)" stroke="#1C0902" strokeWidth="1.1" />
          <path d="M 0 0 C 7 -13, 20 -16, 24 -12 C 26 -6, 14 3, 0 0 Z" fill="url(#ftRealCoralFront)" stroke="#1C0902" strokeWidth="1.1" />
          <path d="M 0 0 C 13 4, 18 16, 14 21 C 8 23, 2 13, 0 0 Z" fill="url(#ftRealCoralBack)" stroke="#1C0902" strokeWidth="1.1" />
          <path d="M 0 0 C -4 11, -14 17, -19 12 C -22 7, -9 2, 0 0 Z" fill="url(#ftRealCoralFront)" stroke="#1C0902" strokeWidth="1.1" />
          <path d="M 0 0 C -11 -3, -20 -11, -17 -17 C -13 -21, -4 -9, 0 0 Z" fill="url(#ftRealCoralBack)" stroke="#1C0902" strokeWidth="1.1" />

          <circle cx="0" cy="0" r="6.5" fill="url(#ftRealStamen)" stroke="#522C00" strokeWidth="0.9" />
        </g>

        {/* --- CLUSTER OF SACRED RED BERRIES & GROUND BASE LEAVES AT BOTTOM (y ~ 720 - 760) --- */}
        {/* Ground-level Base Leaf connecting right to the bottom border (y ~ 760) */}
        <g transform="translate(145, 760) rotate(-20)">
          <path d="M 0 0 C -18 -15, -45 -13, -58 0 C -45 13, -18 15, 0 0 Z" fill="url(#ftRealLeafDark)" stroke="#061A0E" strokeWidth="1.2" />
          <path d="M 0 0 Q -30 0, -52 0" stroke="#8AE2AA" strokeWidth="1" fill="none" />
        </g>
        <g transform="translate(135, 745) rotate(30)">
          <path d="M 0 0 C 14 -13, 35 -11, 45 0 C 35 11, 14 13, 0 0 Z" fill="url(#ftRealLeafLight)" stroke="#061A0E" strokeWidth="1.1" />
          <path d="M 0 0 Q 24 0, 40 0" stroke="#8AE2AA" strokeWidth="0.9" fill="none" />
        </g>

        <g transform="translate(132, 725)">
          <path d="M 0 0 Q -6 -8, -12 -11" stroke="#1F4730" strokeWidth="1.2" fill="none" />
          <path d="M 0 0 Q 6 -9, 10 -12" stroke="#1F4730" strokeWidth="1.2" fill="none" />
          <circle cx="-12" cy="-11" r="3.8" fill="#C62828" stroke="#420B0B" strokeWidth="0.7" />
          <circle cx="-13" cy="-12" r="1.1" fill="#FF8A80" />
          <circle cx="10" cy="-12" r="3.4" fill="#D32F2F" stroke="#420B0B" strokeWidth="0.7" />
          <circle cx="9.2" cy="-13" r="1" fill="#FF8A80" />
        </g>

      </g>
    </svg>
  );
}
