import expres from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
import authRoute from "../backend/Routes/auth.js"
import userRoute from "../backend/Routes/user.js"
import doctorRoute from "../backend/Routes/doctor.js"
import reviewRoute from "../backend/Routes/review.js"
import bookingRoute from "./Routes/booking.js"
const app = expres();
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

app.get("/", (req, res) => {
    res.send("APi Is Working perffectly");
})

// DATABASE Connection
const dbUrl = process.env.MONGODB_URL || "";
const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then(() => {
            console.log(`database connected at the port ${port}`);

        })
    } catch (error) {
        console.log("not Connected")

    }
};


app.use(expres.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute)   // domain api 
app.use("/api/v1/users", userRoute)   // user  api 
app.use("/api/v1/doctors", doctorRoute)   // doctor api 
app.use("/api/v1/reviews", reviewRoute)   // review api 
app.use("/api/v1/bookings", bookingRoute)   // review api 


app.listen(port, () => {
    connectDB()
    console.log("server is running on port " + port)
})
















// mongoose.set("strictQuery",false)
// const connectDB= async () =>{
//     try{
//         await mongoose.connect(process.env.MONGODB_URL,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
//         })
//         console.log("Mongodb database is connected");
//     }catch(error){
//            console.log("MongoDB databse is not connected")
//            console.log(process.env.MONGODB_URL)
//     }
// }