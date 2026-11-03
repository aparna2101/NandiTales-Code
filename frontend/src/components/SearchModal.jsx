import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { featuredProductsData, collectionsData } from '../data/content';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim() === '' 
    ? [] 
    : featuredProductsData.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className={`search-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="search-modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Top input bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderBottom: '2px solid var(--color-kashi-green)',
          paddingBottom: '12px',
          marginBottom: '20px'
        }}>
          <Search size={22} color="var(--color-temple-gold)" />
          <input 
            type="text" 
            placeholder="Search incense, brass diyas, poojan kits, gifts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flexGrow: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              color: 'var(--color-kashi-green-dark)'
            }}
          />
          <button type="button" onClick={onClose} style={{ color: 'var(--color-charcoal-muted)' }}>
            <X size={20} />
          </button>
        </div>

        {/* Quick Suggestions / Results */}
        {query.trim() === '' ? (
          <div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-terracotta)', fontWeight: 700, marginBottom: '12px' }}>
              POPULAR SACRED SEARCHES
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Vishwanath Incense', 'Brass Diya', 'Poojan Kit', 'Manikarnika Dhoop', 'Kashi Gift Box'].map((tag, i) => (
                <button 
                  key={i}
                  type="button"
                  onClick={() => setQuery(tag)}
                  style={{
                    backgroundColor: 'var(--color-ivory-card)',
                    border: '1px solid var(--color-gold-border)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    color: 'var(--color-charcoal)'
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-charcoal-muted)', marginBottom: '14px' }}>
              {filteredProducts.length} Results found for "{query}"
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '300px', overflowY: 'auto' }}>
              {filteredProducts.length === 0 ? (
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', padding: '16px 0' }}>
                  No sacred offerings matched your search. Try searching for "Diya" or "Incense".
                </p>
              ) : (
                filteredProducts.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-ivory-card)',
                      cursor: 'pointer',
                      border: '1px solid var(--color-gold-border)'
                    }}
                  >
                    <img src={p.image} alt={p.name} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div style={{ flexGrow: 1 }}>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-kashi-green-dark)' }}>{p.name}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-terracotta)' }}>{p.category}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-kashi-green)' }}>
                      ₹{p.price}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
