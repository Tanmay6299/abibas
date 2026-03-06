import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import './Wishlist.css';

const Wishlist = () => {
  const { products, wishlistItems, toggleWishlist, addToCart } = useContext(ShopContext);

  const favoritedProducts = products.filter(p => wishlistItems.includes(p.id));

  return (
    <div className="wishlist-page">
      <div className="container">
        <header className="wishlist-header">
          <h1 className="wishlist-title">MY WISHLIST</h1>
          <p className="wishlist-count">{favoritedProducts.length} ITEMS</p>
        </header>

        {favoritedProducts.length === 0 ? (
          <div className="wishlist-empty">
            <Heart size={64} className="empty-wishlist-icon" />
            <h2 style={{fontFamily: 'var(--font-heading)', marginBottom: '1rem'}}>YOUR WISHLIST IS EMPTY</h2>
            <p style={{marginBottom: '2rem'}}>Save your favorite items here to keep an eye on them.</p>
            <Link to="/" className="btn btn-solid" style={{display: 'inline-block'}}>
              START SHOPPING
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {favoritedProducts.map(product => (
              <div key={product.id} className="wishlist-item-card">
                <div className="wishlist-item-img-container">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="wishlist-item-img" />
                  </Link>
                  <button 
                    className="remove-wishlist-item"
                    onClick={() => toggleWishlist(product.id)}
                    title="Remove from wishlist"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <div className="wishlist-item-info">
                  <div className="wishlist-item-price">
                    {product.salePrice ? (
                      <>
                        <span style={{color: '#e4002b', marginRight: '0.5rem'}}>${product.salePrice}</span>
                        <span style={{textDecoration: 'line-through', color: 'var(--color-gray-800)', fontSize: '0.9rem'}}>${product.price}</span>
                      </>
                    ) : (
                      <span>${product.price}</span>
                    )}
                  </div>
                  <h3 className="wishlist-item-name">{product.name}</h3>
                  <p className="wishlist-item-cat">{product.category}</p>
                  
                  <button 
                    className="btn btn-solid move-to-bag-btn"
                    onClick={() => addToCart(product)}
                  >
                    <span>ADD TO BAG</span>
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
