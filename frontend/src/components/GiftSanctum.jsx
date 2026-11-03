import React from 'react';
import { ArrowRight, Sparkles, Gift } from 'lucide-react';

import gift1Img from '../assets/gift1.png';
import gift2Img from '../assets/gift2.png';
import gift3Img from '../assets/gift3.png';

export default function GiftSanctum({ onAddToCart, onExploreGifts }) {
  const hampers = [
    {
      id: 'hamper-1',
      name: 'The Royal Kashi Festive Box',
      badge: '✦ Royal Festive Box ✦',
      provenance: 'Temple Brass & Silk',
      subtitle: 'A grand festive heirloom chest featuring a solid bell-brass Akhand Diya, hand-carved Nandi temple bell, embossed kumkum box, incense stand, and sacred altar cloth.',
      price: 2890,
      originalPrice: 3490,
      image: gift1Img,
      highlights: [
        'Brass Akhand Diya',
        'Nandi Temple Bell',
        'Sacred Altar Cloth'
      ]
    },
    {
      id: 'hamper-2',
      name: 'Sacred Ganga Jal & Lotus Diya Box',
      badge: '✦ Ganga Jal & Brass ✦',
      provenance: 'Holy Ganga Abhishek',
      subtitle: 'Two consecrated Kashi Ganga Jal glass vessels paired with a handcrafted solid brass lotus diya, embossed brass container, temple incense, and signature canvas potli.',
      price: 1850,
      originalPrice: 2200,
      image: gift2Img,
      highlights: [
        '2x Sacred Ganga Jal Bottles',
        'Brass Lotus Diya',
        'Signature Canvas Potli'
      ]
    },
    {
      id: 'hamper-3',
      name: 'Vedic Brass Poojan Treasury',
      badge: '✦ Heritage Brass Treasury ✦',
      provenance: 'Thatheri Guild Forged',
      subtitle: 'A mastercrafted bell-metal poojan collection featuring hand-hammered lidded brass containers, an ornate aarti diya, temple incense stand, and a sacred Vedic blessing scroll.',
      price: 2450,
      originalPrice: 2950,
      image: gift3Img,
      highlights: [
        'Ornate Brass Aarti Diya',
        'Hand-Hammered Brass Ware',
        'Vedic Blessing Scroll'
      ]
    }
  ];

  return (
    <section id="gifting" className="gift-sanctum-section">
      <div className="container">
        
        {/* Section Eyebrow & Title */}
        <div className="gift-sanctum-header">
          <div className="gift-eyebrow">
            <span className="gold-star">✦</span>
            <span>CURATED KASHI SANCTUM</span>
            <span className="gold-star">✦</span>
          </div>
          <h2 className="gift-heading">
            Sacred Gift Hampers of Varanasi
          </h2>
          <p className="gift-subheading">
            Handcrafted bell-brass keepsakes, sacred temple fragrances, and consecrated Ganga offerings, thoughtfully presented in gold-embossed keepsake boxes.
          </p>
        </div>

        {/* 3-Column Luxury Hampers Grid */}
        <div className="gift-cards-trio-grid">
          {hampers.map((hamper) => (
            <div key={hamper.id} className="hamper-luxury-card">
              
              {/* Media Container */}
              <div className="hamper-card-media">
                <img 
                  src={hamper.image} 
                  alt={hamper.name} 
                  className="hamper-card-img"
                  loading="lazy"
                />
                <span className="hamper-badge-pill">{hamper.badge}</span>
                <div className="hamper-img-gradient" />
              </div>

              {/* Card Body */}
              <div className="hamper-card-body">
                
                {/* Refined Provenance Pill */}
                <div className="hamper-meta-row">
                  <span className="hamper-provenance-pill">{hamper.provenance}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="hamper-card-title">{hamper.name}</h3>
                <p className="hamper-card-sub">{hamper.subtitle}</p>

                {/* Elegant Highlights Tags (Replaces the clunky dashed box) */}
                <div className="hamper-highlights-wrap">
                  <span className="highlights-label">SACRED CURATION</span>
                  <div className="hamper-highlights-pills">
                    {hamper.highlights.map((item, idx) => (
                      <span key={idx} className="hamper-highlight-chip">
                        <span className="chip-dot">✦</span>
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Price & CTA */}
                <div className="hamper-card-footer">
                  <div className="hamper-price-group">
                    <span className="hamper-current-price">₹{hamper.price}</span>
                    <span className="hamper-old-price">₹{hamper.originalPrice}</span>
                  </div>

                  <button 
                    type="button" 
                    className="btn-hamper-action"
                    onClick={() => onAddToCart && onAddToCart(hamper)}
                  >
                    <Gift size={15} />
                    <span>ADD TO CART</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Full-Width Bespoke Gifting Concierge Banner */}
        <div className="gift-concierge-banner">
          <div className="concierge-banner-glow" />
          <div className="concierge-banner-text">
            <span className="concierge-banner-badge">
              <Sparkles size={12} className="gold-icon" />
              <span>BESPOKE WEDDINGS & CORPORATE SANCTUM</span>
            </span>
            <h3>Curating Bespoke Keepsakes & Grand Hampers</h3>
            <p>
              Handcrafted brassware with custom family inscriptions, personalized Vedic scrolls, consecrated Varanasi Ganga Jal, and luxury gift presentation for 25+ orders.
            </p>
          </div>

          <button 
            type="button" 
            className="btn-concierge-gold"
            onClick={() => onExploreGifts && onExploreGifts()}
          >
            <span>Inquire with Sanctum Concierge</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}
