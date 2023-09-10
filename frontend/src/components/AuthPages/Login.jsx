import "./signup.css";
import girlImg from '../../images/young_woman.png'
import { useState, useContext } from "react";
import { Link, useNavigate, NavLink, Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { Error } from "./Error";

function Login() {

    const { logIn, auth } = useContext(AuthContext)
    const { isLoggedIn } = auth
    const navigate = useNavigate()
    const signupPath = '/signup'

    const [credentials, setCredentials] = useState({
        username: null,
        mobile: null,
    })

    const [error, setError] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validateCredentials = () => {
        const validationErrors = {}
        console.log(credentials);
        const { username, password } = credentials
        if (!username || username === null) {
            validationErrors.errUsername = "Please enter username"
        }

        if (!password || password === null) {
            validationErrors.errPassword = "Please enter password"
        }

        if (username && username?.length < 5) {
            validationErrors.errUsername = "Name should be atleast 5 characters"
        }

        let specialCharCount = 0;
        let upperCaseCount = 0;
        let lowerCaseCount = 0;
        let numberCount = 0;

        const specialChars = [
            "!",
            "@",
            "#",
            "$",
            "%",
            "^",
            "&",
            "*",
            "(",
            ")",
            "_",
            "-",
            "+",
            "=",
            "[",
            "{",
            "]",
            "}",
            ":",
            ";",
            "<",
            ">",
        ];

        if (password && password?.length < 8) {
            validationErrors.errPassword = "Password should have more minimum 8 char"
        }
        else {
            for (let i = 0; i < password?.length; i++) {
                const char = password[i];
                if (specialChars.includes(char)) {
                    specialCharCount++;
                }
                if (char === char.toUpperCase()) {
                    upperCaseCount++;
                }
                if (char === char.toLowerCase()) {
                    lowerCaseCount++;
                }
                if (char == parseInt(char)) {
                    numberCount++;
                }
            }

            if (specialCharCount === 0 || upperCaseCount === 0 || lowerCaseCount === 0 || numberCount == 0) {
                validationErrors.errPassword = "Password must have 1 special character,1 uppercase character,1 lowercase character and 1 Numeric char"
                //HERE UPPERCASE Validation not working
            }
        }

        return validationErrors
    }

    const handleLoginButton = () => {
        setError()
        const validationErrors = validateCredentials()
        if (Object.keys(validationErrors)?.length > 0) {
            console.log(validationErrors);
            setError(validationErrors)
            return
        }
        logIn(credentials)
    }

    if (isLoggedIn)
        return <Navigate to="/" replace={true} />
    else
        return <>
            <div className="container">
                <div id="left" className="components">
                    <div className="brand-txt">
                        <div className="fontDetailWelcome signup-secondary">Welcome to</div>
                        <div className="fontTitle signup-primary">startyourcareer.in</div>
                    </div>
                    <div className="image-wrapper">
                        <img className="girl" src={girlImg} alt="" />
                    </div>
                </div>

                <div id="right" className="components">
                    <div className="content">
                        <div className="fontTitle signup-secondary" >Sign Up</div>
                        <div className="signup-thirdParty">
                            <button className="icon-wrapper"> <googleIcon></googleIcon> Sign up with Google</button>
                            <button className="icon-wrapper"> <fbIcon></fbIcon> Sign up with Facebook</button>
                        </div>
                        {/* <form className="signup-form" action=""> */}

                        <div className="input-name">
                            <label htmlFor="" className="fontLabel">Your Name</label>
                            <br />
                            <input type="text" id="" className="inputCredential fontInput" name="username" placeholder="first and last name" onChange={handleChange} />
                            {error?.errUsername && <Error msg={error?.errUsername} />}
                        </div>

                        <div className="input-password">
                            <label htmlFor="" className="fontLabel">Password</label>
                            <br />
                            <input type="text" id="" className="inputCredential fontInput" name="password" placeholder="8+ characters" onChange={handleChange} />
                            {error?.errPassword && <Error msg={error?.errPassword} />}

                        </div>

                        <div className="btn-signup-wrapper"> <button id="btn-signup" onClick={handleLoginButton}>Login</button> </div>

                        <div className="haveAccount">New Here? <Link to={signupPath}>Signup </Link> </div>
                    </div>
                </div>
            </div>
        </>
}

export default Login
