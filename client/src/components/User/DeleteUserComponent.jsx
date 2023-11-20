import React from "react";

const DeleteUserComponent = ({ userName }) => {
  const handleDelete = async () => {
    // Send a DELETE request to delete the user
    try {
      const response = await fetch(`http://localhost:3002/users/${userName}`, {
        method: "DELETE",
      });

      const result = await response.json();
      console.log(result); // Log the response from the server
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete this user?</p>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default DeleteUserComponent;
