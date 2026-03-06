import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-text">ADIDAS</div>
      
      <div className="hero-media">
        <img src="/hero_shoe.png" alt="Modern Hero Shoe" className="hero-img" />
      </div>
      
      <div className="hero-content">
        <p className="hero-subtitle">NEW ARRIVAL</p>
        <h1 className="hero-title">IMPOSSIBLE <br/> IS NOTHING.</h1>
        
        <div className="hero-actions">
          <button className="btn btn-hero">
            SHOP COLLECTION <ArrowRight size={24} style={{marginLeft: '1rem'}} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
