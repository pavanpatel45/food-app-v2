import { useState } from "react";
import React from "react";
import "../Css/Login.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function ResetPassword({ email }) {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

  return (
    <div className="login-box">
      <h2 className=" font-extrabold text-2xl font-serif underline">
    Reset Password.
      </h2>
      <form>
        <div className="form-group">
          <label htmlFor="username" className="font-serif font-normal">
         Enter Your New Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username" className="font-serif font-normal">
        Confirm Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </form>
      <div>
        <Link to="/auth/login">
      <button
        type="submit"
        className={`font-serif text-xl mt-4 ${
         !password || !confirmPassword ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={!password || !confirmPassword}
      >
        Save
      </button>{" "}
      </Link></div>
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
      </Link>
      </div>
    </div>
  );
}

export default ResetPassword;