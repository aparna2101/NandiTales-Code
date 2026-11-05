import React, { useState } from 'react';
import {
  Sparkles,
  Gift,
  Check,
  ShieldCheck,
  Heart,
  ArrowRight,
  MessageCircle,
  Package,
  Feather,
  Flame,
  Droplet,
  CheckCircle2,
  X
} from 'lucide-react';
import './gifting.css';

import giftingPageBannerImg from '../assets/giftingpagebanner.png';
import g1Img from '../assets/g1.png';
import g2Img from '../assets/g2.png';
import g3Img from '../assets/g3.png';
import g4Img from '../assets/g4.png';
import g5Img from '../assets/g5.png';
import gift1Img from '../assets/gift1.png';
import gift2Img from '../assets/gift2.png';
import gift3Img from '../assets/gift3.png';
import diyasetBoxImg from '../assets/diyasetbox.png';
import sarnathBoxImg from '../assets/fullsarnathproduct.png';
import archCleanDiya from '../assets/arch_clean_diya.png';
import archCleanIncense from '../assets/arch_clean_incense.png';
import product100mlImg from '../assets/product100ml.png';
import archCleanHamper from '../assets/arch_clean_hamper.png';

export function GiftingPage({ onAddToCart, onExploreShop }) {
  const [addedSuiteId, setAddedSuiteId] = useState(null);
  const [addedKeepsakeId, setAddedKeepsakeId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // 5 Sacred Gifting Categories
  const archCategories = [
    {
      id: 'cat-gift-boxes',
      filterKey: 'weddings',
      label: 'Gift Boxes',
      tagline: 'Handcrafted Keepsakes',
      image: g1Img,
      alt: 'Luxury Green Gift Box with Gold Ribbon'
    },
    {
      id: 'cat-pooja-essentials',
      filterKey: 'festive',
      label: 'Pooja Essentials',
      tagline: 'Solid Temple Brass',
      image: g2Img,
      alt: 'Consecrated Solid Brass Lotus Diya'
    },
    {
      id: 'cat-incense-sets',
      filterKey: 'spiritual',
      label: 'Incense Gift Sets',
      tagline: 'Sacred Temple Pushpa',
      image: g3Img,
      alt: 'Sacred Temple Incense Sticks with Brass Holder'
    },
    {
      id: 'cat-gangajal-hampers',
      filterKey: 'housewarming',
      label: 'Ganga Jal Hampers',
      tagline: 'Holy River Sanctum',
      image: g4Img,
      alt: 'Holy Dashashwamedh Ganga Jal Flacon Bottle'
    },
    {
      id: 'cat-curated-hampers',
      filterKey: 'all',
      label: 'Curated Hampers',
      tagline: 'Royal Banaras Suites',
      image: g5Img,
      alt: 'Curated Varanasi Gift Keepsakes and Hampers'
    }
  ];

  const handleArchCategorySelect = (filterKey) => {
    setActiveFilter(filterKey);
    const target = document.getElementById('curated-keepsakes');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form states for Bespoke Concierge
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: 'Royal Wedding (Vivah)',
    quantity: '25 - 50 Boxes',
    notes: ''
  });

  // Curated Keepsake Gift Boxes
  const keepsakesList = [
    {
      id: 'keepsake-vivah',
      title: 'The Royal Kashi Festive Box',
      provenance: 'Banaras Raj Gharana',
      category: 'weddings',
      badge: '✦ Wedding Shagun ✦',
      discount: '17% OFF',
      desc: 'Solid bell-brass Akhand Diya, acoustic temple bell, embossed kumkum box, and consecrated altar silk.',
      price: 2890,
      mrp: 3490,
      image: gift1Img,
      items: ['Solid Bell-Brass Diya', 'Nandi Temple Bell', 'Embossed Kumkum Box', 'Pure Altar Silk']
    },
    {
      id: 'keepsake-ganga-lotus',
      title: 'Sacred Ganga Jal & Lotus Diya Box',
      provenance: 'Ganga Abhishek Tradition',
      category: 'housewarming',
      badge: '✦ Grah Pravesh ✦',
      discount: '16% OFF',
      desc: 'Authentic Dashashwamedh holy Ganga Jal flacons paired with hand-cast solid brass Lotus diya & offering bowl.',
      price: 1850,
      mrp: 2200,
      image: gift2Img,
      items: ['2x Ganga Jal Flacons', 'Solid Brass Lotus Diya', 'Brass Offering Bowl', 'Canvas Potli']
    },
    {
      id: 'keepsake-vedic-treasury',
      title: 'Vedic Brass Poojan Treasury',
      provenance: 'Temple Aarti Sanctum',
      category: 'festive',
      badge: '✦ Deepotsav Special ✦',
      discount: '17% OFF',
      desc: 'Ornate handheld Aarti Diya with dual lidded brass pots, pure camphor, and handcrafted blessing scroll.',
      price: 2450,
      mrp: 2950,
      image: gift3Img,
      items: ['Ornate Aarti Diya', 'Dual Lidded Pots', 'Acoustic Kansa Bell', 'Blessing Scroll']
    },
    {
      id: 'keepsake-lotus-diyas-4',
      title: 'Lotus Brass Diya Keepsake Box (Set of 4)',
      provenance: 'Varanasi Metal Craft',
      category: 'festive',
      badge: '✦ Festive Illumination ✦',
      discount: '19% OFF',
      desc: 'Set of four hand-polished solid brass lotus lamps packed in a foil-stamped imperial keepsake presentation box.',
      price: 1290,
      mrp: 1590,
      image: diyasetBoxImg,
      items: ['4x Solid Brass Lotus Diyas', 'Acoustic Bell-Metal', 'Golden Lidded Gift Box']
    },
    {
      id: 'keepsake-sarnath-sanctuary',
      title: 'Sarnath Sanctuary Presentation Box',
      provenance: 'Bodhi Grove Aromatherapy',
      category: 'spiritual',
      badge: '✦ Daily Peace & Dhyan ✦',
      discount: '18% OFF',
      desc: 'Rare Bodhi & white wood resin sticks with hand-carved reclaimed teakwood incense stand in a handcrafted sanctum box.',
      price: 1190,
      mrp: 1450,
      image: sarnathBoxImg,
      items: ['Bodhi & White Wood Resins', 'Natural Wood Dhoop Stand', '20 Consecrated Sticks']
    }
  ];

  const filteredKeepsakes = activeFilter === 'all'
    ? keepsakesList
    : keepsakesList.filter(item => item.category === activeFilter);

  // 3 Master Bespoke Gifting Suites
  const masterSuites = [
    {
      id: 'suite-mangal-shagun',
      badge: '✦ Royal Wedding & Shagun ✦',
      provenance: 'Banaras Raj Gharana Tradition',
      title: 'The Vivah & Mangal Shagun Suite',
      summary: 'Consecrated as an auspicious family heirloom for sacred weddings, royal invites, and milestone family celebrations in Varanasi.',
      price: 2890,
      originalPrice: 3490,
      image: gift1Img,
      packagingNote: 'Encased in a forest green royal casket sealed with raw silk and consecrated red Mauli cord.',
      contents: [
        'Solid Bell-Brass Akhand Diya',
        'Hand-Carved Nandi Temple Bell',
        'Embossed Brass Kumkum Box',
        'Pure Vishwanath Temple Incense',
        'Sacred Altar Handloom Silk Cloth',
        'Natural Bhimseni Camphor Pellets'
      ]
    },
    {
      id: 'suite-grah-pravesh',
      badge: '✦ Housewarming & New Beginnings ✦',
      provenance: 'Holy Ganga Abhishek Snan',
      title: 'The Grah Pravesh Sanctum Box',
      summary: 'Crafted to consecrate a new threshold with divine protection, sacred river blessings, and resonant acoustic bell-metal vibrations.',
      price: 1850,
      originalPrice: 2200,
      image: gift2Img,
      packagingNote: 'Natural seasoned wood box lined with ivory handloom muslin and sealed with Varanasi red wax.',
      contents: [
        '2x Sacred Kashi Ganga Jal Flacons',
        'Solid Brass Blooming Lotus Diya',
        'Hand-Hammered Brass Offering Bowl',
        'White Wood Sarnath Sanctuary Incense',
        'Signature Heritage Canvas Potli Bag',
        'Vedic Threshold Shubh Labh Scroll'
      ]
    },
    {
      id: 'suite-vedic-treasury',
      badge: '✦ Festive Heirloom Keepsake ✦',
      provenance: 'Thatheri Artisan Guild Forged',
      title: 'The Vedic Brass Poojan Treasury',
      summary: 'A mastercrafted collector poojan treasury honoring the ancient metalworking guilds of Varanasi, built to endure for generations.',
      price: 2450,
      originalPrice: 2950,
      image: gift3Img,
      packagingNote: 'Gold-embossed rigid keepsake presentation box with handcrafted brass latch.',
      contents: [
        'Ornate Handcrafted Brass Aarti Diya',
        'Dual Lidded Bell-Brass Canisters',
        'Acoustic Kansa Chime Bell',
        'Temple Pushpa Charcoal-Free Dhoop',
        'Consecrated Dashashwamedh Snan Water',
        'Vedic Calligraphy Blessing Certificate'
      ]
    }
  ];

  const handleAddSuite = (suite) => {
    if (onAddToCart) {
      onAddToCart({
        id: suite.id,
        name: suite.title,
        price: suite.price,
        image: suite.image,
        category: 'Gifting Suite'
      });
    }
    setAddedSuiteId(suite.id);
    setTimeout(() => setAddedSuiteId(null), 1800);
  };

  const handleAddKeepsake = (item) => {
    if (onAddToCart) {
      onAddToCart({
        id: item.id,
        name: item.title,
        price: item.price,
        image: item.image,
        category: 'Gifting Keepsake',
        volume: 'Curated Gift Box'
      });
    }
    setAddedKeepsakeId(item.id);
    setTimeout(() => setAddedKeepsakeId(null), 2000);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setIsInquiryModalOpen(false);
      setInquirySubmitted(false);
    }, 2500);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="gifting-page-master">

      {/* 1. Hero Panoramic Editorial Banner (Exact Reference Template) */}
      <section className="gifting-template-banner-section">
        <div className="gifting-template-banner-bg">
          <img
            src={giftingPageBannerImg}
            alt="The Art of Gifting - Sacred Offerings from Varanasi"
            className="gifting-template-banner-img"
          />
        </div>

        <div className="gifting-template-banner-content-wrap">
          <div className="gifting-editorial-card-left">

            {/* Lotus Ornament with Golden Filigree Wings */}
            <div className="gifting-lotus-ornament" aria-hidden="true">
              <span className="ornament-wing-line left" />
              <svg className="lotus-glyph" viewBox="0 0 36 24" width="34" height="22" fill="none">
                <path d="M18 2C18 2 11 10 11 17C11 21 14 23 18 23C22 23 25 21 25 17C25 10 18 2 18 2Z" fill="#C89443" />
                <path d="M18 9C16 13 11 16 7 18C4 19.5 4 21.5 6 22.5C9 23.5 13 22 16 18C17 17 17.5 15.5 18 14V9Z" fill="#D4A359" opacity="0.95" />
                <path d="M18 9C20 13 25 16 29 18C32 19.5 32 21.5 30 22.5C27 23.5 23 22 20 18C19 17 18.5 15.5 18 14V9Z" fill="#D4A359" opacity="0.95" />
                <path d="M18 15C15 17.5 9 21 3 21C0.5 21 0 22.5 1.5 23.5C4 24.5 10 23.5 15 20.5C16.5 19.5 17.5 18.5 18 17V15Z" fill="#E5B96E" opacity="0.85" />
                <path d="M18 15C21 17.5 27 21 33 21C35.5 21 36 22.5 34.5 23.5C32 24.5 26 23.5 21 20.5C19.5 19.5 18.5 18.5 18 17V15Z" fill="#E5B96E" opacity="0.85" />
              </svg>
              <span className="ornament-wing-line right" />
            </div>

            <h1 className="gifting-headline-main">The Art of Gifting</h1>
            <p className="gifting-headline-subtitle">
              Share the essence of Kashi with your loved ones
            </p>
          </div>
        </div>

        {/* Scalloped Wave Divider at Banner Base */}
        <div className="gifting-base-scallop-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 54" preserveAspectRatio="none">
            <path
              d="M0,28 C280,50 480,12 720,24 C960,36 1180,50 1440,28 L1440,54 L0,54 Z"
              fill="#FAF7F2"
            />
          </svg>
        </div>
      </section>

      {/* 2. Sacred Gifting Categories Showcase */}
      <section id="gifting-categories" className="gifting-arch-categories-section">
        <div className="container gifting-categories-container">

          {/* Centered Editorial Header */}
          <div className="gifting-cat-header-centered">
            <span className="gifting-cat-eyebrow">✦ SACRED OFFERINGS ✦</span>
            <h2 className="gifting-cat-title">Gifting Categories</h2>

            <div className="gifting-cat-lotus-line" aria-hidden="true">
              <span className="gifting-cat-gold-rule" />
              <span className="gifting-cat-gold-diamond">◆</span>
              <svg className="gifting-cat-lotus-glyph" viewBox="0 0 38 24" width="34" height="22" fill="none">
                <path d="M19 3 C19 3 13 11 13 17 C13 20.5 15.5 22 19 22 C22.5 22 25 20.5 25 17 C25 11 19 3 19 3 Z" stroke="#C89443" strokeWidth="1.3" />
                <path d="M19 10 C16 13.5 11.5 16.5 7 18 C5 19 5 20.5 7 21.5 C10 22 13.5 20.5 16.5 17" stroke="#C89443" strokeWidth="1.2" />
                <path d="M19 10 C22 13.5 26.5 16.5 31 18 C33 19 33 20.5 31 21.5 C28 22 24.5 20.5 21.5 17" stroke="#C89443" strokeWidth="1.2" />
                <path d="M17 18 C13.5 19.5 9 21 3.5 21 C2 21 2 22 3.5 23 C6.5 23.5 11 22.5 15.5 20" stroke="#C89443" strokeWidth="1.1" />
                <path d="M21 18 C24.5 19.5 29 21 34.5 21 C36 21 36 22 34.5 23 C31.5 23.5 27 22.5 22.5 20" stroke="#C89443" strokeWidth="1.1" />
              </svg>
              <span className="gifting-cat-gold-diamond">◆</span>
              <span className="gifting-cat-gold-rule" />
            </div>

            <p className="gifting-cat-subtitle">
              Find the perfect sacred offering, hand-crafted with tradition and consecrated in Kashi.
            </p>
          </div>

          {/* 5 Balanced Luxury Showcase Cards */}
          <div className="gifting-cat-cards-grid">
            {archCategories.map((cat) => {
              const isActive = activeFilter === cat.filterKey;
              return (
                <div
                  key={cat.id}
                  className={`gifting-luxury-category-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleArchCategorySelect(cat.filterKey)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleArchCategorySelect(cat.filterKey);
                    }
                  }}
                >
                  <div className="cat-card-img-wrapper">
                    <div className="cat-card-ambient-glow" aria-hidden="true" />
                    <img
                      src={cat.image}
                      alt={cat.alt}
                      className={`cat-card-product-img product-${cat.id}`}
                      loading="eager"
                    />
                  </div>

                  <div className="cat-card-info-wrap">
                    <h3 className="cat-card-name">{cat.label}</h3>
                    <span className="cat-card-tagline">{cat.tagline}</span>
                    <span className="cat-card-arrow-link">
                      <span>Explore</span>
                      <ArrowRight size={13} className="cat-link-icon" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. Occasions of Sanctity — 3 Master Bespoke Suites */}
      <section id="master-suites" className="gifting-suites-section">
        <div className="container">

          <div className="gifting-section-header">
            <span className="gifting-sec-eyebrow">✦ SACRED RITUAL OCCASIONS ✦</span>
            <h2 className="gifting-sec-heading">The Master Gifting Suites</h2>
            <p className="gifting-sec-sub">
              Each suite is individually assembled by master artisans in Varanasi, wrapped in sacred silk,
              and sanctified with temple-flower dhoop before dispatch.
            </p>
          </div>

          <div className="gifting-suites-list">
            {masterSuites.map((suite, index) => {
              const isAdded = addedSuiteId === suite.id;
              const isReverse = index % 2 === 1;

              return (
                <article
                  key={suite.id}
                  className={`gifting-suite-card ${isReverse ? 'reverse' : ''}`}
                >
                  {/* Visual Media Column */}
                  <div className="suite-media-col">
                    <span className="suite-insignia-badge">{suite.badge}</span>
                    <img
                      src={suite.image}
                      alt={suite.title}
                      className="suite-real-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Editorial Content Column */}
                  <div className="suite-content-col">
                    <span className="suite-provenance">{suite.provenance}</span>
                    <h3 className="suite-title">{suite.title}</h3>
                    <p className="suite-summary">{suite.summary}</p>

                    {/* Breakdown of Box Contents */}
                    <div className="suite-contents-box">
                      <span className="contents-box-label">Sanctum Contents Included:</span>
                      <ul className="contents-items-grid">
                        {suite.contents.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="suite-packaging-note">
                      <Package size={16} color="#E5A93C" />
                      <span>{suite.packagingNote}</span>
                    </div>

                    <div className="suite-bottom-row">
                      <div className="suite-price-stack">
                        <span className="suite-price-current">₹{suite.price}</span>
                        <span className="suite-price-original">MRP ₹{suite.originalPrice}</span>
                      </div>

                      <button
                        type="button"
                        className={`suite-add-btn ${isAdded ? 'added' : ''}`}
                        onClick={() => handleAddSuite(suite)}
                      >
                        {isAdded ? (
                          <>
                            <Check size={16} />
                            <span>Added to Bag</span>
                          </>
                        ) : (
                          <>
                            <Gift size={16} />
                            <span>Add to Sacred Bag</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>



      {/* 4. The Banaras Packaging Craft Story */}
      <section className="gifting-packaging-section">
        <div className="container">

          <div className="gifting-section-header">
            <span className="gifting-sec-eyebrow">✦ SACRED CRAFTSMANSHIP ✦</span>
            <h2 className="gifting-sec-heading">The Varanasi Unboxing Experience</h2>
            <p className="gifting-sec-sub">
              Every package leaves our Dashashwamedh workshop with mindful reverence for both tradition and nature.
            </p>
          </div>

          <div className="packaging-pillars-grid">
            <div className="packaging-pillar-card">
              <div className="pillar-icon-wrap">
                <Sparkles size={22} />
              </div>
              <h4 className="unboxing-pillar-title">100% Plastic-Free</h4>
              <p className="unboxing-pillar-desc">
                Handmade cotton-rag paper, seasoned wood, and raw cotton potlis that honor the river Ganges.
              </p>
            </div>

            <div className="packaging-pillar-card">
              <div className="pillar-icon-wrap">
                <Heart size={22} />
              </div>
              <h4 className="unboxing-pillar-title">Hand-Stitched Silk</h4>
              <p className="unboxing-pillar-desc">
                Soft inner linings stitched from Banarasi handloom brocade scraps by local women artisans.
              </p>
            </div>

            <div className="packaging-pillar-card">
              <div className="pillar-icon-wrap">
                <Droplet size={22} />
              </div>
              <h4 className="unboxing-pillar-title">Ganga Snan Consecrated</h4>
              <p className="unboxing-pillar-desc">
                Every brass vessel is cleansed with fresh morning holy Ganga water at Dashashwamedh Ghat.
              </p>
            </div>

            <div className="packaging-pillar-card">
              <div className="pillar-icon-wrap">
                <ShieldCheck size={22} />
              </div>
              <h4 className="unboxing-pillar-title">Red Mauli Seal</h4>
              <p className="unboxing-pillar-desc">
                Sealed with sacred hand-twisted cotton Raksha thread and an authentic Kashi wax seal.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Destination Wedding & Bulk Corporate Concierge */}
      <section id="concierge" className="gifting-concierge-section">
        <div className="container">

          <div className="concierge-banner-box">
            <div className="concierge-text-side">
              <span className="concierge-eyebrow">✦ PRIVATE PATRON SERVICES ✦</span>
              <h3 className="concierge-title">Royal Weddings & Corporate Sanctum</h3>
              <p className="concierge-desc">
                Planning a destination wedding, auspicious family milestone, or executive gifting?
                Our private concierge assists with customized brass monograms, tailored fragrance profiles,
                and white-glove doorstep delivery across India and worldwide spiritual destinations.
              </p>

              <div className="concierge-badges-strip">
                <span className="concierge-tag">✦ Custom Brass Engraving</span>
                <span className="concierge-tag">✦ Minimum Order 20 Units</span>
                <span className="concierge-tag">✦ Global Express Shipping</span>
              </div>
            </div>

            <div className="concierge-action-side">
              <a
                href="https://wa.me/919999999999?text=Namaste%20Nandi%20Tales%2C%20I%20would%20like%20to%20inquire%20about%20bespoke%20gifting%20hampers."
                target="_blank"
                rel="noopener noreferrer"
                className="concierge-whatsapp-btn"
              >
                <MessageCircle size={18} />
                <span>Chat with Gifting Concierge</span>
              </a>

              <button
                type="button"
                className="concierge-inquiry-btn"
                onClick={() => setIsInquiryModalOpen(true)}
              >
                Request Bespoke Proposal
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Bespoke Inquiry Modal */}
      {isInquiryModalOpen && (
        <div className="search-modal-backdrop" onClick={() => setIsInquiryModalOpen(false)}>
          <div className="search-modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div className="search-modal-header">
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', color: 'var(--color-kashi-green)' }}>
                Bespoke Gifting Concierge
              </h3>
              <button
                type="button"
                className="search-close-btn"
                onClick={() => setIsInquiryModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {inquirySubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={48} color="#2E7D32" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', color: '#08241D', margin: '0 0 8px' }}>
                  Blessings! Proposal Requested
                </h4>
                <p style={{ color: '#57534E', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Our Kashi Sanctum Concierge will contact you within 4 hours with curated hampers and wholesale arrangements.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#08241D', display: 'block', marginBottom: '5px' }}>
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Singhania"
                    style={{ width: '100%', boxSizing: 'border-box', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(214,154,66,0.5)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#08241D', display: 'block', marginBottom: '5px' }}>
                    PHONE / WHATSAPP NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    style={{ width: '100%', boxSizing: 'border-box', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(214,154,66,0.5)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#08241D', display: 'block', marginBottom: '5px' }}>
                    GIFTING OCCASION
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    style={{ width: '100%', boxSizing: 'border-box', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(214,154,66,0.5)', outline: 'none' }}
                  >
                    <option value="Royal Wedding (Vivah)">Royal Wedding (Vivah & Shagun)</option>
                    <option value="Grah Pravesh">Grah Pravesh (Housewarming)</option>
                    <option value="Executive Corporate Gifting">Executive Corporate Gifting</option>
                    <option value="Festive Diwali Hampers">Festive Diwali / Mahaparv Hampers</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#08241D', display: 'block', marginBottom: '5px' }}>
                    ESTIMATED QUANTITY
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    style={{ width: '100%', boxSizing: 'border-box', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(214,154,66,0.5)', outline: 'none' }}
                  >
                    <option value="20 - 50 Boxes">20 – 50 Boxes</option>
                    <option value="50 - 150 Boxes">50 – 150 Boxes</option>
                    <option value="150+ Boxes">150+ Boxes (Destination Milestone)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  style={{
                    background: '#08241D',
                    color: '#F8D675',
                    border: '1px solid #D69A42',
                    borderRadius: '99px',
                    padding: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    marginTop: '8px',
                    textTransform: 'uppercase'
                  }}
                >
                  Submit Sanctum Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default GiftingPage;

