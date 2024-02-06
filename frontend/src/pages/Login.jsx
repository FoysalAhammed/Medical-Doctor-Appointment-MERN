import  { useState,useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config.js";
import { authContext } from '../context/AuthContext.jsx';
import HashLoader from 'react-spinners/HashLoader.js';
authContext
authContext
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData,setFormData] =useState({
    email:"",
    password:"",
  })
   const {dispatch}  = useContext(authContext)
  const handleInputChange= (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const navigate = useNavigate();
  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result= await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
    dispatch({
      type:"LOGIN_SUCCESS",
      payload:{
        user:result.data,
        token:result.token,
        role:result.role,
      }
    }
    )
    console.log(result,"Login Data")

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="w-full max-w-[570px]  mx-auto rounded-lg shadow-md md:p-10">
         <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello ! <span className="text-primaryColor"> Welcome</span> Back
         </h3>
         <form onSubmit={submitHandler} className="py-4 md:py-0">
          <div className="mb-5">
            <input type="email" 
            placeholder='Enter Your Email' name='email' 
            value={formData.email} 
            onChange={handleInputChange} 
             className='w-full px-4 py3 border-b border-solid border-[#0066ff61] focus:outline-none 
             focus:border-b text-[22px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer'
              required
            />
          </div>
          <div className="mb-5">
            <input type="password" 
            placeholder='Enter Your password' name='password' 
            value={formData.password} 
            onChange={handleInputChange} 
             className='w-full px-4 py3 border-b border-solid border-[#0066ff61] focus:outline-none 
             focus:border-b text-[22px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer'
              required
            />
          </div>

        

          <div className="mt-7">
            <button type='submit' className='w-full bg-primaryColor text-white btn rounded-lg' >{loading ? <HashLoader size={35} color="#ffffff" /> :"Login"}</button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Donet Have an account ? <Link to='/register' className="text-primaryColor font-medium"> Register</Link>
          </p>
         </form>
      </div>
    </section>
  )
}

export default Login