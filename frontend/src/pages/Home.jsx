import Adscarousel from "../components/AdsCarousel";
import BestProductTypes from "../components/BestProductTypes";
import ProductTypes from "../components/ProductTypes";
import ProductContext from "../components/Context/ProductsContext";
import { useContext } from "react";

function Home() {
   
    const {arrCatProducts } = useContext(ProductContext)
  
    return <>
        <div>
            <ProductTypes />
            <Adscarousel />
            {arrCatProducts && arrCatProducts.map((catProducts, index) => {
                if(catProducts.length>0)
                return <BestProductTypes key={index} pId={index}  products={catProducts} />
            })}
        </div>
    </>
}

export default Home;
