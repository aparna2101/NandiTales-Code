import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import homepageBannerVideo11 from '../assets/homepagebannervideo11.mp4';

export default function Hero({ onExploreClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="hero-slider-section hero-single-video-section">
      {/* Background Hero Video */}
      <div className="slider-backdrop-wrap">
        <div className="slider-slide-bg active">
          <video
            ref={videoRef}
            src={homepageBannerVideo11}
            autoPlay
            loop
            muted
            playsInline
            className="slider-panoramic-video slider-panoramic-img"
          />
        </div>
      </div>

      {/* Real HTML & CSS Editorial Content */}
      <div className="container hero-editorial-container">
        <div className="hero-text-block">

          <div className="hero-eyebrow">
            <span>A LIVING HERITAGE, FROM KASHI</span>
          </div>

          <h1 className="hero-heading">
            <span className="hero-heading-line line-1">Rituals for</span>
            <br />
            <span className="hero-heading-line line-2">a brighter tomorrow.</span>
          </h1>

          <p className="hero-description">
            Sacred temple incense and hand-forged brassware, crafted with timeless devotion in Varanasi.
          </p>

          <div className="hero-button-wrapper">
            <button
              type="button"
              className="btn-explore-collection"
              onClick={onExploreClick}
            >
              <span>EXPLORE THE COLLECTION</span>
              <ArrowRight size={16} className="explore-arrow" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
