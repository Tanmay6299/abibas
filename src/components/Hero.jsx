import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-media">
        <img src="/hero_shoe.png" alt="Modern Hero Shoe" className="hero-img" />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">IMPOSSIBLE IS NOTHING.</h1>
        <p className="hero-subtitle">Step into the future with our most advanced footwear collection yet.</p>
        
        <div className="hero-actions">
          <button className="btn btn-solid">
            SHOP NOW <ArrowRight size={20} style={{marginLeft: '0.5rem'}} />
          </button>
          
          <div className="hero-collections">
            <span className="collection-label">TRENDING COLLECTIONS:</span>
            <div className="collection-links">
              <a href="#sneakers" className="collection-link">ULTRABOOST</a>
              <a href="#sneakers" className="collection-link">NMD</a>
              <a href="#flipflops" className="collection-link">Y-3 SLIDES</a>
              <a href="#sneakers" className="collection-link">OZWEEGO</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
