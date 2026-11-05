import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Heart, MapPin, Mail, Phone } from 'lucide-react';
import footerVideo from '../assets/footervideo1.mp4';
import footerLogoRight from '../assets/footerlogorightside.png';

export default function Footer({ onNewsletterSuccess, onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (e, page, targetHash) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, targetHash);
    } else {
      if (page === 'about') window.location.hash = '#about';
      else if (page === 'shop') window.location.hash = '#shop';
      else if (page === 'collections') window.location.hash = '#collections';
      else window.location.hash = targetHash || '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      if (onNewsletterSuccess) onNewsletterSuccess(email);
      setEmail('');
    }
  };

  return (
    <footer className="site-royal-footer site-compact-footer">

      {/* 1. Cinematic Ambient Video Background Layer */}
      <div className="footer-video-bg-layer" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="footer-ambient-video"
        >
          <source src={footerVideo} type="video/mp4" />
        </video>
        <div className="footer-video-emerald-overlay" />
      </div>

      <div className="container footer-compact-inner">

        {/* Compact Main Row: Logo on Left + 2 Short Link Columns + Compact Newsletter */}
        <div className="footer-compact-grid">

          {/* Column 1: Brand Info with Logo on the Left + Image & Text Beside Logo */}
          <div className="footer-compact-brand-col">
            <div className="footer-brand-logo-row">
              <a href="#" className="footer-left-logo-link" aria-label="Nandi Tales Homepage" onClick={(e) => handleNavClick(e, 'home')}>
                <img
                  src="/about/fullLogo.png"
                  alt="NANDI TALES"
                  className="footer-left-logo-img"
                />
              </a>
              <div className="footer-brand-text-beside">
                <img
                  src={footerLogoRight}
                  alt="NANDI TALES"
                  className="footer-brand-logo-right-img"
                />
                <span className="footer-brand-sub-title">A Living Heritage of Varanasi</span>
              </div>
            </div>

            <p className="footer-compact-tagline">
              Handcrafted pure bell-brass poojan ware and 100% natural, charcoal-free temple flower incense from Varanasi.
            </p>

            <div className="footer-compact-contact">
              <div className="contact-inline-item">
                <MapPin size={15} className="footer-gold-glyph" />
                <span>Dashashwamedh Ghat, Varanasi 221001</span>
              </div>
              <div className="contact-inline-item">
                <Mail size={15} className="footer-gold-glyph" />
                <span>sanctum@nanditales.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="footer-social-strip compact-socials">
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* 2-Column Links Duo (Website Pages & Products) */}
          <div className="footer-compact-links-duo">
            {/* Column 2: Sanctum Pages (from Navbar) */}
            <div className="footer-compact-links-col">
              <h5 className="compact-col-title">Sanctum Pages</h5>
              <ul className="compact-links-list">
                <li><a href="#" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                <li><a href="#shop" onClick={(e) => handleNavClick(e, 'shop')}>Shop</a></li>
                <li><a href="#collections" onClick={(e) => handleNavClick(e, 'collections')}>Collections</a></li>
                <li><a href="#stories" onClick={(e) => handleNavClick(e, 'home', '#stories')}>Stories</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
              </ul>
            </div>

            {/* Column 3: Sacred Offerings (Real Website Products) */}
            <div className="footer-compact-links-col">
              <h5 className="compact-col-title">Sacred Offerings</h5>
              <ul className="compact-links-list">
                <li><a href="#shop" onClick={(e) => handleNavClick(e, 'shop')}>Incense Sticks</a></li>
                <li><a href="#shop" onClick={(e) => handleNavClick(e, 'shop')}>Pure Brass Diyas</a></li>
                <li><a href="#shop" onClick={(e) => handleNavClick(e, 'shop')}>Sacred Ganga Jal</a></li>
                <li><a href="#gifting" onClick={(e) => handleNavClick(e, 'gifting')}>Curated Gift Sets</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Compact Newsletter */}
          <div className="footer-compact-newsletter-col">
            <h5 className="compact-col-title">Join Our Circle</h5>
            <p className="compact-newsletter-desc">
              Subscribe for Vedic ritual calendars and limited artisan releases.
            </p>

            {subscribed ? (
              <div className="newsletter-subscribed-compact">
                <CheckCircle2 size={16} className="gold-icon" />
                <span>Blessings! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="compact-newsletter-form">
                <input
                  type="email"
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="compact-email-input"
                  required
                />
                <button type="submit" className="compact-submit-btn" aria-label="Subscribe">
                  <ArrowRight size={15} />
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Compact Legal & Copyright Row */}
        <div className="footer-compact-bottom-bar">
          <div className="compact-copyright">
            © {new Date().getFullYear()} NANDI TALES HERITAGE LLP. Consecrated with reverence in Varanasi.
          </div>
          <div className="compact-legal-links">
            <a href="#">Privacy Protocol</a>
            <span style={{ color: '#E5A93C' }}>•</span>
            <a href="#">Terms of Sanctity</a>
            <span style={{ color: '#E5A93C' }}>•</span>
            <a href="#">Shipping & Returns</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
