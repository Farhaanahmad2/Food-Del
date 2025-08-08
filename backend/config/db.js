import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Zyka:$Farrumongodbatlas2019@cluster0.b3r49s5.mongodb.net/food-del').then(()=>{
        console.log("DB Connected")
    })
}