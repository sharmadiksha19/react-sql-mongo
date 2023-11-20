import React, { useState } from "react";

const UpdateUserComponent = ({ userName }) => {
  const [userData, setUserData] = useState({
    password: "",
    repassword: "",
    usertype: "",
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Send a PUT request to update the user
    try {
      const response = await fetch(`http://localhost:3002/users/${userName}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      console.log(result); // Log the response from the server
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleUpdate}>
        {/* Your input fields for updating user data */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        {/* Other input fields */}
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUserComponent;
