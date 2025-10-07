"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import OTPApp from "./otpForm"; // Your existing OTPApp component
import "./first.css";
const Page = () => {
  const [userid, setUserId] = useState("");
  const [pass, setPassword] = useState("");
  const [otpflag, setOtpFlag] = useState(false);

  const router = useRouter();

  function handleSignUp(e) {
    e.preventDefault();
    router.push("/signUp");
  }

  async function handleLoginClick(e) {
    e.preventDefault(); // prevent form reload
    try {
      const data = { userId: userid, password: pass };
      const res = await axios.post("http://localhost:3000/api/login", data);
      localStorage.setItem("token", res.data.tokenA);
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token Removed On LogOut");
        return;
      } else if (res.data.flag === 0) {
        console.log("Login Failure");
      } else if (res.data.flag === 1) {
        setOtpFlag(true); // Show OTP screen
      }
    } catch (err) {
      console.log("Error caught in catch block:", err);
    }
  }

  // Callback after successful OTP entry
  const handleOtpSuccess = () => {
    alert("Login successful!");
    router.push("/home");
  };

  return (
    <>
      {!otpflag && (
        <div>
          <title>Log In | Linkedin</title>
          <div className="signInSection">
            <h1 className="logo">LinkedIn</h1>
            <form>
              <label htmlFor="userId" required>
                Email ID:
              </label>
              <br />
              <input
                type="text"
                id="userId"
                placeholder="Enter Your Email or Phone No"
                value={userid}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
              <br />
              <br />
              <label htmlFor="passkey">Password:</label>
              <br />
              <input
                id="passkey"
                type="password"
                placeholder="Enter Your Password"
                value={pass}
                className="passInp"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <button className="oldLogin" onClick={handleLoginClick}>
                <b>Sign In</b>
              </button>
              <br />
              <p>New User??</p>
              <br />
              <button className="newLogin" onClick={handleSignUp}>
                <b>Sign Up</b>
              </button>
            </form>
          </div>
        </div>
      )}
      {otpflag && <OTPApp onSuccess={handleOtpSuccess} />}
    </>
  );
};

export default Page;
