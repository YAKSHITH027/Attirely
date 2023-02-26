import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Center, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "@firebase/firestore";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/UserAuth/userAuth.actions";
import { useToast } from "@chakra-ui/toast";
import Navbar from "../UserSide/Components/Home/Navbar";
import Footer from "../UserSide/Components/Home/Footer";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();
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
        let res = await signInWithEmailAndPassword(auth, email, password);
        console.log("login", res);
        const docRef = doc(db, "users", res.user.uid);
        const docSnap = await getDoc(docRef);
        dispatch(userLogin(docSnap.data()));
        localStorage.setItem("userInfoF", JSON.stringify(docSnap.data()));
        console.log(docSnap.data());
        toast({
          title: "login successful",
          description: "have a great day.",
          status: "success",
          duration: 4000,
          position: "top",
          isClosable: true,
        });
        // await login(email, password);
        navigate("/");
      } catch (err) {
        console.log(err.message);
        toast({
          title: "login failed",
          description: err.message,
          status: "error",
          position: "top",
          duration: 4000,
          isClosable: true,
        });
        setError(err);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login">
        <Flex align={"center"} className="loginContainer">
          <Flex
            className="logoanime "
            ml={"2rem"}
            justify={"center"}
            align="center"
            height={"250px"}
            overflow={"hidden"}
            p="2rem"
            display={{ base: "none", md: "Flex" }}
          >
            <Image
              src={"https://i.ibb.co/7jfCzLZ/Attirely-removebg-preview.png"}
              alt="myntra2"
            />
          </Flex>
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
        </Flex>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
