/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
import {AiOutlineDelete} from "react-icons/ai"
import uploadImageToCloudinary from "./../../utils/uploadCloudinary"
import {BASE_URL,token} from "../../../config"
import {toast} from "react-toastify"
const Profile = ({doctorData}) => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        gender:'',
        bio:'',
        specialization:'',
        ticketPrice:0,
        qualifications:[],
        experiences:[],
        timeSlots:[],
        about:"",
        photo:null,

    })
    useEffect(() => {
      setFormData({
        name:doctorData?.name,
        email:doctorData?.email,
        phone:doctorData?.phone,
        gender:doctorData?.gender,
        bio:doctorData?.bio,
        specialization:doctorData?.specialization,
        ticketPrice:doctorData?.ticketPrice,
        qualifications:doctorData?.qualifications,
        experiences:doctorData?.experiences,
        timeSlots:doctorData?.timeSlots,
        about:doctorData?.about,
        photo:doctorData?.photo,

      })
    }, [doctorData]);
    const handleInputChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleFileInputChange = async event => {
     const file = event.target.files[0];
     const data = await uploadImageToCloudinary(file);
     setFormData({...formData,photo:data?.url});

    }
    const updateProfileHandler = async e =>{
      e.preventDefault() 
      try {
        const res = await fetch (`${BASE_URL}/doctors/${doctorData._id}`,{
          method: 'PUT',
          headers: {"content-type":"application/json",
          Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(formData)
        })
        const result = await res.json()
        if (!res.ok) {
          throw Error(result.message)
        }
        toast.success(result.message)
      } catch (err) {
        toast.error(err.message)
      }
    }
    const addItem = (key,item)=>{
      setFormData(prevformData=>({...prevformData,[key]:[...prevformData[key],item]}));
    }

    const handleReusableInputChangeFunc = (key,index,event) =>{
      const {name,value} = event.target
      setFormData(prevformData => {
        const updateItems = [...prevformData[key]];
        updateItems[index][name] = value;
        return{
          ...prevformData,
          [key]:updateItems,
        }
      })
      
    }
    const deleteItem =(key,index)=>{
      setFormData(prevformData =>( {
        ...prevformData,
        [key]:prevformData[key].filter((_, i) => i !== index)

      }))
    }
    const addQualification = e => {
      e.preventDefault();
      addItem("qualifications",{
        startingDate:"",
        endDate:"",
        degree:"PHD",
        university:"DMC",
      });
    }

    const handleQualificationChange=(event,index)=>{
      handleReusableInputChangeFunc('qualifications',index,event);
    }
    const deleteQualification = (e,index) =>{
      e.preventDefault();
      deleteItem("qualifications",index)
    }
    const addExperience = e => {
      e.preventDefault();
      addItem("experiences",{
        startingDate:"",endDate:"",position:"Senior Surgeon",hospital:"BSMMU",
      });
    }

    const handleExperienceChange=(event,index)=>{
      handleReusableInputChangeFunc('experiences',index,event);
    }
    const deleteExperience = (e,index) =>{
      e.preventDefault();
      deleteItem("experiences",index)
    }
    const addTimeSlot= e => {
      e.preventDefault();
      addItem("timeSlots",{
        day:"sunday",startingTime:"04:30",endingTime:"10:30",
      });
    }

    const handleTimeSlotChange=(event,index)=>{
      handleReusableInputChangeFunc('timeSlots',index,event);
    }
    const deleteTimeSlot = (e,index) =>{
      e.preventDefault();
      deleteItem("timeSlots",index)
    }
  return (
    <div>
      <h2 className=" text-headingColor font-bold text-[24px] leading-9 mb-10 "> Profile Information</h2>
      <form>
       <div className="mb-5">
       <p className="form_label">Name*</p>
       <input type="text" name='name' value={formData.name} onChange={handleInputChange} placeholder='Full Name' className='form_input'/>
       </div>

       <div className="mb-5">
       <p className="form_label">Email*</p>
       <input type="text" name='email' disabled="true" readOnly aria-readonly value={formData.email} onChange={handleInputChange} placeholder='Email Address' className='form_input'/>
       </div>

       <div className="mb-5">
       <p className="form_label">Phone*</p>
       <input type="number" name='phone'  value={formData.phone} onChange={handleInputChange} placeholder='Phone Number' className='form_input'/>
       </div>

       <div className="mb-5">
       <p className="form_label">Bio*</p>
       <input type="text" name='bio'  value={formData.bio} onChange={handleInputChange} placeholder='Bio ' className='form_input'/>
       </div>

        <div className="mb-5">
          <div className="grid xl:grid-cols-3 md:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-3  gap-5 mb-[30px]">
            <div>
              <p className="form_label">Gender*</p>
              <select name="gender" value={formData.gender}  id="" onChange={handleInputChange} className='form_input py-3.5' >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>

              </select>
            </div>
            <div>
              <p className="form_label">Specialization*</p>
              <select name="specialization" value={formData.specialization}  id="" onChange={handleInputChange} className='form_input py-3.5' >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="pediatric">Pediatric</option>
                <option value="medicine">Medicine</option>
                <option value="gynocologist">Gynocologist</option>
                <option value="Orthopedic">orthopedic</option>

              </select>
            </div>
            <div>
              <p className="form_label">Ticket Price</p>
              <input type="number" placeholder='500' name='ticketPrice' onChange={handleInputChange} value={formData.ticketPrice} className='form_input' />

            </div>
          </div>
        </div>

     
  <div className="mb-5">
    <p className="fomr_label mb-2">Qualifications*</p>
    {formData?.qualifications?.map((item,index) => <div key={index}>
        <div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="form_label">Starting Date*</p>
              <input type="date" onChange={e => handleQualificationChange(e,index)} name='startingDate' value={item.startingDate} className='form_input' />
            </div>
            <div>
              <p className="form_label">Ending Date*</p>
              <input type="date" name='endDate' onChange={e => handleQualificationChange(e,index)} value={item.endDate} className='form_input' />
            </div>
          </div>
          <div className="grid mt-5 grid-cols-2 gap-5">
            <div>
              <p className="form_label">Degree*</p>
              <input type="text" name='degree' onChange={e => handleQualificationChange(e,index)} value={item.degree} className='form_input' />
            </div>
            <div>
              <p className="form_label">University*</p>
              <input type="text" name='university' onChange={e => handleQualificationChange(e,index)} value={item.university} className='form_input' />
            </div>
          </div>
        
          <button className=" bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer" onClick={e => deleteQualification(e,index)}><AiOutlineDelete/></button>

        </div>

    </div> )}
    <button className="bg-[#000] py-2 px-3 rounded text-white h-fit cursor-pointer" onClick={addQualification}>Add Qualification</button>
  </div>
              

  <div className="mb-5">
    <p className="fomr_label mb-2">Experiences*</p>
    {formData.experiences?.map((item,index) => <div key={index}>
        <div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="form_label">Starting Date*</p>
              <input type="date" onChange={e => handleExperienceChange(e,index)} name='startingDate' value={item.startingDate} className='form_input' />
            </div>
            <div>
              <p className="form_label">Ending Date*</p>
              <input type="date" name='endDate' onChange={e => handleExperienceChange(e,index)} value={item.endDate} className='form_input' />
            </div>
          </div>
          <div className="grid mt-5 grid-cols-2 gap-5">
            <div>
              <p className="form_label">Position*</p>
              <input type="text" name='position' onChange={e => handleExperienceChange(e,index)} value={item.position} className='form_input' />
            </div>
            <div>
              <p className="form_label">Hospital*</p>
              <input type="text" name='hospital' onChange={e => handleExperienceChange(e,index)} value={item.hospital} className='form_input' />
            </div>
          </div>
        
          <button className=" bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer" onClick={e=> deleteExperience(e,index)} ><AiOutlineDelete/></button>

        </div>

    </div> )}
    <button className="bg-[#000] py-2 px-3 rounded text-white h-fit cursor-pointer" onClick={addExperience}>Add Experiences</button>
  </div>

  <div className="mb-5">
    <p className="fomr_label mb-2">Time Slots*</p>
    {formData.timeSlots?.map((item,index) => <div key={index}>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
            <div>
              <p className="form_label">Day*</p>
              <select name="day" value={item.day} className="form_input py-3.5" onChange={e => handleTimeSlotChange(e,index)} >
              <option value="select">Select</option>
              <option value="sataruday">Sataruday</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              </select>
            </div>
            <div>
              <p className="form_label">Starting Time*</p>
              <input  onChange={e => handleTimeSlotChange(e,index)} type="time" name='startingTime' value={item.startingTime} className='form_input' />
            </div>
            <div>
              <p className="form_label">Ending Time*</p>
              <input  onChange={e => handleTimeSlotChange(e,index)} type="time" name='endingTime' value={item.endingTime} className='form_input' />
            </div>
            <div className='flex items-center'>
            <button className=" bg-red-600 p-2 rounded-full text-white text-[18px] mt-9 cursor-pointer" onClick={e => deleteTimeSlot(e,index)}><AiOutlineDelete/></button>
            </div>
          </div>
        </div>
    </div> 
    )}
    <button className="bg-[#000] py-2 px-3 rounded text-white h-fit cursor-pointer" onClick={addTimeSlot}>Add Time Slots</button>
  </div>
      <div className="mb-5">
        <p className="form_lebel">About*</p>
        <textarea name="about" id="" value={formData?.about} onChange={handleInputChange} placeholder='write about you' className='form_input' rows={5} ></textarea>
      </div>
      <div className="mb-5 flex items-center gap-3">
      {formData?.photo && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={formData?.photo}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                )}
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
        <button type='submit' onClick={updateProfileHandler} className=' bg-primaryColor rounded-lg text-white text-[18px] leading-[30px] w-full py-3 px-4'>Update Profile</button>
      </div>
      </form>
    </div>
  )
}

export default Profile