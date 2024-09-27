import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

export default function Counter({ quantity }) {

    const { pathname } = useLocation()
    const cartPath = '/cart'
    const productspath = '/products'
    
    const [counter, setCounter] = useState(quantity)

    // useEffect(() => {
    //     setCounter(quantity)
    // }, [counter])

    const decreaseCart = () => {
        console.log(item);
        setCounter(counter - 1)
        removeFromCart(item)
    }

    const increaseCart = () => {
        console.log(item);
        setCounter(counter + 1)
        addCart(item)
    }

    return <>
        <div>
            <button id="count-decrease" className="counter-btn" onClick={
                () => {
                    pathname === cartPath ? decreaseCart() : decreaseCounter()
                }
            }>-</button>
            {counter}
            <button id="count-increase" className="counter-btn" onClick={
                () => {
                    pathname === cartPath ? increaseCart(item) : increaseCounter()
                }
            }>+</button>
        </div>

    </>
}
