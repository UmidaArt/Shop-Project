import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCatalog} from "./redux/slices/catalogSlice";
import {data} from "./data";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCatalog(data))
    },[dispatch])

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
