import React, { useContext } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './CartDrawer.css';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useContext(ShopContext);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>YOUR BAG</h2>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your bag is empty.</p>
              <button className="btn btn-solid" onClick={() => setIsCartOpen(false)}>
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h3>{item.name}</h3>
                      <button 
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.id, item.size)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="cart-item-price">${item.price}</p>
                    <p className="cart-item-size">Size: {item.size}</p>
                    
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.size, -1)}>
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.size, 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>TOTAL</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="cart-tax-note">Tax and shipping calculated at checkout</p>
            <Link 
              to="/checkout" 
              className="btn btn-solid cart-checkout-btn"
              onClick={() => setIsCartOpen(false)}
            >
              CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
