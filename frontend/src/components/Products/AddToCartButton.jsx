import CartContext from "../Context/CartContext";
import { useContext, useState } from "react";

// This button have the power to add items to cart
// It will add items which are passed as a prop to it to the cartState

function AddToCart({ item }) {

    const { addCart } = useContext(CartContext)

    const handleAddCart = () => {
        console.log(item.count)
        addCart(item,counter)
        setCounter(0)
    }

    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {

        setCounter(prevCounter => prevCounter + 1)
        console.log(counter);
        item.count = counter + 1
    }

    const decreaseCounter = () => {
        setCounter(prevCounter => prevCounter - 1)
        console.log(counter);
        item.count = counter - 1

    }

    return <>

        <div>
            <button id="count-decrease" className="counter-btn" onClick={decreaseCounter}>-</button>
            {counter}
            <button id="count-increase" className="counter-btn" onClick={increaseCounter}>+</button>
        </div>

        <button onClick={() => {
            handleAddCart(item)
        }}>Add to Cart</button>

    </>
}

export default AddToCart;
