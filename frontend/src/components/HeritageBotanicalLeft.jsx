import React from 'react';

/**
 * Authentic Kashi Heritage Botanical Illustration (Left Flank)
 * Crafted in Pure SVG Vector Code — 100% vector, zero external image files.
 * Styled after traditional Indian temple miniature botanical art:
 * - Hanging Brass Diya & Temple Bell on Golden Arch
 * - Golden Wireframe Background Blossom
 * - Rich Multi-Layered Coral Centerpiece Flower with ink outlines & radiating petal striations
 * - Luminous Emerald Leaves with intricate vein networks
 * - Secondary Golden Marigold Blossom & Lower Coral Flower with red berries
 */
export default function HeritageBotanicalLeft({ className = '' }) {
  return (
    <svg
      viewBox="0 0 220 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`heritage-botanical-svg left-botanical ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* --- Brass & Gold Metallic Gradients --- */}
        <linearGradient id="leftBrassGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4BD" />
          <stop offset="30%" stopColor="#E5B842" />
          <stop offset="70%" stopColor="#B38218" />
          <stop offset="100%" stopColor="#6E4D05" />
        </linearGradient>

        <linearGradient id="leftBrassHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B38218" />
          <stop offset="35%" stopColor="#FFF9DA" />
          <stop offset="65%" stopColor="#E5B842" />
          <stop offset="100%" stopColor="#5A3E04" />
        </linearGradient>

        {/* --- Vibrant Coral & Terracotta Petal Gradients --- */}
        <radialGradient id="leftCoralPetal1" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FF9575" />
          <stop offset="50%" stopColor="#E64A26" />
          <stop offset="100%" stopColor="#8A1B05" />
        </radialGradient>

        <radialGradient id="leftCoralPetal2" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFAA8E" />
          <stop offset="45%" stopColor="#EE5E3B" />
          <stop offset="100%" stopColor="#9C2007" />
        </radialGradient>

        <radialGradient id="leftCoralLower" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF8B6B" />
          <stop offset="60%" stopColor="#DE421E" />
          <stop offset="100%" stopColor="#871A04" />
        </radialGradient>

        {/* --- Golden Marigold Gradients --- */}
        <radialGradient id="leftGoldPetal" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF3A8" />
          <stop offset="45%" stopColor="#F9A825" />
          <stop offset="100%" stopColor="#B36A00" />
        </radialGradient>

        {/* --- Botanical Emerald Leaf Gradients --- */}
        <linearGradient id="leftLeafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5EAE78" />
          <stop offset="50%" stopColor="#2D724A" />
          <stop offset="100%" stopColor="#0F3820" />
        </linearGradient>

        <linearGradient id="leftLeafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#76C48F" />
          <stop offset="55%" stopColor="#388456" />
          <stop offset="100%" stopColor="#144326" />
        </linearGradient>

        {/* --- Flower Core / Stamen Gold --- */}
        <radialGradient id="leftStamenCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFDE6" />
          <stop offset="45%" stopColor="#FFCA28" />
          <stop offset="85%" stopColor="#D48806" />
          <stop offset="100%" stopColor="#824E00" />
        </radialGradient>

        {/* Soft Drop Shadow for rich layered depth */}
        <filter id="leftArtShadow" x="-20%" y="-15%" width="140%" height="135%">
          <feDropShadow dx="1" dy="4" stdDeviation="5" floodColor="#21150A" floodOpacity="0.14" />
        </filter>
      </defs>

      <g filter="url(#leftArtShadow)">

        {/* =================================================================
            1. GOLDEN WIRE ARCH & HANGING BRASS DIYA & BELL (TOP RIGHT AREA)
            ================================================================= */}
        {/* Slender golden arch branch extending up and over */}
        <path
          d="M 38 210 C 45 150, 75 85, 148 68 Q 160 65, 166 76"
          stroke="#C59B27"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Delicate golden branch offshoots */}
        <path
          d="M 68 140 Q 95 125, 108 98"
          stroke="#C59B27"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Hanging Chain Links from Top Hook (x=166, y=76) */}
        <circle cx="166" cy="78" r="2.5" stroke="#9A700F" strokeWidth="1.2" fill="#FFEAA7" />
        <circle cx="166" cy="85" r="2.5" stroke="#9A700F" strokeWidth="1.2" fill="#FFEAA7" />
        <circle cx="166" cy="92" r="2.5" stroke="#9A700F" strokeWidth="1.2" fill="#FFEAA7" />

        {/* --- UPPER BRASS DIYA LAMP --- */}
        {/* Top Flame/Teardrop Finial */}
        <path
          d="M 166 93 Q 163 99, 166 103 Q 169 99, 166 93 Z"
          fill="url(#leftBrassHighlight)"
          stroke="#5A3E04"
          strokeWidth="0.8"
        />
        {/* Diya Dome Cover */}
        <path
          d="M 154 105 Q 166 97, 178 105 L 184 117 Q 166 122, 148 117 Z"
          fill="url(#leftBrassGlow)"
          stroke="#4D3402"
          strokeWidth="1.2"
        />
        {/* Diya Saucer Basin (Wide Lip) */}
        <ellipse cx="166" cy="117" rx="22" ry="5.5" fill="url(#leftBrassHighlight)" stroke="#4D3402" strokeWidth="1.2" />
        {/* Diya Inverted Base Pedestal */}
        <path
          d="M 158 120 Q 166 130, 174 120 Q 166 122, 158 120 Z"
          fill="url(#leftBrassGlow)"
          stroke="#4D3402"
          strokeWidth="1"
        />

        {/* Hanging Chain Links between Diya and Lower Bell */}
        <circle cx="166" cy="132" r="2.2" stroke="#9A700F" strokeWidth="1" fill="#FFEAA7" />
        <circle cx="166" cy="138" r="2.2" stroke="#9A700F" strokeWidth="1" fill="#FFEAA7" />

        {/* --- LOWER BRASS TEMPLE BELL --- */}
        {/* Bell Top Cap */}
        <ellipse cx="166" cy="141" rx="4.5" ry="2" fill="url(#leftBrassHighlight)" stroke="#4D3402" strokeWidth="0.9" />
        {/* Bell Flared Body */}
        <path
          d="M 162 142 Q 166 148, 158 156 Q 166 160, 174 156 Q 166 148, 170 142 Z"
          fill="url(#leftBrassGlow)"
          stroke="#4D3402"
          strokeWidth="1.1"
        />
        {/* Bell Lip Rim */}
        <ellipse cx="166" cy="156.5" rx="9" ry="2.6" fill="url(#leftBrassHighlight)" stroke="#4D3402" strokeWidth="1" />
        {/* Bell Clapper */}
        <circle cx="166" cy="162" r="2.2" fill="url(#leftBrassGlow)" stroke="#4D3402" strokeWidth="0.8" />


        {/* =================================================================
            2. DELICATE GOLDEN OUTLINE FLOWER BEHIND (LOTUS / DAHLIA)
            ================================================================= */}
        <g transform="translate(108, 130)">
          {/* Petal 1 Top */}
          <path d="M 0 0 C -8 -22, -2 -38, 0 -44 C 2 -38, 8 -22, 0 0 Z" fill="#FFFDF5" fillOpacity="0.85" stroke="#E5A93C" strokeWidth="1.4" />
          {/* Petal 2 Top Right */}
          <path d="M 0 0 C 8 -20, 24 -30, 32 -30 C 28 -20, 16 -8, 0 0 Z" fill="#FFFDF5" fillOpacity="0.85" stroke="#E5A93C" strokeWidth="1.4" />
          {/* Petal 3 Right */}
          <path d="M 0 0 C 18 -8, 38 -2, 44 6 C 36 12, 18 8, 0 0 Z" fill="#FFFDF5" fillOpacity="0.85" stroke="#E5A93C" strokeWidth="1.4" />
          {/* Petal 4 Bottom Right */}
          <path d="M 0 0 C 14 10, 28 26, 26 34 C 18 32, 6 18, 0 0 Z" fill="#FFFDF5" fillOpacity="0.85" stroke="#E5A93C" strokeWidth="1.4" />
          {/* Petal 5 Bottom Left */}
          <path d="M 0 0 C -8 16, -22 28, -30 26 C -28 18, -14 8, 0 0 Z" fill="#FFFDF5" fillOpacity="0.85" stroke="#E5A93C" strokeWidth="1.4" />
          {/* Petal 6 Left */}
          <path d="M 0 0 C -18 4, -36 -2, -40 -10 C -32 -16, -16 -8, 0 0 Z" fill="#FFFDF5" fillOpacity="0.85" stroke="#E5A93C" strokeWidth="1.4" />
          {/* Petal 7 Top Left */}
          <path d="M 0 0 C -10 -16, -24 -28, -26 -36 C -18 -32, -8 -18, 0 0 Z" fill="#FFFDF5" fillOpacity="0.85" stroke="#E5A93C" strokeWidth="1.4" />
          {/* Inner Radiating Golden Lines */}
          <circle cx="0" cy="0" r="10" fill="#FFF8DE" stroke="#D4AF37" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="4.5" fill="#E5A93C" />
        </g>


        {/* =================================================================
            3. BOTANICAL LEAF BRANCHES & STEMS (EMERALD & MINT VEINS)
            ================================================================= */}
        {/* Main curved botanical stem */}
        <path
          d="M 18 385 Q 32 300, 36 240 Q 40 180, 72 170"
          stroke="#163824"
          strokeWidth="3.4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Leaf Cluster 1 - Upper Left of Main Flower */}
        <g transform="translate(42, 172) rotate(-55)">
          {/* Leaf Body */}
          <path d="M 0 0 C 16 -16, 40 -14, 52 0 C 40 14, 16 16, 0 0 Z" fill="url(#leftLeafGrad2)" stroke="#0E2A1A" strokeWidth="1.3" />
          {/* Central Vein */}
          <path d="M 0 0 Q 28 0, 48 0" stroke="#8FE0A9" strokeWidth="1.2" fill="none" />
          {/* Lateral Veins */}
          <path d="M 14 0 Q 20 -7, 28 -8" stroke="#8FE0A9" strokeWidth="0.8" fill="none" />
          <path d="M 14 0 Q 20 7, 28 8" stroke="#8FE0A9" strokeWidth="0.8" fill="none" />
          <path d="M 28 0 Q 34 -6, 40 -6" stroke="#8FE0A9" strokeWidth="0.8" fill="none" />
          <path d="M 28 0 Q 34 6, 40 6" stroke="#8FE0A9" strokeWidth="0.8" fill="none" />
        </g>

        {/* Leaf Cluster 2 - Mid Left below Main Flower */}
        <g transform="translate(35, 215) rotate(-35)">
          <path d="M 0 0 C 14 -14, 36 -12, 46 0 C 36 12, 14 14, 0 0 Z" fill="url(#leftLeafGrad1)" stroke="#0E2A1A" strokeWidth="1.3" />
          <path d="M 0 0 Q 24 0, 42 0" stroke="#8FE0A9" strokeWidth="1.1" fill="none" />
          <path d="M 12 0 Q 18 -6, 24 -7" stroke="#8FE0A9" strokeWidth="0.8" fill="none" />
          <path d="M 12 0 Q 18 6, 24 7" stroke="#8FE0A9" strokeWidth="0.8" fill="none" />
        </g>

        {/* Leaf Cluster 3 - Pointing Right into composition */}
        <g transform="translate(48, 235) rotate(25)">
          <path d="M 0 0 C 15 -14, 38 -12, 48 0 C 38 12, 15 14, 0 0 Z" fill="url(#leftLeafGrad2)" stroke="#0E2A1A" strokeWidth="1.3" />
          <path d="M 0 0 Q 25 0, 44 0" stroke="#8FE0A9" strokeWidth="1.1" fill="none" />
          <path d="M 14 0 Q 20 -6, 26 -7" stroke="#8FE0A9" strokeWidth="0.8" fill="none" />
          <path d="M 14 0 Q 20 6, 26 7" stroke="#8FE0A9" strokeWidth="0.8" fill="none" />
        </g>

        {/* Leaf Cluster 4 - Lower Mid */}
        <g transform="translate(32, 285) rotate(-60)">
          <path d="M 0 0 C 14 -13, 34 -11, 44 0 C 34 11, 14 13, 0 0 Z" fill="url(#leftLeafGrad1)" stroke="#0E2A1A" strokeWidth="1.2" />
          <path d="M 0 0 Q 22 0, 40 0" stroke="#8FE0A9" strokeWidth="1" fill="none" />
        </g>

        {/* Leaf Cluster 5 - Lower Right */}
        <g transform="translate(36, 320) rotate(30)">
          <path d="M 0 0 C 12 -11, 28 -9, 36 0 C 28 9, 12 11, 0 0 Z" fill="url(#leftLeafGrad2)" stroke="#0E2A1A" strokeWidth="1.2" />
          <path d="M 0 0 Q 18 0, 32 0" stroke="#8FE0A9" strokeWidth="0.9" fill="none" />
        </g>


        {/* =================================================================
            4. MAIN CORAL BOTANICAL FLOWER (CENTERPIECE, x=92, y=190)
            ================================================================= */}
        <g transform="translate(92, 190) rotate(10)">
          {/* Outer Petal 1 (Top Left) */}
          <path
            d="M 0 0 C -18 -18, -12 -42, 2 -48 C 16 -46, 22 -24, 0 0 Z"
            fill="url(#leftCoralPetal1)"
            stroke="#211005"
            strokeWidth="1.4"
          />
          {/* Inner Petal Striation Strokes */}
          <path d="M 0 0 Q -4 -22, 2 -40" stroke="#7E1700" strokeWidth="0.9" fill="none" />
          <path d="M 0 0 Q 4 -20, 8 -36" stroke="#7E1700" strokeWidth="0.8" fill="none" />

          {/* Outer Petal 2 (Top Right) */}
          <path
            d="M 0 0 C 12 -22, 34 -34, 46 -24 C 52 -14, 34 8, 0 0 Z"
            fill="url(#leftCoralPetal2)"
            stroke="#211005"
            strokeWidth="1.4"
          />
          <path d="M 0 0 Q 20 -18, 38 -20" stroke="#7E1700" strokeWidth="0.9" fill="none" />

          {/* Outer Petal 3 (Right) */}
          <path
            d="M 0 0 C 22 -6, 44 10, 42 24 C 36 34, 14 20, 0 0 Z"
            fill="url(#leftCoralPetal1)"
            stroke="#211005"
            strokeWidth="1.4"
          />
          <path d="M 0 0 Q 26 4, 36 18" stroke="#7E1700" strokeWidth="0.9" fill="none" />

          {/* Outer Petal 4 (Bottom Right) */}
          <path
            d="M 0 0 C 12 18, 14 38, 2 44 C -10 44, -14 22, 0 0 Z"
            fill="url(#leftCoralPetal2)"
            stroke="#211005"
            strokeWidth="1.4"
          />
          <path d="M 0 0 Q 8 20, 4 36" stroke="#7E1700" strokeWidth="0.9" fill="none" />

          {/* Outer Petal 5 (Bottom Left) */}
          <path
            d="M 0 0 C -12 20, -32 26, -42 16 C -46 4, -22 -6, 0 0 Z"
            fill="url(#leftCoralPetal1)"
            stroke="#211005"
            strokeWidth="1.4"
          />
          <path d="M 0 0 Q -22 14, -34 12" stroke="#7E1700" strokeWidth="0.9" fill="none" />

          {/* Outer Petal 6 (Left) */}
          <path
            d="M 0 0 C -22 -4, -38 -18, -32 -30 C -22 -36, -8 -16, 0 0 Z"
            fill="url(#leftCoralPetal2)"
            stroke="#211005"
            strokeWidth="1.4"
          />
          <path d="M 0 0 Q -22 -14, -26 -24" stroke="#7E1700" strokeWidth="0.9" fill="none" />

          {/* Inner Cup Shading */}
          <circle cx="0" cy="0" r="15" fill="#D9421E" />

          {/* Large Golden Stamen Disc Center */}
          <ellipse cx="0" cy="0" rx="10.5" ry="9.5" fill="url(#leftStamenCenter)" stroke="#6C4500" strokeWidth="1.2" />
          
          {/* Stamen Hatching & Dots */}
          <path d="M -6 -3 Q 0 -5, 6 -3" stroke="#8C5800" strokeWidth="0.9" fill="none" />
          <path d="M -7 0 Q 0 -2, 7 0" stroke="#8C5800" strokeWidth="0.9" fill="none" />
          <path d="M -6 3 Q 0 1, 6 3" stroke="#8C5800" strokeWidth="0.9" fill="none" />
          <circle cx="-3" cy="-3" r="1.3" fill="#FFF9DF" />
          <circle cx="3" cy="-3" r="1.3" fill="#FFF9DF" />
          <circle cx="-3" cy="3" r="1.3" fill="#FFF9DF" />
          <circle cx="3" cy="3" r="1.3" fill="#FFF9DF" />
          <circle cx="0" cy="0" r="1.6" fill="#8C5800" />
        </g>


        {/* =================================================================
            5. GOLDEN MARIGOLD FLOWER (MID-LOWER LEFT, x=45, y=280)
            ================================================================= */}
        <g transform="translate(45, 280) rotate(-10)">
          {/* Petal 1 */}
          <path d="M 0 0 C -8 -12, -4 -22, 0 -25 C 4 -22, 8 -12, 0 0 Z" fill="url(#leftGoldPetal)" stroke="#4A3000" strokeWidth="1.1" />
          {/* Petal 2 */}
          <path d="M 0 0 C 6 -12, 18 -16, 22 -12 C 24 -8, 14 2, 0 0 Z" fill="url(#leftGoldPetal)" stroke="#4A3000" strokeWidth="1.1" />
          {/* Petal 3 */}
          <path d="M 0 0 C 12 4, 18 16, 14 21 C 8 23, 2 12, 0 0 Z" fill="url(#leftGoldPetal)" stroke="#4A3000" strokeWidth="1.1" />
          {/* Petal 4 */}
          <path d="M 0 0 C -4 12, -14 18, -19 13 C -22 8, -10 2, 0 0 Z" fill="url(#leftGoldPetal)" stroke="#4A3000" strokeWidth="1.1" />
          {/* Petal 5 */}
          <path d="M 0 0 C -12 -2, -20 -10, -18 -16 C -14 -20, -4 -10, 0 0 Z" fill="url(#leftGoldPetal)" stroke="#4A3000" strokeWidth="1.1" />

          {/* Marigold Amber Center */}
          <circle cx="0" cy="0" r="6.5" fill="#E65100" stroke="#3E2723" strokeWidth="0.9" />
          <circle cx="0" cy="0" r="3.2" fill="#FFE082" />
        </g>


        {/* =================================================================
            6. LOWER CORAL FLOWER & SACRED RED BERRIES (x=58, y=345)
            ================================================================= */}
        <g transform="translate(58, 345) rotate(20) scale(0.9)">
          <path d="M 0 0 C -9 -14, -4 -26, 0 -30 C 4 -26, 9 -14, 0 0 Z" fill="url(#leftCoralLower)" stroke="#211005" strokeWidth="1.2" />
          <path d="M 0 0 C 8 -14, 22 -18, 26 -13 C 28 -7, 16 3, 0 0 Z" fill="url(#leftCoralLower)" stroke="#211005" strokeWidth="1.2" />
          <path d="M 0 0 C 14 4, 20 18, 15 24 C 9 26, 2 14, 0 0 Z" fill="url(#leftCoralLower)" stroke="#211005" strokeWidth="1.2" />
          <path d="M 0 0 C -4 12, -16 19, -21 14 C -24 8, -10 2, 0 0 Z" fill="url(#leftCoralLower)" stroke="#211005" strokeWidth="1.2" />
          <path d="M 0 0 C -12 -3, -22 -12, -19 -19 C -15 -23, -5 -10, 0 0 Z" fill="url(#leftCoralLower)" stroke="#211005" strokeWidth="1.2" />

          <circle cx="0" cy="0" r="7.5" fill="url(#leftStamenCenter)" stroke="#6C4500" strokeWidth="1" />
        </g>

        {/* Sacred Red Prayer Berries / Buds Cluster at Bottom (x=24, y=375) */}
        <g transform="translate(24, 375)">
          {/* Stems */}
          <path d="M 0 0 Q 6 -8, 12 -12" stroke="#163824" strokeWidth="1.2" fill="none" />
          <path d="M 0 0 Q -2 -9, -4 -15" stroke="#163824" strokeWidth="1.2" fill="none" />
          <path d="M 0 0 Q 8 -2, 16 -3" stroke="#163824" strokeWidth="1.2" fill="none" />
          {/* Berries */}
          <circle cx="12" cy="-12" r="4.2" fill="#C62828" stroke="#4A0E0E" strokeWidth="0.8" />
          <circle cx="10.8" cy="-13.2" r="1.3" fill="#FF8A80" />

          <circle cx="-4" cy="-15" r="3.8" fill="#D32F2F" stroke="#4A0E0E" strokeWidth="0.8" />
          <circle cx="-5" cy="-16" r="1.1" fill="#FF8A80" />

          <circle cx="16" cy="-3" r="3.5" fill="#C62828" stroke="#4A0E0E" strokeWidth="0.8" />
          <circle cx="15" cy="-4" r="1" fill="#FF8A80" />
        </g>

      </g>
    </svg>
  );
}

