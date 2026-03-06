import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductGrid from '../components/ProductGrid';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Normalize the URL parameter for comparison
    const formattedCategory = categoryName.toLowerCase();

    if (formattedCategory === 'sale') {
      // Return any product that has a salePrice
      setFilteredProducts(products.filter(p => p.salePrice));
    } else {
      // Find matching categories (handles spaces and dashes roughly equivalent)
      setFilteredProducts(products.filter(p => {
        const pCat = p.category.toLowerCase().replace(/[^a-z0-9]/g, '');
        const targetCat = formattedCategory.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        // Special case to map 'shoes' parameter to 'running shoes' category
        if (targetCat === 'shoes' && pCat.includes('running')) return true;
        
        return pCat.includes(targetCat) || targetCat.includes(pCat);
      }));
    }
  }, [categoryName, products]);

  // Create a nice display title
  const getDisplayTitle = () => {
    if (!categoryName) return '';
    if (categoryName.toLowerCase() === 'sale') return 'SALE';
    return categoryName.replace('-', ' ').toUpperCase();
  };

  return (
    <div style={{ padding: '3rem 0', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem', 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            color: 'var(--color-gray-800)',
            marginBottom: '1rem' 
          }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link> / 
            <span> {getDisplayTitle()}</span>
          </div>
          
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '3rem', 
            margin: '0 0 1rem 0' 
          }}>
            {getDisplayTitle()} <span style={{fontSize: '1.25rem', color: 'var(--color-gray-800)', fontFamily: 'Helvetica Neue'}}>[{filteredProducts.length}]</span>
          </h1>
          
          <p style={{ color: 'var(--color-gray-900)', fontSize: '1.1rem', maxWidth: '600px' }}>
            {categoryName.toLowerCase() === 'sale' 
              ? "Shop our latest markdowns and save big on classic styles and performance gear." 
              : `Explore our collection of high-performance and lifestyle ${getDisplayTitle().toLowerCase()}. Built for comfort, designed to stand out.`}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid customProducts={filteredProducts} />
        ) : (
          <div style={{ textAlign: 'center', padding: '5rem 0', backgroundColor: 'var(--color-gray-100)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>NO PRODUCTS FOUND</h2>
            <p>We couldn't find any products matching that category.</p>
            <Link to="/" className="btn btn-solid" style={{ marginTop: '2rem', display: 'inline-block' }}>BROWSE ALL PRODUCTS</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
