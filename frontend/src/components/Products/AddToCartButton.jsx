import CartContext from "../Context/CartContext";
import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button'

// This button have the power to add items to cart
// It will add items which are passed as a prop to it to the cartState

function AddToCart({ item }) {

    const { addCart } = useContext(CartContext)

    const handleAddCart = () => {
        console.log(item.count)
        addCart(item, counter)
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

        <Button style={{ backgroundColor: "#ff9f00", borderRadius: '0', border: '0' }} onClick={() => {
            handleAddCart(item)
        }} variant="primary" size="lg" >Add to Cart</Button>

    </>
}

export default AddToCart;
