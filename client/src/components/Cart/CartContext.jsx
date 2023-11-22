import React, { createContext, useContext, useReducer } from "react";

// Create context
const CartContext = createContext();

// Create a custom hook to use the context
export const useCart = () => {
  return useContext(CartContext);
};

// Create a CartProvider component to wrap your app with
export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    cartCount: 0,
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          cartCount: state.cartCount + 1,
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
          cartCount: state.cartCount - 1,
        };
      default:
        return state;
    }
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
