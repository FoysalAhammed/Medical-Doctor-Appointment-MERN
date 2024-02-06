import { useEffect, useState } from 'react'

 import DoctorCard from "../../components/Doctors/DoctorCard"
import Testimonial from '../../components/Testimonial/Testimonial';
import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
const Doctors = () => {
  const [query,setQuery] = useState('')
  const [debounceQuery,setDebounceQuery] = useState('')

  const handleSearch = () =>{
    setQuery(query.trim())
  }
  useEffect(() => {
  const timeout = setTimeout(()=>{
    setDebounceQuery(query)
  },500)
  return () => clearTimeout(timeout)
  }, [query]);
  
  const {data:doctors,loading,error} = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)


  return (
    <>
    
      <section>
        <div className="container text-center">
          <h2 className="heading">
            Find A Doctor 
          </h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#00066ff2c] rounded-md flex items-center justify-between">
           <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer"
            placeholder='Search Doctor'
            value={query}
            onChange={e => setQuery(e.target.value)}
           />
              <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>
                Search
              </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
        {loading && <Loader/>}
    {error && <Error/>}
        { !loading &&  !error && (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] '>
          {
              doctors.map((doctor) => (

                  <DoctorCard doctor={doctor} key={doctor.id}  />

              ))
          }
      </div>)}
        </div>
      </section>

      <section>
      <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> What our patinets says lets knew it</h2>
            <p className="text-pera text-center mt-6">
              world-Class Care For Everyone.Our Health Systems Offers unmatched
              expert Health Care
            </p>
          </div>
          <Testimonial/>
          </div>
      </section>
    </>
  )
}

export default Doctors