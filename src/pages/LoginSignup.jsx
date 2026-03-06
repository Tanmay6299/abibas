import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Check, ArrowRight } from 'lucide-react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup } = useContext(ShopContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (success) navigate('/profile');
    } else {
      const success = signup(formData);
      if (success) navigate('/profile');
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <div className="auth-header">
            <h1 className="auth-title">{isLogin ? 'LOG IN' : 'JOIN THE CLUB'}</h1>
            <p className="auth-subtitle">
              {isLogin ? 'Welcome back. Log in to your account.' : 'Create an account and get 15% off your next order.'}
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
            )}
            
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
            </div>

            <button type="submit" className="btn btn-solid" style={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span>{isLogin ? 'LOG IN' : 'JOIN NOW'}</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                className="auth-toggle-btn" 
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'JOIN ADICLUB' : 'LOG IN'}
              </button>
            </p>
          </div>

          {!isLogin && (
            <div className="adiclub-benefits">
              <h3>ADICLUB BENEFITS</h3>
              <div className="benefit-item">
                <Check size={16} className="benefit-icon" />
                <span>Free shipping on all orders</span>
              </div>
              <div className="benefit-item">
                <Check size={16} className="benefit-icon" />
                <span>15% off voucher for your next purchase</span>
              </div>
              <div className="benefit-item">
                <Check size={16} className="benefit-icon" />
                <span>Member-only products and sales</span>
              </div>
              <div className="benefit-item">
                <Check size={16} className="benefit-icon" />
                <span>Earn points on every purchase</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
