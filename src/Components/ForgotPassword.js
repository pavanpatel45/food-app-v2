import { useState } from "react";
import React from "react";
import "../Css/Login.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email,setEmail] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="login-box">
      <h2 className=" font-extrabold text-2xl font-serif underline">
        Forgot Password?
      </h2>
      <form>
        <div className="form-group">
          <label htmlFor="username" className="font-serif font-normal">
            Please enter your email id to receive a verification code.
          </label>
          <input
            type="email"
            id="username"
            placeholder="Email ID"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
       
      </form>
      <div>
        <Link to="/auth/emailVerification" state={email}>
      <button
        type="submit"
        className={`font-serif text-xl mt-4 ${
          !email ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={!email}
      >
        Submit
      </button>
      </Link>
      <div>
        <Link to="/auth/login">
      <div
        className="mt-3 flex flex-row items-center"
        style={{
          color: "#2CAE66",
          fontFamily: "Roboto",
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "14px",
        }}
      >
        <FaArrowLeft/>
        <p className="ml-2"> Back to Login</p>
      </div>
      </Link></div>
      </div>
    </div>
  );
}

export default ForgotPassword;