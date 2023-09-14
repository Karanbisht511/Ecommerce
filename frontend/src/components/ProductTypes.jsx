import "./productTypes.css"
import { useEffect, useState } from "react"
import axios from "axios"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ProductTypes() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:8080/api/category/categories")
            console.log(response.data);
            setCategories(response.data)
        })()
    }, [])

    return <div className="width-eighty flex justify-spaceAround center-div margin-ten">
        {categories.map((category, index) => {
            console.log(category);
            const { name, description } = category
            return <div key={index}>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip>{description}</Tooltip>}
                ><h3>{name}</h3></OverlayTrigger>
            </div>
        })}
    </div>
}

export default ProductTypes;
