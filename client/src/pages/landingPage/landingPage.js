import React from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div>
      landingPage
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
};

export default LandingPage;
