/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { BASE_URL, token } from "../../../config.js";
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader.js"

const Profile = ({user}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    photo: null,
    gender: "",
    bloodType:"",
  });
  const navigate = useNavigate();
  
  useEffect(() => {
   setFormData({name:user.name,email:user.email,photo:user.photo,gender:user.gender,bloodType:user.bloodType})
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    // later we will use cloudinary image
    const data = await uploadImageToCloudinary(file);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
    console.log(data);
  };


  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/users/profile/me");
    } catch (error) {
      toast.error("YOU Must Have TO Fill ALL The Field Properly ");
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
          <form onSubmit={submitHandler}>
              <div className="mb-5 mt-5">
                <input
                  type="text"
                  placeholder="Enter Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
    focus:border-b text-[22px] leading-7 text-headingColor
     placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 mt-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
    focus:border-b text-[22px] leading-7 text-headingColor
     placeholder:text-textColor rounded-md cursor-pointer"
                  aria-readonly
                  readOnly
                />
              </div>
      
              <div className="mb-5 mt-5">
                <input
                  type="password"
                  placeholder="Enter Your password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
    focus:border-b text-[22px] leading-7 text-headingColor
     placeholder:text-textColor rounded-md cursor-pointer"
             
                />
              </div>
              <div className="mb-5 mt-5">
                <input
                  type="text"
                  placeholder="Blood Type"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
    focus:border-b text-[22px] leading-7 text-headingColor
     placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
           

                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Gender:
                  <select
                    value={formData.gender}
                    onChange={handleInputChange}
                    name="gender"
                    id=""
                    className="text-textColor font-semibold text-[16px]  leading-7 px-4 py-3 focus:outline-none"
                  >
                     <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="mb-5 flex items-center gap-3">
                {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={formData.photo} alt="" className="w-full rounded-full" />
                </figure>}
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".jpg,.png"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                   {selectedFile ? "Uploaded" :"Upload Photo"}
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                disabled={loading && true }
                  type="submit"
                  className="w-full bg-primaryColor text-white btn rounded-lg"
                >
                  {loading ? <HashLoader size={25} color="#ffffff" /> :"Update"}
                </button>
              </div>
          
            </form>

    </div>
  )
}

export default Profile