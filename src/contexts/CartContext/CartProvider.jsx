import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // handle add to cart function
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if item already exist in cart
    const cartItem = cart.find((item) => item.id === id);

    // [1] item exist
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      //[2] not exist
      setCart([...cart, newItem]);
    }
  };
  console.log(cart)

  return (
    <CartContext.Provider value={{ addToCart, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
