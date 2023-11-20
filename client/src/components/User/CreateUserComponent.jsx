// CreateUserComponent.js
import React, { useState } from "react";

const CreateUserComponent = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    repassword: "",
    usertype: "",
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the /users endpoint with userData
    try {
      const response = await fetch("http://localhost:3002/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      console.log(result); // Log the response from the server
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        {/* Your input fields */}
        <label>User Name:</label>
        <input
          type="text"
          name="userName"
          value={userData.userName}
          onChange={handleInputChange}
        />
        {/* Other input fields */}
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserComponent;
