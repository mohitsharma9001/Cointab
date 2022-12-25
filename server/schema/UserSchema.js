import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    gender : String,
    name : Object,
    email : String,
    location: Object,
    
})


const UserModal= mongoose.model('user',userSchema)
mongoose.set('strictQuery', false)
export default UserModal
