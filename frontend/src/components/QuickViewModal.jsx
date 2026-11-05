import React, { useState } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, Sparkles, Check } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(4, 39, 33, 0.82)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--color-warm-ivory)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-temple-gold)',
          width: '100%',
          maxWidth: '780px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          position: 'relative',
          boxShadow: 'var(--shadow-modal)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255,255,255,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Product Visual */}
        <div style={{ backgroundColor: '#EFE4D3', position: 'relative' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {product.badge && (
            <span style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: 'var(--color-kashi-green)',
              color: 'var(--color-gold-light)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: 'var(--radius-sm)'
            }}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Content details */}
        <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
          <span className="eyebrow" style={{ marginBottom: '8px' }}>
            {product.category}
          </span>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.8rem',
            color: 'var(--color-kashi-green-dark)',
            marginBottom: '16px'
          }}>
            {product.name}
          </h3>

          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'var(--color-kashi-green-dark)'
            }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span style={{
                fontSize: '0.95rem',
                textDecoration: 'line-through',
                color: 'var(--color-charcoal-muted)'
              }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.6,
            color: 'var(--color-charcoal-muted)',
            marginBottom: '24px'
          }}>
            {product.description} Crafted with pure sacred herbs, temple flora, and consecrated elements directly from the ghats of Varanasi.
          </p>

          <div style={{
            backgroundColor: 'var(--color-ivory-card)',
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-gold-border)',
            fontSize: '0.78rem',
            color: 'var(--color-charcoal)',
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={14} color="var(--color-kashi-green)" />
              <span>Specification: <strong>{product.burnTime || 'Pure Sacred Heritage'}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={14} color="var(--color-kashi-green)" />
              <span>100% Consecrated, Charcoal-Free & Non-Toxic</span>
            </div>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              <ShoppingBag size={16} />
              <span>ADD TO SACRED BAG • ₹{product.price.toLocaleString('en-IN')}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
