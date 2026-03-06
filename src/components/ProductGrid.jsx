import React, { useContext, useEffect, useRef } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './ProductGrid.css';

const ProductGrid = ({ customProducts }) => {
  const { products, toggleWishlist, wishlistItems, searchQuery } = useContext(ShopContext);

  // Filter products based on search query (and use customProducts if provided)
  const baseProducts = customProducts || products;
  
  const filteredProducts = baseProducts.filter(product => {
    if (!searchQuery) return true;
    return product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           product.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <section className="product-section" style={customProducts ? {paddingTop: '0'} : {}} id="sneakers" ref={sectionRef}>
      {!customProducts && (
        <div className="section-header reveal">
          <h2 className="section-title">
            {searchQuery ? `SEARCH RESULTS FOR "${searchQuery.toUpperCase()}"` : 'TRENDING NOW'}
          </h2>
          {!searchQuery && (
            <a href="#" className="view-all-link">
              VIEW ALL <ArrowRight size={16} />
            </a>
          )}
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <div style={{textAlign: 'center', padding: '4rem 0', fontFamily: 'var(--font-heading)'}}>
          <h3>NO PRODUCTS FOUND</h3>
          <p style={{fontFamily: 'var(--font-body)', marginTop: '1rem'}}>Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product, index) => {
            const isWishlisted = wishlistItems.includes(product.id);
            
            return (
              <div key={product.id} className="product-card reveal" style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
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
                  {product.salePrice ? (
                    <p className="product-price">
                      <span style={{color: '#e4002b', marginRight: '0.5rem'}}>${product.salePrice}</span>
                      <span style={{textDecoration: 'line-through', color: 'var(--color-gray-800)', fontSize: '0.9rem'}}>${product.price}</span>
                    </p>
                  ) : (
                    <p className="product-price">${product.price}</p>
                  )}
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
