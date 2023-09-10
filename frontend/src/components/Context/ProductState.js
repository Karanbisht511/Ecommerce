import { useEffect, useState } from "react";
import ProductContext from "./ProductsContext";

export default function ProductState(props) {
//   const state = {
//     productList: [],
//   }

  const [productList,setProductList]=useState()

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setProductList(json)
      })
  }

  return <ProductContext.Provider value={{productList,getProducts}}>{props.children}</ProductContext.Provider>;
}
