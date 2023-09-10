import "./product.css"
import { useEffect, useState, useContext } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export default function Products() {

    const navigate = useNavigate()
    const { pathname } = useLocation()
    console.log(pathname)


    useEffect(() => {
        if (pathname === '/products') {
            navigate("/products/productList")
        }
        console.log("first time");
    }, [pathname])

    return <>
        <Outlet />
    </>
}