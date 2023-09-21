import Filters from "./Filters"
import "./product.css"
import { useEffect, useContext } from "react"
import ShowProducts from "./ShowProducts"
import ProductContext from "../Context/ProductsContext"

export default function Products() {

    const { productList, arrCatProducts, pId } = useContext(ProductContext)
    let products
    if (pId === null) {
        products = productList
    } else {
        products = arrCatProducts[pId]
    }

    return <>
        <div id="products">
            <Filters />
            <div id="product-container" className="product-container">
                {products && <ShowProducts products={products} />}
            </div>
        </div>
    </>
}
