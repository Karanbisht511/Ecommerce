import Adscarousel from "../components/AdsCarousel";
import BestProductTypes from "../components/BestProductTypes";
import ProductTypes from "../components/ProductTypes";

function Home() {
    return <>
        <div>
            <ProductTypes />
            <Adscarousel />
            <BestProductTypes key="0" pId="0" />
            <BestProductTypes key="1" pId="1" />
            <BestProductTypes key="2" pId="2" />
            <BestProductTypes key="3" pId="3" />
            <BestProductTypes key="4" pId="4" />
            <BestProductTypes key="5" pId="5" />
            <BestProductTypes key="6" pId="6" />
            <BestProductTypes key="7" pId="7" />
        </div>
    </>
}

export default Home;
