import React, { useState } from 'react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import FeaturedLivingAtmosphere from './FeaturedLivingAtmosphere';
import CardCinemagraphAtmosphere from './CardCinemagraphAtmosphere';

// Import authentic featured product images from assets
import productBg from '../assets/productbg.png';
import stickImg from '../assets/homepagestick.png';
import brassDiyaImg from '../assets/homepagebrassdiya.png';
import gangajalImg from '../assets/product100ml.png';
import giftHampersImg from '../assets/homepagegifthampers.png';

export default function FeaturedProducts({
  onAddToCart,
  onToggleWishlist,
  wishlistIds = []
}) {
  const [localWishlist, setLocalWishlist] = useState({});
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'incense', label: 'Temple Incense' },
    { id: 'diyas', label: 'Brass Diyas' },
    { id: 'gangajal', label: 'Sacred Gangajal' },
    { id: 'gifts', label: 'Heritage Gifts' }
  ];

  const products = [
    {
      id: 'p-1',
      category: 'incense',
      name: 'Sarnath Incense Sticks',
      subtitle: 'Peace, Wisdom & Compassion | 20 Sticks',
      badge: 'Bestseller',
      rating: 4.9,
      reviews: 142,
      price: 249,
      originalPrice: 349,
      image: stickImg
    },
    {
      id: 'p-2',
      category: 'diyas',
      name: 'Lotus Brass Diya Set',
      subtitle: 'Pure Bell Brass (Pair) | Handcrafted in Kashi',
      badge: 'Pure Bell Brass',
      rating: 5.0,
      reviews: 98,
      price: 890,
      originalPrice: 1100,
      image: brassDiyaImg
    },
    {
      id: 'p-3',
      category: 'gangajal',
      name: 'Sacred Kashi Ganga Jal',
      subtitle: 'Sourced from the Sacred Ghats | 100 ml',
      badge: 'Consecrated',
      rating: 5.0,
      reviews: 184,
      price: 149,
      originalPrice: 199,
      image: gangajalImg
    },
    {
      id: 'p-4',
      category: 'gifts',
      name: 'Kashi Brass Diya Gift Set',
      subtitle: 'Curated Keepsake for Modern Rituals',
      badge: 'Gift Ready',
      rating: 5.0,
      reviews: 115,
      price: 2490,
      originalPrice: 2999,
      image: giftHampersImg
    }
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  const handleHeartClick = (id) => {
    setLocalWishlist(prev => ({ ...prev, [id]: !prev[id] }));
    if (onToggleWishlist) onToggleWishlist(id);
  };

  return (
    <section 
      id="featured-products" 
      className="exact-featured-section"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 38%, rgba(8, 30, 24, 0.22) 0%, rgba(3, 12, 9, 0.65) 85%),
          linear-gradient(180deg, rgba(4, 16, 12, 0.55) 0%, rgba(5, 22, 17, 0.28) 42%, rgba(2, 8, 6, 0.70) 100%),
          url(${productBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Banaras Ghats Living Art Atmosphere (Smoke, Flickering Diyas & Flower Petals) */}
      <FeaturedLivingAtmosphere />

      <div className="products-full-container">

        {/* Centered Symmetrical Luxury Editorial Header */}
        <div className="featured-header-centered">

          <div className="featured-eyebrow-row centered">
            <span className="featured-eyebrow-accent">✦</span>
            <span className="featured-eyebrow-text">काशी की पावन धरोहर • शाश्वत भक्ति</span>
            <span className="featured-eyebrow-accent">✦</span>
          </div>

          <h2 className="featured-heading-centered">
            Featured Products
          </h2>

          <p className="featured-subheading-centered">
            A few of our favourites to begin your Nandi Tales journey, crafted by master artisans with pure devotion.
          </p>

          {/* Centered Interactive Category Filter Pills */}
          <div className="featured-filter-tabs-row centered">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-category-pill ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

        </div>

        {/* 4 Products in 1 Line Grid */}
        <div className="featured-products-grid">
          {(filteredProducts.length > 0 ? filteredProducts : products).map((item) => {
            const isFav = localWishlist[item.id] || wishlistIds.includes(item.id);

            return (
              <div key={item.id} className="exact-product-card">

                {/* Visual Area */}
                <div className={`product-visual-box ${item.id === 'p-3' ? 'gangajal-visual-box' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`product-card-thumb ${item.id === 'p-3' ? 'thumb-gangajal-fit' : ''}`}
                    loading="lazy"
                  />

                  {/* Living Cinemagraph Motion Layer (Smoke, Diyas & Embers) */}
                  <CardCinemagraphAtmosphere productId={item.id} />

                  {/* Badge */}
                  {item.badge && (
                    <span className="product-sacred-badge">{item.badge}</span>
                  )}

                  {/* Floating Wishlist Heart */}
                  <button
                    type="button"
                    className={`product-wishlist-btn ${isFav ? 'active' : ''}`}
                    onClick={() => handleHeartClick(item.id)}
                    aria-label={`Save ${item.name} to Wishlist`}
                  >
                    <Heart size={16} fill={isFav ? '#A15234' : 'none'} color={isFav ? '#A15234' : '#0B352E'} />
                  </button>
                </div>

                {/* Details Area */}
                <div className="product-details-content">
                  <h3 className="product-title-text">{item.name}</h3>
                  <p className="product-subtitle-text">{item.subtitle}</p>

                  <div className="product-price-row">
                    <span className="product-price-amount">₹ {item.price.toLocaleString('en-IN')}</span>
                    {item.originalPrice && (
                      <span className="product-price-strike">₹ {item.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn-add-sacred-bag"
                    onClick={() => onAddToCart && onAddToCart(item)}
                  >
                    <ShoppingBag size={15} />
                    <span>ADD TO CART</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
