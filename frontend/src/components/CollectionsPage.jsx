import React, { useState, useEffect, useRef } from 'react';
import {
  ShoppingBag,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Check,
  Sparkles
} from 'lucide-react';

// Exact authentic packaging & editorial assets
import vishwanathImg from '../assets/vishwanathproduct.png';
import manikarnikaImg from '../assets/manikarnikaproduct.png';
import assiImg from '../assets/assiproduct.png';
import dashashwamedhImg from '../assets/dashshamedhproduct.png';
import tulsiImg from '../assets/tulsighatproduct.png';
import sarnathImg from '../assets/sarnathproduct.png';
import fullSarnathImg from '../assets/fullsarnathproduct.png';
import diyaSetImg from '../assets/diyasetproduct.png';
import allProductsImg from '../assets/allproduct.png';
import gangajal100FullImg from '../assets/product100mlfull.png';
import gangajal500Img from '../assets/product500ml.png';
import gangajal1LImg from '../assets/product1litre.png';
import collectionPageBg from '../assets/collectionpagebg.png';
import collectionVideo from '../assets/collection.mp4';
import manufacturingVideo from '../assets/manufacturingproductvideo.mp4';

export default function CollectionsPage({ onAddToCart, onNavigateToShop }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [addedItem, setAddedItem] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // If URL has a hash anchor, smoothly scroll to that section
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleAdd = (item) => {
    setAddedItem(item.id);
    if (onAddToCart) onAddToCart(item);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <div className="collections-page-master">

      {/* 1. Header Banner with collectionpagebg.png Backdrop */}
      <section className="collections-hero-banner">
        <div className="collections-video-bg-layer" aria-hidden="true">
          <img
            src={collectionPageBg}
            alt="Flagship Collections Living Heritage"
            className="collections-bg-img"
          />
          <div className="collections-video-overlay" />
        </div>

        <div className="container collections-hero-inner">
          <span className="collections-eyebrow">✦ SACRED REPERTOIRE • KASHI LIVING HERITAGE ✦</span>
          <h1 className="collections-main-title">Our Collections</h1>
        </div>
      </section>


      {/* =================================================================
          COLLECTION 1: THE 5 SACRED GHATS INCENSE SERIES
          ================================================================= */}
      <section id="ghats-series" className="collection-feature-block">
        <div className="container">

          {/* Editorial Split Banner */}
          <div className="collection-editorial-banner">
            <div className="collection-banner-media">
              <img
                src={allProductsImg}
                alt="The 5 Sacred Ghats Complete Treasury Collection"
                className="collection-banner-img"
              />
              <span className="collection-flagship-tag">FLAGSHIP INCENSE SERIES</span>
            </div>

            <div className="collection-banner-content">
              <span className="coll-num-badge">COLLECTION I • PANCH TIRTHA</span>
              <h2 className="coll-heading">The 5 Sacred Ghats Series</h2>
              <div className="coll-sanskrit-line">पञ्चतीर्थ महापुण्यं सर्वपाप प्रणाशनम्</div>

              <p className="coll-description">
                From Assi to Manikarnika, every river bend in Varanasi holds a distinct cosmic frequency. We have translated the spiritual essence of Kashi’s 5 holy ghats into 100% charcoal-free temple flower incense, hand-rolled with solar-dried marigolds, pure Mysore sandalwood, and consecrated Ganga snan.
              </p>

              <div className="coll-highlights-row">
                <div className="coll-highlight-item">
                  <strong>5 Consecrated Ghats</strong>
                  <span>Vishwanath, Manikarnika, Assi, Dashashwamedh, Tulsi</span>
                </div>
                <div className="coll-highlight-item">
                  <strong>Purity Standard</strong>
                  <span>100% charcoal-free, zero toxic soot, organic resins</span>
                </div>
              </div>

              <div className="coll-action-row">
                <button
                  type="button"
                  className={`btn-coll-primary ${addedItem === 'prod-5ghats-box' ? 'added' : ''}`}
                  onClick={() => handleAdd({
                    id: 'prod-5ghats-box',
                    name: 'The 5 Sacred Ghats Complete Treasury',
                    price: 1190,
                    image: allProductsImg
                  })}
                >
                  {addedItem === 'prod-5ghats-box' ? (
                    <>
                      <Check size={16} />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>ACQUIRE COMPLETE 5-GHATS TREASURY • ₹1,190</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Individual Ghats Lineup Grid */}
          <div className="collection-items-subgrid">

            <div className="coll-subitem-card">
              <div className="subitem-img-wrap">
                <img src={vishwanathImg} alt="Vishwanath Incense" className="coll-subitem-img" />
              </div>
              <div className="coll-subitem-info">
                <h4>Vishwanath Sanctum</h4>
                <p>Holy Chandan & Sacred Marigold • 20 Sticks</p>
                <div className="coll-subitem-bottom">
                  <span className="subitem-price">₹249</span>
                  <button
                    type="button"
                    className="subitem-add-btn"
                    onClick={() => handleAdd({ id: 'prod-vishwanath', name: 'Vishwanath Incense Sticks', price: 249, image: vishwanathImg })}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>

            <div className="coll-subitem-card">
              <div className="subitem-img-wrap">
                <img src={manikarnikaImg} alt="Manikarnika Incense" className="coll-subitem-img" />
              </div>
              <div className="coll-subitem-info">
                <h4>Manikarnika Eternal</h4>
                <p>Pure Guggal & Cosmic Fire Resins • 20 Sticks</p>
                <div className="coll-subitem-bottom">
                  <span className="subitem-price">₹249</span>
                  <button
                    type="button"
                    className="subitem-add-btn"
                    onClick={() => handleAdd({ id: 'prod-manikarnika', name: 'Manikarnika Incense Sticks', price: 249, image: manikarnikaImg })}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>

            <div className="coll-subitem-card">
              <div className="subitem-img-wrap">
                <img src={assiImg} alt="Assi Dawn Incense" className="coll-subitem-img" />
              </div>
              <div className="coll-subitem-info">
                <h4>Assi Dawn Serenade</h4>
                <p>Subah-e-Banaras Damask Rose • 20 Sticks</p>
                <div className="coll-subitem-bottom">
                  <span className="subitem-price">₹249</span>
                  <button
                    type="button"
                    className="subitem-add-btn"
                    onClick={() => handleAdd({ id: 'prod-assi', name: 'Assi Dawn Serenade Incense', price: 249, image: assiImg })}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>

            <div className="coll-subitem-card">
              <div className="subitem-img-wrap">
                <img src={dashashwamedhImg} alt="Dashashwamedh Incense" className="coll-subitem-img" />
              </div>
              <div className="coll-subitem-info">
                <h4>Dashashwamedh Aarti</h4>
                <p>Grand Evening Aarti Camphor • 20 Sticks</p>
                <div className="coll-subitem-bottom">
                  <span className="subitem-price">₹249</span>
                  <button
                    type="button"
                    className="subitem-add-btn"
                    onClick={() => handleAdd({ id: 'prod-dashashwamedh', name: 'Dashashwamedh Incense Sticks', price: 249, image: dashashwamedhImg })}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>

            <div className="coll-subitem-card">
              <div className="subitem-img-wrap">
                <img src={tulsiImg} alt="Tulsi Ghat Incense" className="coll-subitem-img" />
              </div>
              <div className="coll-subitem-info">
                <h4>Tulsi Ghat Sanctity</h4>
                <p>Krishna Tulsi & Wild Vetiver • 20 Sticks</p>
                <div className="coll-subitem-bottom">
                  <span className="subitem-price">₹249</span>
                  <button
                    type="button"
                    className="subitem-add-btn"
                    onClick={() => handleAdd({ id: 'prod-tulsighat', name: 'Tulsi Ghat Incense Sticks', price: 249, image: tulsiImg })}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================================
          COLLECTION 2: SARNATH BUDDHIST SANCTUARY
          ================================================================= */}
      <section id="sarnath-sanctuary" className="collection-feature-block alt-bg">
        <div className="container">

          <div className="collection-editorial-banner reversed">
            <div className="collection-banner-content">
              <span className="coll-num-badge">COLLECTION II • DHAMMA HERITAGE</span>
              <h2 className="coll-heading">Sarnath Buddhist Sanctuary</h2>
              <div className="coll-sanskrit-line">शान्ति • प्रज्ञा • करुणा (Peace • Wisdom • Compassion)</div>

              <p className="coll-description">
                10 kilometers from the vibrant ghats of Kashi lies the tranquil Buddhist sanctuary of Sarnath. Here, under ancient bodhi trees, Lord Buddha set in motion the Wheel of Dharma. Our Sarnath Collection embodies this serenity through calming botanical incenses and solid brass burner presentation boxes.
              </p>

              <div className="coll-highlights-row">
                <div className="coll-highlight-item">
                  <strong>Aroma Profile</strong>
                  <span>Frankincense, bodhi leaf extracts, white sandalwood</span>
                </div>
                <div className="coll-highlight-item">
                  <strong>Burn Ritual</strong>
                  <span>Approx. 55 minutes slow meditative burn per stick</span>
                </div>
              </div>

              <div className="coll-action-row">
                <button
                  type="button"
                  className={`btn-coll-primary ${addedItem === 'prod-sarnath-full' ? 'added' : ''}`}
                  onClick={() => handleAdd({
                    id: 'prod-sarnath-full',
                    name: 'Sarnath Sanctuary Presentation Box',
                    price: 590,
                    image: fullSarnathImg
                  })}
                >
                  {addedItem === 'prod-sarnath-full' ? (
                    <>
                      <Check size={16} />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>EXPLORE PRESENTATION BOX • ₹590</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="collection-banner-media">
              <img
                src={fullSarnathImg}
                alt="Sarnath Sanctuary presentation box with incense sticks and burner"
                className="collection-banner-img"
              />
              <span className="collection-flagship-tag">MEDITATION EDITION</span>
            </div>
          </div>

          {/* Sarnath Sub-row */}
          <div className="sarnath-duo-row">
            <div className="sarnath-duo-card">
              <img src={sarnathImg} alt="Sarnath Incense 20 Sticks Single Pack" className="sarnath-duo-img" />
              <div className="sarnath-duo-meta">
                <h4>Sarnath Incense Sticks (Single Pack)</h4>
                <p>20 sticks of natural bodhi & white wood incense dipped in pure botanical extracts.</p>
                <div className="coll-subitem-bottom">
                  <span className="subitem-price">₹249</span>
                  <button
                    type="button"
                    className="subitem-add-btn"
                    onClick={() => handleAdd({ id: 'prod-sarnath', name: 'Sarnath Incense Sticks', price: 249, image: sarnathImg })}
                  >
                    + Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =================================================================
          COLLECTION 3: THATHERI BRASS GUILDS (LIVING METALLURGY)
          ================================================================= */}
      <section id="brass-guilds" className="collection-feature-block">
        <div className="container">

          <div className="collection-editorial-banner">
            <div className="collection-banner-media">
              <img
                src={diyaSetImg}
                alt="Lotus Brass Diya Set of 4 forged by Thatheri artisans"
                className="collection-banner-img"
              />
              <span className="collection-flagship-tag">HAND-HAMMERED BRASS</span>
            </div>

            <div className="collection-banner-content">
              <span className="coll-num-badge">COLLECTION III • LIVING METALLURGY</span>
              <h2 className="coll-heading">Thatheri Brass Guilds</h2>
              <div className="coll-sanskrit-line">कांस्यं पवित्रं पापनाशनम् (Pure Bell Metal Sanctity)</div>

              <p className="coll-description">
                In the historic metalworking chowks of Varanasi, 6th-generation Thatheri brass-smiths still forge pure bell-metal brass (Kansa) by hand. Unlike thin stamped sheets, our lotus diyas are solid cast and anvil-hammered to sustain deep flames that burn evenly for hours.
              </p>

              <div className="coll-highlights-row">
                <div className="coll-highlight-item">
                  <strong>Material Purity</strong>
                  <span>Pure 78% Copper & 22% Tin Bell Brass (Zero Zinc)</span>
                </div>
                <div className="coll-highlight-item">
                  <strong>Packaging</strong>
                  <span>Kashi riverfront keepsake presentation box with straw nests</span>
                </div>
              </div>

              <div className="coll-action-row">
                <button
                  type="button"
                  className={`btn-coll-primary ${addedItem === 'prod-diya-set' ? 'added' : ''}`}
                  onClick={() => handleAdd({
                    id: 'prod-diya-set',
                    name: 'Lotus Brass Diya Set (Pack of 4)',
                    price: 890,
                    image: diyaSetImg
                  })}
                >
                  {addedItem === 'prod-diya-set' ? (
                    <>
                      <Check size={16} />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>ACQUIRE BRASS DIYA SET • ₹890</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =================================================================
          COLLECTION 4: SACRED KASHI GANGA JAL (CONSECRATED RIVER SANCTUM)
          ================================================================= */}
      <section id="ganga-jal" className="collection-feature-block alt-bg">
        <div className="container">

          <div className="collection-editorial-banner reversed">

            {/* Content Left */}
            <div className="collection-banner-content">
              <span className="coll-num-badge">COLLECTION IV • CONSECRATED GANGA SNAN</span>
              <h2 className="coll-heading">Sacred Kashi Ganga Jal</h2>
              <div className="coll-sanskrit-line">गङ्गे च यमुने चैव गोदावरि सरस्वति • नर्मदे सिन्धु कावेरि जलेऽस्मिन् संनिधिं कुरु</div>

              <p className="coll-description">
                Directly sourced during the auspicious Brahma Muhurta from the sacred Dashashwamedh Ghat in Varanasi. Filtered through multi-stage natural purification and consecrated with traditional Vedic mantras, this holy river water is bottled in heavy glass flacons with tamper-evident brass seals to preserve its living prana, minerals, and divine sanctity.
              </p>

              <div className="coll-highlights-row">
                <div className="coll-highlight-item">
                  <strong>Sacred Source</strong>
                  <span>Untouched Dashashwamedh Ghat Brahma Muhurta Snan</span>
                </div>
                <div className="coll-highlight-item">
                  <strong>Purity & Preservation</strong>
                  <span>Airtight tamper-evident glass flacon locking in living prana</span>
                </div>
              </div>

              <div className="coll-action-row">
                <button
                  type="button"
                  className={`btn-coll-primary ${addedItem === 'prod-gangajal-100' ? 'added' : ''}`}
                  onClick={() => handleAdd({
                    id: 'prod-gangajal-100',
                    name: 'Sacred Kashi Ganga Jal (100 ml Pocket Sanctum)',
                    price: 199,
                    image: gangajal100FullImg
                  })}
                >
                  {addedItem === 'prod-gangajal-100' ? (
                    <>
                      <Check size={16} />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>ACQUIRE SACRED GANGA JAL • ₹199</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Media Right: Product100mlfull centerpiece */}
            <div className="collection-banner-media gangajal-media-highlight">
              <img
                src={gangajal100FullImg}
                alt="Sacred Kashi Ganga Jal Consecrated Flacon"
                className="collection-banner-img gangajal-flacon-img"
              />
              <span className="collection-flagship-tag">✦ CONSECRATED IN KASHI ✦</span>
            </div>

          </div>

          {/* Subgrid: All 3 Consecrated Sizes (100ml, 500ml, 1 Litre) */}
          <div className="collection-items-subgrid gangajal-subgrid">

            <div className="coll-subitem-card">
              <div className="subitem-img-wrap gangajal-thumb-wrap">
                <img src={gangajal100FullImg} alt="Sacred Kashi Ganga Jal 100 ml" className="coll-subitem-img" />
              </div>
              <div className="coll-subitem-info">
                <h4>Pocket Sanctum (100 ml)</h4>
                <p>Consecrated Kashi Ganga Snan • Travel & Altar Edition</p>
                <div className="coll-subitem-bottom">
                  <span className="subitem-price">₹199 <span className="subitem-old-price">₹269</span></span>
                  <button
                    type="button"
                    className="subitem-add-btn"
                    onClick={() => handleAdd({ id: 'prod-gangajal-100', name: 'Sacred Kashi Ganga Jal (100 ml)', price: 199, image: gangajal100FullImg })}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>

            <div className="coll-subitem-card">
              <div className="subitem-img-wrap gangajal-thumb-wrap">
                <img src={gangajal500Img} alt="Sacred Kashi Ganga Jal 500 ml" className="coll-subitem-img" />
              </div>
              <div className="coll-subitem-info">
                <h4>Temple Ritual (500 ml)</h4>
                <p>Sacred Dashashwamedh Snan • Daily Poojan & Abhishekam</p>
                <div className="coll-subitem-bottom">
                  <span className="subitem-price">₹449 <span className="subitem-old-price">₹599</span></span>
                  <button
                    type="button"
                    className="subitem-add-btn"
                    onClick={() => handleAdd({ id: 'prod-gangajal-500', name: 'Sacred Kashi Ganga Jal (500 ml)', price: 449, image: gangajal500Img })}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>

            <div className="coll-subitem-card">
              <div className="subitem-img-wrap gangajal-thumb-wrap">
                <img src={gangajal1LImg} alt="Sacred Kashi Ganga Jal 1 Litre" className="coll-subitem-img" />
              </div>
              <div className="coll-subitem-info">
                <h4>Family Sanctum Reserve (1 Litre)</h4>
                <p>Pure Temple Flacon • Auspicious Vedic Ceremonies</p>
                <div className="coll-subitem-bottom">
                  <span className="subitem-price">₹799 <span className="subitem-old-price">₹1,049</span></span>
                  <button
                    type="button"
                    className="subitem-add-btn"
                    onClick={() => handleAdd({ id: 'prod-gangajal-1l', name: 'Sacred Kashi Ganga Jal (1 Litre)', price: 799, image: gangajal1LImg })}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================================
          5. CINEMATIC ATELIER FILM SECTION (collection.mp4)
          ================================================================= */}
      <section id="atelier-film" className="collection-cinema-section">
        <div className="container">

          <div className="cinema-header-lead">
            <span className="cinema-eyebrow">✦ LIVING CRAFT & DEVOTION ✦</span>
            <h2 className="cinema-title">Crafting the Keepsake Heritage</h2>
            <p className="cinema-subtitle">
              Watch generational devotion meet precision packaging in our Varanasi workshop, from gold foil embossing to hand-rolled temple incense.
            </p>
          </div>

          <div className="cinema-player-frame">
            <video
              ref={videoRef}
              src={manufacturingVideo}
              className="cinema-video-element"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
          </div>

        </div>
      </section>

    </div>
  );
}
