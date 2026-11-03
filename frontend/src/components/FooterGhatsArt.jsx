import React from 'react';

/**
 * FooterGhatsArt
 * Masterpiece vector artwork replicating the delicate gold-line sketch of Varanasi:
 * - 100% pure SVG code (NO geometric boxes / "dabba")
 * - Authentic Nagara temple shikhars with curved pagas (fluting), Amalaka discs, Kalash finials, and fluttering Dhwaja flags
 * - Clustered Urushringas (subsidiary miniature spires), pillared Chhatris with bulbous cupolas, scalloped arches, and stone ghat steps
 * - Grand temple skyline forming two majestic mountain-like clusters flanking the central moon
 * - Central solid radiant golden moon in exact brand logo color (#F4A836)
 * - Flocks of birds gliding across the open night sky
 * - Traditional wooden Banaras Nauka (boats) and royal Bajras with canopies, oars, and bow lanterns
 * - Sacred Maa Ganga with delicate horizontal ripple sketches and golden moon reflection column
 * - Symmetrical hand-drawn gold botanical tree branches framing the borders
 */
export default function FooterGhatsArt() {
  return (
    <div className="footer-ghats-art-wrapper" aria-hidden="true">
      <svg
        viewBox="0 0 1600 480"
        preserveAspectRatio="xMidYMax slice"
        className="footer-gold-ghats-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Ambient Moon Halo */}
          <radialGradient id="kashiMoonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5A834" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#E5A02E" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F5A834" stopOpacity="0" />
          </radialGradient>

          {/* Golden River Reflection Shimmer */}
          <linearGradient id="gangaReflectionGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#F8D376" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F4A836" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D49A32" stopOpacity="0.05" />
          </linearGradient>

          {/* Temple Silhouette Tint (Delicate gold parchment wash) */}
          <linearGradient id="templeShadingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E6B44B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#07221A" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* =================================================================
            1. BOTANICAL GOLD-LINE BRANCHES (LEFT & RIGHT MARGINS)
            Delicate organic leaves & twigs framing the panorama
            ================================================================= */}
        {/* Left Botanical Branch */}
        <g className="ghats-botanical-left" stroke="#DFC37B" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Main rising stems */}
          <path d="M 0,480 Q 40,360 25,260 Q 15,180 50,100" />
          <path d="M 20,280 Q 55,230 42,160 Q 34,110 70,50" strokeWidth="0.9" />
          <path d="M 32,380 Q 68,330 60,260 Q 54,210 82,160" strokeWidth="0.85" />

          {/* Leaves with central vein */}
          <path d="M 25,260 Q 48,245 42,228 Q 22,242 25,260 Z" fill="#DFC37B" fillOpacity="0.12" />
          <line x1="25" y1="260" x2="38" y2="236" strokeWidth="0.7" opacity="0.6" />
          
          <path d="M 22,300 Q -2,285 5,266 Q 25,280 22,300 Z" fill="#DFC37B" fillOpacity="0.1" />
          <line x1="22" y1="300" x2="7" y2="274" strokeWidth="0.7" opacity="0.6" />

          <path d="M 35,200 Q 60,185 55,168 Q 35,182 35,200 Z" fill="#DFC37B" fillOpacity="0.12" />
          <line x1="35" y1="200" x2="51" y2="176" strokeWidth="0.7" opacity="0.6" />

          <path d="M 18,170 Q -4,158 2,140 Q 20,152 18,170 Z" fill="#DFC37B" fillOpacity="0.1" />

          <path d="M 50,100 Q 75,86 68,68 Q 48,82 50,100 Z" fill="#DFC37B" fillOpacity="0.15" />
          <line x1="50" y1="100" x2="65" y2="76" strokeWidth="0.7" opacity="0.6" />

          <path d="M 44,130 Q 22,116 28,98 Q 46,110 44,130 Z" fill="#DFC37B" fillOpacity="0.12" />
          
          <path d="M 70,50 Q 88,40 82,24 Q 64,34 70,50 Z" fill="#DFC37B" fillOpacity="0.18" />
        </g>

        {/* Right Botanical Branch */}
        <g className="ghats-botanical-right" stroke="#DFC37B" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Main rising stems */}
          <path d="M 1600,480 Q 1560,360 1575,260 Q 1585,180 1550,100" />
          <path d="M 1580,280 Q 1545,230 1558,160 Q 1566,110 1530,50" strokeWidth="0.9" />
          <path d="M 1568,380 Q 1532,330 1540,260 Q 1546,210 1518,160" strokeWidth="0.85" />

          {/* Leaves with central vein */}
          <path d="M 1575,260 Q 1552,245 1558,228 Q 1578,242 1575,260 Z" fill="#DFC37B" fillOpacity="0.12" />
          <line x1="1575" y1="260" x2="1562" y2="236" strokeWidth="0.7" opacity="0.6" />

          <path d="M 1578,300 Q 1602,285 1595,266 Q 1575,280 1578,300 Z" fill="#DFC37B" fillOpacity="0.1" />
          <line x1="1578" y1="300" x2="1593" y2="274" strokeWidth="0.7" opacity="0.6" />

          <path d="M 1565,200 Q 1540,185 1545,168 Q 1565,182 1565,200 Z" fill="#DFC37B" fillOpacity="0.12" />
          <line x1="1565" y1="200" x2="1549" y2="176" strokeWidth="0.7" opacity="0.6" />

          <path d="M 1582,170 Q 1604,158 1598,140 Q 1580,152 1582,170 Z" fill="#DFC37B" fillOpacity="0.1" />

          <path d="M 1550,100 Q 1525,86 1532,68 Q 1552,82 1550,100 Z" fill="#DFC37B" fillOpacity="0.15" />
          <line x1="1550" y1="100" x2="1535" y2="76" strokeWidth="0.7" opacity="0.6" />

          <path d="M 1556,130 Q 1578,116 1572,98 Q 1554,110 1556,130 Z" fill="#DFC37B" fillOpacity="0.12" />
          
          <path d="M 1530,50 Q 1512,40 1518,24 Q 1536,34 1530,50 Z" fill="#DFC37B" fillOpacity="0.18" />
        </g>


        {/* =================================================================
            2. CENTRAL RADIANT CHAND (MOON) & FLOCKS OF SOARING BIRDS
            Positioned in center sky above the river and temple skyline
            ================================================================= */}
        {/* Soft Ambient Moon Halo */}
        <circle cx="800" cy="265" r="46" fill="url(#kashiMoonHalo)" className="kashi-moon-aura-pulse" />
        
        {/* Crisp Radiant Golden Moon (Exact Logo Golden Amber #F4A836) */}
        <circle cx="800" cy="265" r="23" fill="#F4A836" className="kashi-chand-core" />
        <circle cx="800" cy="265" r="23" stroke="#FDE293" strokeWidth="0.8" fill="none" opacity="0.75" />

        {/* Flocks of Silhouetted Birds Soaring Near Moon */}
        <g className="kashi-sky-birds" stroke="#DFC37B" strokeWidth="1.15" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          {/* Left Wing Formation (Approaching the Moon) */}
          <path d="M 640,270 Q 646,265 652,270 Q 658,265 664,270" />
          <path d="M 672,258 Q 677,254 682,258 Q 687,254 692,258" />
          <path d="M 704,272 Q 710,267 716,272 Q 722,267 728,272" />
          <path d="M 732,284 Q 737,280 742,284 Q 747,280 752,284" />

          {/* Right Wing Formation (Soaring Past Moon) */}
          <path d="M 855,274 Q 861,269 867,274 Q 873,269 879,274" />
          <path d="M 888,260 Q 894,255 900,260 Q 906,255 912,260" />
          <path d="M 922,272 Q 927,268 932,272 Q 937,268 942,272" />
          <path d="M 946,258 Q 951,254 956,258 Q 961,254 966,258" />
        </g>


        {/* =================================================================
            3. AUTHENTIC ARCHITECTURAL VARANASI GHATS & TEMPLE SKYLINE
            NO BOXES. Only authentic Nagara Shikhars with curved pagas, Amalakas,
            Kalashes, Dhwaja flags, Chhatris, tiered mandapas, and stone ghat steps.
            ================================================================= */}
        <g 
          className="ghats-authentic-temples" 
          stroke="#DFC37B" 
          strokeWidth="0.9" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >

          {/* -------------------------------------------------------------
              LEFT TEMPLE COMPLEX (x: 70 to 730)
              ------------------------------------------------------------- */}

          {/* Foothill Shrines 1 (x: 70 - 130) */}
          {/* Small Nagara Spire 1 */}
          <path d="M 70,360 C 70,335 80,315 88,300 C 96,315 106,335 106,360" fill="url(#templeShadingGrad)" />
          <line x1="88" y1="300" x2="88" y2="360" strokeWidth="0.6" opacity="0.6" />
          <line x1="79" y1="340" x2="83" y2="315" strokeWidth="0.5" opacity="0.6" />
          <line x1="97" y1="340" x2="93" y2="315" strokeWidth="0.5" opacity="0.6" />
          <ellipse cx="88" cy="298" rx="4" ry="1.5" />
          <circle cx="88" cy="293" r="1.5" fill="#DFC37B" />
          <line x1="88" y1="292" x2="88" y2="280" />
          <path d="M 88,280 L 88,272 L 96,276 Z" fill="#DFC37B" fillOpacity="0.75" />

          {/* Small Tiered Mandapa 2 (x: 106 - 150) */}
          <path d="M 106,360 C 106,345 116,330 125,320 C 134,330 144,345 144,360" />
          <path d="M 112,345 Q 125,340 138,345" />
          <path d="M 116,332 Q 125,328 134,332" />
          <ellipse cx="125" cy="318" rx="3.5" ry="1.5" />
          <line x1="125" y1="316" x2="125" y2="305" />

          {/* Chhatri Pavilion (x: 144 - 190) */}
          {/* Slender pillars */}
          <line x1="150" y1="360" x2="150" y2="330" />
          <line x1="162" y1="360" x2="162" y2="330" />
          <line x1="174" y1="360" x2="174" y2="330" />
          <line x1="186" y1="360" x2="186" y2="330" />
          {/* Eaves bracket & Dome */}
          <path d="M 146,330 Q 168,326 190,330" />
          <path d="M 148,330 C 148,310 160,295 168,290 C 176,295 188,310 188,330" fill="url(#templeShadingGrad)" />
          <ellipse cx="168" cy="289" rx="4" ry="1.5" />
          <circle cx="168" cy="285" r="1.5" fill="#DFC37B" />
          <line x1="168" y1="284" x2="168" y2="272" />
          <path d="M 168,272 L 168,264 L 176,268 Z" fill="#DFC37B" fillOpacity="0.75" />

          {/* Stepped Ghat Steps 1 (x: 70 - 190) */}
          <line x1="70" y1="368" x2="190" y2="368" strokeWidth="0.8" />
          <line x1="80" y1="373" x2="180" y2="373" strokeWidth="0.7" />

          {/* Intermediate Nagara Spire Complex 1 (x: 190 - 280) */}
          {/* Subsidiary Left Spire */}
          <path d="M 190,360 C 190,330 200,305 208,285 C 216,305 226,330 226,360" />
          <ellipse cx="208" cy="283" rx="4" ry="1.5" />
          <line x1="208" y1="281" x2="208" y2="270" />
          {/* Main Spire of Cluster */}
          <path d="M 215,360 C 215,315 230,265 242,230 C 254,265 269,315 269,360" fill="url(#templeShadingGrad)" strokeWidth="1.0" />
          {/* Ratha Fluting along the curve */}
          <path d="M 224,355 C 224,318 234,275 242,235" strokeWidth="0.6" opacity="0.65" />
          <line x1="242" y1="230" x2="242" y2="360" strokeWidth="0.6" opacity="0.7" />
          <path d="M 260,355 C 260,318 250,275 242,235" strokeWidth="0.6" opacity="0.65" />
          {/* Horizontal Bhumi Tiers */}
          <path d="M 220,335 Q 242,330 264,335" strokeWidth="0.5" />
          <path d="M 226,305 Q 242,300 258,305" strokeWidth="0.5" />
          <path d="M 232,275 Q 242,272 252,275" strokeWidth="0.5" />
          {/* Crown Amalaka, Kalash & Flag */}
          <ellipse cx="242" cy="228" rx="6" ry="2.2" />
          <ellipse cx="242" cy="224" rx="4" ry="1.8" />
          <circle cx="242" cy="220" r="2" fill="#DFC37B" />
          <line x1="242" y1="218" x2="242" y2="200" strokeWidth="1.0" />
          <path d="M 242,200 L 242,188 L 256,194 Z" fill="#DFC37B" fillOpacity="0.8" />
          {/* Subsidiary Right Spire */}
          <path d="M 258,360 C 258,335 268,310 276,290 C 284,310 294,335 294,360" />
          <ellipse cx="276" cy="288" rx="4" ry="1.5" />
          <line x1="276" y1="286" x2="276" y2="275" />

          {/* Stepped Temple Base & Arches */}
          <path d="M 228,360 C 228,348 234,340 242,340 C 250,340 256,348 256,360" />
          <circle cx="242" cy="347" r="2" />

          {/* Arched Ghat Pavilion with Balcony (x: 290 - 350) */}
          <path d="M 292,360 L 292,315" />
          <path d="M 348,360 L 348,315" />
          <path d="M 290,315 Q 320,305 350,315" />
          {/* Scalloped Cusped Arch */}
          <path d="M 302,360 C 302,340 310,332 320,332 C 330,332 338,340 338,360" />
          {/* Jharokha Balcony Cupola */}
          <path d="M 305,315 C 305,295 314,280 320,275 C 326,280 335,295 335,315" />
          <ellipse cx="320" cy="274" rx="4" ry="1.5" />
          <line x1="320" y1="272" x2="320" y2="260" />
          <path d="M 320,260 L 320,252 L 330,256 Z" fill="#DFC37B" fillOpacity="0.75" />

          {/* =============================================================
              GRAND LEFT TEMPLE SUMMIT (x: 345 - 480)
              Majestic multi-tiered Nagara Shikhar with Urushringas
              ============================================================= */}
          {/* Far Left Urushringa 1 */}
          <path d="M 345,360 C 345,320 358,285 368,260 C 378,285 391,320 391,360" />
          <ellipse cx="368" cy="258" rx="4.5" ry="1.8" />
          <circle cx="368" cy="254" r="1.5" fill="#DFC37B" />
          <line x1="368" y1="252" x2="368" y2="240" />

          {/* Mid-Left Urushringa 2 */}
          <path d="M 370,360 C 370,305 385,255 398,220 C 411,255 426,305 426,360" fill="url(#templeShadingGrad)" />
          <line x1="398" y1="220" x2="398" y2="360" strokeWidth="0.6" opacity="0.6" />
          <ellipse cx="398" cy="218" rx="5" ry="2" />
          <line x1="398" y1="216" x2="398" y2="202" />
          <path d="M 398,202 L 398,192 L 410,197 Z" fill="#DFC37B" fillOpacity="0.75" />

          {/* SOARING CENTRAL LEFT SHIKHAR (Peaks at y=170) */}
          <path d="M 395,360 C 395,295 415,225 432,175 C 449,225 469,295 469,360" fill="url(#templeShadingGrad)" strokeWidth="1.1" />
          {/* Vertical Ribs (Ratha fluting) sweeping gracefully to pinnacle */}
          <path d="M 406,355 C 406,298 420,235 432,180" strokeWidth="0.65" opacity="0.7" />
          <line x1="432" y1="175" x2="432" y2="360" strokeWidth="0.75" opacity="0.75" />
          <path d="M 458,355 C 458,298 444,235 432,180" strokeWidth="0.65" opacity="0.7" />
          {/* Horizontal Bhumi moldings */}
          <path d="M 402,330 Q 432,324 462,330" strokeWidth="0.5" />
          <path d="M 410,295 Q 432,290 454,295" strokeWidth="0.5" />
          <path d="M 418,260 Q 432,256 446,260" strokeWidth="0.5" />
          <path d="M 424,220 Q 432,217 440,220" strokeWidth="0.5" />
          {/* Crown Amalaka, Kalash & Grand Dhwaja */}
          <ellipse cx="432" cy="173" rx="7.5" ry="2.8" />
          <ellipse cx="432" cy="168" rx="5" ry="2.2" />
          <circle cx="432" cy="163" r="2.2" fill="#DFC37B" />
          <line x1="432" y1="161" x2="432" y2="140" strokeWidth="1.1" />
          <path d="M 432,140 L 432,125 L 450,132 Z" fill="#DFC37B" fillOpacity="0.85" />

          {/* Mid-Right Urushringa 3 */}
          <path d="M 445,360 C 445,308 460,258 472,225 C 484,258 499,308 499,360" fill="url(#templeShadingGrad)" />
          <ellipse cx="472" cy="223" rx="5" ry="2" />
          <line x1="472" y1="221" x2="472" y2="208" />
          <path d="M 472,208 L 472,198 L 484,203 Z" fill="#DFC37B" fillOpacity="0.7" />

          {/* Far Right Urushringa 4 */}
          <path d="M 475,360 C 475,325 488,290 498,265 C 508,290 521,325 521,360" />
          <ellipse cx="498" cy="263" rx="4.5" ry="1.8" />
          <line x1="498" y1="261" x2="498" y2="250" />

          {/* Stepped Stone Terraces below Grand Summit */}
          <line x1="340" y1="365" x2="525" y2="365" strokeWidth="0.85" />
          <line x1="355" y1="370" x2="510" y2="370" strokeWidth="0.75" />
          <line x1="370" y1="374" x2="495" y2="374" strokeWidth="0.65" />

          {/* Temple Portal Archway */}
          <path d="M 418,360 C 418,342 424,335 432,335 C 440,335 446,342 446,360" />
          <circle cx="432" cy="344" r="2.5" />

          {/* Descending Valley Shrines toward Moon Center (x: 520 - 720) */}
          {/* Medium Shikhar (x: 520 - 580) */}
          <path d="M 520,360 C 520,318 535,275 548,245 C 561,275 576,318 576,360" fill="url(#templeShadingGrad)" />
          <line x1="548" y1="245" x2="548" y2="360" strokeWidth="0.6" opacity="0.65" />
          <ellipse cx="548" cy="243" rx="5" ry="2" />
          <circle cx="548" cy="239" r="1.8" fill="#DFC37B" />
          <line x1="548" y1="237" x2="548" y2="222" />
          <path d="M 548,222 L 548,212 L 560,217 Z" fill="#DFC37B" fillOpacity="0.75" />

          {/* Double Tiered Chhatri Mandapa (x: 575 - 635) */}
          <path d="M 575,360 C 575,335 588,310 600,295 C 612,310 625,335 625,360" />
          <path d="M 584,330 Q 600,324 616,330" />
          <ellipse cx="600" cy="293" rx="4" ry="1.6" />
          <line x1="600" y1="291" x2="600" y2="278" />

          {/* Stepped Ghat Terraces & Stone Steps approaching center */}
          <path d="M 630,360 C 630,340 642,320 652,310 C 662,320 674,340 674,360" />
          <ellipse cx="652" cy="308" rx="3.5" ry="1.5" />
          <line x1="652" y1="306" x2="652" y2="295" />

          <path d="M 678,360 C 678,345 688,332 696,325 C 704,332 714,345 714,360" />
          <ellipse cx="696" cy="323" rx="3" ry="1.2" />
          <line x1="696" y1="321" x2="696" y2="312" />

          {/* Ghat River Stone Stairs (Descends step-by-step) */}
          <path d="M 530,365 L 720,365" strokeWidth="0.8" />
          <path d="M 550,370 L 710,370" strokeWidth="0.7" />
          <path d="M 570,374 L 700,374" strokeWidth="0.6" />


          {/* -------------------------------------------------------------
              RIGHT TEMPLE COMPLEX (x: 880 to 1530)
              Grand Kashi Vishwanath / Manikarnika / Scindia Style Summit
              ------------------------------------------------------------- */}

          {/* Rising Shrines from Valley (x: 880 - 950) */}
          <path d="M 885,360 C 885,342 895,328 904,318 C 913,328 923,342 923,360" />
          <ellipse cx="904" cy="316" rx="3.5" ry="1.4" />
          <line x1="904" y1="314" x2="904" y2="304" />

          <path d="M 920,360 C 920,332 935,305 946,285 C 957,305 972,332 972,360" fill="url(#templeShadingGrad)" />
          <line x1="946" y1="285" x2="946" y2="360" strokeWidth="0.6" opacity="0.6" />
          <ellipse cx="946" cy="283" rx="4.5" ry="1.8" />
          <line x1="946" y1="281" x2="946" y2="268" />
          <path d="M 946,268 L 946,258 L 956,263 Z" fill="#DFC37B" fillOpacity="0.75" />

          {/* Intermediate Nagara Spire (x: 960 - 1030) */}
          <path d="M 965,360 C 965,315 982,268 996,230 C 1010,268 1027,315 1027,360" fill="url(#templeShadingGrad)" />
          <line x1="996" y1="230" x2="996" y2="360" strokeWidth="0.65" opacity="0.7" />
          <ellipse cx="996" cy="228" rx="5" ry="2" />
          <circle cx="996" cy="224" r="1.8" fill="#DFC37B" />
          <line x1="996" y1="222" x2="996" y2="206" />
          <path d="M 996,206 L 996,194 L 1009,200 Z" fill="#DFC37B" fillOpacity="0.8" />

          {/* =============================================================
              GRAND KASHI VISHWANATH MASTER SUMMIT (x: 1010 - 1170)
              The soaring centerpiece of the right bank (Peaks at y=150)
              ============================================================= */}
          {/* Subsidiary Left Urushringa A */}
          <path d="M 1015,360 C 1015,318 1030,275 1042,240 C 1054,275 1069,318 1069,360" />
          <ellipse cx="1042" cy="238" rx="4.5" ry="1.8" />
          <line x1="1042" y1="236" x2="1042" y2="222" />

          {/* Subsidiary Left Urushringa B (Taller) */}
          <path d="M 1040,360 C 1040,298 1058,240 1072,198 C 1086,240 1104,298 1104,360" fill="url(#templeShadingGrad)" />
          <line x1="1072" y1="198" x2="1072" y2="360" strokeWidth="0.65" opacity="0.65" />
          <ellipse cx="1072" cy="196" rx="5.5" ry="2.2" />
          <line x1="1072" y1="194" x2="1072" y2="178" />
          <path d="M 1072,178 L 1072,166 L 1085,172 Z" fill="#DFC37B" fillOpacity="0.8" />

          {/* SOARING MAIN GOLDEN SPIRE (Peaks at y=150) */}
          <path d="M 1068,360 C 1068,285 1090,210 1110,152 C 1130,210 1152,285 1152,360" fill="url(#templeShadingGrad)" strokeWidth="1.2" />
          {/* Vertical Ribs (Ratha Pagas) curving gracefully inwards */}
          <path d="M 1080,355 C 1080,290 1096,220 1110,158" strokeWidth="0.7" opacity="0.7" />
          <line x1="1110" y1="152" x2="1110" y2="360" strokeWidth="0.8" opacity="0.8" />
          <path d="M 1140,355 C 1140,290 1124,220 1110,158" strokeWidth="0.7" opacity="0.7" />
          {/* Horizontal Bhumi Tiers */}
          <path d="M 1076,325 Q 1110,318 1144,325" strokeWidth="0.55" />
          <path d="M 1086,285 Q 1110,278 1134,285" strokeWidth="0.55" />
          <path d="M 1094,245 Q 1110,240 1126,245" strokeWidth="0.55" />
          <path d="M 1102,200 Q 1110,196 1118,200" strokeWidth="0.5" />
          {/* Crown Amalaka, Kalash & Sacred Temple Flag */}
          <ellipse cx="1110" cy="150" rx="8" ry="3" />
          <ellipse cx="1110" cy="144" rx="5.5" ry="2.2" />
          <circle cx="1110" cy="139" r="2.5" fill="#DFC37B" />
          <line x1="1110" y1="137" x2="1110" y2="112" strokeWidth="1.15" />
          <path d="M 1110,112 L 1110,96 L 1130,104 Z" fill="#DFC37B" fillOpacity="0.85" />

          {/* Subsidiary Right Urushringa B */}
          <path d="M 1125,360 C 1125,300 1142,242 1156,202 C 1170,242 1187,300 1187,360" fill="url(#templeShadingGrad)" />
          <line x1="1156" y1="202" x2="1156" y2="360" strokeWidth="0.65" opacity="0.65" />
          <ellipse cx="1156" cy="200" rx="5.5" ry="2.2" />
          <line x1="1156" y1="198" x2="1156" y2="182" />
          <path d="M 1156,182 L 1156,170 L 1169,176 Z" fill="#DFC37B" fillOpacity="0.8" />

          {/* Subsidiary Right Urushringa A */}
          <path d="M 1165,360 C 1165,322 1178,280 1190,246 C 1202,280 1215,322 1215,360" />
          <ellipse cx="1190" cy="244" rx="4.5" ry="1.8" />
          <line x1="1190" y1="242" x2="1190" y2="230" />

          {/* Sanctum Arched Entrance & Stepped Landing */}
          <path d="M 1095,360 C 1095,340 1102,330 1110,330 C 1118,330 1125,340 1125,360" />
          <circle cx="1110" cy="340" r="2.5" />
          <line x1="1020" y1="365" x2="1200" y2="365" strokeWidth="0.85" />
          <line x1="1040" y1="370" x2="1185" y2="370" strokeWidth="0.75" />
          <line x1="1060" y1="374" x2="1165" y2="374" strokeWidth="0.65" />

          {/* Second Right Complex: Manikarnika / Scindia Style (x: 1200 - 1340) */}
          {/* Shikhar 1 */}
          <path d="M 1210,360 C 1210,312 1226,262 1240,225 C 1254,262 1270,312 1270,360" fill="url(#templeShadingGrad)" />
          <line x1="1240" y1="225" x2="1240" y2="360" strokeWidth="0.6" opacity="0.6" />
          <ellipse cx="1240" cy="223" rx="5" ry="2" />
          <circle cx="1240" cy="219" r="1.8" fill="#DFC37B" />
          <line x1="1240" y1="217" x2="1240" y2="202" />
          <path d="M 1240,202 L 1240,192 L 1252,197 Z" fill="#DFC37B" fillOpacity="0.75" />

          {/* Chhatri & Pavilions (x: 1265 - 1320) */}
          <line x1="1275" y1="360" x2="1275" y2="325" />
          <line x1="1295" y1="360" x2="1295" y2="325" />
          <line x1="1315" y1="360" x2="1315" y2="325" />
          <path d="M 1270,325 Q 1295,318 1320,325" />
          <path d="M 1275,325 C 1275,300 1285,282 1295,275 C 1305,282 1315,300 1315,325" />
          <ellipse cx="1295" cy="273" rx="4" ry="1.5" />
          <line x1="1295" y1="271" x2="1295" y2="258" />
          <path d="M 1295,258 L 1295,250 L 1304,254 Z" fill="#DFC37B" fillOpacity="0.75" />

          {/* Stepped Ghat Haveli Facade (x: 1320 - 1420) */}
          <path d="M 1325,360 C 1325,320 1340,280 1352,250 C 1364,280 1379,320 1379,360" />
          <ellipse cx="1352" cy="248" rx="4.5" ry="1.8" />
          <line x1="1352" y1="246" x2="1352" y2="232" />
          <path d="M 1352,232 L 1352,222 L 1362,227 Z" fill="#DFC37B" fillOpacity="0.75" />

          <path d="M 1375,360 C 1375,330 1388,298 1398,272 C 1408,298 1421,330 1421,360" />
          <ellipse cx="1398" cy="270" rx="4" ry="1.6" />
          <line x1="1398" y1="268" x2="1398" y2="256" />

          {/* Far Right Shrines & Steps (x: 1420 - 1530) */}
          <path d="M 1420,360 C 1420,335 1432,310 1442,295 C 1452,310 1464,335 1464,360" />
          <ellipse cx="1442" cy="293" rx="3.5" ry="1.4" />
          <line x1="1442" y1="291" x2="1442" y2="280" />

          <path d="M 1460,360 C 1460,342 1470,325 1480,312 C 1490,325 1500,342 1500,360" />
          <ellipse cx="1480" cy="310" rx="3" ry="1.2" />
          <line x1="1480" y1="308" x2="1480" y2="298" />

          <path d="M 1495,360 C 1495,348 1505,335 1514,325 C 1523,335 1533,348 1533,360" />
          <ellipse cx="1514" cy="323" rx="2.5" ry="1.0" />
          <line x1="1514" y1="321" x2="1514" y2="312" />

          {/* Right Ghat Stone Steps */}
          <line x1="1220" y1="365" x2="1530" y2="365" strokeWidth="0.8" />
          <line x1="1240" y1="370" x2="1510" y2="370" strokeWidth="0.7" />
          <line x1="1260" y1="374" x2="1490" y2="374" strokeWidth="0.6" />
        </g>


        {/* =================================================================
            4. HORIZONTAL GANGA RIVER WATERLINE (GHAT LANDING)
            The clean, sharp horizon where stone ghat stairs meet the holy river
            ================================================================= */}
        <line
          x1="0"
          y1="365"
          x2="1600"
          y2="365"
          stroke="#DFC37B"
          strokeWidth="1.4"
          opacity="0.85"
        />


        {/* =================================================================
            5. TRADITIONAL BANARAS WOODEN BOATS (NAUKA & BAJRA)
            Handcrafted boat sketches with hull curves, cabin canopies, oars,
            plank lines, bow lanterns and delicate water reflections
            ================================================================= */}
        {/* Boat 1 (Far Left: x=250, y=390) */}
        <g className="kashi-boat boat-float-1" stroke="#DFC37B" strokeWidth="1.1" fill="none">
          <path d="M 210,385 Q 250,404 290,404 Q 330,404 370,385 Q 320,392 290,392 Q 260,392 210,385 Z" fill="#DFC37B" fillOpacity="0.14" />
          <path d="M 270,385 L 270,370 L 315,370 L 315,385" />
          <path d="M 265,370 Q 292,363 320,370" />
          <line x1="255" y1="380" x2="235" y2="408" />
          <line x1="230" y1="410" x2="350" y2="410" strokeDasharray="4 3" opacity="0.35" />
        </g>

        {/* Boat 2 (Center-Left: x=520, y=395) */}
        <g className="kashi-boat boat-float-2" stroke="#DFC37B" strokeWidth="1.1" fill="none">
          <path d="M 480,390 Q 520,408 560,408 Q 600,408 640,390 Q 590,397 560,397 Q 530,397 480,390 Z" fill="#DFC37B" fillOpacity="0.16" />
          <path d="M 535,390 L 535,374 L 585,374 L 585,390" />
          <path d="M 530,374 Q 560,367 590,374" />
          <circle cx="550" cy="382" r="2.2" />
          <circle cx="570" cy="382" r="2.2" />
          <line x1="515" y1="385" x2="495" y2="412" />
          <line x1="500" y1="414" x2="620" y2="414" strokeDasharray="5 3" opacity="0.35" />
        </g>

        {/* Boat 3 (Small Skiff near center: x=650, y=408) */}
        <g className="kashi-boat boat-float-3" stroke="#DFC37B" strokeWidth="1.0" fill="none">
          <path d="M 630,405 Q 652,416 675,416 Q 698,416 720,405 Q 685,410 675,410 Q 665,410 630,405 Z" fill="#DFC37B" fillOpacity="0.12" />
          <line x1="660" y1="405" x2="660" y2="395" />
          <line x1="685" y1="405" x2="685" y2="395" />
          <line x1="655" y1="395" x2="690" y2="395" />
          <line x1="645" y1="422" x2="705" y2="422" strokeDasharray="3 3" opacity="0.3" />
        </g>

        {/* Boat 4 (Grand Bajra Boat Directly Under the Moon: x=800, y=412) */}
        <g className="kashi-boat boat-float-center" stroke="#FDE293" strokeWidth="1.25" fill="none">
          <path d="M 750,405 Q 795,424 840,424 Q 885,424 930,405 Q 875,413 840,413 Q 805,413 750,405 Z" fill="#F4A836" fillOpacity="0.22" />
          {/* Regal Cabin & Mast */}
          <path d="M 805,405 L 805,385 L 875,385 L 875,405" />
          <path d="M 798,385 Q 840,376 882,385" />
          <line x1="840" y1="376" x2="840" y2="360" />
          {/* Arched Cabin Windows */}
          <path d="M 820,397 Q 827,390 834,397" />
          <path d="M 846,397 Q 853,390 860,397" />
          {/* Bow Lamp Diya with Warm Glow */}
          <circle cx="925" cy="401" r="3" fill="#FFF8E7" className="kashi-boat-diya" />
          <circle cx="925" cy="401" r="6" fill="#F4A836" opacity="0.4" />
          <line x1="785" y1="400" x2="760" y2="432" />
          {/* Water reflection */}
          <line x1="770" y1="430" x2="910" y2="430" stroke="#F4A836" strokeWidth="1.1" strokeDasharray="6 3" opacity="0.5" />
          <line x1="790" y1="436" x2="890" y2="436" stroke="#F4A836" strokeWidth="0.9" strokeDasharray="4 3" opacity="0.35" />
        </g>

        {/* Boat 5 (Center-Right: x=1050, y=398) */}
        <g className="kashi-boat boat-float-4" stroke="#DFC37B" strokeWidth="1.1" fill="none">
          <path d="M 1010,392 Q 1050,410 1090,410 Q 1130,410 1170,392 Q 1120,399 1090,399 Q 1060,399 1010,392 Z" fill="#DFC37B" fillOpacity="0.16" />
          <path d="M 1060,392 L 1060,378 L 1115,378 L 1115,392" />
          <path d="M 1055,378 Q 1088,372 1120,378" />
          <circle cx="1078" cy="385" r="2" />
          <circle cx="1098" cy="385" r="2" />
          <line x1="1035" y1="416" x2="1145" y2="416" strokeDasharray="4 3" opacity="0.35" />
        </g>

        {/* Boat 6 (Far Right: x=1280, y=394) */}
        <g className="kashi-boat boat-float-5" stroke="#DFC37B" strokeWidth="1.0" fill="none">
          <path d="M 1245,390 Q 1280,406 1315,406 Q 1350,406 1385,390 Q 1340,396 1315,396 Q 1290,396 1245,390 Z" fill="#DFC37B" fillOpacity="0.14" />
          <path d="M 1290,390 L 1290,378 L 1335,378 L 1335,390" />
          <line x1="1265" y1="412" x2="1365" y2="412" strokeDasharray="4 3" opacity="0.3" />
        </g>

        {/* Boat 7 (Far Right Skiff: x=1420, y=425) */}
        <g className="kashi-boat boat-float-2" stroke="#DFC37B" strokeWidth="0.95" fill="none">
          <path d="M 1400,420 Q 1420,430 1440,430 Q 1460,430 1480,420 Q 1450,424 1440,424 Q 1430,424 1400,420 Z" fill="#DFC37B" fillOpacity="0.12" />
          <line x1="1430" y1="420" x2="1430" y2="412" />
          <line x1="1415" y1="435" x2="1465" y2="435" strokeDasharray="3 2" opacity="0.25" />
        </g>


        {/* =================================================================
            6. SHIMMERING RIVER RIPPLES & MOONLIGHT GOLD REFLECTION COLUMN
            Fine horizontal sketch lines across Maa Ganga, with radiant moon column
            ================================================================= */}
        <g className="kashi-river-ripples" stroke="#DFC37B" strokeWidth="0.95" fill="none" opacity="0.5">
          {/* Vertical Shimmer Column directly beneath the Moon */}
          <line x1="770" y1="375" x2="830" y2="375" stroke="#F4A836" strokeWidth="1.4" opacity="0.8" />
          <line x1="750" y1="384" x2="850" y2="384" stroke="#F4A836" strokeWidth="1.3" opacity="0.75" />
          <line x1="780" y1="394" x2="820" y2="394" stroke="#F4A836" strokeWidth="1.2" opacity="0.7" />
          <line x1="760" y1="442" x2="840" y2="442" stroke="#F4A836" strokeWidth="1.2" opacity="0.65" />
          <line x1="775" y1="455" x2="825" y2="455" stroke="#F4A836" strokeWidth="1.1" opacity="0.55" />
          <line x1="785" y1="468" x2="815" y2="468" stroke="#F4A836" strokeWidth="1.0" opacity="0.45" />

          {/* Lateral Sketch Ripples across the river panorama */}
          <line x1="60" y1="380" x2="180" y2="380" strokeDasharray="7 5" />
          <line x1="320" y1="388" x2="430" y2="388" strokeDasharray="9 6" />
          <line x1="580" y1="382" x2="690" y2="382" strokeDasharray="10 6" />
          <line x1="910" y1="384" x2="1020" y2="384" strokeDasharray="8 5" />
          <line x1="1180" y1="386" x2="1290" y2="386" strokeDasharray="9 6" />
          <line x1="1410" y1="380" x2="1520" y2="380" strokeDasharray="7 4" />

          <line x1="120" y1="425" x2="260" y2="425" strokeDasharray="10 8" opacity="0.35" />
          <line x1="360" y1="440" x2="520" y2="440" strokeDasharray="12 8" opacity="0.35" />
          <line x1="610" y1="455" x2="740" y2="455" strokeDasharray="14 9" opacity="0.4" />
          <line x1="860" y1="450" x2="990" y2="450" strokeDasharray="13 9" opacity="0.4" />
          <line x1="1070" y1="435" x2="1230" y2="435" strokeDasharray="11 7" opacity="0.35" />
          <line x1="1310" y1="452" x2="1460" y2="452" strokeDasharray="8 6" opacity="0.3" />
        </g>

      </svg>
    </div>
  );
}
