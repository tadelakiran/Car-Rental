import React from 'react';
import '../Styles/HeroSection.css'
import { Calendar, MapPin, Clock, Filter } from "lucide-react";
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
            <input type="date" /> <input type="time" />
          </div>
        </div>
        <div className="search-item">
          <Calendar className="icon" />
          <div>
            <p className="label">Drop Off</p>
            <input type="date" /> <input type="time" />
          </div>
        </div>
        <button className="filter-btn">
          <Filter />
        </button>
      </div>

      {/* Background Shape + Car */}
      <div className="car-section">
        <div className="blue-bg"></div>
        <div className="white-curve"></div>
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-black-lamborghini-aventador-carlamborghiniluxury-carssport-car-9615246655736el7h.png"
          alt="Car"
          className="car-img"
        />
      </div>

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

