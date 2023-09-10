import AddToCart from "./AddToCartButton";
import { useNavigate } from "react-router-dom";


export default function ItemDetails({ item, index }) {

    const navigate=useNavigate()
   
    const { id,category, title, image, description, price, count } = item

    const openProduct=()=>{
        console.log("nested product");

        navigate(`/products/${id}`)
    }

    return (
        <div key={index} className="product-template-box">
            <div onClick={openProduct}>
            {category && <div>Category: {category}</div>}
            {title && <div><h2>Title</h2> {title}</div>}
            {image && <div><img src={image} alt="" /></div>}
            {description && <div><h2>Description:</h2> {description}</div>}
            </div>
            {price && <div><h2> Price:</h2>{price}</div>}

            <AddToCart item={item} />
        </div>)
}
