
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Contact from '../pages/Contact'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Doctors from '../pages/Doctors/Doctors'
import { Routes,Route } from 'react-router-dom'
import MyAccount from '../Dashboard/user-account/MyAccount'
import DashBoard from '../Dashboard/doctor-account/DashBoard'
import ProtectedRoute from './protectedRoute'
import CheckoutSuccess from '../pages/Doctors/CheckoutSuccess'


const Routers = () => {
  return  (
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<SignUp/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/doctors' element={<Doctors/>} />
    <Route path='/checkout-success' element={<CheckoutSuccess/>} />
    <Route path='/doctors/:id' element={<DoctorDetails/>} />
    <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={["patient"]}><MyAccount/></ProtectedRoute>} />
    <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={["doctor"]}><DashBoard/></ProtectedRoute>} />
  </Routes>
  )
    
  
}

export default Routers