import Filters from "./Filters"
import "./product.css"
import { useEffect, useState, useContext } from "react"
import ShowProducts from "./ShowProducts"
import ProductContext from "../Context/ProductsContext"

export default function Products() {

    const { productList,getProducts } = useContext(ProductContext)
    console.log(productList);
    useEffect(getProducts,[])

    return <>
        <div id="products">
            <Filters />
            <div id="product-container" className="product-container">
                {productList && <ShowProducts products={productList} />}
            </div>
        </div>
    </>
}