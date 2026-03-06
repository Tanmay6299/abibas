import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <>
      <Hero />
      
      <Marquee text="THE FUTURE OF FAST /// JOIN THE ADICLUB /// 15% OFF ///" />

      <ProductGrid />

      <Marquee text="LIMITLESS STYLE /// IMPOSSIBLE IS NOTHING /// NEW SEASON ///" />

      {/* Modern Brutalist Categories Section */}
      <section className="categories-banner" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="category-card reveal" style={{ 
              backgroundImage: 'url(/hero_shoe.png)',
              height: '600px',
              position: 'relative',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px solid var(--color-black)',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                width: '100%', 
                padding: '2rem',
                background: 'linear-gradient(transparent, var(--color-black))',
                color: var(--color-white)
              }}>
                <h2 style={{ fontSize: '4rem', margin: 0 }}>RUNNING</h2>
                <Link to="/category/shoes" className="btn btn-neon" style={{ marginTop: '1rem' }}>DISCOVER</Link>
              </div>
            </div>

            <div className="category-card reveal" style={{ 
              backgroundImage: 'url(/sneaker.png)',
              height: '600px',
              position: 'relative',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px solid var(--color-black)',
              overflow: 'hidden',
              transform: 'translateY(50px)'
            }}>
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                width: '100%', 
                padding: '2rem',
                background: 'linear-gradient(transparent, var(--color-black))',
                color: var(--color-white)
              }}>
                <h2 style={{ fontSize: '4rem', margin: 0 }}>SNEAKERS</h2>
                <Link to="/category/sneakers" className="btn btn-neon" style={{ marginTop: '1rem' }}>DISCOVER</Link>
              </div>
            </div>

            <div className="category-card reveal" style={{ 
              backgroundImage: 'url(/flipflop.png)',
              height: '600px',
              position: 'relative',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px solid var(--color-black)',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                width: '100%', 
                padding: '2rem',
                background: 'linear-gradient(transparent, var(--color-black))',
                color: var(--color-white)
              }}>
                <h2 style={{ fontSize: '4rem', margin: 0 }}>SLIDES</h2>
                <Link to="/category/flip-flops" className="btn btn-neon" style={{ marginTop: '1rem' }}>DISCOVER</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
