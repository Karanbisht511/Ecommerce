import "./grid.css"
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Skeleton() {
    return <>
        <div id="home" className="grid-container">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    </>
}

export default Skeleton;
