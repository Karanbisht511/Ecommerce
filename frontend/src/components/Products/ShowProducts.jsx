import categoryContext from "../Context/CategoryContext";
import { useContext} from "react";

import ItemDetails from "./ItemDetails";

const ShowProducts = function ShowProducts({ products }) {

    const { context } = useContext(categoryContext)
    const { category } = context

    if (category !== 'ALL')
        products = products.filter(item => item.category === category)

     

    return <>
        {
            products && products.map(function (item, index) {
                return <ItemDetails key={index} item={item} index={index} />
            })
        }
    </>
}

export default ShowProducts
