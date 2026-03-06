import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
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
      <Router>
        <div className="app">
          <Navbar />
          <CartDrawer />
          <main>
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
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
