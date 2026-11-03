import React from 'react';
import { ArrowRight } from 'lucide-react';
import battiImg from '../assets/batti.png';
import {
  IncenseSmokeEffect,
  DiyaFlameEffect,
  PoojanKitEffect,
  SacredGiftsPetalsEffect
} from './LivingCardEffects';

export default function Collections({ onSelectCollection }) {
  const collections = [
    {
      id: 'incense',
      title: 'Incense Sticks',
      description: "Fragrances inspired by Kashi's temples, rituals and seasons.",
      image: battiImg,
      renderEffect: () => <IncenseSmokeEffect />
    },
    {
      id: 'diyas',
      title: 'Diyas & Ritual Essentials',
      description: 'Objects for everyday prayers and special rituals.',
      image: '/images/clean_card_diyas.png',
      renderEffect: () => <DiyaFlameEffect />
    },
    {
      id: 'poojan-kits',
      title: 'Poojan Kits',
      description: 'Curated kits for home prayers, gifting and sacred occasions.',
      image: '/images/clean_card_poojan_kits.png',
      renderEffect: () => <PoojanKitEffect />
    },
    {
      id: 'sacred-gifts',
      title: 'Sacred Gifts',
      description: 'Meaningful objects from Kashi for your loved ones.',
      image: '/images/clean_card_sacred_gifts.png',
      renderEffect: () => <SacredGiftsPetalsEffect />
    }
  ];

  return (
    <section id="collections" className="collections-master-section">
      <div className="collections-full-container">
        
        {/* Dignified Banaras Heritage Section Lead */}
        <div className="collections-header-bar">
          <div className="collections-eyebrow-row">
            <span className="collections-sparkle" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.4 4.6L12 6L7.4 7.4L6 12L4.6 7.4L0 6L4.6 4.6L6 0Z" />
              </svg>
            </span>
            <span className="collections-eyebrow">SACRED OFFERINGS OF KASHI</span>
            <span className="collections-sparkle" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.4 4.6L12 6L7.4 7.4L6 12L4.6 7.4L0 6L4.6 4.6L6 0Z" />
              </svg>
            </span>
          </div>
          <h2 className="collections-section-heading">Curated Temple Collections</h2>
        </div>

        {/* 4 Cards with Living Realistic Animations */}
        <div className="collections-cards-grid">
          {collections.map((item) => (
            <div 
              key={item.id} 
              className="collection-item-card"
              onClick={() => onSelectCollection && onSelectCollection(item.title)}
            >
              {/* Text & Action (on LEFT) */}
              <div className="card-details-box">
                <h3 className="card-item-title">{item.title}</h3>
                <p className="card-item-desc">{item.description}</p>
                <div className="card-explore-link">
                  <span>EXPLORE</span>
                  <ArrowRight size={13} className="link-arrow" />
                </div>
              </div>

              {/* Product Visual + Living Code Animation (on RIGHT) */}
              <div className="card-visual-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="card-product-img"
                  loading="lazy" 
                />
                {/* Real-time living animation layer */}
                {item.renderEffect && item.renderEffect()}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
