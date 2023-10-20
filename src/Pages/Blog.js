import React from 'react'
import Navbar from '../Components/Navbar'
// import { useParams } from 'react-router-dom'
// import { useState } from 'react'
// import { Blogs } from '../data/blogs'
const Blog = () => {

// const[blog, setBlogs] = useState(null)
// const {id} =useParams("page");


// useEffect(
//    () => {   
//     console.log(id)
//     console.log(blog)
//       setBlogs(
//         Blogs.filter(
//           (d, i) => {
//             return d.id === id;
//           }
//         )
//       )
//   },[]
// )


  return (
  
<>
  <Navbar />
    <div className=' grid grid-cols-4 gap-4 shadow-md w-[80%] mx-auto'>
      {/* {blog !== null 
      ?
      <>
        {blog.length > 0 
        ?      
        <img src = {blog[0].img} alt='' />
        :
        "blog not found"
        }
     
      </> 
      : 
      "Not Found" 
    } */}

    </div>
  </>
    
  )
}

export default Blog