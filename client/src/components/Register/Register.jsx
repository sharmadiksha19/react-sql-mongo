// Register.jsx
import React, { useState } from "react";
import Axios from "axios";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [usertype, setUsertype] = useState("");
  //onClick
  const createUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5001/api/register", {
      username: username,
      password: password,
      repassword: repassword,
      usertype: usertype,
    }).then(() => {
      console.log("User has been created!");
    });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
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
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            onChange={(event) => {
              setRepassword(event.target.value);
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
        <button type="submit" onClick={createUser}>
          Register
        </button>
        <a href="/login"> Already user? Login </a>
      </form>
    </div>
  );
};

export default Register;
