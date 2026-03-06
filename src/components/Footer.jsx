import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Check } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="container newsletter-content">
          {isSubscribed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'black' }}>
               <Check size={32} />
               <h2 className="newsletter-title" style={{ margin: 0 }}>YOU'RE ON THE LIST! CHECK YOUR INBOX FOR 15% OFF.</h2>
            </div>
          ) : (
            <>
              <h2 className="newsletter-title">JOIN OUR ADICLUB & GET 15% OFF</h2>
              <form className="newsletter-form" onSubmit={handleSubscribe} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: '1rem',
                    border: '1px solid var(--color-gray-300)',
                    minWidth: '300px',
                    fontFamily: 'var(--font-body)'
                  }}
                />
                <button type="submit" className="btn btn-solid btn-newsletter">SIGN UP FOR FREE</button>
              </form>
            </>
          )}
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
