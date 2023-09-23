import Filters from "./Filters"
import "./product.css"
import { useEffect, useContext, useState } from "react"
import ShowProducts from "./ShowProducts"
import ProductContext from "../Context/ProductsContext"

export default function Products() {

    const { productList, arrCatProducts, pId, applyFilters, filters } = useContext(ProductContext)
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
                {filters && <ShowProducts products={applyFilters(products)} />}
            </div>
        </div>
    </>
}
