import { useEffect, useState } from "react";
import CardContext from "./CartContext";
import axios from "axios";

export default function CartState(props) {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart();
  },[]);

  const getCart = async () => {
    try {
      const url = "http://localhost:8080/api/cart/getCart";

      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(url, config);
      console.log(response?.data[0]?.items);
      const {items}=response?.data[0]
      setCart(items)
    } catch (error) {
      console.log(error.message);
    }
  };

  const addCart = (item, increaseBy = 1) => {};

  const removeFromCart = (item, decreaseBy = 0) => {};

  const removeItem = (item) => {};

  const clearCart = () => {};

  return (
    <CardContext.Provider
      value={{ getCart, cart, addCart, removeFromCart, clearCart }}
    >
      {props.children}
    </CardContext.Provider>
  );
}
