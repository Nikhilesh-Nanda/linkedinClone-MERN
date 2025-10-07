"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./signUp.css";
import { useEffect } from "react";
const page = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [aphone, setaphone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const router = useRouter();
  const [createFlag,setCreateFlag] = useState(false);
  const [LogAfterCreate,setLogAfterCreate] = useState(false);

  async function handleCreateClick(e) {
    e.preventDefault(); // prevent default form submission(prevent refresh)

    // Basic password confirmation check
    if (password !== cPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const newData = {
        id: userId,
        uName: userName,
        pass: password,
        add: adress,
        phoneNo: phone,
        aPhoneNo: aphone,
        dob: dob,
        genderUser: gender,
      };//new post structure
      await axios.post("http://localhost:3000/api/users", newData);//send the post
      await setCreateFlag(true);
      await router.push("/");//move to the login page
      setLogAfterCreate(true) // redirect after success (example)
    } catch (err) { //catch error 
      console.log("Error caught in catch block:", err);
    }
  }
  //side effect after creating new account
  useEffect(()=>{
    if(LogAfterCreate){
      alert("Log In With Credentials");
      setLogAfterCreate(true);
    }
  },[LogAfterCreate]);
  //side effect to show that account is created
  useEffect(()=>{
    if(createFlag){
      alert("✅ Account Created Successfully");
      setCreateFlag(false);
    }
  },[createFlag])

  return (
    <div>
      <title>New Account</title>
      <div className="newAccountSection">
        {/* whole new account section */}
        <form onSubmit={handleCreateClick}>
          <label htmlFor="userid">User ID:</label>
          <input
            type="text"
            id="userid"
            placeholder="Enter Email Or Phone No"
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="uName">User Name:</label>
          <input
            className="userName"
            id="uName"
            placeholder="Enter Your Name"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="cPass">Confirm Password:</label>
          <input
            id="cPass"
            placeholder="Enter Password"
            type="password"
            required
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="add">Address</label>
          <input
            type="text"
            id="add"
            placeholder="Enter Your Address"
            required
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="phone">Phone No:</label>
          <input
            type="number"
            id="phone"
            placeholder="Enter Your Phone No"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="aphone">Alternate Phone No:</label>
          <input
            type="number"
            id="aphone"
            placeholder="Enter Your Alternate Phone No"
            value={aphone}
            onChange={(e) => setaphone(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="dob">DOB:</label>
          <input
            type="date"
            id="dob"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="gender">Gender:</label>
          <input
            id="gender"
            type="text"
            placeholder="Enter Your Gender"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <br />
          <br />

          <button type="submit" className="createAcc">
            <b>Create Account</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
