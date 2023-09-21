import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Skeleton from "./components/Skeleton";
import Home from "./pages/Home";
import Signup from "./components/AuthPages/Signup";
import Login from "./components/AuthPages/Login";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/Products/ProductList";
import SingleProduct from "./components/Products/SingleProduct";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";
import BuyProduct from "./pages/BuyProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthState from "./components/Context/AuthState";
import CategoryState from "./components/Context/CategoryState";
import CartState from "./components/Context/CartState";
import ProductState from "./components/Context/ProductState";

function App() {
  return (
    <AuthState>
      <ProductState>
        <CategoryState>
          <CartState>
            <div className="App">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Skeleton />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="products" element={<Products />}>
                      <Route path="productList" element={<ProductList />} />
                      <Route path=":productId" element={<SingleProduct />} />
                      <Route path="buyProduct" element={<BuyProduct />} />
                    </Route>
                    <Route path="cart" element={<Cart />} />
                    <Route path="Profile" element={<Profile />} />
                    <Route path="Orders" element={<Orders />} />
                  </Route>
                  <Route path="login" element={<Login />}></Route>
                  <Route path="signup" element={<Signup />}></Route>
                  <Route path="Admin" element={<Admin />}></Route>
                </Routes>
              </BrowserRouter>
            </div>
          </CartState>
        </CategoryState>
      </ProductState>
    </AuthState>
  );
}

export default App;
