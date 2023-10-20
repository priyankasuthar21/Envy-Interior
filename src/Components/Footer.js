
import { Link } from "react-router-dom";
import logo from './../images/Logo.png'
function Footer() {
  return (
    <>
      <footer className="border border-t-2 shadow-inner">
        <div className="grid grid-cols-5 gap-4 py-10">
            <div>
                <Link to ="/" >
                    <img src= {logo} alt=""/>
                </Link>
            </div>
            <div>
                <h3 className="mb-2 text-xl font-semibold">Menu</h3>
                <ul className="flex flex-col gap-2">
                    <Link to= {"/"}>Home</Link> 
                    <Link to= {"/"}>About</Link> 
                    <Link to= {"/"}>Gallery</Link> 
                    <Link to= {"/"}>Contact Us</Link>  
                    <Link to= {"/checkout"}>Checkout</Link>   
                    <Link to= {"/productpage"}>Product Page</Link>                   
                </ul>
            </div>
            <div>
                <h3 className="mb-2 text-xl font-semibold">Category</h3>
                <ul className="flex flex-col gap-2">
                    <Link to= {"/"}>Interior Designs</Link> 
                    <Link to= {"/"}>Exterior Designs</Link> 
                    <Link to= {"/"}>Outdoor Designs </Link> 
                    <Link to= {"/"}>Kitchen Decor</Link>     
                    <Link to= {"/"}>Office Decore</Link>                
                    <Link to= {"/"}>Wall Decore </Link> 
                </ul>
            </div>
           
            <div>
                <h3 className="mb-2 text-xl font-semibold">Our Products</h3>
                <ul className="flex flex-col gap-2 ">
                    <Link to= {"/"}>Soffas & Chairs</Link> 
                    <Link to= {"/"}>Tables & Beds</Link> 
                    <Link to= {"/"}>Lighting</Link> 
                    <Link to= {"/"}>Showcases</Link>  
                    <Link to= {"/"}>Wardrobs</Link>     
                </ul>
            </div>
            <div>
                <h3 className="mb-2 text-xl font-semibold">Services</h3>
                <ul className="flex flex-col gap-2">
                    <Link to= {"/"}>Custom Products</Link> 
                    <Link to= {"/"}>Available Products</Link> 
                    <Link to= {"/"}>Customer Care</Link> 
                    <Link to= {"/"}>24/7 Service</Link>     
                </ul>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;