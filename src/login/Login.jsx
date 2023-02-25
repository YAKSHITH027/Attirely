import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import myntra3 from "./assets/myntra3.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const validateForm = () => {
    let isValid = true;
    if (!email || !password) {
      setError("Please fill all the fields");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      isValid = false;
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (validateForm()) {
      try {
        // await login(email, password);
        navigate("/home");
      } catch (err) {
        setError(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginImage">
          <img src={myntra3} alt="myntra2" />
        </div>
        <div className="loginDetail">
          <div>
            <h3>Login</h3>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                className={
                  error && (!email || !/\S+@\S+\.\S+/.test(email))
                    ? "invalid"
                    : ""
                }
              />
              {error && (!email || !/\S+@\S+\.\S+/.test(email)) && (
                <span className="error">
                  {"* "}
                  {error}
                </span>
              )}
              <input
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter a password"
                className={error && password.length < 8 ? "invalid" : ""}
              />
              {error && password.length < 8 && (
                <span className="error">
                  {"* "}
                  {error}
                </span>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <p>
                  New User ? <Link to="/signup">Signup </Link>
                </p>
                <p>
                  Admin ? <Link to="/adminlogin">Login </Link>
                </p>
              </div>

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
