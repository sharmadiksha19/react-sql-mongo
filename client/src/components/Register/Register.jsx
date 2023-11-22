// Register.jsx
import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [userDetails, setuserDetails] = useState({
    username: "",
    password: "",
    repassword: "",
    usertype: "",
  });

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
        "http://localhost:5001/user/register",
        userDetails
      );
      console.log(response.data);
      console.log("User added:", userDetails);
      // Show alert on successful
      window.alert("User Added Successfully!");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
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
          Confirm Password:
          <input
            type="password"
            name="repassword"
            value={userDetails.repassword}
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
        <button type="submit">Register</button>
        <a href="/login"> Already user? Login </a>
      </form>
    </div>
  );
};

export default Register;
