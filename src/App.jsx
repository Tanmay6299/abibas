import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider, ShopContext } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import CategoryPage from './pages/CategoryPage';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import LoginSignup from './pages/LoginSignup';
import './App.css';

function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

function AppContent() {
  const { toasts } = useContext(ShopContext);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <CartDrawer />
        
        <div className="toast-container">
          {toasts.map(toast => (
            <Toast key={toast.id} message={toast.message} type={toast.type} />
          ))}
        </div>

        <MainWithTransitions />
        
        <Footer />
      </div>
    </Router>
  );
}

function MainWithTransitions() {
  const location = useLocation();

  return (
    <main key={location.pathname} className="page-transition-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </main>
  );
}

export default App;
