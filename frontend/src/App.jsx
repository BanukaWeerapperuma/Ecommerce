import { BrowserRouter, Routes , Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/product/Product";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
     <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/mens" element={<Category/>}/>
       <Route path="/womens" element={<Category/>}/>
       <Route path="/kids" element={<Category/>}/>
       <Route path="/product" element={<Product/>}>
             <Route path=":prouctId" element={<Product/>}/>
       </Route>
       <Route path="/cart-page" element={<Cart/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </main>
  )
}