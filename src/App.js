
import './index.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import ProductCart from './Pages/ProductCart';
import NotFound from './Pages/NotFound';
import CartPage from './Pages/CartPage';
import {
  BrowserRouter as
    Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from './Admin/Components/Dashboard';
import Blog from './Pages/Blog';
import WishListPage from './Pages/WishListPage';
import CheckOut from './Pages/CheckOut';
import ProductPage from './Pages/ProductPage';
import AddCategory from './Admin/Pages/Category/AddCategory'
import ViewCategory from './Admin/Pages/Category/ViewCategory'
import AdminPanel from './Admin/Pages/AdminPanel';
import AddProducts from './Admin/Pages/Products/AddProducts';
import ViewProducts from './Admin/Pages/Products/ViewProducts';
import ContextHolder from './Admin/Context/ContextHolder';
function App() {
  return (
    <ContextHolder>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path='/product_cart' element={<ProductCart />} ></Route>
          <Route path='*' element={<NotFound />} ></Route>
          <Route path='/blog/:id' element={<Blog />} ></Route>
          <Route path='/cartpage' element={<CartPage />}></Route>
          <Route path='/wishlistpage' element={<WishListPage />}></Route>
          <Route path='/checkout' element={<CheckOut />}></Route>
          <Route path='/productpage' element={<ProductPage />}></Route>
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>   
              <Route path="category/add" element={<AddCategory />} />
              <Route path="category" element={<ViewCategory />} />
              <Route path="products" element={<ViewProducts />} />
              <Route path="products/add" element={<AddProducts />} />
          </Route>
        </Routes>
      </Router>
    </ContextHolder>
  )
}






export default App;
