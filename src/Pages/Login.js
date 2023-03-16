// import axios from "axios";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  //Getting data from login api

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data[0].role === "USER") {
          navigate("/api/website", { state: { name: username } });
        } else {
          if (res.data[0].role === "ADMIN") {
            navigate("/api/website", { state: { name: username } });
          } else navigate("/");
        }
      })
      .catch((err) => {
        console.log("No user exist", err);
      });
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello Seeker</h1>
          <span>Don't you have an account?</span>
          <Link to="/api/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
