import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  name: "",
};

const Register = () => {
  //posting data to database
  const [state, setState] = useState(initialState);
  const { username, email, password, name } = state;
  const navigate = useNavigate;

  const handleSubmit = (e) => {
    if (!username || !email || !password || !name) {
      toast.error("Please provide the input ");
    } else {
      axios
        .post("http://localhost:5000/api/post/user", {
          username,
          email,
          password,
          name,
        })
        .then(() => {
          setState({ username: "", email: "", password: "", name: "" });
        })
        .catch((err) => toast.error(err.response.data));
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
    e.preventDEfault();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register For Free</h1>
          <span>Do you have an account?</span>
          <Link to="/">
            <button>Login</button>
          </Link>
          <span>Are you a Recruiter??</span>
          <Link to="/api/recruiter">
            <button>Sign up as Recruiter</button>
          </Link>
        </div>

        <div className="right">
          <h1>Candidate Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Username"
              onChange={handleInputChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleInputChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handleInputChange}
            />
            <button type="submit" value="Submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
