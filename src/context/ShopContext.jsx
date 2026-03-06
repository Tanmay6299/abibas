import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Expanded Mock Products Database
  const products = [
    // SNEAKERS
    {
      id: 1, name: "OZWEEGO SNEAKERS", category: "Sneakers", price: 130, image: "/sneaker.png", new: true,
      longDescription: "Stand out in the crowd while staying incredibly comfortable. The OZWEEGO takes late-'90s and early-'00s running style and propels it into the future. A mix of targeted support and Adiprene cushioning makes these your new go-to daily drivers.",
      detailsList: ["Snug fit", "Lace closure", "Mesh, synthetic suede and TPU upper", "Soft, lightweight feel", "EVA midsole with Adiprene cushioning", "Rubber outsole"],
      reviews: [
        { id: 101, author: "SneakerHead99", rating: 5, date: "2 Weeks Ago", text: "Most comfortable shoes I own. The cushioning is insane and they look great with joggers." },
        { id: 102, author: "RunnerGirl", rating: 4, date: "1 Month Ago", text: "Look amazing but run about a half size small. Definitely size up if you have wide feet." }
      ]
    },
    {
      id: 2, name: "NMD_R1 SNEAKERS", category: "Sneakers", price: 150, image: "/sneaker.png", new: false,
      longDescription: "A streetwise essential. Combining the best of our past innovations with modern comfort technologies. City adventures beckon in these NMD_R1 shoes.",
      detailsList: ["Lace closure", "Stretch knit upper", "Hugs the foot", "Textile lining", "BOOST midsole with signature plugs"],
      reviews: [
        { id: 401, author: "CityExplorer", rating: 5, date: "2 Weeks Ago", text: "The classic never dies. I buy a new pair of NMDs every year. Perfect for walking around the city all day." }
      ]
    },
    {
      id: 3, name: "FORUM HIGH", category: "Sneakers", salePrice: 90, price: 120, image: "/sneaker_high_top.png", new: false,
      longDescription: "A legendary basketball shoe from the 80s returns. The Forum High features the iconic ankle strap and premium leather materials.",
      detailsList: ["Lace closure with hook-and-loop strap", "Leather upper", "Textile lining", "Rubber cupsole"],
      reviews: [
        { id: 501, author: "Hooper", rating: 5, date: "1 Month Ago", text: "Best retro silhouette out there right now." }
      ]
    },
    {
      id: 4, name: "SUPERSTAR", category: "Sneakers", price: 100, image: "/sneaker_high_top.png", new: true,
      longDescription: "The iconic shell-toe sneaker. Born on the basketball court, now a streetwear staple.",
      detailsList: ["Regular fit", "Lace closure", "Leather upper", "Classic rubber shell toe", "Textile lining"],
      reviews: [
        { id: 601, author: "RetroLover", rating: 4, date: "3 Days Ago", text: "Can never go wrong with a classic. A bit stiff at first though." }
      ]
    },

    // RUNNING SHOES
    {
      id: 5, name: "ULTRABOOST LIGHT", category: "Running Shoes", salePrice: 150, price: 190, image: "/hero_shoe.png", new: true,
      longDescription: "Experience infinite energy return with our lightest BOOST ever. Made in part with recycled materials.",
      detailsList: ["Regular fit", "adidas PRIMEKNIT+ textile upper", "Linear Energy Push system", "Light BOOST"],
      reviews: [
        { id: 301, author: "MarathonMike", rating: 5, date: "3 Days Ago", text: "Unbelievable energy return. I PR'd my 10k the first weekend I wore these." },
        { id: 304, author: "DisappointedBuyer", rating: 2, date: "1 Month Ago", text: "The sole wore out way too fast for a $190 shoe." }
      ]
    },
    {
      id: 6, name: "ADIZERO ADIOS PRO", category: "Running Shoes", price: 250, image: "/hero_shoe.png", new: true,
      longDescription: "Built for speed. Our carbon-infused running shoe designed for breaking personal records.",
      detailsList: ["Lace closure", "Celermesh 2.0 upper", "Lightstrike Pro cushioning", "ENERGYRODS limit energy loss"],
      reviews: [
        { id: 701, author: "SpeedDemon", rating: 5, date: "2 Months Ago", text: "These shoes are essentially cheating. They throw you forward with every step." }
      ]
    },
    {
      id: 7, name: "DURAMO SL", category: "Running Shoes", salePrice: 50, price: 70, image: "/hero_shoe.png", new: false,
      longDescription: "Your daily running shoe. Lightweight comfort for short runs and gym sessions.",
      detailsList: ["Regular fit", "Mesh upper", "Lightmotion cushioning", "Rubber outsole"],
      reviews: [
        { id: 801, author: "GymRat", rating: 4, date: "1 Week Ago", text: "Great budget shoe. Doesn't have BOOST but perfectly fine for the gym." }
      ]
    },
    {
      id: 8, name: "4DFWD 3", category: "Running Shoes", price: 200, image: "/hero_shoe.png", new: false,
      longDescription: "The future is here. Featuring a 3D-printed midsole designed to redirect energy forward.",
      detailsList: ["Lace closure", "PRIMEKNIT upper", "4D 3D-printed midsole", "Continental™ Rubber outsole"],
      reviews: [
        { id: 901, author: "TechGeek", rating: 3, date: "3 Weeks Ago", text: "Looks amazing but feels a bit heavy compared to Ultraboost." }
      ]
    },

    // FLIP FLOPS / SLIDES
    {
      id: 9, name: "Y-3 SLIDES", category: "Flip-Flops", price: 90, image: "/flipflop.png", new: false,
      longDescription: "Premium materials meet minimalist design in these comfortable and striking Y-3 collaboration slides.",
      detailsList: ["Slip-on construction", "Polyurethane upper", "Synthetic leather lining", "Elevated PORON® performance cushioning"],
      reviews: [
        { id: 201, author: "LuxuryLover", rating: 5, date: "1 Week Ago", text: "Absolutely stunning. You get what you pay for with the Y-3 line." }
      ]
    },
    {
      id: 10, name: "ADILETTE COMFORT", category: "Flip-Flops", price: 40, image: "/flipflop.png", new: true,
      longDescription: "The ultimate lounge slide. Featuring a contoured footbed with Cloudfoam Plus cushioning.",
      detailsList: ["Single-bandage synthetic upper", "Textile lining", "Cloudfoam Plus footbed", "EVA outsole"],
      reviews: [
        { id: 1001, author: "ChillGuy", rating: 5, date: "4 Days Ago", text: "Like walking on pillows." }
      ]
    },
    {
      id: 11, name: "ADILETTE SHOWER", category: "Flip-Flops", salePrice: 20, price: 30, image: "/flipflop.png", new: false,
      longDescription: "Essential for the locker room. Quick-drying and comfortable.",
      detailsList: ["Slip-on", "Synthetic upper", "Contoured footbed", "EVA outsole"],
      reviews: [
        { id: 1101, author: "Swimmer12", rating: 4, date: "1 Month Ago", text: "Basic but gets the job done at the pool." }
      ]
    },
    {
      id: 12, name: "YZY SLIDE", category: "Flip-Flops", price: 70, image: "/flipflop.png", new: false,
      longDescription: "The minimal slip-on everyone is talking about. Injected EVA foam provides lightweight durability.",
      detailsList: ["Injected EVA foam", "Soft top layer in footbed", "Strategic groove placement on outsole"],
      reviews: [
        { id: 1201, author: "HypeBeast", rating: 5, date: "2 Weeks Ago", text: "So hard to get but absolutely worth it." },
        { id: 1202, author: "ComfyFeet", rating: 5, date: "1 Month Ago", text: "The fit is odd. Definitely size up two full sizes." }
      ]
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

  const cartTotal = cartItems.reduce((total, item) => total + ((item.salePrice || item.price) * item.quantity), 0);
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
