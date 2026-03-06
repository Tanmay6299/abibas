import React, { createContext, useState } from 'react';

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
      description: "Take your style to the next level with these futuristic OZWEEGO sneakers featuring Adiprene cushioning.",
      longDescription: "Stand out in the crowd while staying incredibly comfortable. The OZWEEGO takes late-'90s and early-'00s running style and propels it into the future. A mix of targeted support and Adiprene cushioning makes these your new go-to daily drivers.",
      detailsList: [
        "Snug fit",
        "Lace closure",
        "Mesh, synthetic suede and TPU upper",
        "Soft, lightweight feel",
        "EVA midsole with Adiprene cushioning",
        "Rubber outsole"
      ],
      reviews: [
        { id: 101, author: "SneakerHead99", rating: 5, date: "2 Weeks Ago", text: "Most comfortable shoes I own. The cushioning is insane and they look great with joggers." },
        { id: 102, author: "RunnerGirl", rating: 4, date: "1 Month Ago", text: "Look amazing but run about a half size small. Definitely size up if you have wide feet." },
        { id: 103, author: "StreetStyle", rating: 2, date: "3 Months Ago", text: "The style is cool but the mesh material felt flimsy to me. Returned them." }
      ]
    },
    {
      id: 2,
      name: "Y-3 SLIDES",
      category: "Flip-Flops",
      price: 90,
      image: "/flipflop.png",
      new: false,
      description: "Premium materials meet minimalist design in these comfortable and striking Y-3 collaboration slides.",
      longDescription: "A luxurious take on a classic poolside essential. The Y-3 Slides examine the core elements of the legendary adilette, then dramatically reinterpret them. The striking statement piece features a chunky, elevated profile crafted from premium smooth polyurethane.",
      detailsList: [
        "Slip-on construction",
        "Polyurethane upper",
        "Synthetic leather lining",
        "Elevated PORON® performance cushioning",
        "Rubber outsole",
        "Y-3 logo detail"
      ],
      reviews: [
        { id: 201, author: "LuxuryLover", rating: 5, date: "1 Week Ago", text: "Absolutely stunning. You get what you pay for with the Y-3 line. The platform isn't too high and they are very stable." },
        { id: 202, author: "AverageJoe", rating: 3, date: "2 Months Ago", text: "They are nice but maybe not worth $90 for slides. Very heavy." }
      ]
    },
    {
      id: 3,
      name: "ULTRABOOST LIGHT",
      category: "Running Shoes",
      price: 190,
      image: "/hero_shoe.png",
      new: true,
      description: "Experience infinite energy return with our lightest BOOST ever. Made in part with recycled materials.",
      longDescription: "Epic energy just got lighter. Introducing the Ultraboost Light, our lightest ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date.",
      detailsList: [
        "Regular fit",
        "Lace closure",
        "adidas PRIMEKNIT+ textile upper",
        "Textile lining",
        "Linear Energy Push system",
        "Light BOOST"
      ],
      reviews: [
        { id: 301, author: "MarathonMike", rating: 5, date: "3 Days Ago", text: "Unbelievable energy return. I PR'd my 10k the first weekend I wore these." },
        { id: 302, author: "FitnessFreak", rating: 5, date: "1 Week Ago", text: "The perfect running shoe. Light, bouncy, and the primeknit upper fits like a sock." },
        { id: 303, author: "CasualWalker", rating: 4, date: "3 Weeks Ago", text: "Very comfortable but the arch support takes a few days to break in." },
        { id: 304, author: "DisappointedBuyer", rating: 2, date: "1 Month Ago", text: "The sole wore out way too fast for a $190 shoe. I only got about 200 miles out of them." }
      ]
    },
    {
      id: 4,
      name: "NMD_R1 SNEAKERS",
      category: "Sneakers",
      price: 150,
      image: "/sneaker.png",
      new: false,
      description: "A streetwise essential. Combining the best of our past innovations with modern comfort technologies.",
      longDescription: "Pack your bag, lace up and get going. City adventures beckon in these NMD_R1 shoes. An update to an acclaimed '80s runner from the archive, these modern sneakers have a soft, stretchy knit upper and energy-returning BOOST cushioning for all-day comfort.",
      detailsList: [
        "Lace closure",
        "Stretch knit upper",
        "Hugs the foot",
        "Textile lining",
        "BOOST midsole with signature plugs"
      ],
      reviews: [
        { id: 401, author: "CityExplorer", rating: 5, date: "2 Weeks Ago", text: "The classic never dies. I buy a new pair of NMDs every year. Perfect for walking around the city all day." },
        { id: 402, author: "Traveler", rating: 4, date: "1 Month Ago", text: "Easy to pack and super comfortable for airport travel." }
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
