import { useParams } from "react-router-dom";
import ProductContext from "../Context/ProductsContext";
import { useContext } from "react";
import BtnBuyNow from "../BtnBuyNow";
import AddToCart from "./AddToCartButton";
import RatingBadge from "../RatingBadge"

export default function SingleProduct() {

    const { productList } = useContext(ProductContext)

    let param = useParams()
    console.log(param);
    const { productId } = param
    console.log(productId);

    const selectedProduct = productList.find(({ _id }) => productId === _id)
    console.log(selectedProduct);
    const { _id, category, name, images, description, price, count, review, offer } = selectedProduct

    return <div className="product-template-box flex">
        <div className="image-section">
            <div className="product-image">
                {images && <img src={images[0]} alt="" />}
            </div>
            <div className="btn-wrapper">
                <AddToCart item={selectedProduct} />
                <BtnBuyNow productId={_id} />
            </div>
        </div>
        <div className="product-details">
            {name && <div><h2>{name}</h2></div>}
            {review?.rating && <RatingBadge rating={review?.rating} />}
            Rating {review?.reviewerCount && <span>{review?.reviewerCount}</span>}
            {price && <h2>&#8377; {price}</h2> && offer && <span>offer</span>}
            {description && <div><span>Description:</span> <span>{description}</span></div>}
        </div>
    </div>
}
