import React from "react";
import MODEL_IMG from "../assets/images/uploads/img1.png";
import PROD2_IMG from  "../assets/images/uploads/img2.png";
import  FLIPKART_IMG from "../assets/images/uploads/flip.png";
import AMAZON_IMG from  "../assets/images/uploads/ama.png";

export default function Hero() {
  return (
    <section className="hero-wrap" aria-label="Hero section">
      {/* Decorative arcs (SVG) */}
      <svg className="hero-arc top-arc" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden>
        <path d="M0,200 C200,0 400,0 600,120 C800,240 1000,240 1200,120 L1200,0 L0,0 Z" fill="#d6a0a6" />
      </svg>

      <svg className="hero-arc bottom-arc" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden>
        <path d="M0,0 C200,160 400,200 600,120 C800,40 1000,40 1200,120 L1200,300 L0,300 Z" fill="#e9c7c8" opacity="0.9" />
      </svg>

      <div className="hero-container">
        {/* Left column: Title, small promo card, description + CTA */}
        <div className="hero-left">
          <h1 className="brand-title">ANANTA YSELA</h1>

          <div className="promo-row">
            <div className="promo-card small">
              <img src={MODEL_IMG} alt="product 1" className="prod-thumb" />
              <div className="prod-meta">
                <div className="prod-title">Elegant Long Sleeve V-Neck</div>
                <div className="prod-price">$20.99</div>
              </div>
            </div>
          </div>

          <p className="hero-text">
            Elevate your wardrobe and make a statement with our fashion-forward pieces. Step into a realm of endless possibilities and discover the perfect outfit that speaks to your unique style. Get ready to turn heads and exude confidence with every step you take. Your fashion journey starts here.
          </p>

          <button className="cta-btn">SHOP NOW</button>
        </div>

        {/* Center: Model image */}
        <div className="hero-center">
          <img src={MODEL_IMG} alt="model" className="model-img" />
        </div>

        {/* Right: small promo card and retailer logos */}
        <div className="hero-right">
          <div className="promo-card small right-card">
            <img src={PROD2_IMG} alt="product 2" className="prod-thumb" />
            <div className="prod-meta">
              <div className="prod-title">Boxy Tropical Floral Top</div>
              <div className="prod-price">$23.89</div>
            </div>
          </div>

          <div className="available-on">
            <div className="available-text">Also Available on</div>
            <div className="retail-logos">
              <img src={FLIPKART_IMG} alt="Flipkart" />
              <img src={AMAZON_IMG} alt="Amazon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
