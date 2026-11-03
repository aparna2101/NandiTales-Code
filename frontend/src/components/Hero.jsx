import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 0,
      image: '/images/homepagebanner1.png',
      alt: 'Varanasi Ganga Ghats sunrise with temples and temple bell pillar',
      eyebrow: 'A LIVING HERITAGE, FROM KASHI',
      headingLine1: 'Rituals for',
      headingLine2: 'a brighter tomorrow.',
      description: 'Sacred temple incense and hand-forged brassware, crafted with timeless devotion in Varanasi.',
      buttonText: 'EXPLORE THE COLLECTION',
      link: '#collections'
    },
    {
      id: 1,
      image: '/images/homepagebanner0.png',
      alt: 'Varanasi Ghats at Dawn with floral temple bells and brass lamps',
      eyebrow: 'CONSECRATED IN KASHI',
      headingLine1: 'Sacred purity',
      headingLine2: 'from the eternal ghats.',
      description: 'Pure bell-brass diyas, temple incense, and sacred keepsakes crafted by master artisans of Kashi.',
      buttonText: 'DISCOVER THE CRAFT',
      link: '#collections'
    }
  ];

  // Auto-play timer (6 seconds per slide)
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className={`hero-slider-section slide-active-${currentSlide}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Background Container */}
      <div className="slider-backdrop-wrap">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-slide-bg ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="slider-panoramic-img"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Real HTML & CSS Editorial Content */}
      <div className="container hero-editorial-container">
        <div className={`hero-text-block slide-${currentSlide}`}>

          <div className="hero-eyebrow">
            <span>{slides[currentSlide].eyebrow}</span>
          </div>

          <h1 className="hero-heading">
            <span className="hero-heading-line line-1">{slides[currentSlide].headingLine1}</span>
            <br />
            <span className="hero-heading-line line-2">{slides[currentSlide].headingLine2}</span>
          </h1>

          <p className="hero-description">
            {slides[currentSlide].description}
          </p>

          <div className="hero-button-wrapper">
            <button
              type="button"
              className="btn-explore-collection"
              onClick={onExploreClick}
            >
              <span>{slides[currentSlide].buttonText}</span>
              <ArrowRight size={16} className="explore-arrow" />
            </button>
          </div>

        </div>
      </div>

      {/* Slider Controls: Side Arrows */}
      <button
        type="button"
        className="slider-nav-btn prev-btn"
        onClick={handlePrev}
        aria-label="Previous Slide"
        title="Previous Heritage Scene"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        className="slider-nav-btn next-btn"
        onClick={handleNext}
        aria-label="Next Slide"
        title="Next Heritage Scene"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slider Pagination Indicators */}
      <div className="slider-indicators-row">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            className={`indicator-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className="dot-inner" />
          </button>
        ))}
      </div>

    </section>
  );
}
