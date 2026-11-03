import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Check, 
  Truck, 
  Leaf, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

export default function ProductDetailView({ 
  product, 
  allProducts = [], 
  onBack, 
  onAddToCart, 
  onBuyNow, 
  onSelectRelated 
}) {
  const [activeImg, setActiveImg] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('ingredients');
  const [zoomStyle, setZoomStyle] = useState({ x: 50, y: 50, isHovering: false });

  useEffect(() => {
    setActiveImg(product?.image);
    setQuantity(1);
    setAdded(false);
    setZoomStyle({ x: 50, y: 50, isHovering: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setZoomStyle({ x, y, isHovering: true });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ x: 50, y: 50, isHovering: false });
  };

  if (!product) return null;

  // Secondary gallery photos:
  // - 6 stick products (with backImage): strictly 2 images (Front & Back details)
  // - 3 sets/box products: strictly 1 single image (no extra gallery photos)
  const galleryImages = product.backImage
    ? [
        { label: 'Front Packaging', src: product.image },
        { label: 'Back Details', src: product.backImage }
      ]
    : [
        { label: 'Main View', src: product.image }
      ];

  const handleAdd = () => {
    setAdded(true);
    if (onAddToCart) {
      for (let i = 0; i < quantity; i++) {
        onAddToCart(product);
      }
    }
    setTimeout(() => setAdded(false), 1600);
  };

  const handleBuy = () => {
    if (onBuyNow) {
      onBuyNow(product, quantity);
    } else {
      handleAdd();
    }
  };

  // Related offerings (excluding current)
  const relatedOfferings = allProducts
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const toggleAccordion = (key) => {
    setOpenAccordion(prev => prev === key ? null : key);
  };

  return (
    <div className="product-detail-master">

      {/* 1. Top Breadcrumb & Back Bar */}
      <div className="product-detail-topbar">
        <div className="container detail-topbar-inner">
          <button 
            type="button" 
            className="btn-back-to-shop"
            onClick={onBack}
          >
            <ArrowLeft size={16} />
            <span>Back to Sanctum Shop</span>
          </button>

          <nav className="detail-breadcrumbs" aria-label="Breadcrumbs">
            <span>Shop</span>
            <span className="crumb-sep">/</span>
            <span>{product.categoryLabel}</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* 2. Main 2-Column Product Console (Aradhna Kart Reference) */}
      <section className="product-detail-main-section">
        <div className="container detail-grid-container">

          {/* LEFT: Product Visual & Gallery Strip (Thumbnails on Left + Zoom on Hover) */}
          <div className="detail-media-column">
            
            {/* Gallery Thumbnails (Only shown when multiple views exist, e.g. the 6 sticks) */}
            {galleryImages.length > 1 && (
              <div className="detail-gallery-thumbs" aria-label="Product thumbnails">
                {galleryImages.map((thumb, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`gallery-thumb-btn ${activeImg === thumb.src ? 'active' : ''}`}
                    onClick={() => setActiveImg(thumb.src)}
                    onMouseEnter={() => setActiveImg(thumb.src)}
                    title={thumb.label}
                  >
                    <img src={thumb.src} alt={thumb.label} />
                  </button>
                ))}
              </div>
            )}

            {/* Main Stage Card with Zoom Lens Effect */}
            <div 
              className="main-stage-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                src={activeImg} 
                alt={product.name} 
                className={`main-stage-img ${zoomStyle.isHovering ? 'is-zoomed' : ''}`}
                style={{
                  transformOrigin: `${zoomStyle.x}% ${zoomStyle.y}%`
                }}
              />
              {product.badge && (
                <span className="detail-badge-pill">{product.badge}</span>
              )}
              {product.discountBadge && (
                <span className="detail-discount-pill">{product.discountBadge}</span>
              )}
            </div>

          </div>

          {/* RIGHT: Product Information, Commercial CTAs & Ritual Story */}
          <div className="detail-content-column">

            {/* Sanctum Origin Eyebrow */}
            <span className="detail-sanctum-tag">
              ✦ CONSECRATED IN KASHI • {product.categoryLabel.toUpperCase()} ✦
            </span>

            {/* Title & Scent Notes */}
            <h1 className="detail-product-title">{product.name}</h1>
            <p className="detail-fragrance-sub">{product.subtitle}</p>

            {/* Price & Savings Row */}
            <div className="detail-price-strip">
              <div className="detail-price-group">
                <span className="detail-curr-price">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="detail-mrp-price">₹{product.originalPrice}</span>
                )}
                {product.discountBadge && (
                  <span className="detail-save-badge">{product.discountBadge}</span>
                )}
              </div>
              <span className="detail-tax-note">Inclusive of all taxes • Consecrated Ganga Snan</span>
            </div>

            {/* Editorial Description */}
            <p className="detail-story-paragraph">{product.description}</p>

            {/* Quantity & CTA Buttons (Matching Saba Fragrance reference) */}
            <div className="detail-purchase-console">
              
              <div className="detail-qty-picker">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="qty-number">{quantity}</span>
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* ADD TO CART Button */}
              <button
                type="button"
                className={`btn-detail-add-bag ${added ? 'added' : ''}`}
                onClick={handleAdd}
              >
                {added ? (
                  <>
                    <Check size={16} />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>ADD TO CART</span>
                  </>
                )}
              </button>

              {/* BUY NOW Button */}
              <button
                type="button"
                className="btn-detail-buy-now"
                onClick={handleBuy}
              >
                <span>BUY NOW</span>
              </button>

            </div>

            {/* Clean Micro-Trust List (Exact Saba Fragrance Image 3 Reference) */}
            <div className="saba-trust-list">
              <div className="saba-trust-item">
                <Truck size={16} className="saba-trust-icon" />
                <span>Pan-India sacred delivery (3-5 business days)</span>
              </div>
              <div className="saba-trust-item">
                <ShieldCheck size={16} className="saba-trust-icon" />
                <span>100% secure payment via UPI, Cards & NetBanking</span>
              </div>
              <div className="saba-trust-item">
                <Leaf size={16} className="saba-trust-icon" />
                <span>
                  {product.category === 'gangajal' 
                    ? '100% pure & authentic sacred holy water from Kashi ghats'
                    : (product.category === 'diyas' 
                        ? 'Pure bell-metal brass (Kansa), hand-hammered'
                        : '100% charcoal-free, made from offered temple flowers')}
                </span>
              </div>
              <div className="saba-trust-item">
                <span className="saba-star-icon">✦</span>
                <span>Consecrated with sacred Ganga Snan at Varanasi riverfront</span>
              </div>
            </div>

            {/* Categories Meta Tag */}
            <div className="detail-category-meta-line">
              <span className="cat-label">CATEGORY:</span>
              <span className="cat-value">{product.categoryLabel}, Kashi Rituals, Varanasi</span>
            </div>

            {/* Collapsible Accordions for Detailed Ritual Specifications */}
            <div className="detail-accordions">

              {/* Accordion 1: Sacred Ingredients */}
              <div className="detail-acc-item">
                <button
                  type="button"
                  className="detail-acc-header"
                  onClick={() => toggleAccordion('ingredients')}
                >
                  <span>
                    {product.category === 'gangajal' 
                      ? 'Source & Consecration Story' 
                      : 'Sacred Ingredients & Consecration Story'}
                  </span>
                  {openAccordion === 'ingredients' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'ingredients' && (
                  <div className="detail-acc-body">
                    <p>
                      {product.category === 'gangajal'
                        ? 'Sourced directly from the sanctified Brahmavart and Dashashwamedh ghats of Varanasi during auspicious Brahma Muhurta. Naturally filtered following age-old traditional Vedic purification while preserving all sacred mineral energies. Sealed in lead-free fluted glass with a sacred brass seal.'
                        : 'Hand-rolled using offered temple flowers (pushpa) gathered respectfully from sanctums in Varanasi. Enriched with pure Mysore sandalwood oil, organic cedarwood, frankincense (Loban), natural camphor, and Himalayan tree gums. 100% charcoal-free, dipped in pure aromatic botanical extracts.'}
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Burn Time & Care */}
              <div className="detail-acc-item">
                <button
                  type="button"
                  className="detail-acc-header"
                  onClick={() => toggleAccordion('usage')}
                >
                  <span>
                    {product.category === 'gangajal' 
                      ? 'Sacred Usage & Storage' 
                      : 'Burn Time & Ritual Usage'}
                  </span>
                  {openAccordion === 'usage' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'usage' && (
                  <div className="detail-acc-body">
                    {product.category === 'gangajal' ? (
                      <p>
                        <strong>Sacred Uses:</strong> Daily puja abhishek, morning Snan purification, Griha Pravesh, and holy havan rituals.<br />
                        <strong>Storage:</strong> Keep in a clean, elevated sacred space away from direct sunlight.<br />
                        <strong>Vessel:</strong> Heavyweight heirloom glass decanter with ornate brass handle for easy pooja pouring.
                      </p>
                    ) : (
                      <p>
                        <strong>Burn Duration:</strong> Approximately 45 to 50 minutes per stick in calm airflow.<br />
                        <strong>Ideal Timing:</strong> Early morning Brahma Muhurta prayers, meditation, and evening Sandhya Aarti.<br />
                        <strong>Packaging:</strong> Sealed moisture-barrier inner wrap nestled in gold-embossed keepsake presentation box.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Accordion 3: Sacred Shipping */}
              <div className="detail-acc-item">
                <button
                  type="button"
                  className="detail-acc-header"
                  onClick={() => toggleAccordion('shipping')}
                >
                  <span>Sacred Shipping & Blessing Promise</span>
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="detail-acc-body">
                    <p>
                      Every order is carefully dispatched in shockproof eco-friendly packaging tied with sacred Varanasi red mauli thread. Includes a complimentary bottle of holy Ganga Snan water from Assi Ghat.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Frequently Paired Offerings Strip */}
      {relatedOfferings.length > 0 && (
        <section className="detail-related-section">
          <div className="container">
            <div className="related-lead-bar">
              <span className="related-eyebrow">COMPLETE YOUR SANCTUM</span>
              <h3 className="related-title">Frequently Paired Sacred Offerings</h3>
            </div>

            <div className="related-cards-grid">
              {relatedOfferings.map((rel) => (
                <div 
                  key={rel.id} 
                  className="related-item-card"
                  onClick={() => onSelectRelated && onSelectRelated(rel)}
                >
                  <div className="related-media-wrap">
                    <img src={rel.image} alt={rel.name} />
                  </div>
                  <div className="related-info-wrap">
                    <span className="related-cat-label">{rel.categoryLabel}</span>
                    <h4 className="related-prod-name">{rel.name}</h4>
                    <span className="related-price">₹{rel.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

