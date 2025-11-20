import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  // prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="header-outer">
      {/* Arc Background */}
      <svg className="header-arc" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden>
        <path d="M0,0 C150,120 350,120 600,60 C850,0 1050,0 1200,60 L1200,0 L0,0 Z" fill="#d1969b" />
      </svg>

      {/* MAIN HEADER BAR */}
      <div className="header-bar">
        {/* LEFT SIDE: hamburger on mobile + search */}
        <div className="left-area">
          {/* Mobile hamburger visible on small screens */}
          <button
            className="icon-btn mobile-menu-btn"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            aria-expanded={open}
          >
            <FaBars />
          </button>

          {/* Search button (kept visible on all sizes) */}
          <button className="icon-btn" aria-label="Search">
            <FaSearch />
          </button>
        </div>

        {/* CENTER SIDE */}
        <div className="center-area">
          <ul className="nav-links">
            <li>Home</li>
            <li>Shop</li>
          </ul>

          <img src="/logo.png" className="header-logo" alt="logo" />

          <ul className="nav-links">
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-area">
          <button className="icon-btn" aria-label="Profile">
            <FaUser />
          </button>

          <div className="icon-wrap" title="Wishlist">
            <FaHeart className="icon" />
            <span className="badge-count">0</span>
          </div>

          <div className="icon-wrap" title="Cart">
            <FaShoppingBag className="icon" />
            <span className="badge-count">0</span>
          </div>

          <span className="price">$0.00</span>
        </div>
      </div>

      {/* SIDEBAR / OFFCANVAS */}
      <div className={`mobile-sidebar ${open ? "open" : ""}`} role="dialog" aria-modal={open} aria-hidden={!open}>
        <div className="sidebar-inner" role="document">
          <div className="sidebar-header">
            <img src="/logo.png" alt="logo" className="sidebar-logo" />
            <button className="icon-btn close-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <nav className="sidebar-nav">
            <ul>
              <li><a href="#" onClick={() => setOpen(false)}>Home</a></li>
              <li><a href="#" onClick={() => setOpen(false)}>Shop</a></li>
              <li><a href="#" onClick={() => setOpen(false)}>Categories</a></li>
              <li><a href="#" onClick={() => setOpen(false)}>About</a></li>
              <li><a href="#" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <div className="sidebar-cta">
            <button className="sidebar-btn" onClick={() => { setOpen(false); /* go to cart */ }}>View Cart</button>
            <div className="sidebar-icons">
              <button className="icon-btn" aria-label="Profile"><FaUser /></button>
              <div className="icon-wrap"><FaHeart /><span className="badge-count">0</span></div>
              <div className="icon-wrap"><FaShoppingBag /><span className="badge-count">0</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className={`sidebar-backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} aria-hidden={!open}></div>
    </header>
  );
};

export default Header;
