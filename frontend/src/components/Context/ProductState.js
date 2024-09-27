import { useEffect, useState } from "react";
import ProductContext from "./ProductsContext";
import axios from "axios";

export default function ProductState(props) {
  const [productList, setProductList] = useState([]);
  const [arrCatProducts, setArrCatProducts] = useState([]);
  const [pId, setPId] = useState(null);

  const [filters, setFilters] = useState({
    priceFltr: { price: null, prcFltrType: null },
    rating: null,
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
    console.log(products);
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

  const clearFilters = () => {
    setFilters({
      priceFltr: { price: null, prcFltrType: null },
      rating: null,
    });
  };

  const updateFilters = ({ priceFilter, rating }) => {
    // clearFilters();
    setFilters({
      priceFltr: {
        price: priceFilter?.price,
        prcFltrType: priceFilter?.prcFltrType,
      },
      rating: rating,
    });
  };

  const applyFilters = (products) => {
    const { priceFltr, rating } = filters;
    let fltrdPdts;
    if (rating !== null) {
      fltrdPdts = products.filter((product) => {
        const { review } = product;
        return review?.rating > rating && review?.rating < rating + 1;
      });
      console.log(fltrdPdts);
    } else {
      fltrdPdts = products;
      console.log(fltrdPdts);
    }

    if (priceFltr?.price !== null && priceFltr?.prcFltrType !== null) {
      fltrdPdts = fltrdPdts.filter((product) => {
        const { price,review } = product;
        if (priceFltr?.prcFltrType === "max") {
          return price <= priceFltr?.price;
        } else if (priceFltr?.prcFltrType === "min") {
          return price >= priceFltr?.price;
        } else {
          return (review?.rating === rating);
        }
      });
      console.log(fltrdPdts);
    }

    console.log(fltrdPdts);
    return fltrdPdts;
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
