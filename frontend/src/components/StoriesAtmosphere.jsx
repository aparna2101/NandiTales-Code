import React, { useEffect, useRef } from 'react';

/**
 * STORIES LIVING ATMOSPHERE (Photorealistic 3D Sky Lanterns & Dev Deepawali Celebrations)
 * Modeled strictly after authentic Akash Deep (Diwali Sky Paper Candle Lanterns)
 * featuring:
 *  - 3D curved paper dome silhouette with realistic inverted-bell ballooning
 *  - 4 distinct vertical paper gore panels with individual volume lighting & creases
 *  - Lower bamboo aperture ring viewed from underneath in perspective
 *  - Suspended square wax fuel burner tablet with cross-wire struts
 *  - Luminous white-hot candle flame with golden atmospheric halo
 *  - Aerodynamic wind tilt & gentle floating sway physics
 *  - Dev Deepawali golden festive fireworks bursts & glittering spark showers
 */
export default function StoriesAtmosphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = 0;
    let height = 0;

    // Use ResizeObserver for accurate real-time canvas dimensions
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          width = canvas.width = w;
          height = canvas.height = h;
        }
      }
    });
    resizeObserver.observe(canvas);

    // Initial fallback dimensions
    const rect = canvas.getBoundingClientRect();
    width = canvas.width = rect.width || window.innerWidth;
    height = canvas.height = rect.height || 900;

    // --- 1. SKY LANTERNS DATA ---
    let lanterns = [];

    const createLantern = (initialSpread = false) => {
      // 3 tiers of depth: Foreground, Midground, Distant Background
      const depthRoll = Math.random();
      let tier = 'mid';
      let w = 34;

      if (depthRoll > 0.65) {
        tier = 'fore';
        w = 42 + Math.random() * 14; // 42px - 56px wide (crisp & proportional)
      } else if (depthRoll > 0.25) {
        tier = 'mid';
        w = 28 + Math.random() * 12; // 28px - 40px wide
      } else {
        tier = 'back';
        w = 16 + Math.random() * 10; // 16px - 26px wide
      }

      const h = w * 1.32;
      const speedY = tier === 'fore' ? 0.45 + Math.random() * 0.28 : tier === 'mid' ? 0.32 + Math.random() * 0.22 : 0.20 + Math.random() * 0.15;

      // Base aerodynamic tilt angle (natural lean like reference photo)
      const baseTilt = 0.10 + (Math.random() - 0.4) * 0.12;

      // Frame the section: spawn mostly in the open sky wings (left & right)
      const wingRoll = Math.random();
      let posX;
      if (wingRoll < 0.45) {
        posX = width * 0.02 + Math.random() * (width * 0.28); // Left sky wing
      } else if (wingRoll < 0.90) {
        posX = width * 0.70 + Math.random() * (width * 0.28); // Right sky wing
      } else {
        posX = width * 0.32 + Math.random() * (width * 0.36); // Center background
      }

      return {
        id: Math.random(),
        tier,
        w,
        h,
        x: posX,
        y: initialSpread ? Math.random() * (height * 0.95) : height + h + 15,
        speedY,
        speedX: (Math.random() - 0.45) * 0.22,
        baseTilt,
        swayPhase: Math.random() * Math.PI * 2,
        swayFreq: 0.014 + Math.random() * 0.008,
        swayAmp: tier === 'fore' ? 0.07 : 0.04,
        baseAlpha: tier === 'back' ? 0.75 : 0.96,
        alpha: tier === 'back' ? 0.75 : 0.96,
        flickerSeed: Math.random() * 100
      };
    };

    // Pre-seed screen with beautiful floating lanterns
    for (let i = 0; i < 9; i++) {
      lanterns.push(createLantern(true));
    }

    // --- 2. PHOTOREALISTIC 3D SKY LANTERN RENDERER ---
    const drawRealisticSkyLantern = (l, frame) => {
      const sway = Math.sin(frame * l.swayFreq + l.swayPhase);
      const curTilt = l.baseTilt + sway * l.swayAmp;
      const flicker = Math.sin(frame * 0.24 + l.flickerSeed) * 0.14;
      const alpha = l.alpha;

      const W = l.w;
      const H = l.h;
      const hw = W * 0.5;
      const bottomW = W * 0.23; // half-width of bottom aperture
      const bottomH = H * 0.075; // vertical radius of bottom ellipse

      ctx.save();
      ctx.translate(l.x, l.y);
      ctx.rotate(curTilt);

      // A. Ambient Warm Candle Aura (Simulates night-sky glow cast by lantern)
      const auraRadius = W * 1.35;
      const aura = ctx.createRadialGradient(0, H * 0.55, W * 0.15, 0, H * 0.55, auraRadius);
      aura.addColorStop(0, `rgba(255, 180, 40, ${0.42 * alpha})`);
      aura.addColorStop(0.5, `rgba(235, 100, 15, ${0.16 * alpha})`);
      aura.addColorStop(1, 'rgba(215, 70, 10, 0)');
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(0, H * 0.55, auraRadius, 0, Math.PI * 2);
      ctx.fill();

      // B. 3D Main Outer Silhouette Path
      const traceOuterBalloon = () => {
        ctx.beginPath();
        // Top dome apex
        ctx.moveTo(0, 0);
        // Top right shoulder to maximum bulge
        ctx.bezierCurveTo(hw * 0.65, 0, hw, H * 0.18, hw, H * 0.38);
        // Right side down to bottom aperture right rim
        ctx.bezierCurveTo(hw, H * 0.68, bottomW * 1.3, H * 0.92, bottomW, H);
        // Bottom aperture front arc
        ctx.bezierCurveTo(bottomW * 0.5, H + bottomH * 0.9, -bottomW * 0.5, H + bottomH * 0.9, -bottomW, H);
        // Left side up from bottom aperture left rim
        ctx.bezierCurveTo(-bottomW * 1.3, H * 0.92, -hw, H * 0.68, -hw, H * 0.38);
        // Left shoulder to top dome apex
        ctx.bezierCurveTo(-hw, H * 0.18, -hw * 0.65, 0, 0, 0);
        ctx.closePath();
      };

      // Base vibrant festive paper gradient (Terracotta Red at top & edges to golden amber at base)
      traceOuterBalloon();
      const bodyGrad = ctx.createLinearGradient(0, 0, 0, H);
      bodyGrad.addColorStop(0, `rgba(195, 42, 10, ${alpha})`);     // Deep terracotta crown
      bodyGrad.addColorStop(0.25, `rgba(224, 72, 14, ${alpha})`);   // Saffron red
      bodyGrad.addColorStop(0.62, `rgba(250, 140, 18, ${alpha})`);  // Luminous festive orange
      bodyGrad.addColorStop(0.92, `rgba(255, 195, 45, ${alpha})`);  // Radiant golden glow near flame
      bodyGrad.addColorStop(1.0, `rgba(255, 225, 95, ${alpha})`);   // Bright illuminated base rim
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // C. 3D PANEL SEGMENTS & CREASES (4 Vertical Paper Gores as in Reference Photo)
      // Seam 1 (left outer-mid), Seam 2 (center), Seam 3 (right outer-mid)
      const seam1TopX = -hw * 0.22, seam1BulgeX = -hw * 0.46, seam1BotX = -bottomW * 0.44;
      const seam2TopX = 0,         seam2BulgeX = hw * 0.04,  seam2BotX = bottomW * 0.08;
      const seam3TopX = hw * 0.22,  seam3BulgeX = hw * 0.52,  seam3BotX = bottomW * 0.54;

      // Draw subtle cylindrical shading for each panel to create palpable 3D fullness
      // Panel 1: Far Left (curves into shade)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-hw * 0.65, 0, -hw, H * 0.18, -hw, H * 0.38);
      ctx.bezierCurveTo(-hw, H * 0.68, -bottomW * 1.3, H * 0.92, -bottomW, H);
      ctx.lineTo(seam1BotX, H);
      ctx.bezierCurveTo(-bottomW * 0.7, H * 0.92, seam1BulgeX, H * 0.68, seam1BulgeX, H * 0.38);
      ctx.bezierCurveTo(seam1BulgeX, H * 0.18, seam1TopX, 0, 0, 0);
      ctx.closePath();
      const p1Grad = ctx.createLinearGradient(-hw, H * 0.38, seam1BulgeX, H * 0.38);
      p1Grad.addColorStop(0, `rgba(145, 28, 5, ${0.45 * alpha})`);
      p1Grad.addColorStop(1, 'rgba(185, 45, 10, 0.05)');
      ctx.fillStyle = p1Grad;
      ctx.fill();
      ctx.restore();

      // Panel 2 & 3: Front Facing (Luminous central highlight cast by internal candle)
      const centerGlow = ctx.createRadialGradient(
        seam2BulgeX * 0.8, H * 0.62, W * 0.05,
        seam2BulgeX * 0.8, H * 0.55, W * 0.48
      );
      centerGlow.addColorStop(0, `rgba(255, 235, 140, ${(0.32 + flicker * 0.15) * alpha})`);
      centerGlow.addColorStop(0.55, `rgba(255, 165, 30, ${(0.18 + flicker * 0.08) * alpha})`);
      centerGlow.addColorStop(1, 'rgba(215, 65, 10, 0)');
      traceOuterBalloon();
      ctx.fillStyle = centerGlow;
      ctx.fill();

      // Panel 4: Far Right (Curving away to the right)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(hw * 0.65, 0, hw, H * 0.18, hw, H * 0.38);
      ctx.bezierCurveTo(hw, H * 0.68, bottomW * 1.3, H * 0.92, bottomW, H);
      ctx.lineTo(seam3BotX, H);
      ctx.bezierCurveTo(bottomW * 0.7, H * 0.92, seam3BulgeX, H * 0.68, seam3BulgeX, H * 0.38);
      ctx.bezierCurveTo(seam3BulgeX, H * 0.18, seam3TopX, 0, 0, 0);
      ctx.closePath();
      const p4Grad = ctx.createLinearGradient(seam3BulgeX, H * 0.38, hw, H * 0.38);
      p4Grad.addColorStop(0, 'rgba(200, 60, 10, 0.05)');
      p4Grad.addColorStop(1, `rgba(140, 25, 5, ${0.42 * alpha})`);
      ctx.fillStyle = p4Grad;
      ctx.fill();
      ctx.restore();

      // D. Vertical Crease Seams (The distinct lines dividing the panels)
      ctx.save();
      const seamLineWidth = Math.max(0.85, W * 0.016);
      ctx.lineWidth = seamLineWidth;

      // Dark crease line
      ctx.strokeStyle = `rgba(125, 25, 5, ${0.48 * alpha})`;

      // Seam 1 line
      ctx.beginPath();
      ctx.moveTo(seam1TopX, 0);
      ctx.bezierCurveTo(seam1TopX, H * 0.15, seam1BulgeX, H * 0.28, seam1BulgeX, H * 0.42);
      ctx.bezierCurveTo(seam1BulgeX, H * 0.65, seam1BotX * 1.1, H * 0.88, seam1BotX, H);
      ctx.stroke();

      // Seam 2 line (center)
      ctx.beginPath();
      ctx.moveTo(seam2TopX, 0);
      ctx.bezierCurveTo(seam2TopX, H * 0.15, seam2BulgeX, H * 0.28, seam2BulgeX, H * 0.42);
      ctx.bezierCurveTo(seam2BulgeX, H * 0.65, seam2BotX * 1.1, H * 0.88, seam2BotX, H);
      ctx.stroke();

      // Seam 3 line
      ctx.beginPath();
      ctx.moveTo(seam3TopX, 0);
      ctx.bezierCurveTo(seam3TopX, H * 0.15, seam3BulgeX, H * 0.28, seam3BulgeX, H * 0.42);
      ctx.bezierCurveTo(seam3BulgeX, H * 0.65, seam3BotX * 1.1, H * 0.88, seam3BotX, H);
      ctx.stroke();

      // Highlight adjacent to seams for crisp 3D fold definition
      ctx.strokeStyle = `rgba(255, 220, 130, ${0.28 * alpha})`;
      ctx.lineWidth = seamLineWidth * 0.7;

      ctx.beginPath();
      ctx.moveTo(seam1TopX + 1, 0);
      ctx.bezierCurveTo(seam1TopX + 1, H * 0.15, seam1BulgeX + 1, H * 0.28, seam1BulgeX + 1, H * 0.42);
      ctx.bezierCurveTo(seam1BulgeX + 1, H * 0.65, seam1BotX + 1, H * 0.88, seam1BotX + 1, H);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(seam2TopX + 1, 0);
      ctx.bezierCurveTo(seam2TopX + 1, H * 0.15, seam2BulgeX + 1, H * 0.28, seam2BulgeX + 1, H * 0.42);
      ctx.bezierCurveTo(seam2BulgeX + 1, H * 0.65, seam2BotX + 1, H * 0.88, seam2BotX + 1, H);
      ctx.stroke();
      ctx.restore();

      // E. BOTTOM APERTURE & ILLUMINATED INTERIOR CHAMBER
      // Viewed from underneath: oval ellipse opening
      const ringY = H;
      const ringRX = bottomW;
      const ringRY = bottomH;

      // 1. Interior cavity chamber glow (Looking up inside the paper balloon)
      const interiorGrad = ctx.createRadialGradient(
        0, ringY - ringRY * 0.4, ringRX * 0.1,
        0, ringY, ringRX
      );
      interiorGrad.addColorStop(0, `rgba(255, 255, 225, ${alpha})`);      // White-hot core
      interiorGrad.addColorStop(0.35, `rgba(255, 215, 60, ${alpha * 0.98})`); // Golden warm light
      interiorGrad.addColorStop(0.72, `rgba(240, 130, 20, ${alpha * 0.92})`); // Amber glow
      interiorGrad.addColorStop(1, `rgba(180, 50, 10, ${alpha * 0.85})`);    // Rim border

      ctx.fillStyle = interiorGrad;
      ctx.beginPath();
      ctx.ellipse(0, ringY, ringRX, ringRY, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Bamboo ring outer rim (Sturdy natural hoop)
      ctx.strokeStyle = `rgba(90, 28, 6, ${alpha * 0.92})`;
      ctx.lineWidth = Math.max(1.2, W * 0.035);
      ctx.stroke();

      // 3. Cross wire suspension struts
      ctx.strokeStyle = `rgba(60, 20, 5, ${alpha * 0.65})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(-ringRX * 0.85, ringY);
      ctx.lineTo(ringRX * 0.85, ringY);
      ctx.moveTo(0, ringY - ringRY * 0.85);
      ctx.lineTo(0, ringY + ringRY * 0.85);
      ctx.stroke();

      // 4. Square Wax Fuel Burner (Dark diamond tablet in the center, as in reference)
      const burnerSize = W * 0.085;
      ctx.save();
      ctx.translate(0, ringY);
      ctx.rotate(Math.PI / 4); // Diamond angle
      ctx.fillStyle = `rgba(45, 18, 6, ${alpha * 0.95})`;
      ctx.fillRect(-burnerSize * 0.5, -burnerSize * 0.5, burnerSize, burnerSize);
      ctx.restore();

      // 5. RADIANT CANDLE FLAME (Flickering vividly on top of the burner)
      const flameH = (H * 0.13) * (1 + flicker);
      const flameW = W * 0.065;
      const flameBaseY = ringY - ringRY * 0.15;

      // Outer Golden Fire Halo
      ctx.save();
      ctx.shadowColor = '#FFD700';
      ctx.shadowBlur = 10;
      ctx.fillStyle = `rgba(255, 195, 35, ${alpha * 0.95})`;
      ctx.beginPath();
      ctx.ellipse(0, flameBaseY - flameH * 0.45, flameW * 1.35, flameH, 0, 0, Math.PI * 2);
      ctx.fill();

      // White-Hot Inner Flame Core
      ctx.fillStyle = `rgba(255, 255, 245, ${alpha})`;
      ctx.beginPath();
      ctx.ellipse(0, flameBaseY - flameH * 0.4, flameW * 0.6, flameH * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.restore();
    };

    // --- 3. DEV DEEPAWALI AUTHENTIC GOLDEN & AMBER SPARKLING FIREWORKS ---
    let sparks = [];
    let flashes = []; // Initial burst bloom flash
    let fireworkTimer = 0;

    // Authentic Varanasi Temple Palette (Pure Gold, Warm Amber, Saffron, White-Gold)
    const festiveGoldenColors = [
      '255, 218, 70',  // Royal Kashi Gold
      '255, 185, 45',  // Warm Festive Amber
      '255, 245, 195', // Brilliant White-Gold
      '255, 145, 25',  // Sacred Saffron Flame
      '255, 232, 115', // Champagne Gold
      '255, 255, 240'  // Diamond Twinkle White
    ];

    const triggerFireworkBurst = (customX = null, customY = null) => {
      // Pick positions covering all across the section ('hr trf')
      const zone = Math.random();
      let burstX;
      if (zone < 0.25) {
        burstX = width * 0.04 + Math.random() * (width * 0.22); // Left sky
      } else if (zone < 0.50) {
        burstX = width * 0.26 + Math.random() * (width * 0.22); // Mid-left
      } else if (zone < 0.75) {
        burstX = width * 0.52 + Math.random() * (width * 0.22); // Mid-right
      } else {
        burstX = width * 0.74 + Math.random() * (width * 0.22); // Right sky
      }

      const burstY = height * 0.06 + Math.random() * (height * 0.38);
      const finalX = customX !== null ? customX : burstX;
      const finalY = customY !== null ? customY : burstY;

      const sparkCount = 26 + Math.floor(Math.random() * 14);

      // Add brief golden bloom flash
      flashes.push({
        x: finalX,
        y: finalY,
        color: '255, 220, 85',
        radius: 12 + Math.random() * 14,
        alpha: 0.90,
        decay: 0.12
      });

      // Scatter glittering golden & amber sparks
      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.45;
        const speed = 1.4 + Math.random() * 3.2;
        const color = festiveGoldenColors[Math.floor(Math.random() * festiveGoldenColors.length)];

        sparks.push({
          x: finalX,
          y: finalY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          color,
          size: 1.4 + Math.random() * 2.0,
          alpha: 1,
          decay: 0.016 + Math.random() * 0.015,
          trail: []
        });
      }
    };

    // --- 4. ANIMATION LOOP ---
    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // A. Update and Render Realistic Sky Lanterns
      if (frame % 75 === 0 && lanterns.length < 12) {
        lanterns.push(createLantern(false));
      }

      for (let i = lanterns.length - 1; i >= 0; i--) {
        const l = lanterns[i];
        l.y -= l.speedY;
        const sway = Math.sin(frame * l.swayFreq + l.swayPhase) * 0.32;
        l.x += l.speedX + sway;

        // Lanterns stay 100% normally visible across the entire section.
        // Subtle micro-fade only in the very last 40px at the top section border so no flat cut line appears.
        let altitudeFactor = 1;
        if (l.y < 40) {
          altitudeFactor = Math.max(0, l.y / 40);
        }
        l.alpha = l.baseAlpha * altitudeFactor;

        // Remove once drifted completely past the top
        if (l.y < -l.h || l.alpha <= 0.01) {
          lanterns.splice(i, 1);
          continue;
        }

        drawRealisticSkyLantern(l, frame);
      }

      // B. Update and Render Multi-Color Festive Fireworks & Sparklers
      fireworkTimer++;
      // Trigger bursts actively across the sky (every ~40 to 60 frames)
      if (fireworkTimer > 42) {
        triggerFireworkBurst();
        // 25% chance of a simultaneous double celebration burst elsewhere
        if (Math.random() < 0.28) {
          triggerFireworkBurst();
        }
        fireworkTimer = Math.floor(Math.random() * 15);
      }

      // Render initial burst bloom flashes
      for (let i = flashes.length - 1; i >= 0; i--) {
        const f = flashes[i];
        f.alpha -= f.decay;
        if (f.alpha <= 0) {
          flashes.splice(i, 1);
          continue;
        }

        const flashGrad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius);
        flashGrad.addColorStop(0, `rgba(${f.color}, ${f.alpha})`);
        flashGrad.addColorStop(1, `rgba(${f.color}, 0)`);
        ctx.fillStyle = flashGrad;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render individual trailing sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];

        s.trail.push({ x: s.x, y: s.y, alpha: s.alpha });
        if (s.trail.length > 5) s.trail.shift();

        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.968;
        s.vy *= 0.968;
        s.vy += 0.046; // gentle natural gravity
        s.alpha -= s.decay;

        // Draw glittering trailing spark tail
        for (let t = 0; t < s.trail.length; t++) {
          const pt = s.trail[t];
          const trailAlpha = (t / s.trail.length) * s.alpha * 0.55;
          ctx.fillStyle = `rgba(${s.color}, ${trailAlpha})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, s.size * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw spark head with sparkling twinkle
        const twinkle = Math.sin(frame * 0.38 + i) > 0 ? 1 : 0.65;
        ctx.fillStyle = `rgba(${s.color}, ${Math.max(0, s.alpha * twinkle)})`;
        ctx.shadowColor = `rgba(${s.color}, 0.9)`;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (s.alpha <= 0 || s.y > height) {
          sparks.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="stories-living-celebration-canvas"
      aria-hidden="true"
    />
  );
}
