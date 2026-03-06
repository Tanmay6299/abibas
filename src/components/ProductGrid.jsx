import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    name: "OZWEEGO SNEAKERS",
    category: "Sneakers",
    price: "$130",
    image: "/sneaker.png",
    new: true
  },
  {
    id: 2,
    name: "Y-3 SLIDES",
    category: "Flip-Flops",
    price: "$90",
    image: "/flipflop.png",
    new: false
  },
  {
    id: 3,
    name: "ULTRABOOST LIGHT",
    category: "Running Shoes",
    price: "$190",
    image: "/hero_shoe.png",
    new: true
  },
  {
    id: 4,
    name: "NMD_R1 SNEAKERS",
    category: "Sneakers",
    price: "$150",
    image: "/sneaker.png",
    new: false
  }
];

const ProductGrid = () => {
  return (
    <section className="product-section container" id="sneakers">
      <div className="section-header">
        <h2 className="section-title">TRENDING NOW</h2>
        <a href="#" className="view-all-link">
          VIEW ALL <ArrowRight size={16} />
        </a>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              {product.new && <span className="product-badge">NEW</span>}
              <button className="wishlist-btn">
                <Heart size={20} />
              </button>
            </div>
            
            <div className="product-info">
              <p className="product-price">{product.price}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
