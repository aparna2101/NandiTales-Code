import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Collections from './components/Collections';
import Artisans from './components/Artisans';
import FeaturedProducts from './components/FeaturedProducts';
import GiftSanctum from './components/GiftSanctum';
import Stories from './components/Stories';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import CollectionsPage from './components/CollectionsPage';
import GiftingPage from './components/GiftingPage';

import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'shop' | 'collections'
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#shop' || hash.startsWith('#shop')) {
        setCurrentPage('shop');
      } else if (hash === '#gifting' || hash.startsWith('#gifting')) {
        setCurrentPage('gifting');
      } else if (
        hash.startsWith('#collections') || 
        hash === '#ghats-series' || 
        hash === '#sarnath-sanctuary' || 
        hash === '#brass-guilds'
      ) {
        setCurrentPage('collections');
      } else if (hash === '' || hash === '#' || hash === '#stories') {
        setCurrentPage('home');
        if (hash === '#stories') {
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      }
    };
    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const navigateTo = (page, targetHash) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = '#about';
    } else if (page === 'shop') {
      window.location.hash = '#shop';
    } else if (page === 'gifting') {
      window.location.hash = '#gifting';
    } else if (page === 'collections') {
      window.location.hash = targetHash || '#collections';
    } else {
      window.location.hash = targetHash || '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleExploreClick = () => {
    navigateTo('shop');
  };

  const handleSelectCollection = (name) => {
    navigateTo('collections');
  };

  return (
    <div className="nandi-tales-app-wrapper">
      
      {/* 1. Top Announcement Bar & Header */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateTo}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => triggerToast("Your Sacred Wishlist is empty")}
      />

      <main>
        {currentPage === 'about' && (
          <AboutPage 
            onNavigateHome={() => navigateTo('home')}
            onExploreOfferings={() => navigateTo('shop')}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage 
            onAddToCart={(product) => {
              setCartCount(prev => prev + 1);
              triggerToast(`Added ${product.name} to Sacred Bag!`);
            }}
            onToggleWishlist={(id) => {
              setWishlistCount(prev => prev + 1);
              triggerToast("Item saved to Sacred Wishlist!");
            }}
            wishlistIds={[]}
          />
        )}

        {currentPage === 'collections' && (
          <CollectionsPage 
            onAddToCart={(item) => {
              setCartCount(prev => prev + 1);
              triggerToast(`Added ${item.name} to Sacred Bag!`);
            }}
            onNavigateToShop={() => navigateTo('shop')}
          />
        )}

        {currentPage === 'gifting' && (
          <GiftingPage 
            onAddToCart={(item) => {
              setCartCount(prev => prev + 1);
              triggerToast(`Added ${item.name} to Sacred Bag!`);
            }}
            onExploreShop={() => navigateTo('shop')}
          />
        )}

        {currentPage === 'home' && (
          <>
            {/* 2. Hero Banner */}
            <Hero onExploreClick={handleExploreClick} />

            {/* 3. 5-Pillar Sacred Trust Strip */}
            <TrustBar />

            {/* 4. 4 Real Collection Cards */}
            <Collections onSelectCollection={handleSelectCollection} />

            {/* 5. The People Behind the Products (Artisans of Kashi) */}
            <Artisans onOpenArtisanModal={() => triggerToast("Exploring the Master Artisans of Kashi")} />

            {/* 6. Featured Products */}
            <FeaturedProducts 
              onAddToCart={(product) => {
                setCartCount(prev => prev + 1);
                triggerToast(`Added ${product.name} to Sacred Bag!`);
              }}
              onToggleWishlist={(id) => {
                setWishlistCount(prev => prev + 1);
                triggerToast("Item saved to Sacred Wishlist!");
              }}
              wishlistIds={[]}
              onQuickView={(product) => triggerToast(`Quick View for ${product.name}`)}
            />

            {/* 7. Curated Gift Sanctum (Festive Keepsakes & Presentation Boxes) */}
            <GiftSanctum 
              onAddToCart={(item) => {
                setCartCount(prev => prev + 1);
                triggerToast(`Added ${item.name} to Sacred Bag!`);
              }}
              onExploreGifts={() => triggerToast("Inquiry recorded with Kashi Sanctum Concierge!")}
            />

            {/* 8. Stories of Kashi (Chronicles from the Sacred Ghats) */}
            <Stories onOpenStoriesModal={() => triggerToast("Opening Chronicles of Kashi")} />
          </>
        )}
      </main>

      {/* Grand Royal Heritage Footer with Full Arch Logo */}
      <Footer 
        onNavigate={navigateTo}
        onNewsletterSuccess={(email) => triggerToast(`Blessings! Subscribed with ${email}`)} 
      />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={[]}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
        onCheckout={() => {}}
      />

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={() => {}}
      />

      {/* Toast Feedback */}
      <div className={`toast-notice ${showToast ? 'show' : ''}`}>
        <CheckCircle2 size={18} color="var(--color-gold-light)" />
        <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{toastMessage}</span>
      </div>

    </div>
  );
}
