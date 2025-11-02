import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setCartLength(cart.length);
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartLength, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
