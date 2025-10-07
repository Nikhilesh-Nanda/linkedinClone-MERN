// OTPInput.jsx
import { useRef, useState, useEffect } from "react";
import "./otpInput.css";
const OtpInput = ({ length = 4, onOTPSubmit }) => {
  const [otp, setOTP] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  const handleChange = (idx, e) => {
    const val = e.target.value;
    if (!/^\d?$/.test(val)) return; // Only digits
    const newOTP = [...otp];
    newOTP[idx] = val.slice(-1); // only latest digit
    setOTP(newOTP);

    if (val && idx < length - 1) {
      inputRefs.current[idx + 1].focus();
    }
    // Trigger submit on full OTP
    const joined = newOTP.join("");
    if (joined.length === length) onOTPSubmit(joined);
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1].focus();
    }
  };

  return (
    <>
      {otp.map((val, idx) => (
        <input
          key={idx}
          ref={(el) => (inputRefs.current[idx] = el)}
          value={val}
          onChange={(e) => handleChange(idx, e)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          maxLength={1}
        />
      ))}
    </>
  );
};

export default OtpInput;
