import './App.css';
import Navjar from "./components/Navjar.js"
import Home from "./components/Home.js";
import Product from "./components/Product.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Cart from "./components/Cart.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';

function App() {
  return (
      <BrowserRouter> 
      <Navjar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/productpage" element={<ProductPage />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
