import { useEffect, useState } from "react";
import CategoryContext from "./CategoryContext";
import axios from "axios";

function CategoryState(props) {

  const [categories, setCategories] = useState();

  useEffect(()=>{
    getCategories() },[])

  useEffect(()=>{
    getCategories
    console.log("Category updated");
    console.log(categories);
  },[categories])

  const getCategories=async ()=>{
    try {
      const response = await axios.get("http://localhost:8080/api/category/categories")
      console.log(response?.data)
      const {data}=response
      setCategories(data)
    } catch (error) {
      console.log(error.message);
    }
     
  }

  const updateCategory = (cat) => {
    setCategories({
      category: cat,
    });
  };

  return (
    <>
      <CategoryContext.Provider value={{ categories,getCategories,updateCategory }}>
        {props.children}
      </CategoryContext.Provider>
    </>
  );
}

export default CategoryState;
