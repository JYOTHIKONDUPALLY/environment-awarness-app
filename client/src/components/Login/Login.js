import styles from "./Login.module.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className={styles.Login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>login to Your Account</h1>
            <input
              type="text"
              placeholder="Email"
              name="email"
              required
              value={data.email}
              className={styles.input}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="password"
              name="password"
              required
              value={data.password}
              className={styles.input}
              onChange={handleChange}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.btn}>
              Sign in
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New User ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
