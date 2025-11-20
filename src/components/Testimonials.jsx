import React from "react";

const SIG_IMG = "/mnt/data/429b5cc3-e969-42bb-9d55-35571ff00905.png";

export default function Testimonials() {
  return (
    <section className="testi-section" aria-label="Testimonials and features">
      {/* Testimonial block */}
      <div className="testi-wrap">
        <div className="quote-mark" aria-hidden>“</div>

        <p className="testi-text">
          Eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse ultrices gravida risus commodobendo viverra maecenas
          accumsan lacus vel facilisis libero.
        </p>

        <div className="testi-author" role="group" aria-label="testimonial author">
          <img src={SIG_IMG} alt="signature" className="sig-img" />
          <div className="author-meta">
            <div className="author-name">Patricia Gilbert</div>
            <div className="author-role">Graphic Designer</div>
          </div>
        </div>

        <div className="dots" aria-hidden>
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>

      {/* Features row */}
      <div className="features-wrap" role="list" aria-label="features">
        <div className="feature" role="listitem">
          <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden focusable="false">
            <path d="M3 7v10a2 2 0 002 2h14V7H3z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M21 7l-9 6-9-6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <div className="feature-text">
            <div className="feature-title">Free Shipping</div>
            <div className="feature-sub">Free shipping on all order</div>
          </div>
        </div>

        <div className="feature" role="listitem">
          <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden focusable="false">
            <path d="M12 2a5 5 0 00-5 5v3a5 5 0 0010 0V7a5 5 0 00-5-5z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M7 15v1a5 5 0 0010 0v-1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <div className="feature-text">
            <div className="feature-title">Money Return</div>
            <div className="feature-sub">Back guarantee in 7 days</div>
          </div>
        </div>

        <div className="feature" role="listitem">
          <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden focusable="false">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div className="feature-text">
            <div className="feature-title">Member Discount</div>
            <div className="feature-sub">On every order over $130.00</div>
          </div>
        </div>

        <div className="feature" role="listitem">
          <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden focusable="false">
            <rect x="3" y="6" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 6v-1a2 2 0 012-2h4a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <div className="feature-text">
            <div className="feature-title">Special Gifts</div>
            <div className="feature-sub">Contact us Anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
