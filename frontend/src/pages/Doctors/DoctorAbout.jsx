/* eslint-disable react/prop-types */
import { formateDate } from '../../utils/formateDate'
const DoctorAbout = ({ name,about,qualifications,experiences}) => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-5">
                About Of 
                <span className="text-[purple] font-bold text-[35px] leading-15">
                 {name}
            </span>
            </h3>
            <p className="text_pera">
               {about}
            </p>
           
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Qualifications</h3>

            <ul className=" grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                {
                    qualifications?.map((item,index) => (
                        <li key={index} className="p-4 rounded bg-[#fff3ea]">
        
                        <span className="text-yellowColor font-semibold text-[15px] leading-6">
                        {formateDate(item.startingDate)} -{formateDate("12-09-2014")}
                         </span>
                         <p className="text-textColor  font-bold text-[18x] leading-6">
                            {item.degree}
                         </p>
        
                        <span className="text-textColor  font-medium text-[14x] leading-5">
                           {item.university}
                         </span>
                     </li>
                    ))
                }
             

            </ul>
        </div>
        
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>

            <ul className=" grid sm:grid-cols-2 gap-[30px]  pt-4 md:p-5">
                { experiences?.map((item,index) => (
                        <li key={index} className="p-4 rounded bg-[#fff3ea]">
        
                        <span className="text-yellowColor font-semibold text-[15px] leading-6">
                        {formateDate(item.startingDate)} -{formateDate("12-09-2014")}
                         </span>
                         <p className="text-textColor  font-bold text-[18x] leading-6">
                            {item.position}
                         </p>
        
                        <span className="text-textColor  font-medium text-[14x] leading-5">
                           {item.hospital}
                         </span>
                     </li>
                    ))
                }
             

            </ul>
        </div>
        
    </div>
  )
}

export default DoctorAbout