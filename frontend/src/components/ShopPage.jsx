import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Eye, Check, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import QuickViewModal from './QuickViewModal';
import ProductDetailView from './ProductDetailView';

// Import exact assets from src/assets/
import vishwanathImg from '../assets/vishwanathproduct.png';
import vishwanathBackImg from '../assets/vishwanathback.png';
import manikarnikaImg from '../assets/manikarnikaproduct.png';
import manikarnikaBackImg from '../assets/manikarnikaback.png';
import assiImg from '../assets/assiproduct.png';
import assiBackImg from '../assets/assiback.png';
import dashashwamedhImg from '../assets/dashshamedhproduct.png';
import dashashwamedhBackImg from '../assets/dashashamedhback.png';
import tulsiImg from '../assets/tulsighatproduct.png';
import tulsiBackImg from '../assets/tulsiback.png';
import sarnathImg from '../assets/sarnathproduct.png';
import sarnathBackImg from '../assets/sarnathback.png';
import fullSarnathImg from '../assets/fullsarnathproduct.png';
import diyaSetImg from '../assets/diyasetproduct.png';
import diyaSetBoxImg from '../assets/diyasetbox.png';
import allProductsImg from '../assets/allproduct.png';
import shopBg from '../assets/shoppagebg.png';

// Import authentic Ganga Jal assets
import gangajal500Img from '../assets/product500ml.png';
import gangajal500BackImg from '../assets/product500mlfull.png';
import gangajal100Img from '../assets/product100ml.png';
import gangajal100BackImg from '../assets/product100mlfull.png';
import gangajal1LImg from '../assets/product1litre.png';
import gangajal1LBackImg from '../assets/product1litrefull.png';

// Complete Authentic Product Catalog (Defined outside to allow instant initial state on refresh)
const allProducts = [
  {
    id: 'prod-vishwanath',
    filterKey: 'vishwanath',
    name: 'Vishwanath Incense Sticks',
    category: 'incense',
    categoryLabel: 'Temple Incense',
    subtitle: 'Holy Chandan & Sacred Marigold | 20 Sticks',
    description: 'Hand-rolled using offered temple pushpa from the sanctum of Shri Kashi Vishwanath. 100% charcoal-free, dipped in pure Mysore sandalwood oil.',
    price: 249,
    originalPrice: 349,
    discountBadge: '28% OFF',
    badge: 'Bestseller',
    image: vishwanathImg,
    backImage: vishwanathBackImg,
    images: [vishwanathImg, vishwanathBackImg],
    inStock: true
  },
  {
    id: 'prod-gangajal-500ml',
    filterKey: 'gangajal',
    name: 'Sacred Kashi Ganga Jal (500 ml)',
    category: 'gangajal',
    categoryLabel: 'Sacred Ganga Jal',
    subtitle: 'Sourced from the Sacred Ghats of Kashi',
    description: 'Pure, consecrated Ganga Jal collected directly from the sanctified ghats of Kashi (Varanasi). Encased in a bespoke glass vessel featuring an ornate brass carrier handle and sacred Nandi Tales seal. Ideal for daily abhishekam, temple sanctification, and auspicious rituals.',
    price: 299,
    originalPrice: 399,
    discountBadge: '25% OFF',
    badge: 'Consecrated',
    image: gangajal500Img,
    backImage: gangajal500BackImg,
    images: [gangajal500Img, gangajal500BackImg],
    inStock: true
  },
  {
    id: 'prod-diya-set',
    filterKey: 'diyas',
    name: 'Lotus Brass Diya Set (Pack of 4)',
    category: 'diyas',
    categoryLabel: 'Brass & Poojan',
    subtitle: 'Pure Bell Brass (Kansa) | Hand-Hammered',
    description: 'A set of 4 solid bell-metal brass lotus diyas forged by master generational artisans in Thatheri Bazaar. Deep oil reservoir with resonant ring.',
    price: 890,
    originalPrice: 1190,
    discountBadge: '25% OFF',
    badge: 'Pure Bell Brass',
    image: diyaSetImg,
    inStock: true
  },
  {
    id: 'prod-manikarnika',
    filterKey: 'manikarnika',
    name: 'Manikarnika Incense Sticks',
    category: 'incense',
    categoryLabel: 'Temple Incense',
    subtitle: 'Pure Guggal & Cosmic Fire Resins | 20 Sticks',
    description: 'Inspired by the perpetual sacred fire of Manikarnika. Pure organic loban, frankincense, and sacred temple herbs that purify sanctums.',
    price: 249,
    originalPrice: 349,
    discountBadge: '28% OFF',
    badge: 'Sacred Ritual',
    image: manikarnikaImg,
    backImage: manikarnikaBackImg,
    images: [manikarnikaImg, manikarnikaBackImg],
    inStock: true
  },
  {
    id: 'prod-gangajal-100ml',
    filterKey: 'gangajal',
    name: 'Sacred Kashi Ganga Jal (100 ml)',
    category: 'gangajal',
    categoryLabel: 'Sacred Ganga Jal',
    subtitle: 'Pocket Sanctum Edition | 100 ml',
    description: 'Compact consecrated holy water sourced from the sacred riverbank of Varanasi. Perfectly crafted for travel altars, daily tilak, and personal spiritual rituals.',
    price: 149,
    originalPrice: 199,
    discountBadge: '25% OFF',
    badge: 'Travel Sanctum',
    image: gangajal100Img,
    backImage: gangajal100BackImg,
    images: [gangajal100Img, gangajal100BackImg],
    inStock: true
  },
  {
    id: 'prod-assi',
    filterKey: 'assi',
    name: 'Assi Incense Sticks',
    category: 'incense',
    categoryLabel: 'Temple Incense',
    subtitle: 'Subah-e-Banaras Rose & Ganga Silt | 20 Sticks',
    description: 'The peaceful fragrance of dawn over Assi Ghat. Hand-blended solar dried damask roses, sacred tulsi, and Himalayan cedarwood.',
    price: 249,
    originalPrice: 349,
    discountBadge: '28% OFF',
    badge: 'Dawn Aroma',
    image: assiImg,
    backImage: assiBackImg,
    images: [assiImg, assiBackImg],
    inStock: true
  },
  {
    id: 'prod-gangajal-1l',
    filterKey: 'gangajal',
    name: 'Sacred Kashi Ganga Jal (1 Litre)',
    category: 'gangajal',
    categoryLabel: 'Sacred Ganga Jal',
    subtitle: 'Family & Temple Ritual Reserve | 1 Litre',
    description: 'Generous 1 Litre heirloom glass decanter of consecrated Ganga Jal from Varanasi ghats. Forged with an ornate brass carrier handle for grand havans, mahayagyas, and sacred sanctifications.',
    price: 499,
    originalPrice: 649,
    discountBadge: '23% OFF',
    badge: 'Temple Reserve',
    image: gangajal1LImg,
    backImage: gangajal1LBackImg,
    images: [gangajal1LImg, gangajal1LBackImg],
    inStock: true
  },
  {
    id: 'prod-dashashwamedh',
    filterKey: 'dashashwamedh',
    name: 'Dashashwamedh Incense Sticks',
    category: 'incense',
    categoryLabel: 'Temple Incense',
    subtitle: 'Grand Aarti Camphor & Royal Chandan | 20 Sticks',
    description: 'Crafted to capture the sensory majesty of the world-renowned evening Maha Aarti. Rich natural camphor, crushed saffron, and resins.',
    price: 249,
    originalPrice: 349,
    discountBadge: '28% OFF',
    badge: 'Maha Aarti',
    image: dashashwamedhImg,
    backImage: dashashwamedhBackImg,
    images: [dashashwamedhImg, dashashwamedhBackImg],
    inStock: true
  },
  {
    id: 'prod-tulsighat',
    filterKey: 'tulsighat',
    name: 'Tulsi Ghat Incense Sticks',
    category: 'incense',
    categoryLabel: 'Temple Incense',
    subtitle: 'Vedic Holy Basil & Vetiver | 20 Sticks',
    description: 'Honouring the birthplace of Ramcharitmanas. Crushed Krishna tulsi leaves, wild vetiver roots (khus), and morning dew extracts.',
    price: 249,
    originalPrice: 349,
    discountBadge: '28% OFF',
    badge: 'Holy Basil',
    image: tulsiImg,
    backImage: tulsiBackImg,
    images: [tulsiImg, tulsiBackImg],
    inStock: true
  },
  {
    id: 'prod-sarnath-full',
    filterKey: 'sarnath',
    name: 'Sarnath Sanctuary Presentation Box',
    category: 'sets',
    categoryLabel: 'Curated Sets',
    subtitle: 'Artisan Pack with Pure Brass Incense Stand',
    description: 'Complete mindful gifting presentation featuring Sarnath incense sticks nestled in handmade keepsake packaging with a solid cast brass burner.',
    price: 590,
    originalPrice: 790,
    discountBadge: '25% OFF',
    badge: 'Gift Edition',
    image: fullSarnathImg,
    inStock: true
  },
  {
    id: 'prod-sarnath',
    filterKey: 'sarnath',
    name: 'Sarnath Incense Sticks',
    category: 'incense',
    categoryLabel: 'Temple Incense',
    subtitle: 'Peace, Wisdom & Compassion | 20 Sticks',
    description: 'Inspired by Lord Buddha’s first sermon at Dhamek Stupa. Rare medicinal bodhi leaves, frankincense, and calming white woods.',
    price: 249,
    originalPrice: 349,
    discountBadge: '28% OFF',
    badge: 'Buddhist Heritage',
    image: sarnathImg,
    backImage: sarnathBackImg,
    images: [sarnathImg, sarnathBackImg],
    inStock: true
  }
];

export default function ShopPage({ onAddToCart, onToggleWishlist, wishlistIds = [] }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Restore selected product on refresh from URL hash or sessionStorage
  const [selectedProduct, setSelectedProduct] = useState(() => {
    if (typeof window === 'undefined') return null;
    const hash = window.location.hash || '';
    let prodId = null;
    if (hash.includes('product=')) {
      prodId = hash.split('product=')[1]?.split('&')[0];
    } else {
      prodId = sessionStorage.getItem('nandi_shop_selected_product');
    }
    if (prodId) {
      return allProducts.find(p => p.id === prodId) || null;
    }
    return null;
  });

  const [addedId, setAddedId] = useState(null);
  const circleScrollRef = useRef(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash || '';
      if (hash.includes('product=')) {
        const prodId = hash.split('product=')[1]?.split('&')[0];
        const found = allProducts.find(p => p.id === prodId);
        if (found) {
          setSelectedProduct(found);
          sessionStorage.setItem('nandi_shop_selected_product', prodId);
        }
      } else if (hash === '#shop') {
        setSelectedProduct(null);
        sessionStorage.removeItem('nandi_shop_selected_product');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectProduct = (prod) => {
    setSelectedProduct(prod);
    if (prod) {
      window.location.hash = `#shop?product=${prod.id}`;
      sessionStorage.setItem('nandi_shop_selected_product', prod.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleBackToShop();
    }
  };

  const handleBackToShop = () => {
    setSelectedProduct(null);
    window.location.hash = '#shop';
    sessionStorage.removeItem('nandi_shop_selected_product');
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  // 1. Interactive Circle Fragrance & Category Stories (Exact packaging names, 2 lines max)
  const circleCategories = [
    {
      id: 'all',
      isAll: true,
      title: 'ALL PRODUCTS',
      subtitle: 'Complete Range',
      filterKey: 'all'
    },
    {
      id: 'gangajal',
      title: 'GANGA JAL',
      subtitle: 'Sacred Water',
      image: gangajal500Img,
      filterKey: 'gangajal'
    },
    {
      id: 'vishwanath',
      title: 'VISHWANATH',
      subtitle: 'Incense Sticks',
      image: vishwanathImg,
      filterKey: 'vishwanath'
    },
    {
      id: 'manikarnika',
      title: 'MANIKARNIKA',
      subtitle: 'Incense Sticks',
      image: manikarnikaImg,
      filterKey: 'manikarnika'
    },
    {
      id: 'assi',
      title: 'ASSI',
      subtitle: 'Incense Sticks',
      image: assiImg,
      filterKey: 'assi'
    },
    {
      id: 'dashashwamedh',
      title: 'DASHASHWAMEDH',
      subtitle: 'Incense Sticks',
      image: dashashwamedhImg,
      filterKey: 'dashashwamedh'
    },
    {
      id: 'tulsighat',
      title: 'TULSI GHAT',
      subtitle: 'Incense Sticks',
      image: tulsiImg,
      filterKey: 'tulsighat'
    },
    {
      id: 'sarnath',
      title: 'SARNATH',
      subtitle: 'Incense Sticks',
      image: sarnathImg,
      filterKey: 'sarnath'
    },
    {
      id: 'diyas',
      title: 'BRASS DIYA',
      subtitle: 'Diya Set',
      image: diyaSetBoxImg,
      filterKey: 'diyas'
    }
  ];

  // Filtering Logic
  const filtered = allProducts.filter(p => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'gangajal') return p.category === 'gangajal';
    if (selectedFilter === 'incense') return p.category === 'incense';
    if (selectedFilter === 'diyas') return p.category === 'diyas';
    if (selectedFilter === 'sets') return p.category === 'sets';
    return p.filterKey === selectedFilter;
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured default
  });

  const handleAddToCart = (product) => {
    setAddedId(product.id);
    if (onAddToCart) onAddToCart(product);
    setTimeout(() => setAddedId(null), 1400);
  };

  const scrollCircles = (direction) => {
    if (circleScrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      circleScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (selectedProduct) {
    return (
      <ProductDetailView
        product={selectedProduct}
        allProducts={allProducts}
        onBack={handleBackToShop}
        onAddToCart={handleAddToCart}
        onBuyNow={(prod, qty) => {
          for (let i = 0; i < (qty || 1); i++) {
            handleAddToCart(prod);
          }
        }}
        onSelectRelated={handleSelectProduct}
      />
    );
  }

  return (
    <div className="shop-page-master">

      {/* 1. Sleek Editorial Header with shopbg.png Backdrop */}
      <section className="shop-hero-banner">
        <div className="shop-hero-bg-layer" aria-hidden="true">
          <img
            src={shopBg}
            alt="The Sanctum Shop Varanasi Heritage"
            className="shop-hero-bg-img"
          />
          <div className="shop-hero-bg-overlay" />
        </div>

        <div className="container shop-hero-inner">
          <span className="shop-eyebrow">✦ CONSECRATED IN KASHI ✦</span>
          <h1 className="shop-main-title">The Sanctum Shop</h1>
        </div>
      </section>

      {/* 2. Interactive Circular Categories Strip (Aradhna Kart Reference) */}
      <section className="shop-circle-categories-section">
        <div className="container circle-categories-container">
          
          <button 
            type="button" 
            className="circle-nav-btn prev"
            onClick={() => scrollCircles('left')}
            aria-label="Previous categories"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="circle-categories-track" ref={circleScrollRef}>
            {circleCategories.map((cat) => {
              const isActive = selectedFilter === cat.filterKey;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`circle-cat-item ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(cat.filterKey)}
                >
                  <div className="circle-cat-avatar-wrap">
                    {cat.isAll ? (
                      <div className="circle-all-badge">
                        <div className="circle-all-icon-wrap">
                          <svg 
                            width="34" 
                            height="30" 
                            viewBox="0 0 32 30" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="circle-all-diya-icon"
                            aria-hidden="true"
                          >
                            <defs>
                              <radialGradient id="allDiyaAura" cx="50%" cy="40%" r="50%">
                                <stop offset="0%" stopColor="#FFA000" stopOpacity="0.75" />
                                <stop offset="50%" stopColor="#FFB300" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#FFB300" stopOpacity="0" />
                              </radialGradient>
                              <linearGradient id="allDiyaFlame" x1="16" y1="2" x2="16" y2="15" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#FFF9C4" />
                                <stop offset="30%" stopColor="#FFD54F" />
                                <stop offset="70%" stopColor="#FF9800" />
                                <stop offset="100%" stopColor="#E65100" />
                              </linearGradient>
                              <linearGradient id="allDiyaBrass" x1="5" y1="15" x2="27" y2="23" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#D4AF37" />
                                <stop offset="25%" stopColor="#FDE68A" />
                                <stop offset="65%" stopColor="#D4AF37" />
                                <stop offset="100%" stopColor="#8C6615" />
                              </linearGradient>
                              <linearGradient id="allDiyaBase" x1="10" y1="22" x2="22" y2="28" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#B48820" />
                                <stop offset="50%" stopColor="#F5D77F" />
                                <stop offset="100%" stopColor="#78550B" />
                              </linearGradient>
                            </defs>
                            <circle cx="16" cy="10" r="10" fill="url(#allDiyaAura)" />
                            <path 
                              d="M16 2.5C16 2.5 11.8 7.8 11.8 11.2C11.8 13.6 13.7 15.5 16 15.5C18.3 15.5 20.2 13.6 20.2 11.2C20.2 7.8 16 2.5 16 2.5Z" 
                              fill="url(#allDiyaFlame)" 
                            />
                            <path 
                              d="M16 6.5C16 6.5 13.8 9.8 13.8 11.8C13.8 13.1 14.8 14.1 16 14.1C17.2 14.1 18.2 13.1 18.2 11.8C18.2 9.8 16 6.5 16 6.5Z" 
                              fill="#FFFFFF" 
                              opacity="0.95"
                            />
                            <path 
                              d="M5 15.5C5 15.5 7.5 22.5 16 22.5C24.5 22.5 27 15.5 27 15.5H5Z" 
                              fill="url(#allDiyaBrass)" 
                              stroke="#78550B" 
                              strokeWidth="0.8" 
                            />
                            <ellipse 
                              cx="16" 
                              cy="15.5" 
                              rx="11" 
                              ry="2.4" 
                              fill="#FDF0CD" 
                              stroke="#8C6615" 
                              strokeWidth="0.8" 
                            />
                            <path 
                              d="M12 22.5L10 26.5H22L20 22.5" 
                              fill="url(#allDiyaBase)" 
                              stroke="#684705" 
                              strokeWidth="0.8" 
                              strokeLinejoin="round" 
                            />
                          </svg>
                        </div>
                        <span className="circle-all-text">ALL</span>
                      </div>
                    ) : (
                      <img 
                        src={cat.image} 
                        alt={cat.title} 
                        className={`circle-cat-img ${cat.id === 'diyas' ? 'diya-fit' : ''}`}
                        loading="lazy"
                      />
                    )}
                    {isActive && <div className="circle-active-glow" />}
                  </div>
                  <span className="circle-cat-title">{cat.title}</span>
                  {cat.subtitle && <span className="circle-cat-sub">{cat.subtitle}</span>}
                </button>
              );
            })}
          </div>

          <button 
            type="button" 
            className="circle-nav-btn next"
            onClick={() => scrollCircles('right')}
            aria-label="Next categories"
          >
            <ChevronRight size={20} />
          </button>

        </div>
      </section>

      {/* 3. Atelier Shelf Header & Commercial Filter Toolbar */}
      <div className="shop-toolbar-sticky">
        <div className="container shop-toolbar-container">

          {/* Editorial Title Inspired by Aradhna Kart */}
          <div className="shop-shelf-lead">
            <span className="shelf-eyebrow">FROM THE ATELIER SHELF</span>
            <h2 className="shelf-heading">
              BEGIN YOUR RITUAL <em>HERE.</em>
            </h2>
          </div>

          {/* Category Tabs & Sort */}
          <div className="shop-controls-right">
            <div className="shop-filter-tabs">
              <button
                type="button"
                className={`shop-tab-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('all')}
              >
                All ({allProducts.length})
              </button>
              <button
                type="button"
                className={`shop-tab-btn ${selectedFilter === 'gangajal' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('gangajal')}
              >
                Sacred Ganga Jal (3)
              </button>
              <button
                type="button"
                className={`shop-tab-btn ${selectedFilter === 'incense' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('incense')}
              >
                Temple Incense (6)
              </button>
              <button
                type="button"
                className={`shop-tab-btn ${selectedFilter === 'diyas' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('diyas')}
              >
                Brass Diyas (1)
              </button>
              <button
                type="button"
                className={`shop-tab-btn ${selectedFilter === 'sets' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('sets')}
              >
                Curated Sets (1)
              </button>
            </div>

            <div className="shop-sort-box">
              <label htmlFor="shop-sort" className="sort-label">Sort:</label>
              <select
                id="shop-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="shop-sort-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Product Catalog Grid with Interspersed Advertisements */}
      <section className="shop-catalog-section">
        <div className="container">

          {selectedFilter !== 'all' && (
            <div className="active-filter-alert">
              <span>Showing offerings matching: <strong>{selectedFilter.toUpperCase()}</strong></span>
              <button 
                type="button" 
                className="reset-filter-btn"
                onClick={() => setSelectedFilter('all')}
              >
                Clear Filter (View All {allProducts.length})
              </button>
            </div>
          )}

          {/* Uninterrupted Full Product Grid */}
          <div className="shop-products-grid">
            {sorted.map((prod) => (
              <ProductCardItem
                key={prod.id}
                product={prod}
                addedId={addedId}
                onAddToCart={handleAddToCart}
                onQuickView={setQuickViewProduct}
                onSelectProduct={handleSelectProduct}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. Authentic Trust & Sacred Assurance Strip (Aradhna & Agarbatti Shop Standards) */}
      <section className="shop-trust-guarantee-strip">
        <div className="container trust-strip-grid">
          <div className="trust-strip-item">
            <div className="trust-icon-wrap">✦</div>
            <div className="trust-text-wrap">
              <h5>Pure Assi Consecration</h5>
              <p>Each offering is blessed with holy Ganga snan at Varanasi ghats before dispatch.</p>
            </div>
          </div>

          <div className="trust-strip-item">
            <div className="trust-icon-wrap">✦</div>
            <div className="trust-text-wrap">
              <h5>100% Charcoal-Free</h5>
              <p>Zero toxic fumes. Hand-rolled using natural temple flora, sandalwood, and pure resins.</p>
            </div>
          </div>

          <div className="trust-strip-item">
            <div className="trust-icon-wrap">✦</div>
            <div className="trust-text-wrap">
              <h5>Generational Brass Craft</h5>
              <p>Hand-hammered pure bell brass (Kansa) forged by hereditary Thatheri artisans.</p>
            </div>
          </div>

          <div className="trust-strip-item">
            <div className="trust-icon-wrap">✦</div>
            <div className="trust-text-wrap">
              <h5>Pan-India Sacred Delivery</h5>
              <p>Shockproof festive packaging tied with sacred red mauli thread & Gangajal bottle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={() => {
            handleAddToCart(quickViewProduct);
            setQuickViewProduct(null);
          }}
        />
      )}

    </div>
  );
}

// Sub-Component: Clean, Professional E-Commerce Product Card
function ProductCardItem({ product, addedId, onAddToCart, onQuickView, onSelectProduct }) {
  const isAdded = addedId === product.id;

  return (
    <div 
      className="shop-product-card"
      onClick={() => onSelectProduct && onSelectProduct(product)}
      style={{ cursor: 'pointer' }}
    >

      {/* Visual Area */}
      <div className={`product-media-container cat-${product.category}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`product-card-real-img front ${product.backImage ? 'has-back' : ''}`}
          loading="lazy"
        />
        {product.backImage && (
          <img
            src={product.backImage}
            alt={`${product.name} Back Details`}
            className="product-card-real-img back"
            loading="lazy"
          />
        )}
        {product.badge && (
          <span className="product-card-badge">{product.badge}</span>
        )}
        {product.discountBadge && (
          <span className="product-card-discount-badge">{product.discountBadge}</span>
        )}

        {/* Quick Action Overlay */}
        <div className="product-card-quick-actions">
          <button
            type="button"
            className="quick-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            title="Quick View"
          >
            <Eye size={16} />
          </button>
        </div>
      </div>

      {/* Details Area */}
      <div className="product-info-container">
        <span className="product-category-meta">{product.categoryLabel}</span>
        <h3 className="product-title-serif">{product.name}</h3>
        <p className="product-subtitle-desc">{product.subtitle}</p>

        <div className="product-price-row-card">
          <div className="price-stack">
            <span className="price-curr">₹{product.price}</span>
            {product.originalPrice && (
              <span className="price-mrp">₹{product.originalPrice}</span>
            )}
            {product.discountBadge && (
              <span className="price-save-tag">{product.discountBadge}</span>
            )}
          </div>

          <button
            type="button"
            className={`btn-add-to-bag ${isAdded ? 'added' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            {isAdded ? (
              <>
                <Check size={14} />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
