//import React Router Dom
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/Register/Register";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customers" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
