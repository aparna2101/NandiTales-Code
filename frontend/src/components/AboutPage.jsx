import React, { useEffect } from 'react';
import { 
  ArrowRight, Flower2, Hammer, Flame, Globe, 
  Sparkles, CheckCircle2, Heart 
} from 'lucide-react';
import './about.css';
import aboutBannerImg from '../assets/aboutbanner.png';
import sunriseVideo from '../assets/cinematicvideo2.mp4';
import craftVideo from '../assets/cinematicvideo1.mp4';
import manufacturingVideo from '../assets/manufacturingproductvideo.mp4';

/**
 * Realistic Heritage "About Us" Page for Nandi Tales
 * Redesigned to be authentic, human-made, grounded, and clean:
 * - Section 1: Rooted in Kashi (The Story of Nandi Tales editorial intro)
 * - Section 2: Our Inspiration (A city that lives in every detail - Photo & Editorial grid)
 * - Section 3: Our Mission (Deep Emerald Banner: More than objects. A living tradition.)
 * - Section 4: Our People (Made by hands that carry generations - Karigar & Pushpa Artisans)
 * - Section 5: From Hands to Homes (A Thoughtful Process - 4 authentic craft steps)
 * - Section 6: Preserved Master Section (OUR VALUES & A CONTINUING JOURNEY on /about/aboutbg.png)
 */
export default function AboutPage({ onNavigateHome, onExploreOfferings }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="nt-about-page">

      {/* =================================================================
          1. ROOTED IN KASHI: THE STORY OF NANDI TALES
          ================================================================= */}
      <section className="nt-story-intro-section">
        {/* Heritage Kashi Living Banner Image (aboutbanner.png) */}
        <div className="story-intro-bg-wrap" aria-hidden="true">
          <img
            src={aboutBannerImg}
            alt="The Story of Nandi Tales Varanasi Heritage"
            className="story-intro-bg-img"
          />
          <div className="story-intro-bg-overlay" />
        </div>

        <div className="nt-about-container">
          <div className="story-intro-content">
            
            <div className="intro-badge-row">
              <span className="intro-eyebrow">ROOTED IN KASHI</span>
            </div>

            <h1 className="intro-display-title">
              The Story of Nandi Tales
            </h1>

          </div>
        </div>
      </section>


      {/* =================================================================
          2. OUR INSPIRATION: A CITY THAT LIVES IN EVERY DETAIL
          ================================================================= */}
      <section className="nt-inspiration-section" id="inspiration">
        <div className="nt-about-container">
          <div className="inspiration-grid">
            
            {/* Left: Authentic Ghats & Riverfront Photography */}
            <div className="inspiration-media-col">
              <div className="inspiration-photo-card">
                <img 
                  src="/images/about/kashi_dawn_riverfront.jpg" 
                  alt="Varanasi dawn along ancient riverfront ghats with temples and wooden boats"
                  className="inspiration-real-photo"
                />
                <div className="photo-caption-bar">
                  <span className="caption-location">Subah-e-Banaras</span>
                  <span className="caption-detail">Assi to Dashashwamedh Ghats</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="inspiration-content-col">
              <span className="nt-about-eyebrow">OUR INSPIRATION</span>
              <h2 className="section-main-heading">A city that lives in every detail</h2>
              
              <p className="inspiration-lead-p">
                Kashi is more than a place. It is a way of life, a confluence of faith, art, people and stories that have flowed for centuries along the sacred Ganga. In its narrow lanes, in the sound of temple bells, in the fragrance of incense, in the hands of artisans, we find a living tradition that continues to inspire the world.
              </p>
              
              <p className="inspiration-body-p">
                Nandi Tales is our way of sharing this timeless spirit, through objects that carry meaning, connect people and keep the essence of Kashi alive, wherever you are.
              </p>

              {/* 3 Grounded Pillars */}
              <div className="inspiration-highlights-list">
                <div className="highlight-item">
                  <div className="highlight-bullet">•</div>
                  <div className="highlight-text">
                    <strong>Living Metallurgy:</strong> Generational Thatheri brass-smithing crafted with acoustic resonance for daily poojan.
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-bullet">•</div>
                  <div className="highlight-text">
                    <strong>Sacred Flora Rebirth:</strong> Collecting offered temple pushpa and recycling them into pure, non-toxic incense.
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-bullet">•</div>
                  <div className="highlight-text">
                    <strong>Devotional Sanctity:</strong> Cleansed in sacred Ganga snan and blessed with traditional Vedic reverence.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =================================================================
          3. OUR MISSION: MORE THAN OBJECTS. A LIVING TRADITION.
          ================================================================= */}
      <section className="nt-mission-emerald-banner">
        {/* Ambient Living Craft Video Layer */}
        <div className="mission-video-bg-layer" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="mission-ambient-video"
          >
            <source src={craftVideo} type="video/mp4" />
          </video>
          <div className="mission-video-emerald-overlay" />
        </div>

        <div className="nt-about-container relative z-10">
          <div className="mission-inner-content">
            
            <span className="mission-eyebrow">OUR MISSION</span>
            <h2 className="mission-heading">More than objects. A living tradition.</h2>
            
            <p className="mission-lead">
              We work with skilled artisans and local communities to create authentic, meaningful ritual essentials and gifts. Our mission is to preserve traditional crafts, support artisans, and share the cultural and spiritual richness of Kashi with modern homes around the world.
            </p>

            <div className="mission-pillars-row">
              
              <div className="mission-pillar-card">
                <div className="pillar-icon-box">
                  <Flower2 size={22} className="pillar-gold-glyph" />
                </div>
                <h4 className="pillar-title">Timeless Traditions</h4>
                <p className="pillar-text">Centuries of living rituals and temple culture.</p>
              </div>

              <div className="mission-pillar-card">
                <div className="pillar-icon-box">
                  <Hammer size={22} className="pillar-gold-glyph" />
                </div>
                <h4 className="pillar-title">Artisan Communities</h4>
                <p className="pillar-text">Fair livelihoods for master guilds and women collectives.</p>
              </div>

              <div className="mission-pillar-card">
                <div className="pillar-icon-box">
                  <Flame size={22} className="pillar-gold-glyph" />
                </div>
                <h4 className="pillar-title">Thoughtful Products</h4>
                <p className="pillar-text">100% charcoal-free and pure bell-brass poojan ware.</p>
              </div>

              <div className="mission-pillar-card">
                <div className="pillar-icon-box">
                  <Globe size={22} className="pillar-gold-glyph" />
                </div>
                <h4 className="pillar-title">A Global Connection</h4>
                <p className="pillar-text">Bringing Kashi’s sacred tranquility to homes worldwide.</p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =================================================================
          4. OUR PEOPLE: MADE BY HANDS THAT CARRY GENERATIONS
          ================================================================= */}
      <section className="nt-people-makers-section" id="our-people">
        <div className="nt-about-container">
          
          <div className="people-editorial-layout">
            
            {/* Left: Master Artisan Photo */}
            <div className="people-photo-col left-artisan">
              <div className="people-photo-frame">
                <img 
                  src="/images/about/varanasi_artisan_brass.jpg" 
                  alt="Generational Thatheri brass worker hand-chiseling solid bell brass diya in Kashi workshop"
                  className="people-real-img"
                />
                <div className="people-photo-label">
                  <span className="karigar-name">Master Karigars</span>
                  <span className="karigar-craft">Thatheri Metal Guilds</span>
                </div>
              </div>
            </div>

            {/* Center: Story & 3 Continuity Badges */}
            <div className="people-content-col">
              <span className="nt-about-eyebrow">OUR PEOPLE</span>
              <h2 className="section-main-heading">Made by hands that carry generations</h2>
              
              <p className="people-description">
                Behind every Nandi Tales product is a story of skill, devotion and inherited wisdom. Our artisans are the heart of what we do, from brass workers and incense makers to local women who craft our gifting pieces. Each object is shaped with care, time and a deep respect for tradition.
              </p>

              <div className="people-numbered-strip">
                
                <div className="people-badge-item">
                  <div className="badge-index-circle">01</div>
                  <div className="badge-text-wrap">
                    <h5 className="badge-label">Craft</h5>
                    <p className="badge-info">Time-honoured techniques, refined for today.</p>
                  </div>
                </div>

                <div className="people-badge-item">
                  <div className="badge-index-circle">02</div>
                  <div className="badge-text-wrap">
                    <h5 className="badge-label">Community</h5>
                    <p className="badge-info">Supporting artisan livelihoods and local craft.</p>
                  </div>
                </div>

                <div className="people-badge-item">
                  <div className="badge-index-circle">03</div>
                  <div className="badge-text-wrap">
                    <h5 className="badge-label">Continuity</h5>
                    <p className="badge-info">Keeping traditions alive for generations to come.</p>
                  </div>
                </div>

              </div>

              <div className="people-btn-row">
                <button 
                  type="button" 
                  className="nt-primary-pill-btn"
                  onClick={onExploreOfferings}
                >
                  <span>EXPLORE SACRED CREATIONS</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: Women Rolling Sacred Incense Photo */}
            <div className="people-photo-col right-pushpa">
              <div className="people-photo-frame">
                <img 
                  src="/images/about/temple_sacred_incense.jpg" 
                  alt="Skilled women artisans rolling organic temple pushpa dhoop sticks"
                  className="people-real-img"
                />
                <div className="people-photo-label">
                  <span className="karigar-name">Pushpa Collective</span>
                  <span className="karigar-craft">Recycled Temple Flowers</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================================
          5. FROM HANDS TO HOMES: A THOUGHTFUL PROCESS
          ================================================================= */}
      <section className="nt-process-journey-section">
        <div className="nt-about-container">
          
          <div className="process-header-block">
            <span className="nt-about-eyebrow">FROM HANDS TO HOMES</span>
            <h2 className="section-main-heading">A Thoughtful Process</h2>
            <p className="process-subheading">
              From sacred raw earth to your personal altar, every creation follows an honest, mindful path.
            </p>
          </div>

          <div className="process-steps-grid">
            
            {/* Step 1 */}
            <div className="process-card">
              <div className="process-media-arch">
                <img 
                  src="/images/about/process_sourcing_brass.jpg" 
                  alt="Raw bell brass ingots and natural resins"
                  className="process-card-img"
                />
                <span className="process-step-num">1</span>
              </div>
              <h4 className="process-step-title">Sourcing</h4>
              <p className="process-step-desc">
                We choose high-quality natural materials: pure temple brass, Mysore sandalwood, and sacred temple pushpa.
              </p>
            </div>

            {/* Step 2 */}
            <div className="process-card">
              <div className="process-media-arch">
                <img 
                  src="/images/about/process_crafting_artisan.jpg" 
                  alt="Skilled artisans hand chiseling brass motifs"
                  className="process-card-img"
                />
                <span className="process-step-num">2</span>
              </div>
              <h4 className="process-step-title">Crafting</h4>
              <p className="process-step-desc">
                Skilled artisans bring each piece to life through lost-wax casting and patient, generational hand chisel.
              </p>
            </div>

            {/* Step 3 */}
            <div className="process-card">
              <div className="process-media-arch">
                <img 
                  src="/images/about/process_finishing_polish.jpg" 
                  alt="Finishing and polishing consecrated brass"
                  className="process-card-img"
                />
                <span className="process-step-num">3</span>
              </div>
              <h4 className="process-step-title">Finishing</h4>
              <p className="process-step-desc">
                Every detail is carefully refined, hand-polished to a soft luster, and cleansed in sacred Ganga waters.
              </p>
            </div>

            {/* Step 4 */}
            <div className="process-card">
              <div className="process-media-arch">
                <img 
                  src="/images/about/process_gift_packaging.jpg" 
                  alt="Handmade luxury gift box tied with sacred thread"
                  className="process-card-img"
                />
                <span className="process-step-num">4</span>
              </div>
              <h4 className="process-step-title">Your Home</h4>
              <p className="process-step-desc">
                Meaningful products packaged in sustainable boxes that become a cherished part of your everyday story.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================================
          4B. THE LIVING ATELIER: WHERE DEVOTION MEETS PRECISION
          ================================================================= */}
      <section className="nt-atelier-feature-section" id="atelier">
        <div className="nt-about-container">
          
          <div className="atelier-feature-grid">
            
            {/* Left: Editorial Narrative & Product Craft Points */}
            <div className="atelier-feature-text-col">
              <span className="nt-about-eyebrow">THE SACRED ATELIER • NANDI TALES</span>
              <h2 className="section-main-heading">Sacred Incense Sticks & Artisanal Keepsakes</h2>
              
              <p className="atelier-feature-lead">
                From the timeless ghats of Varanasi into your home sanctum. Discover how Nandi Tales crafts pure, 100% charcoal-free temple incense sticks hand-rolled with sacred pushpa, and protects them in custom gold-foiled keepsake boxes engineered to preserve their divine fragrance.
              </p>

              <div className="atelier-feature-specs">
                <div className="feature-spec-item">
                  <div className="spec-dot">✦</div>
                  <div className="spec-text">
                    <strong>100% Charcoal-Free Temple Incense:</strong> Hand-rolled with sacred temple pushpa, pure loban, and Mysore sandalwood for clean, non-toxic aromatic smoke.
                  </div>
                </div>

                <div className="feature-spec-item">
                  <div className="spec-dot">✦</div>
                  <div className="spec-text">
                    <strong>Signature Slide-Chest Box:</strong> Custom 245 × 65 × 35 mm gold-embossed keepsake case featuring Kashi ghats, engineered to seal in essential oil freshness.
                  </div>
                </div>

                <div className="feature-spec-item">
                  <div className="spec-dot">✦</div>
                  <div className="spec-text">
                    <strong>Consecrated Ritual Offerings:</strong> Thoughtfully crafted alongside sacred Kashi Ganga Jal and pure bell-brass diyas for a complete spiritual atmosphere.
                  </div>
                </div>
              </div>

              <div className="atelier-feature-btn-row">
                <button 
                  type="button" 
                  className="nt-primary-pill-btn"
                  onClick={onExploreOfferings}
                >
                  <span>EXPLORE INCENSE & OFFERINGS</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: Big, Clean Luxury Framed Video (Expanded) */}
            <div className="atelier-feature-video-col">
              <div className="atelier-luxury-video-card">
                <div className="luxury-video-wrapper">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="atelier-prominent-video"
                    poster="/images/about/process_gift_packaging.jpg"
                  >
                    <source src={manufacturingVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================================
          6. PANORAMIC GRAND FINALE: OUR VALUES & A CONTINUING JOURNEY
          (Rendered with aboutbg.png background matching master template)
          PRESERVED SECTION - EXACTLY AS REQUESTED BY USER
          ================================================================= */}
      <section className="nt-panoramic-journey-section">
        <div className="panoramic-journey-bg" aria-hidden="true">
          <img 
            src="/about/aboutbg.png" 
            alt="Illustrated sacred Varanasi riverfront with ghats, temples and boats"
            className="panoramic-journey-bg-img"
          />
          <div className="panoramic-top-fade" />
        </div>

        <div className="nt-about-container panoramic-journey-container">
          
          {/* Top Block: OUR VALUES - Guided by what truly matters */}
          <div className="journey-values-block">
            <span className="nt-about-eyebrow">OUR VALUES</span>
            <h2 className="journey-values-heading">Guided by what truly matters</h2>

            <div className="journey-values-triad-grid">
              
              {/* Column 1: Honest Materials */}
              <div className="journey-triad-column">
                <div className="triad-icon-ring">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C59B27" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                  </svg>
                </div>
                <h4 className="triad-col-title">Honest Materials</h4>
                <p className="triad-col-desc">
                  We choose natural, authentic materials with care and respect for the earth.
                </p>
              </div>

              {/* Column 2: Living Craft */}
              <div className="journey-triad-column">
                <div className="triad-icon-ring">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C59B27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c1.5 3 2.5 5.5 2.5 8 0 2.5-1 4.5-2.5 6-1.5-1.5-2.5-3.5-2.5-6 0-2.5 1-5 2.5-8z"/>
                    <path d="M12 17c-2.5 0-5.5-1.5-7.5-4 1-3 3-5 5.5-6"/>
                    <path d="M12 17c2.5 0 5.5-1.5 7.5-4-1-3-3-5-5.5-6"/>
                    <path d="M3 14c2.5 2 5.5 3 9 3s6.5-1 9-3"/>
                  </svg>
                </div>
                <h4 className="triad-col-title">Living Craft</h4>
                <p className="triad-col-desc">
                  We celebrate traditional skills and support artisan communities across Kashi and beyond.
                </p>
              </div>

              {/* Column 3: Thoughtful Giving */}
              <div className="journey-triad-column">
                <div className="triad-icon-ring">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C59B27" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="13" rx="2"/>
                    <path d="M12 8v13"/>
                    <path d="M19 8c.5-1.5 0-3-1.5-3.5s-3 1-3.5 2.5L12 8l-2-1c-.5-1.5-2-3-3.5-2.5S5 6.5 5.5 8"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                  </svg>
                </div>
                <h4 className="triad-col-title">Thoughtful Giving</h4>
                <p className="triad-col-desc">
                  We create meaningful objects that bring people, traditions and moments closer.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Block: A CONTINUING JOURNEY - Discover the stories of Kashi */}
          <div className="journey-action-block">
            <span className="journey-mini-eyebrow">A CONTINUING JOURNEY</span>
            <h3 className="journey-main-heading">Discover the stories of Kashi</h3>
            <p className="journey-sub-lead">
              Meet the people, places and traditions that inspire Nandi Tales.
            </p>
            
            <button 
              type="button" 
              className="journey-primary-pill-btn"
              onClick={onExploreOfferings}
            >
              <span>EXPLORE OUR STORIES</span>
              <ArrowRight size={15} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
