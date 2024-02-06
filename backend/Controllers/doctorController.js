import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "succesfully doctor updated",
      data: updateDoctor,
    });
  } catch (error) {
    res.status(500).json({ successs: false, message: "error updating doctor" });
  }
};
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "succesfully doctor deleted",
    });
  } catch (error) {
    res.status(500).json({ successs: false, message: "error deleting doctor" });
  }
};

export const getsingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");
    console.log(doctor);
    res.status(200).json({
      success: true,
      message: "succesfully doctor founded",
      data: doctor,
    });
  } catch (error) {
    res.status(404).json({ successs: false, message: "doctor not found" });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "doctor Found",
      data: doctors,
    });
  } catch (error) {
    res.status(404).json({ successs: false, message: "doctor not found" });
  }
};

export const getDoctorProfile = async (req, res) => {
  console.log(req.userId);
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "doctor Not Found" });
    }
    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });
    res
      .status(200)
      .json({
        success: true,
        message: "Profile Info Getting",
        data: { ...rest, appointments },
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong, cannot get the doctor ",
      });
  }
};
