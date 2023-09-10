import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./Context/AuthContext";
import { useContext } from "react";

function Navbar() {

    const { auth, logOut } = useContext(AuthContext)
    const { isLoggedIn } = auth
    const navigate = useNavigate()
    const handleDdSelect = (e) => {
        const optionSelected = e.target.value
        switch (optionSelected) {
            case 'Logout':
                logOut()
                break;
            case 'Cart':
                navigate("/cart")
                break;
            case 'View Profile':
                navigate('/Profile')
                break;
            case 'Orders':
                navigate('/Orders')
                break;
            default:
                console.log("Pages for these options are not created yet");
                break;
        }
    }

    return <>
        <nav id="navbar" >
            <div className="nav-menu flexbox-container">
                <div className="nav-inner flexbox-container">
                    <div className="nav-item"><Link to="/">Ecom.In</Link></div>
                    <div className="nav-item"><Link to="/">Home</Link></div>
                    <div className="nav-item"><Link to='/products'>Products</Link></div>
                    <div className="nav-item"><Link to="/cart">Cart</Link></div>
                </div>

                {isLoggedIn ? <div className="nav-item">
                    <div id="profile">
                        <label htmlFor="profile-dropdown"></label>
                        <select id="[profile-dropdown" onChange={handleDdSelect}>
                            <option value="UserName">Username</option>
                            <option value="View Profile">View Profile</option>
                            <option value="Cart">Cart</option>
                            <option value="Orders">Orders</option>
                            <option value="Logout" >Logout</option>
                        </select>
                    </div>
                    {/* <button onClick={logOut}>Logout</button>*/}
                </div>
                    :
                    <div className="user-cred flexbox-container">
                        <div className="nav-item"><Link to="/login">Login</Link></div>
                        <div className="nav-item"><button><Link to="/signup">Signup</Link></button></div>
                    </div>
                }
            </div>
        </nav>
    </>;
}

export default Navbar;
