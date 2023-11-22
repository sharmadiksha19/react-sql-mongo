import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "../src/components/Cart/CartContext";
import { UserProvider } from "../src/components/User/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CartProvider>
  </React.StrictMode>
);
