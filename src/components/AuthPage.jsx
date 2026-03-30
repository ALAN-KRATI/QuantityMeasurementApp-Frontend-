import { useState } from "react";
import { loginUser, registerUser } from "../services/authService";
import { API_ENDPOINTS } from "../config/api";

function AuthPage({ onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState("login");

  // Loading state - simple true/false
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

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

  // Password visibility states
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  // Error states
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setLoginError("");

    // Validate
    if (!loginData.email || !loginData.password) {
      setLoginError("Please enter both email and password");
      return;
    }

    setIsLoading(true);
    setLoadingText("Logging in...");

    try {
      const response = await loginUser(loginData);
      localStorage.setItem("user", JSON.stringify(response));
      onLoginSuccess();
    } catch (error) {
      setLoginError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
      setLoadingText("");
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    setSignupError("");

    // Validate
    if (!registerData.name || !registerData.email || !registerData.password) {
      setSignupError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setLoadingText("Creating account...");

    try {
      await registerUser(registerData);
      setSignupError("");
      alert("Registration successful! Now login.");
      setActiveTab("login");
    } catch (error) {
      setSignupError(error.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
      setLoadingText("");
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setLoadingText("Redirecting to Google...");
    window.location.href = API_ENDPOINTS.OAUTH2_GOOGLE;
  };

  // Simple Spinner Component
  const Spinner = () => (
    <div className="spinner"></div>
  );

  return (
    <div className="auth-page">
      {/* Loading Overlay - shows when isLoading is true */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-box">
            <Spinner />
            <p>{loadingText}</p>
          </div>
        </div>
      )}

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
                {loginError && (
                  <div style={{ color: "#c04d4d", marginBottom: "16px", fontSize: "14px", textAlign: "center" }}>
                    {loginError}
                  </div>
                )}

                <label htmlFor="loginEmail">Email Id</label>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) => {
                    setLoginData({ ...loginData, email: e.target.value });
                    setLoginError("");
                  }}
                  disabled={isLoading}
                />

                <label htmlFor="loginPassword">Password</label>
                <div className="password-wrapper">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    id="loginPassword"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => {
                      setLoginData({ ...loginData, password: e.target.value });
                      setLoginError("");
                    }}
                    disabled={isLoading}
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    style={{ cursor: "pointer", userSelect: "none" }}
                  >
                    {showLoginPassword ? "🙈" : "👁️"}
                  </span>
                </div>

                <button type="submit" disabled={isLoading || !loginData.email || !loginData.password}>
                  {isLoading ? "Please wait..." : "Login"}
                </button>

                <div className="divider">
                  <span>OR</span>
                </div>

                <button
                  type="button"
                  className="google-login-btn"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  {/* Google Logo - Using inline SVG for simplicity */}
                  <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </form>
            ) : (
              <form className="form" onSubmit={handleRegisterSubmit}>
                {signupError && (
                  <div style={{ color: "#c04d4d", marginBottom: "16px", fontSize: "14px", textAlign: "center" }}>
                    {signupError}
                  </div>
                )}

                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  value={registerData.name}
                  onChange={(e) => {
                    setRegisterData({ ...registerData, name: e.target.value });
                    setSignupError("");
                  }}
                  disabled={isLoading}
                />

                <label htmlFor="signupEmail">Email Id *</label>
                <input
                  type="email"
                  id="signupEmail"
                  placeholder="Enter your email"
                  value={registerData.email}
                  onChange={(e) => {
                    setRegisterData({ ...registerData, email: e.target.value });
                    setSignupError("");
                  }}
                  disabled={isLoading}
                />

                <label htmlFor="signupPassword">Password *</label>
                <div className="password-wrapper">
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    id="signupPassword"
                    placeholder="Enter your password"
                    value={registerData.password}
                    onChange={(e) => {
                      setRegisterData({ ...registerData, password: e.target.value });
                      setSignupError("");
                    }}
                    disabled={isLoading}
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                    style={{ cursor: "pointer", userSelect: "none" }}
                  >
                    {showSignupPassword ? "🙈" : "👁️"}
                  </span>
                </div>

                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  value={registerData.mobileNumber}
                  onChange={(e) => setRegisterData({ ...registerData, mobileNumber: e.target.value })}
                  disabled={isLoading}
                />

                <button
                  type="submit"
                  disabled={isLoading || !registerData.name || !registerData.email || !registerData.password}
                >
                  {isLoading ? "Please wait..." : "Signup"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
