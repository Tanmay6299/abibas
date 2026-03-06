import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(ShopContext);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  if (cartItems.length === 0 && step !== 4) {
    return (
      <div className="container" style={{padding: '5rem 0', textAlign: 'center'}}>
        <h2>YOUR CART IS EMPTY</h2>
        <Link to="/" className="btn btn-solid" style={{marginTop: '2rem', display: 'inline-block'}}>
          RETURN TO SHOP
        </Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStepIndicator = () => (
    <div className="checkout-steps">
      <div className={`step-indicator ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
        <div className="step-number">{step > 1 ? <CheckCircle size={16} /> : '1'}</div>
        <span>Shipping</span>
      </div>
      <div className={`step-indicator ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
        <div className="step-number">{step > 2 ? <CheckCircle size={16} /> : '2'}</div>
        <span>Payment</span>
      </div>
      <div className={`step-indicator ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
        <div className="step-number">{step > 3 ? <CheckCircle size={16} /> : '3'}</div>
        <span>Review</span>
      </div>
    </div>
  );

  if (step === 4) {
    return (
      <div className="checkout-page">
        <div className="container checkout-success">
          <CheckCircle size={80} className="success-icon" />
          <h1 className="success-title">THANK YOU!</h1>
          <p style={{fontSize: '1.25rem', marginBottom: '1rem'}}>Your order #AD-55219 has been placed successfully.</p>
          <p style={{color: 'var(--color-gray-800)', marginBottom: '3rem'}}>We've sent a confirmation email to {formData.email}.</p>
          <Link to="/" className="btn btn-solid" style={{display: 'inline-block'}}>
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container checkout-container">
        
        <main className="checkout-main">
          {renderStepIndicator()}

          {step === 1 && (
            <div className="checkout-form-section">
              <h2>SHIPPING ADDRESS</h2>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                </div>
                <div className="form-group full-width">
                  <label>Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Zip Code</label>
                  <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} />
                </div>
              </div>
              <button 
                className="btn btn-solid" 
                style={{marginTop: '3rem', width: '100%', display: 'flex', justifyContent: 'space-between'}}
                onClick={nextStep}
              >
                <span>CONTINUE TO PAYMENT</span>
                <ArrowRight />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="checkout-form-section">
              <h2>PAYMENT METHOD</h2>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Card Number</label>
                  <div style={{position: 'relative'}}>
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="0000 0000 0000 0000" style={{width: '100%'}} />
                    <CreditCard style={{position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gray-400)'}} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" name="expiry" value={formData.expiry} onChange={handleInputChange} placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="123" />
                </div>
              </div>
              <div style={{display: 'flex', gap: '1rem', marginTop: '3rem'}}>
                <button className="btn btn-outline" onClick={prevStep} style={{flex: 1}}>BACK</button>
                <button 
                  className="btn btn-solid" 
                  style={{flex: 2, display: 'flex', justifyContent: 'space-between'}}
                  onClick={nextStep}
                >
                  <span>REVIEW ORDER</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="checkout-form-section">
              <h2>REVIEW ORDER</h2>
              <div style={{border: '1px solid var(--color-gray-200)', padding: '2rem', marginBottom: '2rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                  <div>
                    <h3 style={{fontSize: '0.85rem', color: 'var(--color-gray-800)'}}>SHIPPING TO:</h3>
                    <p>{formData.firstName} {formData.lastName}</p>
                    <p>{formData.address}</p>
                    <p>{formData.city}, {formData.zip}</p>
                  </div>
                  <button onClick={() => setStep(1)} style={{textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer'}}>Edit</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div>
                    <h3 style={{fontSize: '0.85rem', color: 'var(--color-gray-800)'}}>PAYING WITH:</h3>
                    <p>Card ending in {formData.cardNumber.slice(-4) || 'XXXX'}</p>
                  </div>
                  <button onClick={() => setStep(2)} style={{textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer'}}>Edit</button>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '1rem'}}>
                <button className="btn btn-outline" onClick={prevStep} style={{flex: 1}}>BACK</button>
                <button 
                  className="btn btn-solid" 
                  style={{flex: 2, display: 'flex', justifyContent: 'space-between'}}
                  onClick={nextStep}
                >
                  <span>PLACE ORDER</span>
                  <ShieldCheck />
                </button>
              </div>
            </div>
          )}
        </main>

        <aside className="checkout-sidebar">
          <h2 className="summary-title">ORDER SUMMARY</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span style={{color: '#2e7d32'}}>FREE</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <div className="summary-row summary-total">
            <span>TOTAL</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <div className="summary-items">
            {cartItems.map(item => (
              <div key={`${item.id}-${item.size}`} className="summary-item">
                <img src={item.image} alt={item.name} className="summary-item-img" />
                <div className="summary-item-info">
                  <p style={{fontWeight: 'bold'}}>{item.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>${((item.salePrice || item.price) * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Checkout;
