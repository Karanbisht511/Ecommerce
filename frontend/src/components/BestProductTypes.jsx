import data from "../data/productTypes.json"
import "./commonStyling.css"
import BtnLeftScroll from "./BtnLeftScroll"
import BtnRightScroll from "./BtnRightScroll"
import { Link } from "react-router-dom"

function BestProductTypes({pId}) {
    console.log(pId);
    const { productTypes } = data

    return <div className="flex justify-start product-height-300 width-eighty center-div margin-ten">
        <div className="Name">BestProductTypes</div>
        <BtnLeftScroll key={pId} btnId={pId} />
        <div className="product-list products-list-horizontally flex margin-top-ten overFlow-x">
            {productTypes.map((type) => {
                return <Link to="/products"> <div className="item-width">
                    <img src={type?.image} alt="image" srcset="" />
                    <h3>{type?.text}</h3>
                </div>
                </Link>
            })}
        </div>
        <BtnRightScroll key={pId} btnId={pId} />
    </div>
}

export default BestProductTypes;
