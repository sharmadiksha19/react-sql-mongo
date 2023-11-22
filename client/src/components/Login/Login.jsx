// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../User/UserContext";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const { login } = useUser();

  const [userDetails, setuserDetails] = useState({
    username: "",
    password: "",
    usertype: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      const response = await axios.post(
        "http://localhost:5001/user/login",
        userDetails
      );
      console.log(response.data);
      console.log("User logged:", userDetails);
      switch (userDetails.usertype) {
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
      login(response.data);

      // Show alert on successful
      window.alert("User LoggedIn Successfully!");
    } catch (error) {
      console.error("Error logging user:", error.message);
    }
  };

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-from" onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userDetails.username}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            User Type:
            <input
              type="text"
              name="usertype"
              value={userDetails.usertype}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          <a href="/register"> New user? Register </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
