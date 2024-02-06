import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import {RiLinkedinFill} from "react-icons/ri"
import {AiFillYoutube,AiFillGithub,AiFillInstagram} from "react-icons/ai"

const socialLinks = [
  {
    path:"https://github.com/FoysalAhammed",
    icon:<AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path:"https://github.com/FoysalAhammed",
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path:"https://github.com/FoysalAhammed",
    icon:<AiFillInstagram className='group-hover:text-white w-4 h-5' />
  },
]
const quickLinkstwo = [
  {
    path:"/home",
    display:"home"
  },
  {
    path:"/",
    display:"about us"
  },
  {
    path:"/services",
    display:"services"
  },
  {
    path:"/",
    display:"Blog"
  },

]
const quickLinksthree = [
  {
    path:"/find-a-doctor",
    display:"Find A doctor"
  },
  {
    path:"/",
    display:"Request An Appointment"
  },
  {
    path:"/",
    display:"Get Location"
  },
  {
    path:"/",
    display:"Get Oppinion"
  },

]
const quickLinksfour = [
  {
    path:"/",
    display:"Donate"
  },
  {
    path:"/",
    display:"contact us"
  },
  
]
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo}  alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-5">
              Copyright @ {year} developed by Foysal Ahammed ALl Rights Reserved!.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {
                socialLinks.map((link,index)=>(
                  <Link to={link.path} key={index} 
                   className='w-9 h-9 border-solid border border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                  >
                   {link.icon}
                  </Link>
                ))
              }
            </div>
          </div>
  <div>
    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
      Quick Links
    </h2>

  <ul>
    {
      quickLinkstwo.map((item,index) => (
        <li className="mb-4" key={index}>
          <Link 
           path={item.path}
           className='text-[16px] leading-7 font-[400] text-headingColor'
          >
           {item.display}
          </Link>
        </li>
      ))
    }
  </ul>
  </div>


  <div>
    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
      I Want to:
    </h2>

  <ul>
    {
      quickLinksthree.map((item,index) => (
        <li className="mb-4" key={index}>
          <Link 
           path={item.path}
           className='text-[16px] leading-7 font-[400] text-headingColor'
          >
           {item.display}
          </Link>
        </li>
      ))
    }
  </ul>
  </div>
  <div>
    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
     Support
    </h2>

  <ul>
    {
      quickLinksfour.map((item,index) => (
        <li className="mb-4" key={index}>
          <Link 
           path={item.path}
           className='text-[16px] leading-7 font-[400] text-headingColor'
          >
           {item.display}
          </Link>
        </li>
      ))
    }
  </ul>
  </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer