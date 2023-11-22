import React, { useState } from "react";
import axios from "axios";
import "./AddCustomerForm.css";

const CreateCustomer = () => {
  const [userDetails, setuserDetails] = useState({
    username: "",
    password: "",
    usertype: "",
  });

  const handleChange = (e) => {
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
    <div className="product-form-container">
      <h2>Create Customer</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Username:</td>
              <td>
                <input
                  type="text"
                  name="username"
                  value={userDetails.username}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="text"
                  name="password"
                  value={userDetails.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>User Type:</td>
              <td>
                <input
                  type="text"
                  name="usertype"
                  value={userDetails.usertype}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
};

export default CreateCustomer;
