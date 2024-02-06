import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = (req, res, next) => {
    // get token from headers 
    const authToken = req.headers.authorization;
    // chek token is exist or not 

    if (!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({ status: false, message: "No token,authorization denied to access" })

    }
    try {
        const token = authToken.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.id;
        req.role = decoded.role;

        next()
    } catch (error) {
        if (error.name === 'TokenExpirationError') {
            return res.status(401).json({ message: "Token Expired" })
        }
        return res.status(401).json({ success: false, message: "Invalid Token" })
    }

}

// export const restrict = roles => async (req, res, next) => {
//     const userId = req.userId;



//     let user ;

//     // Initialize user with a default value
//     user = { role: 'patient' };

//     const patient = await User.findById(userId);
//     const doctor = await Doctor.findById(userId);

//     if (patient) {
//         user = patient;
//     }

//     if (doctor) {
//         user = doctor;
//     }

//     if (!roles.includes(user.role)) {
//         console.log(userId);
//         console.log(user)
//         console.log(roles.includes(user.role))
//         return res.status(401).json({ success: false, message: "You are not authorized" });
//     }

//     next();
// };


export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;


    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if (patient) {
        user = patient;

    }
    if (doctor) {
        user = doctor;

    }
    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "you are not authorized" })
    }
    next()
}



