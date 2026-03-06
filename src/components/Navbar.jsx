import React, { useState, useContext } from 'react';
import { Search, User, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen, searchQuery, setSearchQuery, wishlistItems, user } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <header className="navbar-wrapper">
      <div className="top-banner">
        <span>FREE SHIPPING FOR ADICLUB MEMBERS | JOIN NOW</span>
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
          <Link to="/" style={{fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-2px', textTransform: 'lowercase'}}>
            adidas
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/category/shoes">SHOES</Link></li>
          <li><Link to="/category/sneakers">SNEAKERS</Link></li>
          <li><Link to="/category/flip-flops">FLIP-FLOPS</Link></li>
          <li><Link to="/category/sale" style={{color: '#e4002b'}}>SALE</Link></li>
        </ul>

        {/* Icons */}
        <div className="navbar-icons">
          <form className="search-wrapper" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search" 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn-icon"><Search size={20} /></button>
          </form>
          
          <Link to="/wishlist" className="icon-btn hide-mobile relative">
            <Heart size={20} />
            {wishlistItems.length > 0 && (
              <span className="interaction-badge">{wishlistItems.length}</span>
            )}
          </Link>
          
          <Link to={user ? "/profile" : "/login"} className="icon-btn hide-mobile">
            <User size={20} />
          </Link>
          
          <button className="icon-btn relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="interaction-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
