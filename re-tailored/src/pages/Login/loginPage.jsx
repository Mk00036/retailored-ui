import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const LoginPage = () => {
  const [step, setStep] = useState("login"); // 'login' | 'otp'
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleSendOTP = () => {
    // Placeholder logic
    if (mobileNumber.length === 10) {
      setStep("otp");
    }
  };

  const handleOTPChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen p-4">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="text-center mb-5">
          <img
            src="/images/reTailoredLogo.jpg"
            alt="Logo"
            className="mb-1 w-4rem"
          />
          <h3 className="text-2xl leading-10 text-800 font-bold m-0 mb-5">
            reTailored
          </h3>
          <h2 className="text-900 text-xl font-bold mt-3 mb-1">
            {step === "login" ? "Login to continue" : "Enter OTP"}
          </h2>
          <p className="text-600 font-medium">
            {step === "login" ? "Enter your details" : "We sent OTP to +91-" + mobileNumber}
          </p>
        </div>

        {step === "login" ? (
          <div className="flex flex-column gap-4">
            <div className="flex flex-column gap-2">
              <label htmlFor="mobile" className="text-600 font-medium">
                Mobile Number
              </label>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon bg-white">+91</span>
                <InputText
                  id="mobile"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  className="w-full p-3"
                  maxLength={10}
                  value={mobileNumber}
                  onChange={(e) =>
                    setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                />
              </div>
            </div>

            <Button
              label="Send OTP"
              className="w-full p-3"
              style={{
                backgroundColor: "#6366F1",
                borderColor: "#6366F1",
                color: "#fff",
              }}
              disabled={mobileNumber.length !== 10}
              onClick={handleSendOTP}
            />
          </div>
        ) : (
          <div className="flex flex-column gap-4 mt-6">
            <div className="flex justify-content-between gap-2 mb-4">
              {otp.map((digit, index) => (
                <InputText
                  key={index}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOTPChange(e.target.value, index)}
                  className="text-center p-2"
                  style={{ fontSize: "1.2rem", width: "3rem", height: "3rem" }}
                />
              ))}
            </div>

            <Button label="Verify & Login" className="w-full p-3" />

            <div className="flex justify-content-center gap-2">
              <span className="text-600">Didn’t receive code?</span>
              <Button label="Resend" className="p-button-text p-0" onClick={handleSendOTP} />
            </div>

            <Button
              label="Back"
              className="w-full p-3 p-button-outlined p-button-secondary"
              onClick={() => setStep("login")}
            />
          </div>
        )}

        <div className="text-center mt-4">
          <p className="text-600 text-sm">
            By continuing, you agree to our{" "}
            <Button label="Terms" className="p-button-text p-0 text-sm" /> and{" "}
            <Button label="Privacy Policy" className="p-button-text p-0 text-sm" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
