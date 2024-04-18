import { useState } from "react";
import React from "react";
import "../Css/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="login-box">
      <h2 className=" font-extrabold text-2xl font-serif underline">Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username" className="font-serif font-bold">
            Enter Your Username:
          </label>
          <input
            type="email"
            id="username"
            placeholder="Username"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="font-serif font-bold">
            Enter Your Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="p-2 border border-gray-400 rounded-md pl-10"
          />
        </div>
      </form>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center mt-2">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember_me"
            className="ml-2 block text-sm text-gray-900"
            style={{
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "14px",
            }}
          >
            Remember me
          </label>
        </div>
        <div>
          <Link to='/auth/forgotPassword'>
          <div
            className="flex justify-end cursor-pointer"
            style={{
              color: "#2CAE66",
              fontFamily: "Roboto",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "14px",
              textDecoration: "underline",
            }}
          >
            Forgot Password
          </div>
          </Link>
        </div>
      </div>
      <button
        type="submit"
        className={`font-serif text-xl mt-4 ${
          !email || !password ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={!email || !password}
      >
        Login
      </button>
    </div>
  );
}

export default Login;