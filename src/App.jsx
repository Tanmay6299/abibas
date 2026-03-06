import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        
        {/* Secondary Banner/Categories Section */}
        <section className="categories-banner">
          <div className="category-card" style={{backgroundImage: 'url(/hero_shoe.png)'}}>
            <div className="category-overlay">
              <h2 className="category-title">RUNNING</h2>
              <a href="#" className="category-link">SHOP RUNNING</a>
            </div>
          </div>
          <div className="category-card" style={{backgroundImage: 'url(/sneaker.png)'}}>
             <div className="category-overlay">
              <h2 className="category-title">SNEAKERS</h2>
              <a href="#" className="category-link">SHOP LIFESTYLE</a>
            </div>
          </div>
          <div className="category-card" style={{backgroundImage: 'url(/flipflop.png)'}}>
            <div className="category-overlay">
              <h2 className="category-title">SLIDES & FLIP FLOPS</h2>
              <a href="#" className="category-link">SHOP ESSENTIALS</a>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
