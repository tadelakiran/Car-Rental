import React from "react";
import "../Styles/HeroSection.css";
import { Calendar, MapPin, Filter } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">
          <span className="logo-icon"></span> Rivent
        </h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Pricing</li>
        </ul>
        <button className="btn-get-started">Get Started</button>
      </nav>

      {/* Blue Background + Curve */}
      <div className="background">
        <div className="blue-bg"></div>
        <div className="white-curve"></div>
      </div>

      {/* Hero Text */}
      <div className="hero-text">
        <h2>
          The Best Platform <br /> for Car Rental
        </h2>
        <p>
          We open the door for you to explore the world in comfort and style. <br />
          Being your trusted travel partner.
        </p>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <div className="search-item">
          <MapPin className="icon" />
          <div>
            <p className="label">Where</p>
            <input type="text" placeholder="City or Destination" />
          </div>
        </div>

        <div className="search-item">
          <Calendar className="icon" />
          <div>
            <p className="label">Pickup</p>
            <div className="datetime">
              <input type="date" /> <input type="time" />
            </div>
          </div>
        </div>

        <div className="search-item">
          <Calendar className="icon" />
          <div>
            <p className="label">Drop Off</p>
            <div className="datetime">
              <input type="date" /> <input type="time" />
            </div>
          </div>
        </div>

        <button className="filter-btn">
          <Filter />
        </button>
      </div>

      {/* Car Image */}
      <img
        src="data:image/jpeg;base64,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"
        alt="Car"
        className="car-img"
      />

      {/* Brand Logos */}
      <div className="brands">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda-logo.png" alt="Honda" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Bentley_logo.svg" alt="Bentley" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Peugeot_logo.svg" alt="Peugeot" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_logo.svg" alt="Hyundai" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Lexus_division_emblem.svg" alt="Lexus" />
      </div>
    </div>
  );
};

export default HeroSection;
