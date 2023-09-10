import { Navigate } from "react-router-dom"
import AuthContext from "../components/Context/AuthContext"
import { useContext } from "react"

const Profile = () => {

    const { auth } = useContext(AuthContext)
    const { userData, isLoggedIn } = auth
    console.log(userData);
    if (!isLoggedIn) {
        return <Navigate to="/login" />
    } else
        return <div>
            <h1>Profile Page</h1>
            <h3>Username</h3><span>{userData?.username}</span>
            <h3>Email</h3><span>{userData?.email}</span>
            <h3>Mobile</h3>{userData?.mobile}<span></span>
        </div>
}

export default Profile
