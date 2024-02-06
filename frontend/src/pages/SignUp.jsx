import { useState } from "react";
import signupimg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config.js";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader.js"
const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    // later we will use cloudinary image
    const data = await uploadImageToCloudinary(file);
    setPreviewUrl(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
    console.log(data);
  };


  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (error) {
      toast.error("YOU Must Have TO Fill ALL The Field Properly");
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-lg">
            <figure className="rounded-l-lg">
              <img src={signupimg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create ! an <span className="text-primaryColor"> Account</span>
            </h3>
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
                  required
                />
              </div>
              <div className="mb-5 mt-5">
                <input
                  type="number"
                  placeholder="Enter Your phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
    focus:border-b text-[22px] leading-7 text-headingColor
     placeholder:text-textColor rounded-md cursor-pointer"
                  required
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
                  required
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Are you A :
                  <select
                    value={formData.role}
                    onChange={handleInputChange}
                    name="role"
                    id=""
                    className="text-textColor font-semibold text-[16px]  leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="select">Select</option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

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
                {selectedFile && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={previewUrl} alt="" className="w-full rounded-full" />
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
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                disabled={loading && true }
                  type="submit"
                  className="w-full bg-primaryColor text-white btn rounded-lg"
                >
                  {loading ? <HashLoader size={35} color="#ffffff" /> :"Sign Up"}
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Have an account ?{" "}
                <Link to="/login" className="text-primaryColor font-medium">
                  {" "}
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

// <div className="w-full max-w-[570px]  mx-auto rounded-lg shadow-md md:p-10">
// <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
//  Hello ! <span className="text-primaryColor"> Welcome</span> Back
// </h3>
// <form action="" className="py-4 md:py-0">
// <div className="mb-5 mt-5">
//    <input type="text"
//    placeholder='Enter Your name' name='name'
//    value={formData.name}
//    onChange={handleInputChange}
//     className='w-full px-4 py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none
//     focus:border-b text-[22px] leading-7 text-headingColor
//      placeholder:text-textColor rounded-md cursor-pointer'
//      required
//    />
//  </div>

//  <div className="mb-5 mt-5">
//    <input type="email"
//    placeholder='Enter Your Email' name='email'
//    value={formData.email}
//    onChange={handleInputChange}
//     className='w-full px-4 py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none
//     focus:border-b text-[22px] leading-7 text-headingColor
//      placeholder:text-textColor rounded-md cursor-pointer'
//      required
//    />
//  </div>
//  <div className="mb-5 mt-5">
//    <input type="number"
//    placeholder='Enter Your phone' name='phone'
//    value={formData.phone}
//    onChange={handleInputChange}
//     className='w-full px-4 py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none
//     focus:border-b text-[22px] leading-7 text-headingColor
//      placeholder:text-textColor rounded-md cursor-pointer'
//      required
//    />
//  </div>
//  <div className="mb-5 mt-5">
//    <input type="password"
//    placeholder='Enter Your password' name='password'
//    value={formData.password}
//    onChange={handleInputChange}
//     className='w-full px-4 py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none
//     focus:border-b text-[22px] leading-7 text-headingColor
//      placeholder:text-textColor rounded-md cursor-pointer'
//      required
//    />
//  </div>

//  <div className="mt-7">
//    <button type='submit' className='w-full bg-primaryColor text-white btn rounded-lg' >Login</button>
//  </div>
//  <p className="mt-5 text-textColor text-center">
//     Have an account ? <Link to='/login' className="text-primaryColor font-medium"> Login</Link>
//  </p>
// </form>
// </div>
