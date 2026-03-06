import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, ChevronDown } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import './ProductDetails.css';

const SIZES = ['M 7 / W 8', 'M 8 / W 9', 'M 9 / W 10', 'M 10 / W 11', 'M 11 / W 12'];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, wishlistItems } = useContext(ShopContext);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeError, setSizeError] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');
  
  const product = products.find(p => p.id === parseInt(id));
  
  useEffect(() => {
    // Scroll to top when loading new product
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container" style={{padding: '5rem 0', textAlign: 'center'}}>
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-solid" style={{marginTop: '2rem'}}>
          RETURN TO SHOP
        </Link>
      </div>
    );
  }

  const isWishlisted = wishlistItems.includes(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(product, selectedSize);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(prev => prev === section ? '' : section);
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={star <= rating ? '' : 'empty'}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="product-details-page">
      <div className="container product-details-container">
        
        {/* Left Side: Image Gallery */}
        <div className="product-gallery">
          {product.new && <span className="product-badge" style={{top: '2rem', left: '2rem'}}>NEW</span>}
          <img src={product.image} alt={product.name} className="product-main-image" />
        </div>

        {/* Right Side: Product Info */}
        <div className="product-info-section">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / 
            <Link to="/"> {product.category} </Link> / 
            <span>{product.name}</span>
          </div>

          <div className="product-title-group">
            <p className="product-category-label">{product.category}</p>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price-large">${product.price}</p>
          </div>

          <p className="product-description">
            {product.description}
          </p>

          <div className="size-selector">
            <div className="size-header">
              <span>Sizes</span>
              <a href="#" className="size-guide-link">Size Guide</a>
            </div>
            {sizeError && <p style={{color: '#e4002b', marginBottom: '0.5rem'}}>Please select a size.</p>}
            <div className="size-grid">
              {SIZES.map(size => (
                <button 
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedSize(size);
                    setSizeError(false);
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-actions">
            <button className="btn btn-solid add-to-bag-btn" onClick={handleAddToCart}>
              <span>ADD TO BAG</span>
              <ArrowRight size={20} />
            </button>
            <button 
              className="wishlist-large-btn"
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart 
                size={24} 
                fill={isWishlisted ? 'red' : 'none'} 
                color={isWishlisted ? 'red' : 'black'} 
              />
            </button>
          </div>

          <div className="product-details-accordion">
             {/* Description Accordion */}
             <div className="accordion-item">
               <div className="accordion-header" onClick={() => toggleAccordion('description')}>
                 <span>Description</span>
                 <ChevronDown size={20} style={{ transform: openAccordion === 'description' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
               </div>
               {openAccordion === 'description' && (
                 <div className="accordion-content">
                   {product.longDescription || product.description}
                 </div>
               )}
             </div>

             {/* Details Accordion */}
             <div className="accordion-item">
               <div className="accordion-header" onClick={() => toggleAccordion('details')}>
                 <span>Details</span>
                 <ChevronDown size={20} style={{ transform: openAccordion === 'details' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
               </div>
               {openAccordion === 'details' && (
                 <div className="accordion-content">
                   {product.detailsList ? (
                     <ul className="details-list">
                       {product.detailsList.map((detail, idx) => (
                         <li key={idx}>{detail}</li>
                       ))}
                     </ul>
                   ) : (
                     <p>Product details currently unavailable.</p>
                   )}
                 </div>
               )}
             </div>

             {/* Reviews Accordion */}
             <div className="accordion-item">
               <div className="accordion-header" onClick={() => toggleAccordion('reviews')}>
                 <span>Reviews ({product.reviews ? product.reviews.length : 0})</span>
                 <ChevronDown size={20} style={{ transform: openAccordion === 'reviews' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
               </div>
               {openAccordion === 'reviews' && (
                 <div className="accordion-content">
                   {product.reviews && product.reviews.length > 0 ? (
                     <>
                       <div className="reviews-summary">
                         <h3 style={{fontFamily: 'var(--font-heading)', fontSize: '2.5rem', margin: 0}}>
                           {(product.reviews.reduce((acc, rev) => acc + rev.rating, 0) / product.reviews.length).toFixed(1)}
                         </h3>
                         {renderStars(Math.round(product.reviews.reduce((acc, rev) => acc + rev.rating, 0) / product.reviews.length))}
                       </div>
                       
                       <div className="reviews-list">
                         {product.reviews.map(review => (
                           <div key={review.id} className="review-card">
                             <div className="review-header">
                               <span className="review-author">{review.author}</span>
                               <span className="review-date">{review.date}</span>
                             </div>
                             {renderStars(review.rating)}
                             <p className="review-text">"{review.text}"</p>
                           </div>
                         ))}
                       </div>
                     </>
                   ) : (
                     <p>No reviews yet.</p>
                   )}
                 </div>
               )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
