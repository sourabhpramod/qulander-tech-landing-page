import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">Qulander Tech</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#integration">Integration</a>
          <a href="#blog">Blog</a>
          <a href="#changelog">Changelog</a>
        </div>
        <button className="waitlist-button">Join waitlist</button>
      </nav>

      <section className="hero-section">
        <div className="announcement">
          <span className="new-badge">New</span>
          <span>Announcing our waitlist</span>
          <span className="arrow">→</span>
        </div>
        
        <h1>
          Qulander Tech is the new
          <br />
          <span className="highlight">benchmark for innovation</span>
        </h1>
        
        <p className="hero-subtitle">
          Our solutions transform your business processes with cutting-edge technology
          and seamless integration capabilities
        </p>

        <div className="waitlist-form">
          <input 
            type="email" 
            placeholder="Join the waitlist..." 
            className="waitlist-input"
          />
          <button className="submit-arrow">→</button>
        </div>
      </section>


<section className="products-section">
  <h2>Our Products</h2>
  <div className="products-grid">
    <div className="product-card" onClick={() => window.location.href='/product1'}>
      <h3>AI Assistant</h3>
      <p>Intelligent virtual assistant powered by advanced machine learning algorithms</p>
      <span className="learn-more">Learn more →</span>
    </div>

    <div className="product-card" onClick={() => window.location.href='/product2'}>
      <h3>Cloud Solutions</h3>
      <p>Scalable and secure cloud infrastructure for your business needs</p>
      <span className="learn-more">Learn more →</span>
    </div>

    <div className="product-card" onClick={() => window.location.href='/product3'}>
      <h3>Data Analytics</h3>
      <p>Transform your data into actionable insights with our analytics platform</p>
      <span className="learn-more">Learn more →</span>
    </div>

    <div className="product-card" onClick={() => window.location.href='/product4'}>
      <h3>Cybersecurity</h3>
      <p>Advanced security solutions to protect your digital assets</p>
      <span className="learn-more">Learn more →</span>
    </div>

    <div className="product-card" onClick={() => window.location.href='/product5'}>
      <h3>IoT Platform</h3>
      <p>Connect and manage your IoT devices with our comprehensive platform</p>
      <span className="learn-more">Learn more →</span>
    </div>
  </div>
</section>


    </div>
  );
};

export default LandingPage; 