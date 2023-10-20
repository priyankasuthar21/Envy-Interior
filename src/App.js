
import './index.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import ProductCart from './Pages/ProductCart';
import NotFound from './Pages/NotFound';
import { BrowserRouter as
  Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Blog from './Pages/Blog';
import Cart from './Components/Cart';
import WishList from './Components/WishList'
import CheckOut from './Pages/CheckOut';
import ProductPage from './Pages/ProductPage';
function App() {
  return (
  <>
  <Router >
    <Routes>    
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/gallery"  element = {<Gallery />} />
        <Route path="/services"  element = {<Services />} />
        <Route path="/contact"  element = {<Contact />} />
        <Route path="/login" element = {<Login />}></Route>
        <Route path="/dashboard" element = {<Dashboard />}></Route>
        <Route path='/product_cart' element = {<ProductCart />} ></Route>
        <Route path='*' element= {<NotFound />} ></Route>
        <Route path= '/blog/:id' element = {<Blog />} ></Route>   
        <Route path='/cart' element ={<Cart />}></Route> 
        <Route path='/wishlist' element = {<WishList />}></Route>   
        <Route path='/checkout' element = {<CheckOut />}></Route>
        <Route path='/productpage' element = {<ProductPage />}></Route>

    </Routes>
  </Router>
  </>
  )
}






export default App;
