import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import axios from "axios";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    emailOrPhone: "",
    otp: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Register
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post(
        "http://localhost:2121/api/auth/register",
        {
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }
      );
      setMessage(res.data.message);
      setFormType("login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post(
        "http://localhost:2121/api/auth/login",
        {
          emailOrPhone: formData.emailOrPhone,
          password: formData.password,
        },
        { withCredentials: true } // important to send cookies
      );
      setMessage("Login successful!");
      localStorage.setItem("accessToken", res.data.accessToken);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  // OTP login (dummy, just frontend)
  const handleOTP = (e) => {
    e.preventDefault();
    setMessage("OTP feature coming soon!");
  };

  return (
    <div className="login-container">
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

      <main className="login-form" role="main">
        {message && <p className="api-message">{message}</p>}

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

            <form onSubmit={handleSignup}>
              <div className="form-row two-cols">
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row email-phone">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="phone-input-wrapper">
                  <span className="flag">+91</span>
                  <input
                    className="input phone-input"
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="password-input">
                  <input
                    className="input"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
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
              </div>

              <div className="checkbox">
                <label>
                  <input type="checkbox" required />
                  <span className="terms-text">
                    I agree to the <a href="/terms">Terms & Conditions</a>
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

            <form onSubmit={handleLogin}>
              <input
                className="input"
                type="text"
                name="emailOrPhone"
                placeholder="Email or Phone number"
                value={formData.emailOrPhone}
                onChange={handleChange}
                required
              />

              <div className="password-input">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
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

            <form onSubmit={handleOTP}>
              <div className="phone-input-wrapper">
                <span className="flag">+91</span>
                <input
                  className="input phone-input"
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <input
                className="input"
                type="text"
                name="otp"
                placeholder="Enter OTP"
                maxLength="6"
                value={formData.otp}
                onChange={handleChange}
              />

              <button type="submit" className="btn-primary">
                Verify OTP
              </button>
            </form>
          </section>
        )}

        <p className="or-text">Or continue with</p>

        <div className="social-login">
          <button className="social-btn google-btn" type="button">
            <span className="social-icon">
              <FcGoogle size={20} />
            </span>
            <span className="social-label">Continue with Google</span>
          </button>

          <button className="social-btn apple-btn" type="button">
            <span className="social-icon">
              <FaApple size={20} />
            </span>
            <span className="social-label">Continue with Apple</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
