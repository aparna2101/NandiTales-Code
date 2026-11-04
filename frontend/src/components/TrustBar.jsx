import React from 'react';

export default function TrustBar() {
  const pillars = [
    {
      title: 'Rooted in Kashi',
      subtitle: 'Varanasi Heritage',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Temple Shikhara Pinnacle & Kalash */}
          <path d="M12 2.5v1.5" />
          <circle cx="12" cy="4.5" r="0.9" fill="currentColor" />
          <path d="M12 5.5l-4.5 6.5h9L12 5.5z" />
          {/* Sanctum Mandir Pillars */}
          <path d="M7.5 12v5h9v-5" />
          <path d="M12 13.5v3.5" />
          {/* Sacred Steps & Ghat River */}
          <path d="M5 17h14" />
          <path d="M3.5 19.5h17" />
          <path d="M4 22c2-.7 4-.7 6 0s4 .7 6 0 3-.7 4 0" />
        </svg>
      )
    },
    {
      title: 'Crafted by Artisans',
      subtitle: 'Master Karigars',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Sacred Diya Flame */}
          <path d="M12 3c.8 1.4 1.8 2.6 1.8 3.8a1.8 1.8 0 1 1-3.6 0c0-1.2 1-2.4 1.8-3.8z" />
          {/* Brass Diya Bowl */}
          <path d="M6 10.5c1.2 3.2 3.8 4 6 4s4.8-.8 6-4.5H6z" />
          {/* Artisan Revering Hands holding the offering */}
          <path d="M4 13.5c-.8 2.5.2 4.8 2.8 5.8 2.2.8 4.2.4 5.2-.8" />
          <path d="M20 13.5c.8 2.5-.2 4.8-2.8 5.8-2.2.8-4.2.4-5.2-.8" />
          {/* Sacred Craft Sparkles */}
          <path d="M4 6.5l1 1" />
          <path d="M20 6.5l-1 1" />
        </svg>
      )
    },
    {
      title: 'Traditional Designs',
      subtitle: 'Sacred Vedic Motifs',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Central sacred lotus petal */}
          <path d="M12 3.5c-2.4 3.2-3.4 6.8-3.4 9.5 0 2.8 1.4 4.8 3.4 5.8 2-1 3.4-3 3.4-5.8 0-2.7-1-6.3-3.4-9.5z" />
          {/* Left blooming petal */}
          <path d="M8.6 13c-2.5-1.5-4.5-.4-5.4 1.6-1 2 .6 4.4 3 4.4 1.4 0 2.5-.6 3.2-1.2" />
          {/* Right blooming petal */}
          <path d="M15.4 13c2.5-1.5 4.5-.4 5.4 1.6 1 2-.6 4.4-3 4.4-1.4 0-2.5-.6-3.2-1.2" />
          {/* Base sacred lotus calyx */}
          <path d="M9 19.5c1.8.8 4.2.8 6 0" />
        </svg>
      )
    },
    {
      title: 'Perfect for Gifting',
      subtitle: 'Royal Keepsakes',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Ornate Gift Box Body */}
          <rect x="3.5" y="9" width="17" height="12" rx="1.5" />
          {/* Box Lid */}
          <rect x="2.5" y="6" width="19" height="3" rx="1" />
          {/* Vertical Silk Ribbon */}
          <path d="M12 6v15" />
          {/* Ornate Ribbon Bow */}
          <path d="M12 6c-1.8-2.2-4.2-2.2-4.8 0 .6 1.8 3 2 4.8 0z" />
          <path d="M12 6c1.8-2.2 4.2-2.2 4.8 0-.6 1.8-3 2-4.8 0z" />
          {/* Golden Center Seal */}
          <circle cx="12" cy="14" r="1.5" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section className="exact-trust-strip">
      <div className="trust-strip-container">
        <div className="trust-strip-flex">
          {pillars.map((item, index) => (
            <React.Fragment key={index}>
              <div className="trust-strip-col">
                <div className="trust-col-badge">
                  <span className="trust-col-icon">{item.icon}</span>
                </div>
                <div className="trust-col-content">
                  <span className="trust-col-title">{item.title}</span>
                  <span className="trust-col-subtitle">{item.subtitle}</span>
                </div>
              </div>
              {index < pillars.length - 1 && (
                <div className="trust-col-divider">
                  <span className="trust-divider-star">✦</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
