import React, { useEffect, useRef } from 'react';

/**
 * 1. REALISTIC INCENSE SMOKE (Continuous Serpentine Zigzag Ribbon & Particle Waves)
 * Simulates pure sacred sandalwood / temple dhoop smoke wafting gently upwards from the batti.
 */
export function IncenseSmokeEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let phase = 0;
    let frameCount = 0;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 220;
      canvas.height = rect.height || 180;
    };
    updateSize();

    // Particle generator for the batti wick
    const createBattiParticle = () => {
      const originX = canvas.width * 0.42;
      const originY = canvas.height * 0.78;

      return {
        originX,
        originY,
        y: originY,
        x: originX,
        progress: 0,
        speed: 0.007 + Math.random() * 0.004,
        size: 3 + Math.random() * 2,
        maxSize: 18 + Math.random() * 12,
        maxAlpha: 0.45 + Math.random() * 0.15,
        alpha: 0,
        swayPhase: Math.random() * Math.PI * 2,
        spread: (Math.random() - 0.5) * 5,
        type: 'batti'
      };
    };

    // Particle generator for the sticks
    const createStickParticle = () => {
      const originX = canvas.width * (0.64 + Math.random() * 0.22);
      const originY = canvas.height * (0.08 + Math.random() * 0.08);

      return {
        originX,
        originY,
        x: originX,
        y: originY,
        progress: 0,
        speed: 0.012 + Math.random() * 0.006,
        size: 2 + Math.random() * 2,
        maxSize: 12 + Math.random() * 8,
        maxAlpha: 0.35,
        alpha: 0,
        swayPhase: Math.random() * Math.PI * 2,
        spread: (Math.random() - 0.5) * 3,
        type: 'stick'
      };
    };

    const render = () => {
      frameCount++;
      phase += 0.024;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const battiX = w * 0.42;
      const battiY = h * 0.78;

      // 1. Draw Living Continuous Zigzag Serpentine Smoke Ribbon from Batti
      const drawSmokeRibbon = (offsetPhase, strokeW, alpha, waveMultiplier) => {
        ctx.beginPath();
        ctx.moveTo(battiX, battiY);

        for (let y = battiY; y >= -15; y -= 4) {
          const t = (battiY - y) / battiY;
          // Harmonic S-curve zigzag waves:
          const wave1 = Math.sin(t * 7.5 - phase + offsetPhase) * (t * 26 * waveMultiplier);
          const wave2 = Math.sin(t * 15 - phase * 1.8 + offsetPhase) * (t * 10 * waveMultiplier);
          const wave3 = Math.cos(t * 4 - phase * 0.6) * (t * 8);

          const curX = battiX + wave1 + wave2 + wave3 + (t * 8);
          ctx.lineTo(curX, y);
        }

        ctx.strokeStyle = `rgba(255, 252, 245, ${alpha})`;
        ctx.lineWidth = strokeW;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      };

      // Outer soft plume wash
      drawSmokeRibbon(0, 14, 0.12, 1.1);
      // Mid diffuse smoke ribbon
      drawSmokeRibbon(0.3, 7, 0.24, 1.0);
      // Crisp zigzag smoke thread (core strand matching the photo)
      drawSmokeRibbon(0, 2.8, 0.50, 0.95);
      // Secondary curling wisp strand
      drawSmokeRibbon(1.2, 2.0, 0.35, 1.25);

      // 2. Spawn & Update 3D Billowing Smoke Particles along the Zigzag
      if (frameCount % 2 === 0 && particles.length < 50) {
        particles.push(createBattiParticle());
      }
      if (frameCount % 4 === 0 && particles.length < 65) {
        particles.push(createStickParticle());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.speed;

        if (p.type === 'batti') {
          p.y = p.originY - p.progress * (p.originY + 20);
          const t = p.progress;
          const wave = Math.sin(t * 7.5 - phase + p.swayPhase * 0.2) * (t * 26) +
                       Math.sin(t * 15 - phase * 1.8) * (t * 10);
          p.x = p.originX + wave + p.spread + (t * 8);
        } else {
          p.y = p.originY - p.progress * (p.originY + 20);
          const t = p.progress;
          p.x = p.originX + Math.sin(t * 8 - phase * 1.2 + p.swayPhase) * (t * 14) + p.spread;
        }

        p.size += (p.maxSize - p.size) * 0.03;

        // Alpha fade in and fade out
        if (p.progress < 0.15) {
          p.alpha = (p.progress / 0.15) * p.maxAlpha;
        } else {
          p.alpha = (1 - (p.progress - 0.15) / 0.85) * p.maxAlpha;
        }

        // Draw radial smoke puff
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `rgba(255, 252, 246, ${p.alpha * 0.85})`);
        grad.addColorStop(0.45, `rgba(245, 240, 230, ${p.alpha * 0.5})`);
        grad.addColorStop(1, 'rgba(235, 228, 215, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.progress >= 1 || p.y < -15) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', updateSize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className="living-card-fx-layer smoke-layer" aria-hidden="true">
      <canvas ref={canvasRef} className="living-smoke-canvas" />
      {/* Living glowing amber ember on the burning batti wick */}
      <span className="batti-ember-glow" />
    </div>
  );
}

/**
 * 2. REALISTIC DIYA FLAME (Vedic Golden Akhand Jyoti Flame)
 * Dynamic flickering flame with inner core, warm halo, and floating golden embers.
 */
export function DiyaFlameEffect() {
  return (
    <div className="living-card-fx-layer diya-layer" aria-hidden="true">
      {/* Positioned exactly over the diya wick */}
      <div className="living-diya-flame-anchor">
        <div className="flame-aura-halo" />
        <div className="flame-body-wrap">
          <div className="flame-outer" />
          <div className="flame-middle" />
          <div className="flame-inner-core" />
        </div>
        {/* Micro Golden Sparks */}
        <span className="spark spark-1" />
        <span className="spark spark-2" />
        <span className="spark spark-3" />
      </div>
    </div>
  );
}

/**
 * 3. POOJAN KITS LIVING EFFECT (Glowing Diyas, Aarti Sparkles & Gold Shimmer)
 */
export function PoojanKitEffect() {
  return (
    <div className="living-card-fx-layer poojan-layer" aria-hidden="true">
      {/* Diya 1 (Left tall brass lamp flame) */}
      <div className="kit-diya-flame flame-pos-1">
        <div className="flame-mini-halo" />
        <div className="flame-mini-core">
          <div className="flame-mini-inner" />
        </div>
        <span className="kit-spark spark-a" />
      </div>

      {/* Diya 2 (Center-right thali diya flame) */}
      <div className="kit-diya-flame flame-pos-2">
        <div className="flame-mini-halo" />
        <div className="flame-mini-core">
          <div className="flame-mini-inner" />
        </div>
        <span className="kit-spark spark-b" />
      </div>

      {/* Sacred Golden Aarti Shimmer Dust Particles */}
      <div className="aarti-sparkles-wrap">
        <span className="aarti-dot dot-1">✦</span>
        <span className="aarti-dot dot-2">✦</span>
        <span className="aarti-dot dot-3">✦</span>
        <span className="aarti-dot dot-4">✦</span>
        <span className="aarti-dot dot-5">✦</span>
      </div>

      {/* Luxury Gold Shimmer Sweep across the sacred box */}
      <div className="sacred-box-ambience" />
      <div className="sacred-gold-shimmer-sweep" />
    </div>
  );
}

/**
 * 4. SACRED GIFTS LIVING EFFECT (Drifting Temple Flower Petals - Pushpa Vrishti)
 * Floating marigold and rose petals drifting across the sacred hamper.
 */
export function SacredGiftsPetalsEffect() {
  const petals = [
    { id: 1, type: 'marigold', left: '15%', delay: '0s', duration: '6.5s', size: '12px' },
    { id: 2, type: 'rose', left: '38%', delay: '1.8s', duration: '7.2s', size: '10px' },
    { id: 3, type: 'marigold-gold', left: '62%', delay: '0.8s', duration: '5.8s', size: '13px' },
    { id: 4, type: 'rose', left: '82%', delay: '2.5s', duration: '6.8s', size: '9px' },
    { id: 5, type: 'marigold', left: '48%', delay: '3.6s', duration: '7.5s', size: '11px' },
    { id: 6, type: 'marigold-gold', left: '26%', delay: '4.2s', duration: '6.2s', size: '12px' }
  ];

  return (
    <div className="living-card-fx-layer petals-layer" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className={`falling-petal petal-${p.type}`}
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size
          }}
        />
      ))}
    </div>
  );
}

