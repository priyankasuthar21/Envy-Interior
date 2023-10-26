import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import ProductCart from "./Pages/ProductCart";
import NotFound from "./Pages/NotFound";
import CartPage from "./Pages/CartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Admin/Dashboard";
import Blog from "./Pages/Blog";
import WishListPage from "./Pages/WishListPage";
import CheckOut from "./Pages/CheckOut";
import ProductPage from "./Pages/ProductPage";
import AddCategory from "./Pages/Admin/Category/Add/AddCategory";
import ViewCategory from "./Pages/Admin/Category/View/ViewCategory";
import AdminCategory from "./Pages/Admin/Category/AdminCategory";

// import Admin from './Admin/Admin';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/product_cart" element={<ProductCart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/cartpage" element={<CartPage />}></Route>
          <Route path="/wishlistpage" element={<WishListPage />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
          <Route path="/productpage" element={<ProductPage />}></Route>

          <Route path="/admin" element={<Dashboard />}>
            <Route path="category" element={<AdminCategory />}>
              <Route path="add" element={<AddCategory />} />
              <Route path="view" element={<ViewCategory />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
