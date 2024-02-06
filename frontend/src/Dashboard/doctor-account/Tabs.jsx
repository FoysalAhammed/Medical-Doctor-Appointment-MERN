/* eslint-disable react/prop-types */
import {useContext} from 'react'
import {BiMenu} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext'

const Tabs = ({tab,setTab}) => {
  const {dispatch} = useContext(authContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
    navigate("/")
  }
  return (
    <div><span className="hidden">
      <BiMenu className='w-6 h-6 cursor-pointer' />
    </span>
      <div className=" flex lg:flex flex-col p-[30px] bg-white shadow-pannelShadhow items-center h-max rounded-md">
        <button className={`${tab === "overview" ? "bg-indigo-100 text-primaryColor" :"bg-transparent text-headingColor"} w-full btn mt-0 rounded-md `} onClick={() =>setTab("overview")}>overview</button>
        <button className={`${tab === "appointments" ? "bg-indigo-100 text-primaryColor" :"bg-transparent text-headingColor"} w-full btn mt-0 rounded-md `} onClick={() =>setTab("appointments")}>Appintments</button>
        <button className={`${tab === "settings" ? "bg-indigo-100 text-primaryColor" :"bg-transparent text-headingColor"} w-full btn mt-0 rounded-md `} onClick={() =>setTab("settings")} >Profile</button>
        <div className=" mt-[40px] md:mt-[100px] lg:mt-[100px] xl:mt-[100px] w-full ">
                  <button
                    onClick={handleLogout}
                    className="w-full bg-purple-600 p-3 text-[16px] leading-7 rounded-md text-white "
                  >
                    Logout
                  </button>
                  <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white hover:">
                    Delete Account
                  </button>
                </div>
      </div>
    </div>
  )
}

export default Tabs