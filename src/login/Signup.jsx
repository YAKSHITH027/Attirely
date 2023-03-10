import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc } from "@firebase/firestore";
import { useToast } from "@chakra-ui/toast";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/UserAuth/userAuth.actions";
import { Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Navbar from "../UserSide/Components/Home/Navbar";
import Footer from "../UserSide/Components/Home/Footer";
import { Button } from "@chakra-ui/react";

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address.");
      return;
    }

    // Password validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        name: name,
        email,
        password,
        avatar: "",
        date: Date.now(),
      });
      console.log(res);
      dispatch(userLogin(res.user));
      localStorage.setItem("userInfoF", JSON.stringify(res.user));
      toast({
        title: "Sign up successful",
        description: "have a great day.",
        status: "success",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      toast({
        title: "Sign up failed",
        description: err.message,
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      setError(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup">
        <Flex align="center" className="signupContainer">
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
          <div className="signupDetail">
            <div>
              <h3>Signup</h3>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Set a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <div className="error">
                    {"* "}
                    {error}
                  </div>
                )}
                <p>
                  Already a User ? <Link to="/login">Login </Link>
                </p>
                <Button
                  isLoading={isLoading}
                  loadingText={"Signing Up"}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </Flex>
      </div>
      <Footer />
    </div>
  );
};
export default Signup;
