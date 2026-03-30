import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function OAuthSuccess({ onLoginSuccess }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      console.log("OAuth2: Token stored successfully");

      if (onLoginSuccess) {
        onLoginSuccess();
      }

      // Small delay to ensure state updates before navigation
      setTimeout(() => {
        navigate("/");
      }, 100);
    } else {
      console.log("OAuth2: No token found in URL");
      navigate("/");
    }
  }, [searchParams, navigate, onLoginSuccess]);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Logging you in...</h2>
      <p>Please wait while we complete the authentication.</p>
    </div>
  );
}

export default OAuthSuccess;