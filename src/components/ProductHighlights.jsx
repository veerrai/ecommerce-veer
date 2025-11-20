import React from "react";

// Import your images here (update paths as per your folder)
import imgp1 from "../assets/images/uploads/imgp1.png";
import imgp2 from "../assets/images/uploads/imgp2.png";
import imgp3 from "../assets/images/uploads/imgp3.png";
import imgp4 from "../assets/images/uploads/imgp4.png";
import imgp5 from "../assets/images/uploads/imgp5.png";

const ProductHighlights = () => {
  return (
    <section className="ph-section">
      <div className="ph-header">
        <h2 className="ph-title">Product&nbsp;&nbsp;Highlights</h2>
        <p className="ph-subtitle">
          Discover the perfect outfit that speaks to your unique style.
        </p>
      </div>

      <div className="ph-gallery">
        {/* 1 */}
        <div className="ph-arch arch1">
          <img src={imgp1} alt="model" className="ph-img" />
        </div>

        {/* 2 */}
        <div className="ph-arch arch2">
          <img
            src={imgp2}
            alt="model"
            className="ph-img"
          />
        </div>

        {/* Center Big */}
        <div className="ph-arch arch-center">
          <img src={imgp3} alt="model" className="ph-img" />
        </div>

        {/* 4 */}
        <div className="ph-arch arch4">
          <img src={imgp4} alt="model" className="ph-img" />
        </div>

        {/* 5 */}
        <div className="ph-arch arch5">
          <img src={imgp5} alt="model" className="ph-img" />
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
