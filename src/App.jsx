import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="container">
      <div className="left-panel">
        <div className="branding">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="ruler-icon">📏</div>
          <h1>Quantity Measurement App</h1>
          <p>Measure, Convert and Compare Units Easily</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-box">
          <div className="tabs">
            <span
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              LOGIN
            </span>

            <span
              className={`tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              SIGNUP
            </span>
          </div>

          {activeTab === "login" ? (
            <form className="form">
              <label htmlFor="loginEmail">Email Id</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="Enter your email"
              />

              <label htmlFor="loginPassword">Password</label>
              <div className="password-wrapper">
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="Enter your password"
                />
                <span className="eye-icon">👁️</span>
              </div>

              <button type="submit">Login</button>
            </form>
          ) : (
            <form className="form">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
              />

              <label htmlFor="signupEmail">Email Id</label>
              <input
                type="email"
                id="signupEmail"
                placeholder="Enter your email"
              />

              <label htmlFor="signupPassword">Password</label>
              <div className="password-wrapper">
                <input
                  type="password"
                  id="signupPassword"
                  placeholder="Enter your password"
                />
                <span className="eye-icon">👁️</span>
              </div>

              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="text"
                id="mobileNumber"
                placeholder="Enter your mobile number"
              />

              <button type="submit">Signup</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;