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

    const selectedProduct = productList.find(({ id }) => parseInt(productId) == id)
    console.log(selectedProduct);
    const { id, category, title, image, description, price, count, rating,offer } = selectedProduct

    return <div className="product-template-box flex">
        <div className="image-section">
            <div className="product-image">
                {image && <img src={image} alt="" />}
            </div>
            <div className="btn-wrapper">
                <AddToCart item={selectedProduct} />
                <BtnBuyNow productId={id} />
            </div>
        </div>
        <div className="product-details">
            {title && <div>{title}</div>}
            {rating?.rate && <RatingBadge rating={rating?.rate} />}
            Rating {rating?.count && <span>{rating?.count}</span>}
            {price && <h2>&#8377; {price}</h2> && offer && <span>offer</span>}
            {description && <div><span>Description:</span> <span>{description}</span></div>}
        </div>
    </div>
}
