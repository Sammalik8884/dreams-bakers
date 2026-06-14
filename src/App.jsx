import { useState, useEffect } from 'react';
import { Menu, Phone, Search, User, ShoppingBag, ChevronRight, X } from 'lucide-react';
import { menuData } from './data';
import './App.css';

// Using lucide icons as placeholders for category silhouettes
import { Coffee, Cake, Pizza, Sandwich, Utensils, Gift, CupSoda } from 'lucide-react';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topCategories = [
    { name: "Bread", icon: <Utensils /> },
    { name: "Cakes", icon: <Cake /> },
    { name: "Snacks", icon: <Coffee /> },
    { name: "Pizza", icon: <Pizza /> },
    { name: "Biscuits", icon: <Coffee /> },
    { name: "Pastry", icon: <Cake /> },
    { name: "Donut", icon: <Coffee /> },
    { name: "Salad", icon: <Utensils /> },
    { name: "Sandwich", icon: <Sandwich /> },
    { name: "Burger", icon: <Utensils /> },
    { name: "Nimko", icon: <Coffee /> },
    { name: "Puff", icon: <Coffee /> },
    { name: "Shawarma", icon: <Utensils /> },
    { name: "Milk Shake", icon: <CupSoda /> },
    { name: "Discounted Deals", icon: <Gift /> },
    { name: "Fresh Juice", icon: <CupSoda /> }
  ];

  return (
    <div className="app-container">
      {/* A. Top Alert Banner */}
      <div className="top-alert">
        <span>Delivering till late. Every single day. (7:00 a.m. – 3:00 a.m.)</span>
        <span className="top-alert-sub">During peak hours, high order volume may extend delivery times...</span>
      </div>

      {/* B. Header / Navbar */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        {/* Row 1: Utility Nav */}
        <div className="header-row-1 hidden-mobile">
          <div className="utility-left">
            <button className="hamburger-btn" onClick={() => setIsDrawerOpen(true)}>
              <Menu size={20} />
            </button>
            <div className="quick-links">
              <a href="#Pizza" className="quick-link" onClick={(e) => { e.preventDefault(); document.getElementById('Pizza')?.scrollIntoView({ behavior: 'smooth' }); }}>Pizza</a>
              <a href="#Cakes" className="quick-link" onClick={(e) => { e.preventDefault(); document.getElementById('Cakes')?.scrollIntoView({ behavior: 'smooth' }); }}>Cakes</a>
              <a href="#Biscuits" className="quick-link" onClick={(e) => { e.preventDefault(); document.getElementById('Biscuits')?.scrollIntoView({ behavior: 'smooth' }); }}>Biscuits</a>
              <a href="#Pastry" className="quick-link" onClick={(e) => { e.preventDefault(); document.getElementById('Pastry')?.scrollIntoView({ behavior: 'smooth' }); }}>Pastry</a>
              <a href="#Bread" className="quick-link" onClick={(e) => { e.preventDefault(); document.getElementById('Bread')?.scrollIntoView({ behavior: 'smooth' }); }}>Bread</a>
              <a href="#Puff" className="quick-link" onClick={(e) => { e.preventDefault(); document.getElementById('Puff')?.scrollIntoView({ behavior: 'smooth' }); }}>Puffs</a>
            </div>
          </div>
        </div>

        {/* Row 2: Main Header */}
        <div className="header-row-2">
          {/* Left Spacer for proper flex centering */}
          <div className="header-spacer hidden-mobile"></div>

          {/* Mobile hamburger */}
          <div className="mobile-only" style={{ flex: 1, alignItems: 'center' }}>
            <button className="hamburger-btn" onClick={() => setIsDrawerOpen(true)}>
              <Menu size={24} />
            </button>
          </div>

          <div className="logo-wrapper">
            <img src="/logo.jpeg" alt="Tehzeeb Bakers Clone" className="main-logo" />
          </div>

          <div className="header-actions">
            <button className="action-icon hidden-mobile">
              <Phone size={20} />
              <span style={{ fontSize: '13px', fontWeight: '500' }}>Call Us</span>
            </button>
            <button className="action-icon hidden-mobile">
              <Search size={20} />
            </button>
            <button className="action-icon hidden-mobile">
              <User size={20} />
            </button>
            <button className="action-icon">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Row 3: Secondary Nav */}
        <div className="header-row-3 hidden-mobile">
          <a href="#" className="nav-link">What's new</a>
          <a href="#Discounted Deals" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('Discounted Deals')?.scrollIntoView({ behavior: 'smooth' }); }}>Best sellers</a>
          <a href="#Discounted Deals" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('Discounted Deals')?.scrollIntoView({ behavior: 'smooth' }); }}>Quick order</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#Gifting" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('Gifting')?.scrollIntoView({ behavior: 'smooth' }); }}>Gifting</a>
          <a href="#Pizza" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('Pizza')?.scrollIntoView({ behavior: 'smooth' }); }}>Deliver Nationwide</a>
          <a href="#Snacks" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('Snacks')?.scrollIntoView({ behavior: 'smooth' }); }}>Snacks</a>
          <a href="#Salad" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('Salad')?.scrollIntoView({ behavior: 'smooth' }); }}>Salad</a>
        </div>
      </header>

      {/* C. Full-Width Hero Banner */}
      <section className="hero-banner">
        {/* Placeholder for promotional image */}
        <div className="hero-placeholder">
          <h1 style={{ textAlign: 'center', padding: '0 20px' }}>Welcome to Dream Sweets & Bakers</h1>
        </div>
      </section>

      {/* D. Categories Section */}
      <section className="categories-section container">
        <h2 className="section-heading">CATEGORIES</h2>
        <div className="cat-scroll">
          {topCategories.map((cat, idx) => (
            <button 
              key={idx} 
              className="category-item" 
              style={{ textDecoration: 'none', background: 'transparent', border: 'none' }}
              onClick={() => document.getElementById(cat.name)?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="cat-icon">
                {/* Silhouette placeholder */}
                {cat.icon}
              </div>
              <span className="cat-label">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Product List Mapped from data.js */}
      {Object.keys(menuData).map(categoryName => (
        <section key={categoryName} id={categoryName} className="container" style={{ paddingBottom: '80px', paddingTop: '40px' }}>
          <h2 className="section-heading" style={{ fontSize: '28px', marginBottom: '24px' }}>{categoryName}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
            {menuData[categoryName].map((item, idx) => (
              <div key={idx} className="product-card">
                <div className="product-img-wrapper">
                  <span style={{ fontSize: '48px', color: '#C8A84B', fontWeight: 'bold' }}>{categoryName[0]}</span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  {item.description && <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>{item.description}</p>}
                  
                  {item.price && <p className="product-price">Rs. {item.price}</p>}
                  
                  {item.prices && (
                    <div style={{ marginBottom: '16px' }}>
                      {Object.entries(item.prices).map(([size, price]) => (
                        <div key={size} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>{size}</span>
                          <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--color-primary)' }}>Rs. {price}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button 
                    className="btn-primary btn-add-cart" 
                    style={{ marginTop: item.prices ? '0' : 'auto' }}
                    onClick={() => setCartCount(c => c + 1)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* E. Feature Section — Coffee Fudge Cake */}
      <section className="feature-section">
        <span className="feature-overline">Our Signature</span>
        <h2 className="feature-title">Coffee Fudge Cake</h2>
        <p className="feature-body">
          Experience the ultimate indulgence with our signature Coffee Fudge Cake. Rich, moist chocolate cake layered with espresso-infused fudge frosting. Perfect for any celebration.
        </p>
        <button className="btn-secondary" onClick={() => document.getElementById('Cakes')?.scrollIntoView({ behavior: 'smooth' })}>Order Now</button>
      </section>

      {/* F. Gifting Section */}
      <section className="gifting-section container">
        <h2 className="section-heading">GIFTING</h2>
        <p className="gifting-sub">
          Celebrate life's special moments with our elegantly crafted gift baskets and premium assorted boxes. The perfect treat for your loved ones.
        </p>
        <div className="gifting-grid">
          <div className="gifting-card" onClick={() => document.getElementById('Gifting')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="gifting-card-bg"></div>
            <span className="gifting-label">BASKET</span>
          </div>
          <div className="gifting-card" onClick={() => document.getElementById('Biscuits')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="gifting-card-bg"></div>
            <span className="gifting-label">BISCUITS</span>
          </div>
          <div className="gifting-card" onClick={() => document.getElementById('Cakes')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="gifting-card-bg"></div>
            <span className="gifting-label">CAKES</span>
          </div>
        </div>
      </section>

      {/* G. Legacy / About Section */}
      <section className="legacy-section container">
        <div className="legacy-content">
          <div className="legacy-eyebrow">114 Years of Legacy</div>
          <h2 className="legacy-title">The Classic Baking Tradition</h2>
          <p className="legacy-body">
            For over a century, we have been crafting the finest baked goods with uncompromising quality and passion. Our recipes have been passed down through generations, ensuring that every bite delivers a taste of our rich heritage.
          </p>
          <a href="#" className="legacy-link">
            Read more <ChevronRight size={18} />
          </a>
          <div className="legacy-tags">Islamabad | Rawalpindi | Lahore | Wah</div>
        </div>
        <div className="legacy-image"></div>
      </section>

      {/* H. Newsletter Section */}
      <section className="newsletter-section">
        <h2 className="news-title">Enter the world of Tehzeeb</h2>
        <p className="news-sub">News, Bakery Creation & Latest events in stores.</p>
        <div className="news-form">
          <input type="email" placeholder="Enter your email" className="news-input" />
          <button className="btn-primary news-btn">Subscribe</button>
        </div>
      </section>

      {/* I. Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1 */}
            <div>
              <h4 className="footer-heading">Categories</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Cakes</a></li>
                <li><a href="#" className="footer-link">Biscuits</a></li>
                <li><a href="#" className="footer-link">Pastries</a></li>
                <li><a href="#" className="footer-link">Salads</a></li>
                <li><a href="#" className="footer-link">Bread</a></li>
                <li><a href="#" className="footer-link">Pizzas</a></li>
                <li><a href="#" className="footer-link">Donuts</a></li>
                <li><a href="#" className="footer-link">Snacks</a></li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div>
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Contact us</a></li>
                <li><a href="#" className="footer-link">About us</a></li>
                <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">B2B</a></li>
                <li><a href="#" className="footer-link">Art of Gifting</a></li>
                <li><a href="#" className="footer-link">Build My Cake</a></li>
                <li><a href="#" className="footer-link">Pick-up</a></li>
              </ul>
            </div>
            
            {/* Column 4 */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">FAQ's</a></li>
                <li><a href="#" className="footer-link">My Account</a></li>
                <li><a href="#" className="footer-link">Our Stores</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <span>Copyright &copy; 2026 Dream Sweets & Bakers. All Rights Reserved</span>
            <div className="social-icons">
              <a href="#">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sidebar Drawer */}
      <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={() => setIsDrawerOpen(false)}></div>
      <aside className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <img src="/logo.jpeg" alt="Logo" className="drawer-logo" />
        
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '13px', fontWeight: '500', marginBottom: '8px' }}>How do you want your products?</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-secondary" style={{ color: '#333', borderColor: '#ccc', flex: 1, padding: '8px' }}>Pickup</button>
            <button className="btn-primary" style={{ flex: 1, padding: '8px' }}>Delivery</button>
          </div>
        </div>

        <h3 className="drawer-section-title">Categories</h3>
        <div>
          {topCategories.map(cat => (
            <button 
              key={cat.name} 
              className="drawer-item" 
              style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '0.5px solid var(--color-border)' }}
              onClick={() => {
                setIsDrawerOpen(false);
                document.getElementById(cat.name)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{cat.name}</span>
              <ChevronRight size={16} color="#999" />
            </button>
          ))}
        </div>

        <div style={{ marginTop: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '20px' }}>
          <div className="drawer-item" style={{ border: 'none' }}>Accounts</div>
          <div className="drawer-item" style={{ border: 'none' }}>Contact us</div>
        </div>
      </aside>

    </div>
  );
}

export default App;
