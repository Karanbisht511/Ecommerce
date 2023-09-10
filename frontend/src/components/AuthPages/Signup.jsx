import "./signup.css";
import girlImg from '../../images/young_woman.png'
import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ValidateCredentials from "./ValidateCredentials";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import { Error } from "./Error";

function Signup() {
    const { signup, auth } = useContext(AuthContext)
    const navigate = useNavigate()
    const currPagePath = useLocation().pathname
    console.log(currPagePath);

    const loginPath = '/login'
    const signupPath = '/signup'

    const [credentials, setCredentials] = useState({
        username: null,
        mobile: null,
        email: null,
        password: null,
    })

    const [error, setError] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleTermsCheck = (e) => {
        console.log(e.target.checked);
        const isChecked = e.target.checked
        console.log(isChecked);
        if (isChecked === true) {
            setCredentials(prevElement => (
                { ...prevElement, termsChecked: true }
            ))
        }
    }

    const validateCredentials = () => {
        const validationErrors = {}
        console.log(credentials);
        const { username, password, email, mobile, termsChecked } = credentials
        if (!username || username === null) {
            validationErrors.errUsername = "Please enter username"
        }

        if (!password || password === null) {
            validationErrors.errPassword = "Please enter password"
        }

        if (!email || email === null) {
            validationErrors.errEmail = "Please enter email"
        }

        if (!mobile || mobile === null) {
            validationErrors.errMobile = "Please enter mobile number"
        }

        if (!termsChecked || termsChecked === false) {
            validationErrors.errCheckTerms = "Please check the terms"
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

        if (email) {
            let mailCount = 0;
            const mails = ["@gmail", "@yahoo", "@ibm"];

            for (let i = 0; i < mails.length; i++) {
                const mail = mails[i];
                if (email.includes(mail)) {
                    mailCount++;
                }
            }

            if (mailCount === 0) {
                validationErrors.errEmail = "Email should include 1 mail type address"
            }

            if (mailCount > 1) {
                validationErrors.errEmail = "Email should include only 1 mail type address"
            }
        }

        if (mobile) {
            if (mobile?.length !== 10) {
                validationErrors.errMobile = "Mobile number should have exactly 10 digit"
            } else {
                for (let i = 0; i < mobile.length; i++) {
                    const element = mobile[i]
                    if (isNaN(element)) {
                        validationErrors.errMobile = "Please enter numeric values"
                    }
                }
            }
        }
        return validationErrors
    }

    const handleSignupButton = () => {
        setError()
        const validationErrors = validateCredentials()
        if (Object.keys(validationErrors)?.length > 0) {
            console.log(validationErrors);
            setError(validationErrors)
            return
        }
        signup(credentials)
    }

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
                    <div>{auth && auth?.authError && <Error msg={auth?.authError} />}
                    </div>
                    <div className="input-name">
                        <label htmlFor="" className="fontLabel">Your Name</label>
                        <br />
                        <input type="text" id="" className="inputCredential fontInput" name="username" placeholder="first and last name" onChange={handleChange} />
                        {error?.errUsername && <Error msg={error?.errUsername} />}
                    </div>

                    <div className="input-mobile">
                        <label htmlFor="" className="fontLabel">Mobile</label>
                        <br />
                        <input type="text" id="" className="inputCredential fontInput" name="mobile" placeholder="Enter mobile" onChange={handleChange} />
                        {error?.errMobile && <Error msg={error?.errMobile} />}
                    </div>

                    <div className="input-email">
                        <label htmlFor="" className="fontLabel">Email</label>
                        <br />
                        <input type="text" id="" className="inputCredential fontInput" name="email" placeholder="Enter Email" onChange={handleChange} />
                        {error?.errEmail && <Error msg={error?.errEmail} />}
                    </div>

                    <div className="input-password">
                        <label htmlFor="" className="fontLabel">Create Password</label>
                        <br />
                        <input type="text" id="" className="inputCredential fontInput" name="password" placeholder="8+ characters" onChange={handleChange} />
                        {error?.errPassword && <Error msg={error?.errPassword} />}
                    </div>


                    <div className="terms-conditions">
                        {error?.errCheckTerms && <Error msg={error?.errCheckTerms} />}
                        <p className="fontTerms"><input type="checkbox" name="" id="" onChange={handleTermsCheck} />Creating an account means you’re okay with our <a href="">Terms of Service, Privacy Policy</a> .</p>
                    </div>

                    <div className="btn-signup-wrapper"> <button id="btn-signup" onClick={handleSignupButton}>Sign Up</button> </div>

                    <div className="haveAccount">Already have an account? <Link to={loginPath}>Log in</Link> </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    </>
}

export default Signup
