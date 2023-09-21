import "./productTypes.css"
import {useContext } from "react"
import CategoryContext from "./Context/CategoryContext";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ProductTypes() {

    const {categories} =useContext(CategoryContext)
    return <div className="width-eighty flex justify-spaceAround center-div margin-ten">
        {categories && categories.map((category, index) => {
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
