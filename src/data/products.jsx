import Image from "../Components/ImageComp"
import product1 from './../images/product1.jpg'
import product2 from './../images/product2.jpg'
import product3 from './../images/product3.jpg'
import product4 from './../images/product4.jpg'
import product5 from './../images/product5.jpg'
import product6 from'./../images/product6.jpg'
import product7 from './../images/product7.jpg'
import product8 from './../images/product8.jpg'

export const home_products = [
    {   
        id: 1,     
        thumbnail: <Image img = {product1}/>,
        title: <h1 className="text-xl">Wooden Craft</h1>,
        desc: "Your choice is our first and foremost priority ",
        price: 30000,
    },
    {
        id: 2,
        thumbnail: <Image img = {product2}/>,
        title: <h1 className="text-xl">Wooden Craft</h1>,
        desc: "Your choice is our first and foremost priority ",
        price: 10000,

    },
    {
        id: 3,
        thumbnail: <Image img = {product3}/>,
        title: <h1 className="text-xl">Wooden Craft</h1>,
        desc: "Your choice is our first and foremost priority ",
        price: 60000, 
    },
    {   id: 4,
        thumbnail: <Image img = {product4}/>,
        title: <h1 className="text-xl">Wooden Craft</h1>,
        desc: "Your choice is our first and foremost priority ",
        price: 20000
    },
    {
        id: 5,
        thumbnail: <Image img = {product5}/>,
        title: <h1 className="text-xl">Wooden Craft</h1>,
        desc: "Your choice is our first and foremost priority ",
        price: 150000   
    },
    {
        id: 6,
        thumbnail: <Image img = {product6}/>,
        title: <h1 className="text-xl">Wooden Craft</h1>,
        desc: "Your choice is our first and foremost priority ",
        price: 80000  
    },
    {
        id: 7,
        thumbnail: <Image img = {product7}/>,
        title: <h1 className="text-xl">Wooden Craft</h1>,
        desc: "Your choice is our first and foremost priority ",
        price: 25000 
    },
    {
        id: 8,
        thumbnail: <Image img = {product8} />,
        title: <h1 className="text-xl">Wooden Craft</h1>,
       desc: "Your choice is our first and foremost priority ",
        price:  12000
    }

]