import { useState } from "react";
import CategoryContext from "./CategoryContext";

function CategoryState(props) {
  const state = {
    category: "ALL",
  };

  const [context, setContext] = useState(state);

  const updateCategory = (cat) => {
    setContext({
      category: cat,
    });
  };

  return (
    <>
      <CategoryContext.Provider value={{ context, updateCategory }}>
        {props.children}
      </CategoryContext.Provider>
    </>
  );
}

export default CategoryState;
