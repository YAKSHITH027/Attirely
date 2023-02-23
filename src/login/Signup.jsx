import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signupContainer">
        <div className="signupImage">
          <img src="../component/assets/myntra.jpg" alt="" />
        </div>
        <div className="signupDetail">
          <div>
            <h3>Signup</h3>
          </div>
          <div>
            <form>
              <input name="name" type="text" placeholder="Full name" />
              <input name="email" type="email" placeholder="Enter email" />
              <input
                name="password"
                type="password"
                placeholder="Set a password"
              />
              <p>
                Already a User ? <Link to="/login">Login .</Link>
              </p>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
