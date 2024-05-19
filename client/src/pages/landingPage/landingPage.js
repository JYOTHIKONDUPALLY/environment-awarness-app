import React from "react";
import styles from "./landingPage.module.css";
import { useNavigate, Link } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className={styles.LandingPage}>
      <nav>
        <logo>
          Eco<span>nav</span>
        </logo>
        <div>
          <button className={styles.btn} onClick={handleLogin}>
            Login
          </button>
          <button className={styles.btn} onClick={handleSignup}>
            Sign up
          </button>
        </div>
      </nav>
      <div className={styles.Herosection}>
        <div className={styles.content}>
          <h1>Welcome to Econav </h1>
          <p>
            Join us in making a difference. EcoConnect is a community-driven
            platform where you can participate in environmental initiatives,
            track your eco-friendly actions, and connect with like-minded
            individuals. Together, we can promote sustainable practices and
            create a healthier planet for future generations. Start your journey
            today and become a champion for the environment!
          </p>
          <button className={styles.btn} onClick={handleSignup}>
            Explore More!
          </button>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.icons}>
          {" "}
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-youtube"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>
        <p>@Copyright. All Rights are reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;
