import React, { useState, useEffect, useRef } from 'react';
import { Search, User, ShoppingBag, ChevronDown, Menu, X, Heart, Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function Navbar({ 
  cartCount = 0, 
  wishlistCount = 0, 
  currentPage = 'home',
  onNavigate,
  onOpenCart, 
  onOpenSearch, 
  onOpenWishlist 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasTriggeredRef = useRef(false);
  const userMutedRef = useRef(false);

  // Maximum allowed duration: strictly 30 seconds
  const MAX_AUDIO_DURATION = 30;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= MAX_AUDIO_DURATION) {
        audio.pause();
        audio.currentTime = 0;
        setIsAudioPlaying(false);
        userMutedRef.current = true;
      }
    };

    const handleEnded = () => {
      audio.currentTime = 0;
      setIsAudioPlaying(false);
      userMutedRef.current = true;
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    const tryPlay = () => {
      if (hasTriggeredRef.current || userMutedRef.current) {
        cleanup();
        return;
      }

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsAudioPlaying(true);
            hasTriggeredRef.current = true;
            cleanup();
          })
          .catch(() => {
            // Keep listeners alive so next touch/scroll/gesture can retry
          });
      }
    };

    const cleanup = () => {
      const events = [
        'scroll', 'wheel', 'touchmove', 'touchstart', 'touchend',
        'pointerdown', 'pointerup', 'pointermove', 'mousedown', 'click', 'keydown'
      ];
      events.forEach(evt => {
        window.removeEventListener(evt, tryPlay, { capture: true });
        document.removeEventListener(evt, tryPlay, { capture: true });
      });
    };

    const events = [
      'scroll', 'wheel', 'touchmove', 'touchstart', 'touchend',
      'pointerdown', 'pointerup', 'pointermove', 'mousedown', 'click', 'keydown'
    ];
    events.forEach(evt => {
      window.addEventListener(evt, tryPlay, { capture: true, passive: true });
      document.addEventListener(evt, tryPlay, { capture: true, passive: true });
    });

    // Attempt playback immediately when the website opens
    tryPlay();
    const immediateTimer = setTimeout(tryPlay, 100);

    return () => {
      clearTimeout(immediateTimer);
      cleanup();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const toggleAudio = (e) => {
    if (e) e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isAudioPlaying) {
      audio.pause();
      setIsAudioPlaying(false);
      userMutedRef.current = true; // Mark as explicitly stopped: never re-trigger on scroll/touch
      hasTriggeredRef.current = true;
    } else {
      userMutedRef.current = false;
      hasTriggeredRef.current = true;
      if (audio.currentTime >= MAX_AUDIO_DURATION) {
        audio.currentTime = 0;
      }
      audio.play().then(() => {
        setIsAudioPlaying(true);
      }).catch((err) => {
        console.error('Audio play error:', err);
      });
    }
  };

  // Continuous Movable Marquee Ticker Items (Flipkart/Luxury E-Commerce Style)
  const marqueeItems = [
    { tag: "SACRED OFFERING", text: "Free Pure Brass Diya & Gangajal on orders above ₹1,499" },
    { tag: "TEMPLE PUSHPA", text: "100% Charcoal-Free Incense hand-rolled from sacred Vishwanath flowers" },
    { tag: "LIVING GUILDS", text: "Acoustic Bell-Brass (Kansa) Poojan Ware hand-forged in Varanasi" },
    { tag: "FESTIVE BLESSINGS", text: "Artisanal keepsake gift boxes with sacred red thread & pure camphor" },
    { tag: "DIRECT FROM GHATS", text: "Consecrated with Holy Ganga Snan at Dashashwamedh Ghat" },
    { tag: "WORLDWIDE SHIPPING", text: "Express sacred delivery across India & global spiritual destinations" }
  ];

  const handleNavClick = (e, page, targetHash) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page, targetHash);
    }
    if (page === 'home' && targetHash) {
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <header className="site-header">
        
        {/* Sleek Movable Marquee Ticker Strip (Flipkart / Luxury Brand Style) */}
        <div className="navbar-marquee-strip">
          <div className="marquee-track">
            {/* Set 1 */}
            <div className="marquee-content">
              {marqueeItems.map((item, idx) => (
                <div key={`m1-${idx}`} className="marquee-item">
                  <span className="marquee-sparkle">✦</span>
                  <span className="marquee-badge">{item.tag}</span>
                  <span className="marquee-text">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Set 2 (for continuous seamless loop) */}
            <div className="marquee-content" aria-hidden="true">
              {marqueeItems.map((item, idx) => (
                <div key={`m2-${idx}`} className="marquee-item">
                  <span className="marquee-sparkle">✦</span>
                  <span className="marquee-badge">{item.tag}</span>
                  <span className="marquee-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Header Container */}
        <div className="container header-container">
          
          {/* Authentic NANDI TALES Brand Logo (Transparent) */}
          <a 
            href="#" 
            className="brand-logo-link" 
            aria-label="Nandi Tales Homepage"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <img 
              src="/images/logoheader.png" 
              alt="NANDI TALES" 
              className="brand-logo-img" 
            />
          </a>

          {/* Desktop Center Menu */}
          <nav className="header-nav">
            <ul className="nav-links-list">
              {/* 1. Direct SHOP Link (No subcategory dropdown as requested) */}
              <li className="nav-direct-item">
                <a 
                  href="#shop" 
                  className={`nav-anchor ${currentPage === 'shop' ? 'active-nav-gold' : ''}`}
                  onClick={(e) => handleNavClick(e, 'shop')}
                >
                  <span>SHOP</span>
                </a>
              </li>

              {/* 2. Direct COLLECTIONS Link (No dropdown) */}
              <li className="nav-direct-item">
                <a 
                  href="#collections" 
                  className={`nav-anchor ${currentPage === 'collections' ? 'active-nav-gold' : ''}`}
                  onClick={(e) => handleNavClick(e, 'collections')}
                >
                  <span>COLLECTIONS</span>
                </a>
              </li>

              {/* 3. STORIES */}
              <li className="nav-direct-item">
                <a 
                  href="#stories" 
                  className="nav-anchor"
                  onClick={(e) => handleNavClick(e, 'home', '#stories')}
                >
                  <span>STORIES</span>
                </a>
              </li>

              {/* 4. Single Direct ABOUT Page Link (No Dropdown) */}
              <li className="nav-direct-item">
                <a 
                  href="#about" 
                  className={`nav-anchor ${currentPage === 'about' ? 'active-nav-gold' : ''}`}
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  <span>ABOUT</span>
                </a>
              </li>

              {/* 5. JOURNAL */}
              <li className="nav-direct-item">
                <a 
                  href="#journal" 
                  className="nav-anchor"
                  onClick={(e) => handleNavClick(e, 'home', '#journal')}
                >
                  <span>JOURNAL</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Action Icons */}
          <div className="header-icons-row">
            {/* Sacred Sound Toggle (Available on both desktop & mobile) */}
            <button
              type="button"
              className={`header-audio-btn ${isAudioPlaying ? 'playing' : 'paused'}`}
              onClick={toggleAudio}
              title={isAudioPlaying ? "Turn Off Audio" : "Play Sacred Audio (30s)"}
              aria-label={isAudioPlaying ? "Turn Off Audio" : "Play Sacred Audio"}
            >
              <audio 
                ref={audioRef} 
                src="/audio.m4a" 
                preload="auto" 
                autoPlay 
                onPlay={() => setIsAudioPlaying(true)}
                onPause={() => setIsAudioPlaying(false)}
              />
              {isAudioPlaying ? (
                <>
                  <Volume2 size={13} strokeWidth={2.2} className="audio-icon-pulse" />
                  <span className="header-audio-text">OFF</span>
                </>
              ) : (
                <>
                  <VolumeX size={13} strokeWidth={2.2} />
                  <span className="header-audio-text">PLAY</span>
                </>
              )}
            </button>

            <button 
              type="button" 
              className="action-icon-btn" 
              onClick={onOpenSearch} 
              aria-label="Search"
              title="Search Offerings"
            >
              <Search size={18} strokeWidth={1.8} />
            </button>

            <button 
              type="button" 
              className="action-icon-btn desktop-only-icon" 
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              title="Saved Items"
            >
              <Heart size={18} strokeWidth={1.8} />
              {wishlistCount > 0 && <span className="icon-badge">{wishlistCount}</span>}
            </button>

            <button 
              type="button" 
              className="action-icon-btn desktop-only-icon" 
              aria-label="Account"
              title="Account"
              onClick={() => alert("Welcome to Nandi Tales patron sanctum.")}
            >
              <User size={18} strokeWidth={1.8} />
            </button>

            <button 
              type="button" 
              className="action-icon-btn" 
              onClick={onOpenCart} 
              aria-label="Shopping Bag"
              title="Shopping Bag"
            >
              <ShoppingBag size={18} strokeWidth={1.8} />
              <span className="icon-badge">{cartCount}</span>
            </button>

            {/* Mobile Hamburger */}
            <button 
              type="button" 
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <a href="#shop" className={currentPage === 'shop' ? 'active-mobile-link' : ''} onClick={(e) => handleNavClick(e, 'shop')}>SHOP</a>
            <a href="#collections" className={currentPage === 'collections' ? 'active-mobile-link' : ''} onClick={(e) => handleNavClick(e, 'collections')}>COLLECTIONS</a>
            <a href="#stories" onClick={(e) => handleNavClick(e, 'home', '#stories')}>STORIES</a>
            <a href="#about" className={currentPage === 'about' ? 'active-mobile-link' : ''} onClick={(e) => handleNavClick(e, 'about')}>ABOUT</a>
            <a href="#journal" onClick={(e) => handleNavClick(e, 'home', '#journal')}>JOURNAL</a>
          </div>
        )}
      </header>
    </>
  );
}
