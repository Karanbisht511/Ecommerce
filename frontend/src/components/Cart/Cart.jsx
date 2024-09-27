import { useContext, useEffect, useState } from "react"
import CartContext from "../Context/CartContext"
import ProductContext from "../Context/ProductsContext";
import CartItem from "./CartItem";

export default function Cart() {

    const { getCart, cart } = useContext(CartContext)
    const { productList, arrCatProducts, pId, applyFilters, filters } = useContext(ProductContext)
    const [items, setItems] = useState([])

    let products = []


    if (pId === null) {
        products = productList
    } else {
        products = arrCatProducts[pId]
    }

    useEffect(() => {
        // getCart()
        let arr = []
        arr = cart.map(item => {
            const { product, quantity } = item
            const details = products.find(({ _id }) => (_id === product))
            return { details, quantity }
        })
        setItems(arr)
    }, [])

    console.log(items);

    return <>
        <div>
            <h1>Cart</h1>
            {console.log(items)}

            {/* {(items,length>0) ? (items.map((item, index) => {
                return <ItemDetails key={index} item={item} index={index} />
            })):<div><h1>Your Cart is empty</h1></div>} */}
            <div>Items:{items.length}</div> 
             {items.length>0 && <div><button >Clear cart</button></div>}
            <div>
                {items.length > 0 ? <CartItem products={items} /> : <div><h1>Your Cart is empty</h1></div>}
            </div>
        </div>
    </>
}
