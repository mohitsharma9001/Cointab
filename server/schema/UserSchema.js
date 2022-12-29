import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name : Object,
    gender : String,
    email : String,
    location: Object,
    dob : Object,
})


const UserModal= mongoose.model('user',userSchema)
mongoose.set('strictQuery', false)
export default UserModal
