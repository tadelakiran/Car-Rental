import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

const carImages = [
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80",
];

const Login = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [formType, setFormType] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        {formType === "signup" && (
          <div className="signup-form">
            <h2>Create an account</h2>
            <p className="login-link">
              Already have an account?{" "}
              <span className="switch-link" onClick={() => setFormType("login")}>
                Log in
              </span>
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
                  <input type="tel" placeholder="Phone number" maxLength="10" />
                </div>
              </div>

              <div className="form-row">
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div className="checkbox">
                <label>
                  <input type="checkbox" required /> I agree to the{" "}
                  <a href="/terms">Terms & Conditions</a>
                </label>
              </div>

              <button type="submit" className="btn-primary">
                Create account
              </button>
            </form>
          </div>
        )}

        {formType === "login" && (
          <div className="login-only">
            <h2>Welcome back</h2>
            <p className="login-link">
              Don’t have an account?{" "}
              <span className="switch-link" onClick={() => setFormType("signup")}>
                Sign up
              </span>
            </p>

            <form>
              <input
                type="text"
                placeholder="Email or Phone number"
                className="login-input"
                required
              />
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="login-input"
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="btn-primary">
                Log in
              </button>
            </form>

            <p className="or-text">Or</p>
            <button className="btn-primary" onClick={() => setFormType("otp")}>
              Login with OTP
            </button>
          </div>
        )}

        {formType === "otp" && (
          <div className="otp-form">
            <h2>Login with OTP</h2>
            <p className="login-link">
              <span className="switch-link" onClick={() => setFormType("login")}>
                ← Back to Login
              </span>
            </p>

            <form>
              <div className="phone-input-wrapper">
                <span className="flag">+91</span>
                <input type="tel" placeholder="Phone number" maxLength="10" />
              </div>
              <input type="text" placeholder="Enter OTP" maxLength="6" />
              <button type="submit" className="btn-primary">
                Verify OTP
              </button>
            </form>
          </div>
        )}

        <p className="or-text">Or continue with</p>
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
