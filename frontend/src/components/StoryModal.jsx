import React from 'react';
import { X, BookOpen, Sparkles, MapPin, Hammer, Clock } from 'lucide-react';
import { storiesData } from '../data/content';

export default function StoryModal({ isOpen, onClose, mode = 'stories', story = null }) {
  if (!isOpen && !story) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(4, 39, 33, 0.82)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#FAF6EE',
          borderRadius: '16px',
          border: '1px solid rgba(214, 154, 66, 0.4)',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '88vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(7, 36, 28, 0.45)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent High-Contrast Close Button */}
        <button 
          type="button" 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            color: '#08241D',
            backgroundColor: 'rgba(214, 154, 66, 0.2)',
            border: '1.5px solid rgba(214, 154, 66, 0.55)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 100,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
          aria-label="Close Story"
        >
          <X size={20} strokeWidth={2.4} />
        </button>

        {story ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C85A32', fontWeight: 700 }}>
                {story.tag}
              </span>
              <span style={{ color: '#D4AF37' }}>•</span>
              <span style={{ fontSize: '0.74rem', color: '#687E77', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> {story.readTime}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#0C382E', marginBottom: '16px', lineHeight: 1.25 }}>
              {story.title}
            </h3>

            {story.image && (
              <img 
                src={story.image} 
                alt={story.title} 
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', marginBottom: '22px' }}
              />
            )}

            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#1B4332', fontWeight: 600, marginBottom: '16px' }}>
              {story.subtitle}
            </p>

            <p style={{ fontSize: '0.94rem', lineHeight: 1.8, color: '#3A4F48' }}>
              {story.fullStory || story.snippet}
            </p>
          </div>
        ) : mode === 'makers' ? (
          <div>
            <span className="eyebrow">HERITAGE GUILDS OF VARANASI</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#0C382E', marginBottom: '16px' }}>
              Meet the Masters of Thatheri Bazaar
            </h3>
            <img 
              src="/images/09_artisan_workshop_4k.jpg" 
              alt="Varanasi craftsman at work" 
              style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
            />
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#3A4F48', marginBottom: '16px' }}>
              Deep in the lanes of Varanasi lies Thatheri Bazaar, a guild that has practiced traditional metal craft for centuries. Each lotus brass diya and prayer bell begins with raw molten bell metal brass, hand-beaten and chiselled with devotional motifs.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#3A4F48' }}>
              Nandi Tales works directly with over 300 artisan families, ensuring fair remuneration, preserving heritage metallurgy, and keeping Kashi's sacred fire alive in every home.
            </p>
          </div>
        ) : (
          <div>
            <span className="eyebrow">CHRONICLES OF ANCIENT KASHI</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#0C382E', marginBottom: '16px' }}>
              Stories of Rituals, Ghats & Sacred Dawn
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
              {storiesData.map(item => (
                <div 
                  key={item.id} 
                  style={{
                    backgroundColor: '#FFFDF9',
                    padding: '20px',
                    borderRadius: '10px',
                    border: '1px solid rgba(214, 154, 66, 0.25)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C85A32', fontWeight: 700 }}>
                      {item.tag}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#687E77' }}>{item.readTime}</span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#0C382E', marginBottom: '6px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.55, color: '#4A5D57' }}>
                    {item.snippet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
