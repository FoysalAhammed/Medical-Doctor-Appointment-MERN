import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
export const updateUser = async (req,res) => {
    const id = req.params.id;
    try {
        const updateUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true },
        )
        res.status(200).json({
            success: true,
            message: "succesfully user updated",
            data: updateUser
        })
    } catch (error) {
        res.status(500).json({ successs: false, message: "error updating user" })
    }
}
export const deleteUser = async (req,res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(
            id,

        )
        res.status(200).json({
            success: true,
            message: "succesfully user deleted",

        })
    } catch (error) {
        res.status(500).json({ successs: false, message: "error deleting user" })
    }
}

export const getsingleUser = async (req,res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(
            id,
        ).select("-password")
        res.status(200).json({
            success: true,
            message: "succesfully user single founded",
            data: user

        })
    } catch (error) {
        res.status(404).json({ successs: false, message: "user not found" })
    }
}

export const getAllUser = async (req,res) => {

    try {

        const users = await User.find({}).select("-password")

        res.status(200).json({
            success: true,
            message: "succesfully all user found",
            data: users,
        })

    } catch (error) {
        res.status(404).json({ successs: false, message: "user not found" })
    }
}

export const getUserProfile= async (req,res) => {
    const userId = req.userId;

    try {
         const user = await User.findById(userId);
         if (!user) {
             return res.status(404).json({success: false, message:"user Not Found"})
         }
         const {password,...rest} = user._doc;
         res.status(200).json({success: true, message:"Profile Info Getting",data:{...rest}})
    } catch (err) {
        res.status(500).json({success: false, message:"Something went wrong, cannot get the user "})
    }
}


export const getMyAppointment = async (req, res) => {
    try {
         // step-1 retrive appointment from booking 
        const bookings = await Booking.find({user:req.userId})

         // step-2 extract doctor ids from appoint bookings 
        const doctorIds = bookings.map(el => el.doctor.id)

        //  step - 3 retrive doctors using doctor ids 
        const doctors = await Doctor.find({_id:{$in:doctorIds}}).select("-password");

        res.status(200).json({success: true, message:"Appoint Info are Getting",data:doctors})

    } catch (error) {
         res.status(500).json({success: false, message:"Something went wrong, cannot get the user "})
    }
}