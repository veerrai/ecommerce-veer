import React from "react";

import feat1 from "../assets/images/uploads/feat1.png";
import feat2 from "../assets/images/uploads/feat2.png";
import feat3 from "../assets/images/uploads/feat3.png";
import feat4 from "../assets/images/uploads/feat4.png";





const products = [
  {
    id: 1,
    title: "New classyrest Purple Floral Peplum Top",
    price: 25,
    oldPrice: 26,
    rating: 4.5,
    discount: 4,
    image:  feat1,
  },
  {
    id: 2,
    title: "High Waist Straight Summer Jean Shorts Women",
    price: 22,
    rating: 5,
    image:  feat2,
  },
  {
    id: 3,
    title: "Buy Latest Women's Buttoned Shirt with Spread Collar",
    price: 23,
    oldPrice: 24,
    rating: 4.5,
    image:  feat3,
  },
  {
    id: 4,
    title: "Men Ultralightweight, Premium Summer Slipper",
    price: 15,
    rating: 5,
    image:  feat4,
  },
];

function Stars({ value = 0 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="stars" aria-hidden>
      {Array.from({ length: full }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
      {half && <span className="star">☆</span>}
      {Array.from({ length: Math.max(0, 5 - Math.ceil(value)) }).map((_, i) => (
        <span key={"e"+i} className="star empty">★</span>
      ))}
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="fp-section">
      <h3 className="fp-title my-5">Featured Products</h3>

      <div className="fp-grid">
        {products.map((p) => (
          <article key={p.id} className="fp-card" role="article">
            {p.discount && <div className="fp-badge">-{p.discount}%</div>}

            <div className="fp-image">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="fp-body">
              <h4 className="fp-name">{p.title}</h4>

              <Stars value={p.rating} />

              <div className="fp-price-row">
                {p.oldPrice ? <span className="fp-old">${p.oldPrice}</span> : null}
                <span className="fp-price">${p.price}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
