import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Mock Products Database
  const products = [
    {
      id: 1,
      name: "OZWEEGO SNEAKERS",
      category: "Sneakers",
      price: 130,
      image: "/sneaker.png",
      new: true,
      description: "Take your style to the next level with these futuristic OZWEEGO sneakers featuring Adiprene cushioning."
    },
    {
      id: 2,
      name: "Y-3 SLIDES",
      category: "Flip-Flops",
      price: 90,
      image: "/flipflop.png",
      new: false,
      description: "Premium materials meet minimalist design in these comfortable and striking Y-3 collaboration slides."
    },
    {
      id: 3,
      name: "ULTRABOOST LIGHT",
      category: "Running Shoes",
      price: 190,
      image: "/hero_shoe.png",
      new: true,
      description: "Experience infinite energy return with our lightest BOOST ever. Made in part with recycled materials."
    },
    {
      id: 4,
      name: "NMD_R1 SNEAKERS",
      category: "Sneakers",
      price: 150,
      image: "/sneaker.png",
      new: false,
      description: "A streetwise essential. Combining the best of our past innovations with modern comfort technologies."
    }
  ];

  // Cart Functions
  const addToCart = (product, size = "Default") => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.size === size) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.size === size)));
  };

  const updateQuantity = (productId, size, amount) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId && item.size === size) {
        const newQuantity = item.quantity + amount;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Wishlist Functions
  const toggleWishlist = (productId) => {
    setWishlistItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  return (
    <ShopContext.Provider value={{
      products,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen,
      wishlistItems,
      toggleWishlist,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </ShopContext.Provider>
  );
};
