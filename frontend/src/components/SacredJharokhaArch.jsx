import React from 'react';

/**
 * Royal Kashi Jharokha Arch & Sanctum Gateway Aura
 * Pure SVG Vector Component — Zero raster dependencies.
 * Modeled after the sacred temple sanctums of Varanasi (Kashi Vishwanath, Annapurna, and Ganga Ghat pavilions):
 * - Auspicious Temple Kalash & Diya finial at the pinnacle with radiating divine light
 * - Multi-foil cusped temple arch (Jharokha Toran) with double golden concentric contours
 * - Authentic hanging temple brass bells suspended from ornate scroll brackets
 * - Sacred floral jali fretwork medallions on arch spandrels
 * - Ethereal dawn sanctum warm sunburst glow (Subah-e-Banaras aura)
 * - Sweeping royal paisley filigree wings reaching toward the side botanical motifs
 */
export default function SacredJharokhaArch({ className = '' }) {
  return (
    <svg
      viewBox="0 0 900 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`sacred-jharokha-arch-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Soft Golden Halo Aura behind Title */}
        <radialGradient id="sacredSanctumHalo" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#F5E4B8" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#F9ECD0" stopOpacity="0.32" />
          <stop offset="70%" stopColor="#FAF6EE" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FAF6EE" stopOpacity="0" />
        </radialGradient>

        {/* Polished Kashi Bell-Brass Gradient */}
        <linearGradient id="sanctumGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="30%" stopColor="#E5B842" />
          <stop offset="70%" stopColor="#B58118" />
          <stop offset="100%" stopColor="#6E4C05" />
        </linearGradient>

        {/* Delicate Golden Outlines with Fade-to-Edge */}
        <linearGradient id="archContourGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C59B27" stopOpacity="0" />
          <stop offset="18%" stopColor="#C59B27" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#E6BE4A" stopOpacity="0.75" />
          <stop offset="82%" stopColor="#C59B27" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#C59B27" stopOpacity="0" />
        </linearGradient>

        {/* Dotted Arch Secondary Path */}
        <linearGradient id="archDottedLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B38218" stopOpacity="0" />
          <stop offset="25%" stopColor="#C59B27" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#F0CA60" stopOpacity="0.8" />
          <stop offset="75%" stopColor="#C59B27" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#B38218" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Atmospheric Dawn Sanctum Halo */}
      <ellipse cx="450" cy="160" rx="380" ry="145" fill="url(#sacredSanctumHalo)" />

      {/* Radiating Divine Dawn Rays from Kalash Pinnacle */}
      <g stroke="#D4AF37" strokeOpacity="0.28" strokeWidth="0.9" strokeDasharray="3 3">
        <line x1="450" y1="28" x2="450" y2="4" />
        <line x1="450" y1="28" x2="428" y2="8" />
        <line x1="450" y1="28" x2="472" y2="8" />
        <line x1="450" y1="28" x2="408" y2="18" />
        <line x1="450" y1="28" x2="492" y2="18" />
        <line x1="450" y1="28" x2="390" y2="34" />
        <line x1="450" y1="28" x2="510" y2="34" />
      </g>

      {/* Top Auspicious Kalash & Shikhara Finial */}
      <g transform="translate(450, 32)">
        {/* Crown Jewel */}
        <circle cx="0" cy="-22" r="2.8" fill="url(#sanctumGold)" stroke="#8A6715" strokeWidth="0.6" />
        {/* Shikhara Spire */}
        <path
          d="M 0 -22 Q -4 -12, -2 -6 Q 0 -5, 2 -6 Q 4 -12, 0 -22 Z"
          fill="url(#sanctumGold)"
          stroke="#78550B"
          strokeWidth="0.8"
        />
        {/* Kalash Pot Body */}
        <ellipse cx="0" cy="-1" rx="7" ry="5" fill="url(#sanctumGold)" stroke="#78550B" strokeWidth="0.8" />
        <circle cx="0" cy="-1" r="2" fill="#FFF4BD" />
        {/* Base Ring */}
        <rect x="-6" y="4" width="12" height="2.5" rx="1" fill="url(#sanctumGold)" stroke="#78550B" strokeWidth="0.6" />
        {/* Flanking Mango Leaves (Amra Pallav) */}
        <path d="M -5 -2 Q -12 -6, -9 -11 Q -6 -6, -3 -2" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.6" />
        <path d="M 5 -2 Q 12 -6, 9 -11 Q 6 -6, 3 -2" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.6" />
      </g>

      {/* Main Multi-Foil Cusped Temple Arch (Outer Grand Toran) */}
      <path
        d="M 60 320 L 60 190 
           C 60 160, 115 138, 160 138 
           C 205 138, 235 116, 270 106 
           C 310 94, 345 74, 385 58 
           C 415 46, 435 34, 450 34 
           C 465 34, 485 46, 515 58 
           C 555 74, 590 94, 630 106 
           C 665 116, 695 138, 740 138 
           C 785 138, 840 160, 840 190 
           L 840 320"
        stroke="url(#archContourGold)"
        strokeWidth="1.8"
        fill="none"
      />

      {/* Inner Concentric Beaded Cusped Arch */}
      <path
        d="M 92 320 L 92 196 
           C 92 172, 140 152, 180 152 
           C 220 152, 248 132, 280 122 
           C 318 110, 350 92, 390 76 
           C 418 64, 438 52, 450 52 
           C 462 52, 482 64, 510 76 
           C 550 92, 582 110, 620 122 
           C 652 132, 680 152, 720 152 
           C 760 152, 808 172, 808 196 
           L 808 320"
        stroke="url(#archDottedLine)"
        strokeWidth="1.2"
        strokeDasharray="5 4"
        fill="none"
      />

      {/* Tertiary Delicate Fine Golden Accent Arch */}
      <path
        d="M 125 320 L 125 204 
           C 125 186, 165 168, 200 168 
           C 235 168, 260 148, 292 140 
           C 328 128, 358 112, 396 96 
           C 422 84, 440 74, 450 74 
           C 460 74, 478 84, 504 96 
           C 542 112, 572 128, 608 140 
           C 640 148, 665 168, 700 168 
           C 735 168, 775 186, 775 204 
           L 775 320"
        stroke="url(#archContourGold)"
        strokeWidth="0.8"
        strokeOpacity="0.4"
        fill="none"
      />

      {/* Left Hanging Temple Brass Bell (Suspended from Arch Shoulder) */}
      <g transform="translate(270, 106)">
        {/* Suspension Chain with Sacred Beads */}
        <line x1="0" y1="0" x2="0" y2="42" stroke="#B58118" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="0" cy="14" r="1.8" fill="url(#sanctumGold)" />
        <circle cx="0" cy="28" r="1.8" fill="url(#sanctumGold)" />
        {/* Bell Dome */}
        <path
          d="M 0 42 C -4 44, -7 47, -8 54 C -9 59, -11 63, -12 65 L 12 65 C 11 63, 9 59, 8 54 C 7 47, 4 44, 0 42 Z"
          fill="url(#sanctumGold)"
          stroke="#78550B"
          strokeWidth="0.8"
        />
        {/* Bell Rim Band */}
        <rect x="-13" y="65" width="26" height="3" rx="1.5" fill="url(#sanctumGold)" stroke="#6E4C05" strokeWidth="0.7" />
        {/* Internal Sound Clapper (Ghanti Lolak) */}
        <path d="M 0 68 L 0 74" stroke="#78550B" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="0" cy="75" r="2.2" fill="#E5B842" stroke="#6E4C05" strokeWidth="0.6" />
        {/* Resonance Wave Sparks */}
        <circle cx="-16" cy="66" r="1" fill="#D4AF37" fillOpacity="0.6" />
        <circle cx="16" cy="66" r="1" fill="#D4AF37" fillOpacity="0.6" />
      </g>

      {/* Right Hanging Temple Brass Bell (Suspended from Arch Shoulder) */}
      <g transform="translate(630, 106)">
        {/* Suspension Chain with Sacred Beads */}
        <line x1="0" y1="0" x2="0" y2="42" stroke="#B58118" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="0" cy="14" r="1.8" fill="url(#sanctumGold)" />
        <circle cx="0" cy="28" r="1.8" fill="url(#sanctumGold)" />
        {/* Bell Dome */}
        <path
          d="M 0 42 C -4 44, -7 47, -8 54 C -9 59, -11 63, -12 65 L 12 65 C 11 63, 9 59, 8 54 C 7 47, 4 44, 0 42 Z"
          fill="url(#sanctumGold)"
          stroke="#78550B"
          strokeWidth="0.8"
        />
        {/* Bell Rim Band */}
        <rect x="-13" y="65" width="26" height="3" rx="1.5" fill="url(#sanctumGold)" stroke="#6E4C05" strokeWidth="0.7" />
        {/* Internal Sound Clapper */}
        <path d="M 0 68 L 0 74" stroke="#78550B" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="0" cy="75" r="2.2" fill="#E5B842" stroke="#6E4C05" strokeWidth="0.6" />
        {/* Resonance Sparks */}
        <circle cx="-16" cy="66" r="1" fill="#D4AF37" fillOpacity="0.6" />
        <circle cx="16" cy="66" r="1" fill="#D4AF37" fillOpacity="0.6" />
      </g>

      {/* Symmetrical Spandrel Rosettes (Sacred 8-Petal Gold Lotus Medallions) */}
      <g transform="translate(205, 115)">
        <circle cx="0" cy="0" r="5" fill="url(#sanctumGold)" stroke="#78550B" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="1.8" fill="#FFF4BD" />
      </g>
      <g transform="translate(695, 115)">
        <circle cx="0" cy="0" r="5" fill="url(#sanctumGold)" stroke="#78550B" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="1.8" fill="#FFF4BD" />
      </g>

      {/* Outer Spandrel Decorative Paisley / Kalka Motifs connecting towards flanks */}
      {/* Left Paisley Flourish */}
      <g transform="translate(145, 128) scale(0.85)">
        <path
          d="M 0 0 C -15 -10, -35 -5, -45 10 C -55 25, -45 45, -25 45 C -5 45, 10 30, 5 15 C 2 5, -8 4, -12 10"
          stroke="url(#archContourGold)"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="-25" cy="28" r="2.5" fill="url(#sanctumGold)" />
        <circle cx="-40" cy="18" r="1.5" fill="#D4AF37" />
      </g>

      {/* Right Paisley Flourish */}
      <g transform="translate(755, 128) scale(-0.85, 0.85)">
        <path
          d="M 0 0 C -15 -10, -35 -5, -45 10 C -55 25, -45 45, -25 45 C -5 45, 10 30, 5 15 C 2 5, -8 4, -12 10"
          stroke="url(#archContourGold)"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="-25" cy="28" r="2.5" fill="url(#sanctumGold)" />
        <circle cx="-40" cy="18" r="1.5" fill="#D4AF37" />
      </g>

      {/* Floating Micro-Glimmers (Temple Starlight & Floral Pollen) */}
      <circle cx="360" cy="120" r="1.5" fill="#D4AF37" fillOpacity="0.45" />
      <circle cx="540" cy="120" r="1.5" fill="#D4AF37" fillOpacity="0.45" />
      <circle cx="320" cy="65" r="1.2" fill="#D4AF37" fillOpacity="0.5" />
      <circle cx="580" cy="65" r="1.2" fill="#D4AF37" fillOpacity="0.5" />
      <circle cx="450" cy="95" r="1.6" fill="#F7DF94" fillOpacity="0.6" />
    </svg>
  );
}
