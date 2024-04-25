import React, { useState } from 'react';
import './login.css';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignupForm(false);
  };

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
    setShowLoginForm(false);
  };

  const toggleMobileMenu = () => {
    const navbarMenu = document.querySelector(".navbar .links");
    navbarMenu.classList.toggle("show-menu");
  };

  const togglePopup = () => {
    document.body.classList.toggle("show-popup");
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <span className="hamburger-btn material-symbols-rounded" onClick={toggleMobileMenu}>menu</span>
          <a href="#" className="logo">
            <img src="" alt="logo" />
            <h2>CareTakers</h2>
          </a>
          <ul className="links">
            <span className="close-btn material-symbols-rounded" onClick={toggleMobileMenu}>close</span>
            <li><a href="#">Home</a></li>
            <li><a href="#">Activities</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
          <button className="login-btn" onClick={togglePopup}>LOG IN</button>
        </nav>
      </header>
      <div className="blur-bg-overlay"></div>
      {showLoginForm && (
        <div className="form-popup">
          <span className="close-btn material-symbols-rounded" onClick={togglePopup}>close</span>
          <div className="form-box login">
            <div className="form-details">
              <h2>Welcome Back</h2>
              <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div className="form-content">
              <h2>LOGIN</h2>
              <form action="welcome.php" method="post">
                <div className="input-field">
                  <input type="text" aria-label="Search" required />
                  <label>Email</label>
                </div>
                <div className="input-field">
                  <input type="password" aria-label="Search" required />
                  <label>Password</label>
                </div>
                <a href="#" className="forgot-pass-link">Forgot password?</a>
                <button type="submit">Log In</button>
              </form>
              <div className="bottom-link">
                Don't have an account?
                <a href="#" onClick={toggleSignupForm} id="signup-link">Signup</a>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSignupForm && (
        <div className="form-popup">
          <span className="close-btn material-symbols-rounded" onClick={togglePopup}>close</span>
          <div className="form-box signup">
            <div className="form-details">
              <h2>Create Account</h2>
              <p>To become a part of our community, please sign up using your personal information.</p>
            </div>
            <div className="form-content">
              <h2>SIGNUP</h2>
              <form action="welcome.php" method="post">
                <div className="input-field">
                  <input type="text" name="Name" aria-label="Search" required />
                  <label>Name</label>
                </div>
                <div className="input-field">
                  <input type="text" name="Email" aria-label="Search" required />
                  <label>Enter your email</label>
                </div>
                <div className="input-field">
                  <input type="password" name="Password" aria-label="Search" required />
                  <label>Create password</label>
                </div>
                <div className="policy-text">
                  <input type="checkbox" id="policy" required />
                  <label htmlFor="policy">
                    I agree to the
                    <a href="#" className="option">Terms & Conditions</a>
                  </label>
                </div>
                <button type="submit">Sign Up</button>
              </form>
              <div className="bottom-link">
                Already have an account?
                <a href="#" onClick={toggleLoginForm} id="login-link">Login</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
