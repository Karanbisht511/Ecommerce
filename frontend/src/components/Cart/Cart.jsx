import { useContext } from "react"
import CartContext from "../Context/CartContext"
import CartItem from "./CartItem";

export default function Cart() {

    const { cart,clearCart } = useContext(CartContext)
    console.log(cart);
    const { list } = cart
    return <>
        <div>
            <h1>Cart</h1>
            <div>Items:{list.length}</div>
           {list.length>0 && <div><button onClick={clearCart}>Clear cart</button></div>}
            <div>
                {list.length > 0 ? <CartItem products={list} /> : <div><h1>Your Cart is empty</h1></div>}
            </div>
        </div>
    </>
}