import React, { useContext } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './ProductGrid.css';

const ProductGrid = () => {
  const { products, toggleWishlist, wishlistItems, searchQuery } = useContext(ShopContext);

  // Filter products based on search query
  const filteredProducts = products.filter(product => {
    if (!searchQuery) return true;
    return product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           product.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section className="product-section container" id="sneakers">
      <div className="section-header">
        <h2 className="section-title">
          {searchQuery ? `SEARCH RESULTS FOR "${searchQuery.toUpperCase()}"` : 'TRENDING NOW'}
        </h2>
        {!searchQuery && (
          <a href="#" className="view-all-link">
            VIEW ALL <ArrowRight size={16} />
          </a>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{textAlign: 'center', padding: '4rem 0', fontFamily: 'var(--font-heading)'}}>
          <h3>NO PRODUCTS FOUND</h3>
          <p style={{fontFamily: 'var(--font-body)', marginTop: '1rem'}}>Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => {
            const isWishlisted = wishlistItems.includes(product.id);
            
            return (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="product-image" />
                  </Link>
                  {product.new && <span className="product-badge">NEW</span>}
                  <button 
                    className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product.id);
                    }}
                  >
                    <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} color={isWishlisted ? '#e4002b' : 'currentColor'} />
                  </button>
                </div>
                
                <Link to={`/product/${product.id}`} className="product-info">
                  <p className="product-price">${product.price}</p>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
