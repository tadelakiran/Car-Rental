import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

const carImages = [
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
];

const Login = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (!/[A-Za-z]/.test(value)) {
      setPasswordError("Password must contain at least one letter.");
    } else if (!/[0-9]/.test(value)) {
      setPasswordError("Password must contain at least one number.");
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  return (
    <div className="login-container">
    
      <div className="login-image">
        <div
          className="carousel-slide"
          style={{ backgroundImage: `url(${carImages[currentImage]})` }}
        ></div>

        <button className="back-btn">Back to website →</button>
        <div className="overlay-text">
          <h2>
            Capturing Journeys,
            <br /> Creating Memories
          </h2>
        </div>


        <div className="carousel-dots">
          {carImages.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentImage === idx ? "active" : ""}`}
              onClick={() => setCurrentImage(idx)}
            ></span>
          ))}
        </div>
      </div>


      <div className="login-form">
        <h2>Create an account</h2>
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>

        <form>
          <div className="form-row">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>

       
          <div className="form-row">
            <input type="email" placeholder="Email" required />
            <div className="phone-input-wrapper">
              <span className="flag">+91</span>
              <input
                type="tel"
                placeholder="Phone number"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>
          </div>

          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {passwordError && <p className="error-text">{passwordError}</p>}

                 <div className="checkbox">
                         <label htmlFor="terms">
                            <input type="checkbox" id="terms" required />
                               <span></span> I agree to the <a href="/terms">Terms & Conditions</a>
                        </label>
                </div>



          <button type="submit" className="btn-primary">
            Create account
          </button>
        </form>

        <p className="or-text">Or register with</p>
        <div className="social-login">
          <button className="google-btn">
            <FcGoogle size={20} /> Google
          </button>
          <button className="apple-btn">
            <FaApple size={20} /> Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
