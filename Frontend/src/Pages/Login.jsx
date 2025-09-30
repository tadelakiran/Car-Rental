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
      {/* LEFT IMAGE CAROUSEL */}
      <aside className="login-image" aria-hidden="true">
        <div
          className="carousel-slide"
          style={{ backgroundImage: `url(${carImages[currentImage]})` }}
        />
        <button className="back-btn">Back to website →</button>
        <div className="overlay-text">
          <h2>
            Capturing Journeys,
            <br /> Creating Memories
          </h2>
        </div>
        <div className="carousel-dots">
          {carImages.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentImage === idx ? "active" : ""}`}
              onClick={() => setCurrentImage(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </aside>

      {/* RIGHT FORM */}
      <main className="login-form" role="main">
        {formType === "signup" && (
          <section className="signup-form">
            <h2>Create an account</h2>
            <p className="login-link">
              Already have an account?{" "}
              <button
                type="button"
                className="switch-link"
                onClick={() => setFormType("login")}
              >
                Log in
              </button>
            </p>

            <form>
              <div className="form-row two-cols">
                <input className="input" type="text" placeholder="First name" required />
                <input className="input" type="text" placeholder="Last name" required />
              </div>

              <div className="form-row email-phone">
                <input className="input" type="email" placeholder="Email" required />
                <div className="phone-input-wrapper">
                  <span className="flag">+91</span>
                  <input className="input phone-input" type="tel" placeholder="Phone number" maxLength="10" />
                </div>
              </div>

              <div className="form-row">
                <div className="password-input">
                  <input
                    className="input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="eye-icon"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="checkbox">
                <label>
                  <input type="checkbox" required />
                  <span className="terms-text">
                    I agree to the <a href="/terms">Terms &amp; Conditions</a>
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-primary">
                Create account
              </button>
            </form>
          </section>
        )}

        {formType === "login" && (
          <section className="login-only">
            <h2>Welcome back</h2>
            <p className="login-link">
              Don’t have an account?{" "}
              <button className="switch-link" onClick={() => setFormType("signup")}>
                Sign up
              </button>
            </p>

            <form>
              <input className="input" type="text" placeholder="Email or Phone number" required />

              <div className="password-input">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="eye-icon"
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="btn-primary">
                Log in
              </button>
            </form>

            <p className="or-text">Or</p>
            <button className="btn-primary outline" onClick={() => setFormType("otp")}>
              Login with OTP
            </button>
          </section>
        )}

        {formType === "otp" && (
          <section className="otp-form">
            <h2>Login with OTP</h2>
            <p className="login-link">
              <button className="switch-link" onClick={() => setFormType("login")}>
                ← Back to Login
              </button>
            </p>

            <form>
              <div className="phone-input-wrapper">
                <span className="flag">+91</span>
                <input className="input phone-input" type="tel" placeholder="Phone number" maxLength="10" />
              </div>

              <input className="input" type="text" placeholder="Enter OTP" maxLength="6" />

              <button type="submit" className="btn-primary">
                Verify OTP
              </button>
            </form>
          </section>
        )}

        <p className="or-text">Or continue with</p>

        <div className="social-login">
          <button className="social-btn google-btn" type="button">
            <span className="social-icon"><FcGoogle size={20} /></span>
            <span className="social-label">Continue with Google</span>
          </button>

          <button className="social-btn apple-btn" type="button">
            <span className="social-icon"><FaApple size={20} /></span>
            <span className="social-label">Continue with Apple</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
