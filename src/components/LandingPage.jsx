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
        <button className="waitlist-button">Contact Us</button>
      </nav>

      <section className="hero-section">
        <div className="announcement">
          <span className="new-badge">New</span>
          <span>Announcing our waitlist</span>
          <span className="arrow">→</span>
        </div>
        <h1>
          Qulander Tech
          <br />
          <span className="highlight"> is the new benchmark for innovation</span>
        </h1>
        <p className="hero-subtitle">
          Our solutions transform your business processes with cutting-edge technology
          and seamless integration capabilities
        </p>
        <div className="waitlist-form">
          <input
            type="email"
            placeholder="Get in touch with our team..."
            className="waitlist-input"
          />
          <button className="submit-arrow">→</button>
        </div>
      </section>

      <section className="products-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          <div className="product-card" onClick={() => window.location.href='/product1'}>
            <h3>Everything AI</h3>
            <p>
              Intelligent virtual assistant powered by advanced machine learning algorithms
              that can do everything, literally everything. It can do everything from answering
              questions to ordering food to booking appointments and more.
            </p>
            <span className="learn-more">Learn more →</span>
          </div>

          <div className="product-card" onClick={() => window.location.href='/product2'}>
            <h3>Off-Pay</h3>
            <p>Peer to Peer Offline Payment System using QR codes, Bluetooth, Wifi-Direct, NFC, etc.</p>
            <span className="learn-more">Learn more →</span>
          </div>

          <div className="product-card" onClick={() => window.location.href='/product3'}>
            <h3>Heal AI</h3>
            <p>
              AI powered health assistant that can help you with your health and fitness goals
              and booking appointments at hospitals.
            </p>
            <span className="learn-more">Learn more →</span>
          </div>

          <div className="product-card" onClick={() => window.location.href='/product4'}>
            <h3>EatSage</h3>
            <p>
              AI powered text-based food ordering system that can help you order food from your
              favorite restaurants.
            </p>
            <span className="learn-more">Learn more →</span>
          </div>

          <div className="product-card" onClick={() => window.location.href='/product5'}>
            <h3>Omnipresence</h3>
            <p>A complete ecosystem designed for women's safety and wellness.</p>
            <span className="learn-more">Learn more →</span>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/images/ceo.jpg" alt="CEO" className="team-image" />
            <h3>Sourabh Pramod</h3>
            <p>Chief Executive Officer</p>
          </div>
          <div className="team-card">
            <img src="./src/images/cto.jpg" alt="CTO" className="team-image" />
            <h3>Govardhan A R</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-card">
            <img src="/images/ml-engineer.jpg" alt="ML Engineer" className="team-image" />
            <h3>Durvank Gade</h3>
            <p>Machine Learning Engineer</p>
          </div>
          <div className="team-card">
            <img src="/images/sde.jpg" alt="SDE" className="team-image" />
            <h3>Aryan Mehasare</h3>
            <p>Software Development Engineer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
