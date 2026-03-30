import { useState } from "react";
import { loginUser, registerUser } from "../services/authService";

function AuthPage({ onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState("login");

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(loginData);

      localStorage.setItem("user", JSON.stringify(response));

      onLoginSuccess();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    try {
      await registerUser(registerData);

      alert("Registration successful! Now login.");
      setActiveTab("login");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href =
      "http://localhost:8081/oauth2/authorization/google";
  };

  return (
    <div className="auth-page">
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
              <form className="form" onSubmit={handleLoginSubmit}>
                <label htmlFor="loginEmail">Email Id</label>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />

                <label htmlFor="loginPassword">Password</label>
                <div className="password-wrapper">
                  <input
                    type="password"
                    id="loginPassword"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  />
                  <span className="eye-icon">👁️</span>
                </div>

                <button type="submit">Login</button>

                <div className="divider">
                  <span>OR</span>
                </div>

                <button
                  type="button"
                  className="google-login-btn"
                  onClick={handleGoogleLogin}
                >
                  <span className="google-icon"></span>
                  Continue with Google
                </button>
              </form>
            ) : (
              <form className="form" onSubmit={handleRegisterSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                />

                <label htmlFor="signupEmail">Email Id</label>
                <input
                  type="email"
                  id="signupEmail"
                  placeholder="Enter your email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                />

                <label htmlFor="signupPassword">Password</label>
                <div className="password-wrapper">
                  <input
                    type="password"
                    id="signupPassword"
                    placeholder="Enter your password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  />
                  <span className="eye-icon">👁️</span>
                </div>

                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  value={registerData.mobileNumber}
                  onChange={(e) => setRegisterData({ ...registerData, mobileNumber: e.target.value })}
                />

                <button type="submit">Signup</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;