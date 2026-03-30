import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function OAuthSuccess({ onLoginSuccess }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("token", token);

      if (onLoginSuccess) {
        onLoginSuccess();
      }

      navigate("/");
    } else {
      navigate("/");
    }
  }, []);

  return <div>Logging you in...</div>;
}

export default OAuthSuccess;