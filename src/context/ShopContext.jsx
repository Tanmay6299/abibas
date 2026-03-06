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

  // Full Genuine Products Database (24 items)
  const products = [
    // SNEAKERS (8 items)
    {
      id: 1, name: "OZWEEGO OG SNEAKERS", category: "Sneakers", price: 130, image: "/sneaker.png", new: true,
      longDescription: "Reimagined from the late '90s, the OZWEEGO blends retro elements with futuristic design lines. Signature eyestay and bold midsole lines make these a standout choice for urban exploration.",
      detailsList: ["Regular fit", "Lace closure", "Mesh upper with suede overlays", "Adiprene+ forefoot cushioning", "Lightweight EVA midsole"],
      reviews: [
        { id: 101, author: "MARCUS_V", rating: 5, date: "2 Days Ago", text: "The comfort level is off the charts. Literally feels like walking on clouds." },
        { id: 102, author: "SNEAKER_QUEEN", rating: 4, date: "1 Week Ago", text: "Love the chunky aesthetic, though they run slightly large." }
      ]
    },
    {
      id: 2, name: "NMD_R1 V3 GHOST", category: "Sneakers", price: 170, image: "/sneaker.png", new: false,
      longDescription: "The evolution of the NMD continues. The R1 V3 takes the iconic silhouette and adds a tactical, translucent edge. Built for the daily commute with unmatched BOOST energy return.",
      detailsList: ["Textile upper", "BOOST midsole", "Molded heel patch", "Rubber outsole", "Contains recycled materials"],
      reviews: [
        { id: 201, author: "TECH_WEAR", rating: 5, date: "3 Days Ago", text: "Perfect for my techwear fits. The translucent bits look insane in person." }
      ]
    },
    {
      id: 3, name: "FORUM 84 HIGH 'VINTAGE'", category: "Sneakers", salePrice: 95, price: 130, image: "/sneaker_high_top.png", new: false,
      longDescription: "A direct nod to the 1984 original. These high-tops capture the spirit of the court with premium leather and the iconic X-strap design that defined an era of basketball culture.",
      detailsList: ["Premium leather upper", "Adjustable ankle strap", "Terry cloth lining", "Durable rubber cupsole"],
      reviews: [
        { id: 301, author: "RETRO_B_BALL", rating: 5, date: "1 Month Ago", text: "The quality of the leather is much better than the standard versions. Absolute grail." }
      ]
    },
    {
      id: 4, name: "SUPERSTAR 82 SHELL-TOE", category: "Sneakers", price: 110, image: "/sneaker_high_top.png", new: true,
      longDescription: "From the basketball courts of the 70s to the hip-hop stages of the 80s. The Superstar is the ultimate icon of street style, featuring the world-famous protective shell toe.",
      detailsList: ["Iconic shell toe", "Smooth leather upper", "Serrated 3-Stripes", "Herringbone-pattern outsole"],
      reviews: [
        { id: 401, author: "CLASSIC_KICKS", rating: 5, date: "5 Days Ago", text: "You can't call yourself a sneakerhead without a pair of these. Timeless." }
      ]
    },
    {
      id: 13, name: "CAMPUS 00S 'EMERALD'", category: "Sneakers", price: 110, image: "/sneaker.png", new: true,
      longDescription: "Inspired by the skateboarding culture of the early 2000s. The Campus 00s brings back those chunky proportions and bold colors for a new generation of style icons.",
      detailsList: ["Suede upper", "Extra wide laces", "Breathable textile lining", "Gum rubber outsole"],
      reviews: [
        { id: 1301, author: "SKATE_LIFE", rating: 5, date: "1 Week Ago", text: "Finally! A shoe that understands the chunky aesthetic perfectly." }
      ]
    },
    {
      id: 14, name: "SAMBA DECONSTRUCTED", category: "Sneakers", price: 120, image: "/sneaker_high_top.png", new: false,
      longDescription: "The Samba like you've never seen it before. Foldable, packable, and incredibly soft. This deconstructed take on the football icon is built for the modern minimal traveler.",
      detailsList: ["Ultra-soft leather upper", "Collapsible heel", "Minimalist stitching", "Slim rubber outsole"],
      reviews: [
        { id: 1401, author: "MODERN_NOMAD", rating: 5, date: "2 Weeks Ago", text: "Best travel shoes ever. They take up zero space in my carry-on." }
      ]
    },
    {
      id: 15, name: "GAZELLE INDOOR 'LUCID BLUE'", category: "Sneakers", salePrice: 80, price: 110, image: "/sneaker.png", new: false,
      longDescription: "Born in the training halls of the '60s, the Gazelle Indoor has found its home on the streets. This version features a premium suede upper and a semi-translucent gum sole.",
      detailsList: ["Premium suede upper", "Semi-translucent gum rubber sole", "T-toe overlay", "Trefoil logo on tongue"],
      reviews: [
        { id: 1501, author: "LONDON_TERRACE", rating: 4, date: "2 Weeks Ago", text: "The color is vibrant and the gum sole is just perfect." }
      ]
    },
    {
      id: 16, name: "STAN SMITH 'RECON'", category: "Sneakers", price: 140, image: "/sneaker_high_top.png", new: false,
      longDescription: "A high-end reinterpretation of the most famous tennis shoe. The Recon edition uses premium leather and subtle luxury detailing to elevate the minimalist silhouette.",
      detailsList: ["Premium leather constructions", "Minimalist branding", "Off-white midsole for vintage look", "Leather lining"],
      reviews: [
        { id: 1601, author: "MINIMALIST_CHIC", rating: 5, date: "3 Weeks Ago", text: "Worth every penny for the leather quality alone. So clean." }
      ]
    },

    // RUNNING SHOES (8 items)
    {
      id: 5, name: "ULTRABOOST LIGHT 23", category: "Running Shoes", salePrice: 140, price: 190, image: "/hero_shoe.png", new: true,
      longDescription: "Our lightest Ultraboost ever. Experience epic energy in intermediate and long-distance runs. Engineered for the female foot with a narrower heel fit and lower instep.",
      detailsList: ["30% lighter BOOST material", "PRIMEKNIT+ textile upper", "Continental™ Better Rubber", "Linear Energy Push system"],
      reviews: [
        { id: 501, author: "RUNNER_GRACE", rating: 5, date: "1 Day Ago", text: "I didn't think they could make Boost any better, but this lightness is a game changer." }
      ]
    },
    {
      id: 6, name: "ADIZERO ADIOS PRO 3", category: "Running Shoes", price: 250, image: "/hero_shoe.png", new: true,
      longDescription: "The ultimate long-distance racing shoe. Developed with world-class athletes to break records. Carbon-infused ENERGYRODS 2.0 provide lightweight stiffness for a snappy, efficient stride.",
      detailsList: ["Two layers of Lightstrike Pro", "ENERGYRODS limiting energy loss", "Synthetic mesh upper", "Targeted Continental™ Rubber"],
      reviews: [
        { id: 601, author: "ELITE_RUN", rating: 5, date: "5 Days Ago", text: "PB'd my half marathon in these. They just want to go fast." }
      ]
    },
    {
      id: 7, name: "DURAMO SPEED 2", category: "Running Shoes", salePrice: 55, price: 85, image: "/hero_shoe.png", new: false,
      longDescription: "Step up your training without breaking the bank. The Duramo Speed features a lightweight, breathable mesh upper and a full-length LIGHTSTRIKE midsole for responsive cushioning.",
      detailsList: ["Lightweight mesh upper", "Lightstrike cushioning", "Adiwear outsole", "Contains 50% recycled content"],
      reviews: [
        { id: 701, author: "DAILY_JOGGER", rating: 4, date: "1 Week Ago", text: "Great value for a daily trainer. Very breathable." }
      ]
    },
    {
      id: 8, name: "4DFWD 3 'VOLT'", category: "Running Shoes", price: 210, image: "/hero_shoe.png", new: false,
      longDescription: "The world's first bow-shaped 3D-printed midsole. Engineered to compress forward, reducing braking forces and transforming impact energy into forward motion.",
      detailsList: ["3D-printed 4D midsole", "Primeknit+ sock-like fit", "Integrated lace cage", "Continental™ Rubber outsole"],
      reviews: [
        { id: 801, author: "FUTURE_RUN", rating: 5, date: "2 Weeks Ago", text: "Walking in these feels futuristic. The forward momentum is actually noticeable." }
      ]
    },
    {
      id: 17, name: "SOLARBOOST 5", category: "Running Shoes", price: 160, image: "/hero_shoe.png", new: true,
      longDescription: "The workhorse for your daily miles. Providing steady support and reliable comfort with a full-length BOOST midsole and a supportive 'Rail' system to guide the foot.",
      detailsList: ["BOOST cushioning", "Control Rail technology", "Engineered mesh upper", "Stretchweb outsole"],
      reviews: [
        { id: 1701, author: "MARATHON_TRAIN", rating: 5, date: "1 Week Ago", text: "My fifth pair of Solarboosts. Consistently great for long training miles." }
      ]
    },
    {
      id: 18, name: "TERREX AGRAVIC BEYOND", category: "Running Shoes", price: 180, image: "/hero_shoe.png", new: true,
      longDescription: "Take your run off-road. The Terrex Agravic Beyond combines a gravel-ready outsole with a responsive midsole to keep you moving fast on technical terrain.",
      detailsList: ["Continental™ Lugged Outsole", "Pro-Moderator support", "Abrasion-resistant mesh", "Speed lacing system"],
      reviews: [
        { id: 1801, author: "TRAIL_KING", rating: 5, date: "3 Days Ago", text: "The grip on wet rocks is insane. Continental rubber never misses." }
      ]
    },
    {
      id: 19, name: "SUPERNOVA STRIDE", category: "Running Shoes", price: 110, image: "/hero_shoe.png", new: false,
      longDescription: "Entry-level professional performance. The Supernova Stride uses a hybrid Dreamstrike+ foam to provide high energy return at an accessible price point.",
      detailsList: ["Dreamstrike+ midsole", "Support Rods system", "Padded tongue and heel", "Engineered mesh"],
      reviews: [
        { id: 1901, author: "NEW_RUNNER", rating: 4, date: "2 Weeks Ago", text: "Transitioned from standard sneakers to these, my knees thank me." }
      ]
    },
    {
      id: 20, name: "ADIZERO SL 'TRAINER'", category: "Running Shoes", salePrice: 90, price: 120, image: "/hero_shoe.png", new: false,
      longDescription: "Elite technology for daily training. The SL (Super Light) is a fast, daily trainer that uses the same Lightstrike Pro foam found in our record-breaking racing shoes.",
      detailsList: ["Lightstrike Pro forefoot insert", "Full Lightstrike chassis", "Lightweight mesh", "Grippy rubber outsole"],
      reviews: [
        { id: 2001, author: "SPEED_WORK", rating: 5, date: "1 Month Ago", text: "Perfect for tempo runs and track workouts. So light." }
      ]
    },

    // FLIP FLOPS / SLIDES (8 items)
    {
      id: 9, name: "Y-3 ADILETTE 'LUXE'", category: "Flip-Flops", price: 150, image: "/flipflop.png", new: false,
      longDescription: "Yohji Yamamoto's high-fashion take on the iconic Adilette. Featuring a premium leather bandage and exaggerated proportions for a sophisticated poolside statement.",
      detailsList: ["Premium leather upper", "Contoured footbed", "Y-3 embossed logo", "Textured rubber outsole"],
      reviews: [
        { id: 901, author: "FASHION_FORWARD", rating: 5, date: "1 Week Ago", text: "The most expensive slides I own, and definitely the best looking." }
      ]
    },
    {
      id: 10, name: "ADILETTE 22 'CARBON'", category: "Flip-Flops", price: 60, image: "/flipflop.png", new: true,
      longDescription: "Inspired by futuristic expedition gear and 3D-printed topography. The Adilette 22 challenges the status quo with its unique textured aesthetic and bio-based material construction.",
      detailsList: ["Bio-based EVA content", "3D-effect topography", "Ergonomic footbed", "Durable grip"],
      reviews: [
        { id: 1001, author: "FUTURE_BOI", rating: 5, date: "4 Days Ago", text: "Everyone asks about these when I wear them. So unique." }
      ]
    },
    {
      id: 11, name: "ALPHABOUNCE+ RECOVERY", category: "Flip-Flops", salePrice: 35, price: 50, image: "/flipflop.png", new: false,
      longDescription: "Engineered for active recovery. The Alphabounce footbed provides massage-like comfort to tired feet after intense training or long days on your feet.",
      detailsList: ["Contoured Bounce footbed", "Adjustable synthetic strap", "Soft textile lining", "EVA outsole"],
      reviews: [
        { id: 1101, author: "BBALL_PLAYER", rating: 5, date: "1 Month Ago", text: "I put these on immediately after every game. Total relief." }
      ]
    },
    {
      id: 12, name: "ADILETTE AQUA 'ROYAL'", category: "Flip-Flops", price: 28, image: "/flipflop.png", new: false,
      longDescription: "The essential locker-room slide. One-piece molded EVA construction makes it completely waterproof and quick-drying. Lightweight, simple, and effective.",
      detailsList: ["Cloudfoam footbed", "One-piece molded EVA", "Quick-drying", "Ultra-lightweight"],
      reviews: [
        { id: 1201, author: "SWIM_TEAM", rating: 4, date: "2 Weeks Ago", text: "Dry in minutes. Perfect for the shower and pool." }
      ]
    },
    {
      id: 21, name: "TERREX SUMRA 'SANDAL'", category: "Flip-Flops", price: 90, image: "/flipflop.png", new: true,
      longDescription: "The Adilette's rugged cousin. Built for summer hiking and water activities with adjustable straps and a heavy-duty Continental™ Rubber outsole.",
      detailsList: ["Elastic heel strap", "Continental™ Rubber outsole", "Breathable textile", "Adjustable fit"],
      reviews: [
        { id: 2101, author: "OUTDOOR_GUY", rating: 5, date: "3 Days Ago", text: "Wore these through a river hike and they stayed perfectly secure." }
      ]
    },
    {
      id: 22, name: "ADILETTE COMFORT 'LOGO'", category: "Flip-Flops", price: 40, image: "/flipflop.png", new: false,
      longDescription: "The gold standard of comfort. Featuring a super-soft Cloudfoam Plus footbed that helps recharge your energy with every step. Finished with classic 3-Stripes branding.",
      detailsList: ["Cloudfoam Plus footbed", "Synthetic bandage upper", "Lightweight EVA outsole", "Padded lining"],
      reviews: [
        { id: 2201, author: "LOUNGE_MASTER", rating: 5, date: "1 Week Ago", text: "Literally the only things I wear around the house." }
      ]
    },
    {
      id: 23, name: "ADILETTE BOOST 'TRIPLE BLACK'", category: "Flip-Flops", price: 70, image: "/flipflop.png", new: true,
      longDescription: "Bringing the miracle of BOOST to your vacation. These slides feature a full-length Boost midsole for a level of cushioning never before seen in a slide.",
      detailsList: ["Full-length BOOST midsole", "Classic 3-Stripes bandage", "Molded fit", "Classic Adilette silhouette"],
      reviews: [
        { id: 2301, author: "BOOST_HEAD", rating: 5, date: "2 Weeks Ago", text: "Finally! Slides with Boost. The comfort is incomparable." }
      ]
    },
    {
      id: 24, name: "ADILETTE TND", category: "Flip-Flops", salePrice: 20, price: 35, image: "/flipflop.png", new: false,
      longDescription: "A versatile slide for every day. The TND (Team Name Design) features a classic look with modern materials for durability and comfort in all conditions.",
      detailsList: ["Superior grip outsole", "Synthetic upper", "Fast drying", "Textured footbed"],
      reviews: [
        { id: 2401, author: "SOCCER_MOM", rating: 5, date: "1 Month Ago", text: "Great for my kids after practice. They last forever." }
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
