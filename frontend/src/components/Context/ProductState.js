import { useEffect, useState } from "react";
import ProductContext from "./ProductsContext";
import axios from "axios";

export default function ProductState(props) {
  const [productList, setProductList] = useState([]);
  const [arrCatProducts, setArrCatProducts] = useState([]);
  const [pId, setPId] = useState(null);

  const payload = {
    filter: {
      category: "All",
      rating: "All",
    },
  };

  useEffect(() => {
    getCategorizeProduct();
    getProducts(payload);
  }, []);

  useEffect(() => {
    console.log(arrCatProducts);
  }, [arrCatProducts]);

  const getProducts = async (payload) => {
    console.log(payload);
    const response = await axios.post(
      "http://localhost:8080/api/products/getAllProducts",
      payload
    );
    const { products } = response?.data;
    setProductList([...products]);
  };

  const getCategorizeProduct = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/products/categorizedProducts"
    );

    const { catProductsList } = response?.data;
    setArrCatProducts(catProductsList);
  };

  const updatePid = (id) => {
    setPId(id);
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        getCategorizeProduct,
        arrCatProducts,
        getProducts,
        pId,
        updatePid,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
