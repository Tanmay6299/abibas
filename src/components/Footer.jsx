import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="container newsletter-content">
          <h2 className="newsletter-title">JOIN OUR ADICLUB & GET 15% OFF</h2>
          <button className="btn btn-solid btn-newsletter">SIGN UP FOR FREE</button>
        </div>
      </div>
      
      <div className="container footer-links-grid">
        <div className="footer-col">
          <h3>PRODUCTS</h3>
          <ul>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Sneakers</a></li>
            <li><a href="#">Flip-Flops</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Release Dates</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>SPORTS</h3>
          <ul>
            <li><a href="#">Running</a></li>
            <li><a href="#">Basketball</a></li>
            <li><a href="#">Soccer</a></li>
            <li><a href="#">Golf</a></li>
            <li><a href="#">Outdoor</a></li>
            <li><a href="#">Tennis</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>SUPPORT</h3>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Order Tracker</a></li>
            <li><a href="#">Store Locator</a></li>
            <li><a href="#">Size Charts</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Promotions</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>COMPANY INFO</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
          
          <div className="social-icons">
            <a href="#"><Facebook size={24} /></a>
            <a href="#"><Twitter size={24} /></a>
            <a href="#"><Instagram size={24} /></a>
            <a href="#"><Youtube size={24} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-content">
          <ul className="bottom-links">
            <li><a href="#">Data settings</a></li>
            <li><a href="#">Do not sell my personal information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
          <p className="copyright">&copy; 2026 BRAND America, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
