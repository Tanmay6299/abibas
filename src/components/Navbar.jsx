import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="top-banner">
        <span>FREE STANDARD SHIPPING & RETURNS | JOIN ADICLUB</span>
      </div>
      
      <nav className="navbar container">
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="navbar-logo">
          {/* Using a bold simple text for custom brand like Adidas */}
          <a href="/" style={{fontFamily: 'var(--font-heading)', fontSize: '2rem', fontStyle: 'italic', letterSpacing: '-1px'}}>
            /// BRAND
          </a>
        </div>

        {/* Desktop Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#shoes">SHOES</a></li>
          <li><a href="#sneakers">SNEAKERS</a></li>
          <li><a href="#flipflops">FLIP-FLOPS</a></li>
          <li><a href="#sale" style={{color: '#e4002b'}}>SALE</a></li>
        </ul>

        {/* Icons */}
        <div className="navbar-icons">
          <button className="icon-btn search-wrapper">
            <input type="text" placeholder="Search" className="search-input" />
            <Search size={20} />
          </button>
          <button className="icon-btn hide-mobile"><User size={20} /></button>
          <button className="icon-btn relative">
            <ShoppingBag size={20} />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
