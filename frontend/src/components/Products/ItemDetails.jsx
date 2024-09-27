import AddToCart from "./AddToCartButton";
import { useNavigate } from "react-router-dom";
import RatingBadge from "../RatingBadge";

export default function ItemDetails({ item, index }) {

    const navigate=useNavigate()
   
    const { _id,category, name, images, description, price,review, count } = item

    const openProduct=()=>{
        console.log("nested product");

        navigate(`/products/${_id}`)
    }

    return (
        <div key={index} className="product-template-box">
            <div onClick={openProduct}>
            {/* {category && <div>Category: {category}</div>} */}
            {name && <div><h2>Title</h2> {name}</div>}
            {review?.rating && <RatingBadge rating={review?.rating} />}
            {/* Rating {review?.reviewerCount && <span>{review?.reviewerCount}</span>} */}
          
            {images && <div><img src={images[0]} alt="" /></div>}
            {description && <div><h2>Description:</h2> {description}</div>}
            </div>
            {price && <div><h2> Price:</h2>{price}</div>}

            <AddToCart item={item} />
        </div>)
}
