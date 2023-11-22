//import React Router Dom
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/Register/Register";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Home from "./components/Layout/Home";
import StoreManager from "./components/Storemanager/Storemanager";
import Salesman from "./components/Salesman/Salesman";
import Customer from "./components/Customer/Customer";
import WriteReviewForm from "./components/Reviews/WriteReviewForm";
import ViewReviewForm from "./components/Reviews/ViewReviewForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/storemanager" element={<StoreManager />} />
          <Route path="/salesman" element={<Salesman />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/write-review" element={<WriteReviewForm />} />
          <Route path="/view-review" element={<ViewReviewForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
