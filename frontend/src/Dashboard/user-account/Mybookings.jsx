
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import DoctorCard from "./../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
const Mybookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {
        !loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {appointments.map(doctor => (
              <DoctorCard doctor={doctor} key={doctor._id} />
            ))}

            {
               !loading && !error && appointments.length === 0 && <h2 className="mt-5 text-center  leading-7 text-[20px] font-semibold text-primaryColor">You Did Not Booked Any Doctor Yet</h2> 
            }
          </div>
        )
      }
    </div>
  );
};

export default Mybookings;
