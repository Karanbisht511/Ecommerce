import { useEffect, useState } from "react";
import ProductContext from "./ProductsContext";
import axios from "axios";

export default function ProductState(props) {
  const [productList, setProductList] = useState([]);
  const [arrCatProducts, setArrCatProducts] = useState([]);
  const [pId, setPId] = useState(null);

  const [filters, setFilters] = useState({
    priceFltr: { price: null, prcFltrType: null },
  });

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

  const updateFilters = ({ priceFilter }) => {
    // const { priceFilter } = filters;
    setFilters((prev) => ({
      ...prev,
      priceFltr: {
        price: priceFilter?.price,
        prcFltrType: priceFilter?.prcFltrType,
      },
    }));
  };

  const applyFilters = (products) => {
    const { priceFltr } = filters;
    return products.filter((product) => {
      const { price } = product;
      if (priceFltr?.prcFltrType === "max") {
        return price < priceFltr?.price;
      } else if (priceFltr?.prcFltrType === "min") {
        return price > priceFltr?.price;
      } else {
        return true;
      }
    });
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
        filters,
        updateFilters,
        applyFilters,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
