
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Login = () => {
   
const navigate = useNavigate();

  return (
    <>
    
        <Navbar />
        <h1 className='text-center text-xl font-semibold mt-5'>Hello Welcome Back!</h1>
        <div className='w-[400px] mx-auto border mt-5 rounded-lg bg-[#C8DBD7] px-5 py-8 '> 
            <form className='w-[350px] mx-auto ' onSubmit={() => navigate("/")}>
            <div className='w-[100%] mx-auto mt-4'>
                <label className='font-bold'>Email</label> <br />
                <input className='w-[100%] shadow p-2 mt-2 rounded-md focus:outline-none' placeholder='Enter email' type='text' ></input>
            </div>
            <div className='w-[100%] mx-auto mt-4'>
                <label className='font-bold'>Password</label> <br />
                <input className='w-[100%] shadow p-2 mt-2 rounded-md focus:outline-none' placeholder='Enter password' type='password'  ></input>
            </div>   
            <div className="bg-[#3C5556] text-center text-white mt-5 rounded-md px-5 py-2 w-[100%]">
                <Link to="/dashboard">Login</Link> 
                           
            </div>
            
            {/* <button className='bg-[#3C5556] text-white mt-5 rounded-md px-5 py-2 w-[100%]'>Login</button> */}
           
         </form>
        </div>
    </>
    )
    }
 


export default Login
