import Item from "./Item";

const CartItem = function CartItem({ products }) {

    return <>
        {
            products && products.map(function (item, index) {
                return <Item key={index} item={item}/>
            })
        }
    </>
}

export default CartItem
