import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid />
      
      {/* Secondary Banner/Categories Section */}
      <section className="categories-banner">
        <div className="category-card" style={{backgroundImage: 'url(/hero_shoe.png)'}}>
          <div className="category-overlay">
            <h2 className="category-title">RUNNING</h2>
            <Link to="/category/shoes" className="category-link">SHOP RUNNING</Link>
          </div>
        </div>
        <div className="category-card" style={{backgroundImage: 'url(/sneaker.png)'}}>
            <div className="category-overlay">
            <h2 className="category-title">SNEAKERS</h2>
            <Link to="/category/sneakers" className="category-link">SHOP LIFESTYLE</Link>
          </div>
        </div>
        <div className="category-card" style={{backgroundImage: 'url(/flipflop.png)'}}>
          <div className="category-overlay">
            <h2 className="category-title">SLIDES & FLIP FLOPS</h2>
            <Link to="/category/flip-flops" className="category-link">SHOP ESSENTIALS</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
