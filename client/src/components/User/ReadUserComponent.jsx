import React, { useState, useEffect } from "react";

const ReadUserComponent = ({ userName }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3002/users/${userName}`);
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error("Error reading user:", error);
      }
    };

    fetchUser();
  }, [userName]);

  return (
    <div>
      <h2>Read User</h2>
      {user ? (
        <div>
          <p>User Name: {user.userName}</p>
          <p>Password: {user.password}</p>
          <p>User Type: {user.usertype}</p>
          {/* Display other user details */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ReadUserComponent;
