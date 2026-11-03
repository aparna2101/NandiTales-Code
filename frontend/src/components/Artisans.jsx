import React from 'react';
import { ArrowRight } from 'lucide-react';
import artisanVideo from '../assets/video.mp4';
import craftedBg from '../assets/crafted.png';

export default function Artisans({ onOpenArtisanModal }) {
  return (
    <section id="artisans" className="exact-artisans-section">
      <div className="artisans-full-container">
        <div className="exact-artisans-card">
          
          {/* Left: Expanded Cinematic Artisan Video (Clean, no text) */}
          <div className="artisan-visual-col">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="artisan-banner-photo"
              poster="/images/artisan_hands_hd.jpg"
            >
              <source src={artisanVideo} type="video/mp4" />
              <img 
                src="/images/artisan_hands_hd.jpg" 
                alt="Hands of Varanasi master artisan engraving a sacred brass vessel in traditional Kashi workshop" 
                className="artisan-banner-photo"
                loading="lazy"
              />
            </video>
          </div>

          {/* Right: Editorial & Sacred Story */}
          <div className="artisan-editorial-col">
            
            {/* Crafted in Kashi Artisan Illustration Backdrop */}
            <div className="artisan-sketch-watermark" aria-hidden="true">
              <img 
                src={craftedBg} 
                alt="" 
                className="artisan-crafted-bg-img" 
              />
            </div>

            <div className="artisan-text-inner">
              <span className="artisan-eyebrow">
                THE PEOPLE BEHIND THE PRODUCTS
              </span>

              <h2 className="artisan-main-heading">
                Crafted in Kashi.<br />
                Carried by its people.
              </h2>

              <p className="artisan-narrative">
                From skilled artisans to small workshops, our products grow out of real places and real hands. Each object carries a story of material, tradition and the people who keep it alive.
              </p>

              <div className="artisan-action-wrap">
                <button 
                  type="button" 
                  className="btn-meet-makers"
                  onClick={onOpenArtisanModal}
                >
                  <span>MEET THE MAKERS</span>
                  <ArrowRight size={16} className="makers-arrow" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
