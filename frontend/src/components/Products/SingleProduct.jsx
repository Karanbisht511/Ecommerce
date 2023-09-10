import { useParams } from "react-router-dom";
import ProductContext from "../Context/ProductsContext";
import { useContext } from "react";

import AddToCart from "./AddToCartButton";

export default function SingleProduct() {

    const { productList } = useContext(ProductContext)

    let param = useParams()
    console.log(param);
    const { productId } = param
    console.log(productId);

    const selectedProduct = productList.find(({ id }) => parseInt(productId) == id)
    console.log(selectedProduct);
    const { id, category, title, image, description, price, count } = selectedProduct

    return <div className="product-template-box">

        {category && <div>Category: {category}</div>}
        {title && <div><h2>Title</h2> {title}</div>}
        {image && <div><img src={image} alt="" /></div>}
        {description && <div><h2>Description:</h2> {description}</div>}
        {price && <div><h2> Price:</h2>{price}</div>}

        <AddToCart item={selectedProduct} />
    </div>
}
