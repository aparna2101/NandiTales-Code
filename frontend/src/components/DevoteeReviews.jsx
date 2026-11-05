import React, { useState } from 'react';
import { Star, ShieldCheck, Heart, Sparkles, Quote } from 'lucide-react';

export default function DevoteeReviews() {
  const reviews = [
    {
      id: 1,
      name: 'Dr. Meenakshi Sundaram',
      location: 'Mylapore, Chennai',
      verified: 'Verified Patron',
      offering: 'Vishwanath Incense & Kamakshi Diya',
      rating: 5,
      date: 'Aswina Purnima, 2026',
      quote: 'The moment we lit the Vishwanath incense in our puja room, the sanctified aroma transported our family directly to the morning aarti at Kashi Vishwanath. The handcrafted pure brass diya has a radiant warm glow that burns for hours. Pure divine devotion.'
    },
    {
      id: 2,
      name: 'Raghavendra K. Sharma',
      location: 'Sigra, Varanasi',
      verified: 'Local Patron',
      offering: 'The Manikarnika Presentation Box',
      rating: 5,
      date: 'Kartika Pratipada, 2026',
      quote: 'Living in Varanasi, I know how hard it is to find authentic Thatheri hand-beaten brass rather than cheap cast factory imitations. Nandi Tales has preserved the sacred heritage of our city’s generational karigars. The weight of the brass and packaging is extraordinary.'
    },
    {
      id: 3,
      name: 'Ananya & Siddharth Deshmukh',
      location: 'Koregaon Park, Pune',
      verified: 'Verified Patron',
      offering: 'Vedic Griha Pravesh Poojan Box',
      rating: 5,
      date: 'Shardiya Navratri, 2026',
      quote: 'We ordered 35 gift hampers for our new home consecration ceremony. Every single relative called us praising the gold foil box and handwritten blessings. The natural chandan dhoop contains zero charcoal, just pure flower petals and sacred herbs.'
    }
  ];

  return (
    <section className="devotee-reviews-section">
      <div className="container">
        
        {/* Header */}
        <div className="reviews-section-header">
          <div className="reviews-eyebrow">
            <span className="gold-star">✦</span>
            <span>VOICES OF DEVOTION</span>
            <span className="gold-star">✦</span>
          </div>
          <h2 className="reviews-heading">
            Cherished in Over 10,000 Sacred Homes
          </h2>
          <p className="reviews-subheading">
            Read heartfelt reflections from patrons who have brought the sanctified fragrances and sacred brassware of Kashi into their daily rituals.
          </p>

          {/* Aggregate Rating Trust Bar */}
          <div className="reviews-stat-pill">
            <div className="stat-stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>
            <span className="stat-score">4.97 / 5.0</span>
            <span className="stat-divider">•</span>
            <span className="stat-count">Over 1,480+ Consecrated Reviews</span>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="reviews-cards-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="devotee-card">
              
              {/* Top Accent Icon & Rating */}
              <div className="devotee-card-top">
                <div className="devotee-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <Quote size={24} className="devotee-quote-mark" />
              </div>

              {/* Review Text */}
              <p className="devotee-text">
                "{rev.quote}"
              </p>

              {/* Offering Tag */}
              <div className="devotee-offering-tag">
                <Sparkles size={11} className="gold-star" />
                <span>Sanctified Offering: <strong>{rev.offering}</strong></span>
              </div>

              {/* Author Footer */}
              <div className="devotee-card-author">
                <div className="author-avatar">
                  <span>{rev.name.charAt(0)}</span>
                </div>
                <div className="author-info">
                  <div className="author-name-row">
                    <span className="author-name">{rev.name}</span>
                    <span className="verified-badge" title="Verified Customer">
                      <ShieldCheck size={12} />
                      <span>{rev.verified}</span>
                    </span>
                  </div>
                  <span className="author-loc">{rev.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="reviews-trust-strip">
          <div className="trust-badge-item">
            <ShieldCheck size={20} className="gold-icon" />
            <div>
              <strong>100% Pure Brass & Organic Herbs</strong>
              <span>Zero chemical fillers, zero synthetic charcoal</span>
            </div>
          </div>
          <div className="trust-strip-line" />
          <div className="trust-badge-item">
            <Sparkles size={20} className="gold-icon" />
            <div>
              <strong>Consecrated in Kashi</strong>
              <span>Blessed on the banks of Holy River Ganga</span>
            </div>
          </div>
          <div className="trust-strip-line" />
          <div className="trust-badge-item">
            <Heart size={20} className="gold-icon" />
            <div>
              <strong>Fair Karigar Remuneration</strong>
              <span>Direct guild patronage to Varanasi brassmasters</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
