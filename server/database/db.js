import mongoose from "mongoose"
 export const connection = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/userDetails",{useUnifiedTopology : true, useNewUrlParser : true})
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error)
    }
}