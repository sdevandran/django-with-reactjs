import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth2.js";

export default function (props) {
    const [isLoggedIn, setLoggedIn] = useState(
        localStorage.getItem("tokens") || ""
      );
  const [isError, setIsError] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

//   const referer = props.location.state ? props.location.state.referer : "/";
  const handleSubmit = e => {
  e.preventDefault();
  axios
      .post("http://127.0.0.1:4000/api/token/", {
        username,
        password
      })
      .then((result) => {
        console.log("result", result);
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
          console.log(result.data);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
        console.log(e);
      });
};

  if (isLoggedIn) {
      console.log("already logged in");
    return <Navigate to="/" />;
  }
  return (
    <form>
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
            onChange={(e) => {
            setUserName(e.target.value);
            }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Login
            </button>
          </div>
          {isError && <div className="text-danger"> The username or password provided were incorrect.</div>}
        </div>
      </div>
    </div>
    </form>
  )
}