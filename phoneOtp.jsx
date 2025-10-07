  import React, { useState } from "react";
  import OtpInput from "./otpInput";
  import "./phoneOtp.css";
  const PhoneOtpForm = ({ onSuccess }) => {
    const [phoneNo, setPhoneNo] = useState("");
    const [showOtpinput, setShowOtpInput] = useState(false);

    function handlePhoneSubmit(event) {
      event.preventDefault();

      const regex = /^[6-9]\d{9}$/;
      if (phoneNo.length < 10 || !regex.test(phoneNo)) {
        alert("Invalid Phone Number");
        return;
      }

      // Call backend API to send OTP to phoneNo (optional)
      setShowOtpInput(true);
    }

    const onOTPSubmit = (otp) => {
      // TODO: Verify OTP via backend, then on success:
      if (onSuccess) onSuccess();
    };

    return (
      <div className="otpSection">
        {!showOtpinput ? (
          <form onSubmit={handlePhoneSubmit}>
            <input
              type="text"
              placeholder="Enter The Number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <br></br>
            <button className="otpS" type="submit"><b>Submit</b></button>
          </form>
        ) : (
          <div className="otpSection">
            <p>Enter OTP sent to {phoneNo}</p>
            <OtpInput length={4} onOTPSubmit={onOTPSubmit} />
          </div>
        )}
      </div>
    );
  };

  export default PhoneOtpForm;
