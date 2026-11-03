import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems = [], 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout 
}) {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 999;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  if (!isOpen) return null;

  return (
    <div className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="var(--color-kashi-green)" />
            <h3>Your Sacred Bag ({cartItems.reduce((a, c) => a + c.quantity, 0)})</h3>
          </div>
          <button type="button" className="cart-close-btn" onClick={onClose} aria-label="Close cart drawer">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Bar */}
        <div style={{
          padding: '12px 24px',
          backgroundColor: 'var(--color-gold-pale)',
          borderBottom: '1px solid var(--color-gold-border)'
        }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-kashi-green)', fontWeight: 600, marginBottom: '6px' }}>
            {remainingForFreeShipping === 0 
              ? '✨ You have unlocked Complimentary Auspicious Delivery!' 
              : `Add ₹${remainingForFreeShipping.toLocaleString('en-IN')} more to unlock Free Auspicious Delivery`}
          </p>
          <div style={{
            height: '5px',
            backgroundColor: 'rgba(214, 154, 66, 0.25)',
            borderRadius: '999px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${progressToFreeShipping}%`,
              backgroundColor: 'var(--color-temple-gold)',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* Body Items */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: 'var(--color-charcoal-muted)'
            }}>
              <ShoppingBag size={48} strokeWidth={1.2} style={{ margin: '0 auto 16px', opacity: 0.4 }} />
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-kashi-green-dark)' }}>
                Your sacred bag is empty
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>
                Explore our temple incense, diyas, and authentic poojan kits from Kashi.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <div className="cart-item-price">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-charcoal-muted)', fontWeight: 400, marginLeft: '6px' }}>
                      (₹{item.price} each)
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '10px'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      border: '1px solid var(--color-gold-border)',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-white)'
                    }}>
                      <button 
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        style={{ padding: '4px 8px', display: 'flex', alignItems: 'center' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ padding: '0 8px', fontSize: '0.8rem', fontWeight: 600 }}>{item.quantity}</span>
                      <button 
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{ padding: '4px 8px', display: 'flex', alignItems: 'center' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <button 
                      type="button" 
                      onClick={() => onRemoveItem(item.id)}
                      style={{ color: 'var(--color-charcoal-muted)', padding: '4px' }}
                      title="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-subtotal-row">
              <span style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.9rem' }}>Estimated Subtotal</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-kashi-green-dark)' }}>
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.74rem',
              color: 'var(--color-charcoal-muted)',
              marginBottom: '16px'
            }}>
              <ShieldCheck size={14} color="var(--color-temple-gold)" />
              <span>Sanctified packing with Vedic blessings & insurance</span>
            </div>

            <button 
              type="button" 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={onCheckout}
            >
              <span>PROCEED TO SACRED CHECKOUT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
