import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
import Anouncement from "./components/Anouncement";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
    <Anouncement/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="signin" element={<Signin/>}/>
      <Route path="signup" element={<Signup/>}/>
    </Routes>
    </>
  )
};

export default App;