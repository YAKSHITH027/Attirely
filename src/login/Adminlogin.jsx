import React, { useState } from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import admin from "./assets/admin.jpg";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <div className="loginImage">
            <img src={admin} alt="admin" />
          </div>
          <div className="loginDetail">
            <div>
              <h3>Admin Login</h3>
            </div>
            <div>
              <form onSubmit={handleFormSubmit}>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  type="email"
                  placeholder="Enter email admin"
                />
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleFormChange}
                  type="password"
                  placeholder="Enter a password admin"
                />
                <p>
                  New User ? <Link to="/signup">Signup </Link>
                </p>

                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
