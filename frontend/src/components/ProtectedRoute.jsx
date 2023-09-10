import { useContext } from "react"
import AuthContext from "./Context/AuthContext"
import { Route, redirect } from "react-router-dom"

export default function ProtectedRoute({ path, Component }){

    const { auth } = useContext(AuthContext)

    const { token } = auth

    return
    <>
        {token ? <Route to={path} element={<Component />} /> : <redirect to="/login" />}
    </>
}