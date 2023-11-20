// Login.jsx
import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const navigate = useNavigate();

  const loginuser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5001/api/login", {
      username: username,
      password: password,
      usertype: usertype,
    }).then((response) => {
      console.log(response);

      // Conditionally navigate based on user type
      switch (usertype) {
        case "customer":
          navigate("/customer");
          break;
        case "salesman":
          navigate("/salesman");
          break;
        case "storemanager":
          navigate("/storemanager");
          break;
        default:
          // Redirect to a default route if user type is not recognized
          navigate("/dashboard");
      }
    });
  };

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-from">
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
          </label>
          <br />
          <label>
            User Type:
            <select
              name="userType"
              onChange={(event) => {
                setUsertype(event.target.value);
              }}
            >
              <option value="default">Select</option>
              <option value="customer">Customer</option>
              <option value="salesman">Salesman</option>
              <option value="storemanager">Store Manager</option>
            </select>
          </label>
          <br />
          <button type="submit" onClick={loginuser}>
            Login
          </button>
          <a href="/"> New user? Register </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
