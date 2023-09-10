import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

export default function Counter({ item }) {

    const { pathname } = useLocation()
    const cartPath = '/cart'
    const productspath = '/products'
    const { addCart, removeFromCart } = useContext(CartContext)
    console.log(item);
    const { title, count } = item
    console.log("title:", title + " count:" + count)
    const [counter, setCounter] = useState(count)

    useEffect(() => {
        setCounter(count)
    }, [counter])

    // const increaseCounter = () => {
    //     setCounter(counter + 1)
    // }

    // const decreaseCounter = () => {
    //     setCounter(counter - 1)
    // }

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
