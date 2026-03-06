import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Package, Heart, User, MapPin, CreditCard, LogOut } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const { user, logout } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="container profile-container">
        
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="profile-header">
            <h1 className="profile-name">{user.name}</h1>
            <span className="profile-level">ADICLUB LEVEL {user.level}</span>
          </div>

          <nav className="profile-nav">
            <button 
              className={`profile-nav-link ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <span style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><Package size={18} /> Orders</span>
              <ArrowRight size={16} />
            </button>
            <button className="profile-nav-link">
               <span style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><Heart size={18} /> Wishlist</span>
              <ArrowRight size={16} />
            </button>
            <button className="profile-nav-link">
               <span style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><User size={18} /> Personal Info</span>
              <ArrowRight size={16} />
            </button>
            <button className="profile-nav-link">
               <span style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><MapPin size={18} /> Addresses</span>
              <ArrowRight size={16} />
            </button>
            <button className="profile-nav-link">
               <span style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><CreditCard size={18} /> Payment Methods</span>
              <ArrowRight size={16} />
            </button>
            <button 
              className="profile-nav-link" 
              style={{marginTop: '2rem', color: '#e4002b', borderColor: '#e4002b'}}
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
               <span style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><LogOut size={18} /> Log Out</span>
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="profile-content">
          <div className="points-card">
            <div>
              <p className="points-label">Available Points</p>
              <h2 className="points-number">{user.points.toLocaleString()}</h2>
            </div>
            <button className="btn btn-outline" style={{borderColor: '#ede734', color: '#ede734'}}>REDEEM POINTS</button>
          </div>

          <h2 className="profile-content-title">ORDER HISTORY</h2>
          
          <div className="orders-list">
            
            {/* Mock Order 1 */}
            <div className="order-card">
              <div className="order-header">
                <div>
                  <p className="order-number">Order #AD-982441</p>
                  <p className="order-date">Placed on October 12, 2025</p>
                </div>
                <div style={{textAlign: 'right'}}>
                  <p className="order-status">DELIVERED</p>
                  <p className="order-total">$130.00</p>
                </div>
              </div>
              <div className="order-details">
                <div className="order-items">
                  <img src="/sneaker.png" alt="Ozweego" className="order-item-img" />
                </div>
                <div className="order-actions">
                  <button className="btn-outline">TRACK PACKAGE</button>
                  <button className="btn-outline">RETURN ITEM</button>
                </div>
              </div>
            </div>

            {/* Mock Order 2 */}
            <div className="order-card">
              <div className="order-header">
                <div>
                  <p className="order-number">Order #AD-776219</p>
                  <p className="order-date">Placed on June 4, 2025</p>
                </div>
                <div style={{textAlign: 'right'}}>
                  <p className="order-status" style={{color: 'var(--color-gray-800)'}}>RETURNED</p>
                  <p className="order-total">$190.00</p>
                </div>
              </div>
              <div className="order-details">
                <div className="order-items">
                  <img src="/hero_shoe.png" alt="Ultraboost" className="order-item-img" />
                </div>
                <div className="order-actions">
                  <button className="btn-outline">VIEW RETURN STATUS</button>
                </div>
              </div>
            </div>

          </div>
        </main>
        
      </div>
    </div>
  );
};

export default Profile;
