import CartContext from "../Context/CartContext";
import { useContext ,useState} from "react";

// This button have the power to delete items from cart

function DeleteFromCart({index,noOfItems}) {
    const { removeFromCart } = useContext(CartContext)
    const handleDeleteFromCart = (item,count) => {
        removeFromCart(item)
    }

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }

    return <>
        <button onClick={() => {
            handleDeleteFromCart(index,noOfItems)
        }}>Delete</button>

    </>
}

export default DeleteFromCart;
