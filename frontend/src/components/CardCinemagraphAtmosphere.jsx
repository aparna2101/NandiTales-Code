import React, { useEffect, useRef } from 'react';

/**
 * Living Cinemagraph Atmosphere for Featured Product Cards
 * - Card 1 (p-1): Real Incense Smoke & Glowing Embers precisely on the two sticks
 * - Card 2 (p-2): Living Akhand Jyoti Flames placed exactly on the two lotus diya wicks
 * - Card 3 (p-3): 4 Sacred Diya Flames aligned directly onto the 4 diya wicks in the box
 * - Card 4 (p-4): Flowing Ganga River Currents (flowing water waves) + exact floating diya flames on the water (no bubbles)
 */
export default function CardCinemagraphAtmosphere({ productId }) {
  const canvasRef = useRef(null);
  const waterCanvasRef = useRef(null);

  // Incense Smoke Canvas for Card 1 (spawning from both stick tips)
  useEffect(() => {
    if (productId !== 'p-1') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let frame = 0;
    let phase = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();

    const spawnParticle = () => {
      const isStick1 = Math.random() > 0.45;
      const ox = isStick1 
        ? canvas.width * 0.332 + (Math.random() - 0.5) * 2.5
        : canvas.width * 0.378 + (Math.random() - 0.5) * 2.5;
      const oy = isStick1 
        ? canvas.height * 0.310 
        : canvas.height * 0.305;

      return {
        x: ox,
        y: oy,
        originX: ox,
        originY: oy,
        progress: 0,
        speed: 0.0055 + Math.random() * 0.003,
        size: 2.2 + Math.random() * 1.8,
        maxSize: 18 + Math.random() * 7,
        swayAmp: 7 + Math.random() * 8,
        swayFreq: 2.8 + Math.random() * 1.8,
        swayPhase: Math.random() * Math.PI * 2,
        maxAlpha: 0.28 + Math.random() * 0.12
      };
    };

    const render = () => {
      frame++;
      phase += 0.024;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % 5 === 0 && particles.length < 32) {
        particles.push(spawnParticle());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.speed;
        const t = p.progress;

        p.y = p.originY - t * (p.originY + 25);
        const wave = Math.sin(t * p.swayFreq * 2 + phase + p.swayPhase) * (t * p.swayAmp);
        p.x = p.originX + wave;
        const currentSize = p.size + (p.maxSize - p.size) * Math.pow(t, 0.75);

        let alpha = 0;
        if (t < 0.15) {
          alpha = (t / 0.15) * p.maxAlpha;
        } else {
          alpha = (1 - (t - 0.15) / 0.85) * p.maxAlpha;
        }

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize);
        grad.addColorStop(0, `rgba(255, 252, 245, ${alpha})`);
        grad.addColorStop(0.45, `rgba(240, 235, 225, ${alpha * 0.5})`);
        grad.addColorStop(1, 'rgba(235, 230, 220, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();

        if (p.progress >= 1 || p.y < -20) {
          particles.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [productId]);

  // Flowing Ganga River Currents (Pani ki Lehre Canvas) for Card 4 (p-4)
  useEffect(() => {
    if (productId !== 'p-4') return;
    const canvas = waterCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let offset = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();

    // Natural flowing water wave streams across the river surface
    const riverStreams = [
      { yRatio: 0.12, amp: 2.0, freq: 0.038, speed: 0.055, color: 'rgba(255, 235, 160, 0.60)', width: 1.8 },
      { yRatio: 0.28, amp: 2.6, freq: 0.032, speed: 0.065, color: 'rgba(190, 245, 255, 0.55)', width: 2.0 },
      { yRatio: 0.44, amp: 3.2, freq: 0.028, speed: 0.050, color: 'rgba(255, 225, 130, 0.55)', width: 2.2 },
      { yRatio: 0.60, amp: 3.5, freq: 0.024, speed: 0.070, color: 'rgba(210, 248, 255, 0.50)', width: 2.4 },
      { yRatio: 0.76, amp: 3.8, freq: 0.022, speed: 0.058, color: 'rgba(255, 230, 150, 0.55)', width: 2.4 },
      { yRatio: 0.90, amp: 4.2, freq: 0.018, speed: 0.065, color: 'rgba(195, 242, 255, 0.48)', width: 2.0 }
    ];

    const render = () => {
      offset += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Draw flowing river wave currents (Ganga ki flowing lehre)
      riverStreams.forEach((stream) => {
        const baseY = h * stream.yRatio;
        ctx.beginPath();
        ctx.lineWidth = stream.width;
        ctx.strokeStyle = stream.color;

        for (let x = 0; x <= w; x += 3) {
          const y = baseY + Math.sin(x * stream.freq + offset * stream.speed) * stream.amp
                          + Math.cos(x * stream.freq * 0.5 - offset * stream.speed * 0.6) * (stream.amp * 0.5);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [productId]);

  if (productId === 'p-1') {
    return (
      <div className="card-cinemagraph-layer" aria-hidden="true">
        <canvas ref={canvasRef} className="card-smoke-canvas" />
        <div className="incense-ember-glow" style={{ left: '33.2%', top: '31.0%' }}>
          <div className="ember-inner-core" />
          <div className="ember-outer-halo" />
        </div>
        <div className="incense-ember-glow" style={{ left: '37.8%', top: '30.5%' }}>
          <div className="ember-inner-core" />
          <div className="ember-outer-halo" />
        </div>
      </div>
    );
  }

  if (productId === 'p-2') {
    return (
      <div className="card-cinemagraph-layer" aria-hidden="true">
        <div className="card-living-diya diya-p2-flame" style={{ left: '27.0%', top: '67.5%' }}>
          <div className="card-diya-halo" />
          <div className="card-diya-flame-body" />
          <div className="card-diya-flame-core" />
        </div>
        <div className="card-living-diya diya-p2-flame right" style={{ left: '78.8%', top: '67.5%' }}>
          <div className="card-diya-halo" />
          <div className="card-diya-flame-body" />
          <div className="card-diya-flame-core" />
        </div>
      </div>
    );
  }

  if (productId === 'p-3') {
    // Ganga Jal bottle on card p-3 (clean presentation without diya flames)
    return null;
  }

  if (productId === 'p-4') {
    return (
      <div className="card-cinemagraph-layer" aria-hidden="true">
        {/* Living Flowing River Water Canvas (Flowing Ganga Waves) */}
        <canvas ref={waterCanvasRef} className="card-ganga-water-canvas" />

        {/* 1. Devotee Lady's Hand Offering Diya (Exact on Wick: 38.5%, 76.5%) */}
        <div className="floating-ganga-diya diya-hand" style={{ left: '38.5%', top: '76.5%' }}>
          <div className="deepdaan-flame-halo" />
          <div className="deepdaan-flame-body" />
        </div>

        {/* 2. Foreground Main Floating Diya on Water (58.2%, 92.5%) */}
        <div className="floating-ganga-diya diya-float-main" style={{ left: '58.2%', top: '92.5%' }}>
          <div className="deepdaan-flame-halo" />
          <div className="deepdaan-flame-body" />
          <div className="water-reflection-glow" />
        </div>

        {/* 3. Left Floating Diya on Water (45.8%, 89.0%) */}
        <div className="floating-ganga-diya diya-float-left" style={{ left: '45.8%', top: '89.0%' }}>
          <div className="deepdaan-flame-halo" />
          <div className="deepdaan-flame-body" />
          <div className="water-reflection-glow" />
        </div>

        {/* 4. Mid-River Floating Diya (53.6%, 84.5%) */}
        <div className="floating-ganga-diya diya-float-mid" style={{ left: '53.6%', top: '84.5%' }}>
          <div className="deepdaan-flame-halo" />
          <div className="deepdaan-flame-body" />
          <div className="water-reflection-glow" />
        </div>

        {/* 5. Boat Person's Diya (70.0%, 78.5%) */}
        <div className="floating-ganga-diya diya-boat" style={{ left: '70.0%', top: '78.5%' }}>
          <div className="deepdaan-flame-halo" />
          <div className="deepdaan-flame-body" />
        </div>

        {/* 6. Far-Right Floating Diya (79.5%, 85.5%) */}
        <div className="floating-ganga-diya diya-float-right" style={{ left: '79.5%', top: '85.5%' }}>
          <div className="deepdaan-flame-halo" />
          <div className="deepdaan-flame-body" />
          <div className="water-reflection-glow" />
        </div>
      </div>
    );
  }

  return null;
}
