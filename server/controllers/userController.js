const asyncHandler = require("express-async-handler");
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "smarthomesDB",
});

//@route POST /user/register
//@access public
const addUser = asyncHandler(async (req, res) => {
  const { username, password, repassword, usertype } = req.body;

  if (!username || !password || !repassword || !usertype) {
    res.status(400);
    throw new Error("All fields are Mandatory!");
  }

  const [rows] = await connection.execute(
    "SELECT * FROM user WHERE userName = ?",
    [username]
  );

  if (rows.length > 0) {
    return res.status(400).json({ message: "Already a user!" });
  }

  const user = await connection.execute(
    "INSERT INTO user(username,password,repassword,usertype) " +
      "VALUES (?,?,?,?)",
    [username, password, repassword, usertype]
  );

  if (user) {
    res
      .status(201)
      .json({ message: "User with username: " + username + " created." });
  } else {
    res.status(400);
    throw new Error("Data invalid!");
  }
  res.json({ message: "Registered the user" });
});

//@route POST user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password, usertype } = req.body;

  try {
    const [rows] = await connection.execute(
      "SELECT * FROM user WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const user = rows[0];

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful", username: username });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//@route DELETE /delete/:username
//@access public
const removeUser = asyncHandler(async (req, res) => {
  const username = req.params.username;

  try {
    const [rows] = await connection.execute(
      "SELECT * FROM user WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Invalid user!" });
    }

    await connection.execute("DELETE FROM user WHERE username = ?", [username]);

    res.status(200).json({ message: "User deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = { addUser, loginUser, removeUser };
