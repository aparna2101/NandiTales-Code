import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, ChevronDown, Menu, X, Heart } from 'lucide-react';

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
              className="action-icon-btn" 
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              title="Saved Items"
            >
              <Heart size={18} strokeWidth={1.8} />
              {wishlistCount > 0 && <span className="icon-badge">{wishlistCount}</span>}
            </button>

            <button 
              type="button" 
              className="action-icon-btn" 
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
