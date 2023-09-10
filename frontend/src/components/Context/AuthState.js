import AuthContext from "./AuthContext";
import { useState } from "react";
import axios from "axios";

function AuthState(props) {
  const state = {
    isLoggedIn: false,
    token: null,
    authError: null,
    userData: null,
  };

  const [auth, setAuth] = useState(state);

  const logIn = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        credentials
      );
      console.log(response);
      const { token, userInfo } = response.data;
      console.log(userInfo);
      localStorage.setItem("token", token);
      setAuth((prev) => ({
        ...prev,
        isLoggedIn: true,
        token,
        userData:userInfo,
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const signup = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/signup",
        credentials
      );
      console.log(response);
    } catch (error) {
      if (error?.response?.data?.message) {
        const { message } = error?.response?.data;
        console.log(message);
        setAuth((prev) => ({ ...prev, authError: message }));
      }
      console.log(error);
    }
  };

  const logOut = () => {
    console.log("logout triggered");
    setAuth({
      isLoggedIn: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, logIn, signup, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
