import React from "react";
import "./OTPApp.css";
import PhoneOtpForm from "./phoneOtp";

const OTPApp = ({ onSuccess }) => {
  return (
    <div className="otpApp">
      <h1>Login With Phone</h1>
      <PhoneOtpForm onSuccess={onSuccess} />
    </div>
  );
};

export default OTPApp;
