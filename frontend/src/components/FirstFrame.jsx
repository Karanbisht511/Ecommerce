import { Link, useLocation } from "react-router-dom";
import Search from "./Search/Search";
import Navbar from "./Navbar";
import { useState } from "react";

function FirstFrame() {
    return <>
     <Navbar />
        <div id='first-frame' className="grid-item" >
            <div>
                <Search />
            </div>
        </div>
    </>;
}

export default FirstFrame;