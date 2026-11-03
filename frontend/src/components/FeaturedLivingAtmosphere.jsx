import React, { useEffect, useRef } from 'react';

/**
 * FEATURED LIVING ATMOSPHERE (Banaras Ghats Living Art)
 * - Authentic Varanasi ghats backdrop
 * - Pure 60fps HTML5 Canvas sacred incense smoke & rising golden aarti sparks
 * - Sacred falling temple flower petals (Pushpa Vrishti: Marigold & Rose)
 */
export default function FeaturedLivingAtmosphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let phase = 0;
    let frame = 0;

    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    setCanvasSize();

    // Sacred Incense Smoke Generators (from left ghats and right temple corners)
    const createSmokeParticle = (originRatioX, originRatioY) => ({
      x: canvas.width * originRatioX + (Math.random() - 0.5) * 12,
      y: canvas.height * originRatioY,
      originX: canvas.width * originRatioX,
      originY: canvas.height * originRatioY,
      progress: 0,
      speed: 0.0035 + Math.random() * 0.003,
      size: 14 + Math.random() * 12,
      maxSize: 65 + Math.random() * 35,
      maxAlpha: 0.22 + Math.random() * 0.12,
      swayOffset: Math.random() * Math.PI * 2
    });

    // Golden Aarti Sparks (Rising upwards like Dashashwamedh evening embers)
    const createSpark = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      speedY: 0.8 + Math.random() * 1.4,
      speedX: (Math.random() - 0.5) * 0.6,
      size: 1.5 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.6,
      decay: 0.003 + Math.random() * 0.004
    });

    let sparks = [];

    const render = () => {
      frame++;
      phase += 0.018;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Spawning Smoke Particles
      if (frame % 14 === 0 && particles.length < 32) {
        particles.push(createSmokeParticle(0.08, 0.82)); // Left dhoop smoke
      }
      if (frame % 18 === 0 && particles.length < 32) {
        particles.push(createSmokeParticle(0.92, 0.78)); // Right dhoop smoke
      }

      // 2. Spawning Golden Sparks
      if (frame % 10 === 0 && sparks.length < 25) {
        sparks.push(createSpark());
      }

      // Update & Draw Smoke
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.speed;

        const t = p.progress;
        p.y = p.originY - t * (p.originY + 60);
        const wave = Math.sin(t * 6 - phase + p.swayOffset) * (t * 38);
        p.x = p.originX + wave;
        const curSize = p.size + (p.maxSize - p.size) * t;

        let alpha = p.maxAlpha;
        if (t < 0.2) alpha = (t / 0.2) * p.maxAlpha;
        else if (t > 0.6) alpha = ((1 - t) / 0.4) * p.maxAlpha;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, curSize);
        grad.addColorStop(0, `rgba(255, 250, 240, ${alpha * 0.7})`);
        grad.addColorStop(0.5, `rgba(240, 230, 215, ${alpha * 0.3})`);
        grad.addColorStop(1, 'rgba(235, 225, 210, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, curSize, 0, Math.PI * 2);
        ctx.fill();

        if (p.progress >= 1 || p.y < -50) {
          particles.splice(i, 1);
        }
      }

      // Update & Draw Golden Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.y -= s.speedY;
        s.x += s.speedX + Math.sin(frame * 0.05 + s.y * 0.02) * 0.4;
        s.alpha -= s.decay;

        ctx.fillStyle = `rgba(255, 215, 64, ${Math.max(0, s.alpha)})`;
        ctx.shadowColor = '#FFB300';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        if (s.y < -10 || s.alpha <= 0) {
          sparks.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', setCanvasSize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  const petals = [
    { id: 1, type: 'marigold', left: '8%', delay: '0s', duration: '9s', size: '13px' },
    { id: 2, type: 'rose', left: '22%', delay: '3.2s', duration: '11s', size: '11px' },
    { id: 3, type: 'marigold-gold', left: '42%', delay: '1.4s', duration: '8.5s', size: '14px' },
    { id: 4, type: 'rose', left: '68%', delay: '4.8s', duration: '10.5s', size: '10px' },
    { id: 5, type: 'marigold', left: '84%', delay: '2.1s', duration: '9.2s', size: '12px' },
    { id: 6, type: 'marigold-gold', left: '94%', delay: '5.5s', duration: '11.5s', size: '13px' }
  ];

  return (
    <div className="featured-living-atmosphere-layer" aria-hidden="true">
      {/* 1. Pure Canvas Living Temple Smoke & Aarti Golden Motes */}
      <canvas ref={canvasRef} className="featured-living-canvas" />

      {/* 2. Drifting Pushpa Vrishti (Temple Flower Petals) */}
      <div className="featured-petals-wrap">
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
    </div>
  );
}
