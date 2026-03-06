import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // Doubled Mock Products Database (24 items)
  const products = [
    // SNEAKERS (8 items)
    {
      id: 1, name: "OZWEEGO SNEAKERS", category: "Sneakers", price: 130, image: "/sneaker.png", new: true,
      longDescription: "Stand out in the crowd while staying incredibly comfortable. The OZWEEGO takes late-'90s and early-'00s running style and propels it into the future.",
      detailsList: ["Snug fit", "Lace closure", "Mesh, synthetic suede and TPU upper", "Adiprene cushioning"],
      reviews: [{ id: 101, author: "SneakerHead99", rating: 5, date: "2 Weeks Ago", text: "Most comfortable shoes I own." }]
    },
    {
      id: 2, name: "NMD_R1 SNEAKERS", category: "Sneakers", price: 150, image: "/sneaker.png", new: false,
      longDescription: "A streetwise essential. Combining the best of our past innovations with modern comfort technologies.",
      detailsList: ["Lace closure", "Stretch knit upper", "BOOST midsole"],
      reviews: [{ id: 401, author: "CityExplorer", rating: 5, date: "2 Weeks Ago", text: "The classic never dies." }]
    },
    {
      id: 3, name: "FORUM HIGH", category: "Sneakers", salePrice: 90, price: 120, image: "/sneaker_high_top.png", new: false,
      longDescription: "A legendary basketball shoe from the 80s returns. The Forum High features the iconic ankle strap.",
      detailsList: ["Hook-and-loop strap", "Leather upper"],
      reviews: [{ id: 501, author: "Hooper", rating: 5, date: "1 Month Ago", text: "Best retro silhouette." }]
    },
    {
      id: 4, name: "SUPERSTAR", category: "Sneakers", price: 100, image: "/sneaker_high_top.png", new: true,
      longDescription: "The iconic shell-toe sneaker. Born on the basketball court, now a streetwear staple.",
      detailsList: ["Classic rubber shell toe", "Leather upper"],
      reviews: [{ id: 601, author: "RetroLover", rating: 4, date: "3 Days Ago", text: "Can never go wrong." }]
    },
    {
      id: 13, name: "CAMPUS 00S", category: "Sneakers", price: 110, image: "/sneaker.png", new: true,
      longDescription: "A fresh take on the classic Campus, inspired by the chunky aesthetic of the early 2000s.",
      detailsList: ["Suede upper", "Textile lining", "Gum rubber outsole"],
      reviews: [{ id: 1301, author: "SkaterBoi", rating: 5, date: "1 Week Ago", text: "Perfect chunky vibe." }]
    },
    {
      id: 14, name: "SAMBA OG", category: "Sneakers", price: 100, image: "/sneaker_high_top.png", new: false,
      longDescription: "The timeless football icon. The Samba OG remains a staple of terrace culture.",
      detailsList: ["Full grain leather upper", "Suede overlays", "Gum rubber cupsole"],
      reviews: [{ id: 1401, author: "StyleIcon", rating: 5, date: "2 Weeks Ago", text: "Goes with everything." }]
    },
    {
      id: 15, name: "GAZELLE", category: "Sneakers", salePrice: 85, price: 100, image: "/sneaker.png", new: false,
      longDescription: "First released in the 60s, the Gazelle is one of the most beloved sneakers in history.",
      detailsList: ["Suede upper", "Synthetic lining", "Rubber outsole"],
      reviews: [{ id: 1501, author: "ClassicFan", rating: 4, date: "1 Month Ago", text: "Simple and clean." }]
    },
    {
      id: 16, name: "STAN SMITH", category: "Sneakers", price: 105, image: "/sneaker_high_top.png", new: false,
      longDescription: "Named after one of the greatest tennis players. A minimalist masterpiece.",
      detailsList: ["Synthetic upper (50% recycled)", "Perforated 3-Stripes", "Rubber outsole"],
      reviews: [{ id: 1601, author: "EcoFriendly", rating: 5, date: "2 Months Ago", text: "Great sustainable option." }]
    },

    // RUNNING SHOES (8 items)
    {
      id: 5, name: "ULTRABOOST LIGHT", category: "Running Shoes", salePrice: 150, price: 190, image: "/hero_shoe.png", new: true,
      longDescription: "Experience infinite energy return with our lightest BOOST ever.",
      detailsList: ["Linear Energy Push system", "Light BOOST"],
      reviews: [{ id: 301, author: "MarathonMike", rating: 5, date: "3 Days Ago", text: "Unbelievable energy return." }]
    },
    {
      id: 6, name: "ADIZERO ADIOS PRO", category: "Running Shoes", price: 250, image: "/hero_shoe.png", new: true,
      longDescription: "Built for speed. Our carbon-infused running shoe.",
      detailsList: ["Lightstrike Pro cushioning", "ENERGYRODS"],
      reviews: [{ id: 701, author: "SpeedDemon", rating: 5, date: "2 Months Ago", text: "Essentially cheating." }]
    },
    {
      id: 7, name: "DURAMO SL", category: "Running Shoes", salePrice: 50, price: 70, image: "/hero_shoe.png", new: false,
      longDescription: "Your daily running shoe. Lightweight comfort for short runs.",
      detailsList: ["Lightmotion cushioning", "Mesh upper"],
      reviews: [{ id: 801, author: "GymRat", rating: 4, date: "1 Week Ago", text: "Great budget shoe." }]
    },
    {
      id: 8, name: "4DFWD 3", category: "Running Shoes", price: 200, image: "/hero_shoe.png", new: false,
      longDescription: "The future is here. Featuring a 3D-printed midsole.",
      detailsList: ["4D 3D-printed midsole", "PRIMEKNIT upper"],
      reviews: [{ id: 901, author: "TechGeek", rating: 3, date: "3 Weeks Ago", text: "Looks amazing." }]
    },
    {
      id: 17, name: "SOLARGLIDE 6", category: "Running Shoes", salePrice: 100, price: 140, image: "/hero_shoe.png", new: false,
      longDescription: "A reliable daily trainer for runners of all levels.",
      detailsList: ["BOOST cushioning", "LEP 2.0 system", "Circular knit upper"],
      reviews: [{ id: 1701, author: "DailyMix", rating: 4, date: "2 Weeks Ago", text: "Solid daily trainer." }]
    },
    {
      id: 18, name: "TERREX AGRAVIC FLOW", category: "Running Shoes", price: 160, image: "/hero_shoe.png", new: true,
      longDescription: "Conquer the trails with these rugged and responsive trail runners.",
      detailsList: ["Continental™ Rubber outsole", "BOOST midsole", "Abrasion-resistant overlays"],
      reviews: [{ id: 1801, author: "TrailRunner", rating: 5, date: "5 Days Ago", text: "Best grip on the market." }]
    },
    {
      id: 19, name: "SUPERNOVA RISE", category: "Running Shoes", price: 140, image: "/hero_shoe.png", new: true,
      longDescription: "Designed for comfort and support during every run.",
      detailsList: ["Dreamstrike+ foam", "Support Rods", "Engineered mesh upper"],
      reviews: [{ id: 1901, author: "ComfortFirst", rating: 5, date: "1 Week Ago", text: "Softest ride ever." }]
    },
    {
      id: 20, name: "QUESTAR", category: "Running Shoes", salePrice: 60, price: 80, image: "/hero_shoe.png", new: false,
      longDescription: "Find your rhythm in these comfortable and durable running shoes.",
      detailsList: ["Bounce midsole", "Geofit padded collar", "Textile upper"],
      reviews: [{ id: 2001, author: "BeginnerRun", rating: 4, date: "2 Months Ago", text: "Great for getting started." }]
    },

    // FLIP FLOPS / SLIDES (8 items)
    {
      id: 9, name: "Y-3 SLIDES", category: "Flip-Flops", price: 90, image: "/flipflop.png", new: false,
      longDescription: "Premium materials meet minimalist design.",
      detailsList: ["PORON® performance cushioning", "Y-3 Logo"],
      reviews: [{ id: 201, author: "LuxuryLover", rating: 5, date: "1 Week Ago", text: "Absolutely stunning." }]
    },
    {
      id: 10, name: "ADILETTE COMFORT", category: "Flip-Flops", price: 40, image: "/flipflop.png", new: true,
      longDescription: "The ultimate lounge slide. Cloudfoam Plus cushioning.",
      detailsList: ["Cloudfoam Plus footbed"],
      reviews: [{ id: 1001, author: "ChillGuy", rating: 5, date: "4 Days Ago", text: "Like pillows." }]
    },
    {
      id: 11, name: "ADILETTE SHOWER", category: "Flip-Flops", salePrice: 20, price: 30, image: "/flipflop.png", new: false,
      longDescription: "Essential for the locker room. Quick-drying.",
      detailsList: ["Quick-dry bandage"],
      reviews: [{ id: 1101, author: "Swimmer12", rating: 4, date: "1 Month Ago", text: "Basic but good." }]
    },
    {
      id: 12, name: "YZY SLIDE", category: "Flip-Flops", price: 70, image: "/flipflop.png", new: false,
      longDescription: "The minimal slip-on everyone is talking about.",
      detailsList: ["Injected EVA foam", "Minimalist"],
      reviews: [{ id: 1201, author: "HypeBeast", rating: 5, date: "2 Weeks Ago", text: "Worth it." }]
    },
    {
      id: 21, name: "TERREX SUMRA", category: "Flip-Flops", price: 85, image: "/flipflop.png", new: true,
      longDescription: "Versatile sandals for all your summer adventures.",
      detailsList: ["Continental™ Rubber outsole", "Adjustable straps", "Breathable feel"],
      reviews: [{ id: 2101, author: "AdventureAwaits", rating: 5, date: "3 Days Ago", text: "Can hike in these!" }]
    },
    {
      id: 22, name: "ADILETTE 22", category: "Flip-Flops", salePrice: 45, price: 60, image: "/flipflop.png", new: true,
      longDescription: "Inspired by 3D topography. A futuristic look for a classic slide.",
      detailsList: ["Bio-based EVA material", "Textured grip"],
      reviews: [{ id: 2201, author: "FutureVibe", rating: 5, date: "1 Week Ago", text: "Love the 3D look." }]
    },
    {
      id: 23, name: "ALPHABOUNCE SLIDES", category: "Flip-Flops", price: 55, image: "/flipflop.png", new: false,
      longDescription: "Recovery slides with Alphabounce cushioning for tired feet.",
      detailsList: ["Alphabounce footbed", "Adjustable strap"],
      reviews: [{ id: 2301, author: "Baller", rating: 4, date: "2 Weeks Ago", text: "Great for after the game." }]
    },
    {
      id: 24, name: "ADILETTE AQUA", category: "Flip-Flops", salePrice: 15, price: 25, image: "/flipflop.png", new: false,
      longDescription: "Clean, quick-drying slides for the pool deck.",
      detailsList: ["Molded EVA upper", "Quick-dry"],
      reviews: [{ id: 2401, author: "PoolBoy", rating: 5, date: "1 Month Ago", text: "Perfect pool slides." }]
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
    showToast(`ADDED ${product.name} TO BAG`, 'cart');
  };

  const toggleWishlist = (productId) => {
    const product = products.find(p => p.id === productId);
    setWishlistItems(prev => {
      if (prev.includes(productId)) {
        showToast(`REMOVED ${product?.name} FROM WISHLIST`, 'info');
        return prev.filter(id => id !== productId);
      }
      showToast(`ADDED ${product?.name} TO WISHLIST`, 'wishlist');
      return [...prev, productId];
    });
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

  const cartTotal = cartItems.reduce((total, item) => total + ((item.salePrice || item.price) * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Authentication Functions
  const login = (email, password) => {
    // Simulated login logic
    const mockUser = {
      name: email.split('@')[0].toUpperCase(),
      email: email,
      level: 3,
      points: 4250,
      joinedDate: "October 2025"
    };
    setUser(mockUser);
    return true;
  };

  const signup = (userData) => {
    // Simulated signup logic
    const newUser = {
      ...userData,
      name: userData.firstName.toUpperCase(),
      level: 1,
      points: 0,
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
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
      setSearchQuery,
      user,
      login,
      signup,
      logout,
      toasts
    }}>
      {children}
    </ShopContext.Provider>
  );
};
