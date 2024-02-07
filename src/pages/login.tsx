import { Link } from 'react-router-dom';
import loginImg from '../assets/Images/login.jpg.png'
import { BiHide } from "react-icons/bi";


export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen w-full bg-regal-gray">
      
      <div className='bg-regal-gray flex flex-col justify-center W-[1440px] h-[900px] top-[-425px] left-[-5521px]'>
        <form className='max-w-[486px] w-full mx-auto bg-regal-white p-10 px-10 rounded-xl h-[576.22px] top-[161.89px] left-[123px] border-[1px]'>
          <h2 className='text-3xl  font-bold text-center  ' >Welcome Back</h2>
          <br />
          <h4 className='text-sm  font-medium text-center'>By logging into ALDTAN, you agree to our <br /> Terms of use and Policy.</h4>
          <div className='flex flex-col text-gray-500 py-2'>
            <span>Phone Number</span>
            <input className='rounded-lg bg-slate-200 mt-2 p-2 focus:border-blue-200 focus:bg-gray-100 focus:outline-none' type="phone number" />
            
          </div>
          <div className='flex flex-col text-gray-500 py-2 BiHide'>
            <span>Password</span>
            <BiHide  />
            <input className='rounded-lg bg-slate-200 mt-2 p-2 focus:border-blue-200 focus:bg-gray-100 focus:outline-none' type="password"  />
            
          </div>
          
          <button className='w-full my-5 py-3 bg-regal-red shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold   rounded-sm '>LOGIN</button>
          <div className='text-center'>
            <span className='text-stone-400 font-medium'>Don't have an account? </span>
            <span className='m-4 text-red-600 font-medium'>
              <Link to ='/Register'>Sign up</Link>
              </span>
            <br />
            <span className=' text-red-600 font-medium'>Forgot Password?</span>
          </div>
        </form>
        </div>

         <div className='hidden sm:block '>
         <img className='p-4 w-full  object-cover rounded-xl' src={loginImg} alt="ALDTAN" />
        </div>
      
    </div>
  )
}
