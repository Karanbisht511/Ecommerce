import "./commonStyling.css"
import BtnLeftScroll from "./BtnLeftScroll"
import BtnRightScroll from "./BtnRightScroll"
import { Link } from "react-router-dom"
import ProductContext from "./Context/ProductsContext"
import { useContext } from "react"

function BestProductTypes({ pId, products }) {
    const { category } = products[0]
const  {updatePid}=useContext(ProductContext)

    return <div className="flex justify-start product-height-300 width-eighty center-div margin-ten">
        <div className="Name">
            <h2>{category}</h2>
            <Link to="/products"><button onClick={()=>{updatePid(pId)}}>View All</button></Link>
        </div>

        <BtnLeftScroll key={pId} btnId={pId} />
        <div className="product-list products-list-horizontally flex margin-top-ten overFlow-x">
            {products.map((product,index) => {
                const { images, name, review } = product
                if (review?.rating > 4.0) {
                    // console.log(images[0]);
                    return <div key={index} className="item-width">
                        <img style={{ width: '100px', height: '100px' }} src={images[0]} alt="image" />
                        <h3>{name}</h3>
                    </div>
                }
            })}
        </div>
        <BtnRightScroll key={pId} btnId={pId} />
    </div>
}

export default BestProductTypes;
