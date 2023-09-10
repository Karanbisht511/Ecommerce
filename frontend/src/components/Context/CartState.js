import { useState } from "react";
import CardContext from "./CartContext";

export default function CartState(props) {
  const state = {
    list: [],
  };

  const [cart, setCart] = useState(state);

  const addCart = (item, increaseBy = 0) => {
    const { list } = cart;
    const element = list.find(({ title }) => title === item.title);
    console.log(element);

    // if element in not in cart add new element
    if (element === undefined && increaseBy > 0) {
      item.count = increaseBy;
      setCart({
        list: [...list, item],
      });
    } else if (increaseBy === 0) {
      // increasing already exit items by 1 through Cart page
      element.count = element.count + 1;
    } else {
      //if element exit and again triggered by products page
      element.count = element.count + increaseBy;
    }
  };

  const removeFromCart = (item,decreaseBy=0) => {
    const { list } = cart;
    const element = list.find(({ title }) => title === item.title);
    console.log(element);
    if (element === undefined) {
      // when element is not in cart
      alert("item not found");
    } else if (element.count === 1) {
      // when element have only one count remain
      removeItem(item);
    } else if(decreaseBy===0){
      // when decrease is triggered by cart page
      element.count = element.count - 1;
    }else{
      // when function is triggered by product page
      element.count=element.count-decreaseBy
    }
  };

  const removeItem = (item) => {
    const { list } = cart;
    const indexOfItem = list.indexOf(item);
    list.splice(indexOfItem, 1);
    setCart({
      list: [...list],
    });
    console.log(cart);
  };

  const clearCart = () => {
    const { list } = cart;
    setCart({ list: [] });
  };

  return (
    <CardContext.Provider value={{ cart, addCart, removeFromCart, clearCart }}>
      {props.children}
    </CardContext.Provider>
  );
}
