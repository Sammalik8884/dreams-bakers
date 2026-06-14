import { useState, useEffect } from 'react';
import { Menu, Phone, Search, User, ShoppingBag, ChevronRight, X } from 'lucide-react';
import { menuData } from './data';
import './App.css';

// Using lucide icons as placeholders for category silhouettes
import { Coffee, Cake, Pizza, Sandwich, Utensils, Gift, CupSoda } from 'lucide-react';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: "Snack", icon: <Coffee /> },
    { name: "Pizza", icon: <Pizza /> },
    { name: "Biscuit", icon: <Coffee /> },
    { name: "Pastry", icon: <Cake /> },
    { name: "Donut", icon: <Coffee /> },
    { name: "Salad", icon: <Utensils /> },
    { name: "Sandwich", icon: <Sandwich /> },
    { name: "Burger", icon: <Utensils /> },
    { name: "Nimko", icon: <Coffee /> },
    { name: "Puff", icon: <Coffee /> },
    { name: "Gifting", icon: <Gift /> },
    { name: "Kanas Ketchup", icon: <Utensils /> },
    { name: "Packed Items", icon: <Gift /> },
    { name: "Beverages", icon: <CupSoda /> }
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
              <a href="#" className="quick-link">Pizza</a>
              <a href="#" className="quick-link">Cakes</a>
              <a href="#" className="quick-link">Biscuits</a>
              <a href="#" className="quick-link">Pastry</a>
              <a href="#" className="quick-link">Bread</a>
              <a href="#" className="quick-link">Puffs</a>
            </div>
          </div>
        </div>

        {/* Row 2: Main Header */}
        <div className="header-row-2">
          {/* Left Spacer for proper flex centering */}
          <div className="header-spacer hidden-mobile"></div>

          {/* Mobile hamburger */}
          <button className="hamburger-btn mobile-only" style={{ display: 'none' }} onClick={() => setIsDrawerOpen(true)}>
            <Menu size={24} />
          </button>

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
              <span className="cart-badge">0</span>
            </button>
          </div>
        </div>

        {/* Row 3: Secondary Nav */}
        <div className="header-row-3 hidden-mobile">
          <a href="#" className="nav-link">What's new</a>
          <a href="#" className="nav-link">Best sellers</a>
          <a href="#" className="nav-link">Quick order</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">Gifting</a>
          <a href="#" className="nav-link">Deliver Nationwide</a>
          <a href="#" className="nav-link">Snacks</a>
          <a href="#" className="nav-link">Salad</a>
        </div>
      </header>

      {/* C. Full-Width Hero Banner */}
      <section className="hero-banner">
        {/* Placeholder for promotional image */}
        <div className="hero-placeholder">
          <h1>Seasonal Fresh Mango Cake</h1>
        </div>
      </section>

      {/* D. Categories Section */}
      <section className="categories-section container">
        <h2 className="section-heading">CATEGORIES</h2>
        <div className="cat-scroll">
          {topCategories.map((cat, idx) => (
            <div key={idx} className="category-item">
              <div className="cat-icon">
                {/* Silhouette placeholder */}
                {cat.icon}
              </div>
              <span className="cat-label">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product List Example (mapped from data) */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <h2 className="section-heading">PIZZA</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
          {menuData['Pizza']?.map((item, idx) => (
            <div key={idx} className="product-card">
              <div className="product-img-wrapper">
                <Pizza size={48} color="#C8A84B" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">Rs. {item.prices?.Small || item.prices?.Medium || item.price}</p>
                <button className="btn-primary btn-add-cart">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E. Feature Section — Coffee Fudge Cake */}
      <section className="feature-section">
        <span className="feature-overline">Our Signature</span>
        <h2 className="feature-title">Coffee Fudge Cake</h2>
        <p className="feature-body">
          Experience the ultimate indulgence with our signature Coffee Fudge Cake. Rich, moist chocolate cake layered with espresso-infused fudge frosting. Perfect for any celebration.
        </p>
        <button className="btn-secondary">Order Now</button>
      </section>

      {/* F. Gifting Section */}
      <section className="gifting-section container">
        <h2 className="section-heading">GIFTING</h2>
        <p className="gifting-sub">
          Celebrate life's special moments with our elegantly crafted gift baskets and premium assorted boxes. The perfect treat for your loved ones.
        </p>
        <div className="gifting-grid">
          <div className="gifting-card">
            <div className="gifting-card-bg"></div>
            <span className="gifting-label">BASKET</span>
          </div>
          <div className="gifting-card">
            <div className="gifting-card-bg"></div>
            <span className="gifting-label">BISCUITS</span>
          </div>
          <div className="gifting-card">
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
            <div key={cat.name} className="drawer-item">
              <span>{cat.name}</span>
              <ChevronRight size={16} color="#999" />
            </div>
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
