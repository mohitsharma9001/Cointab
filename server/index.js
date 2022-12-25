import express from "express";
import { connection } from "./database/db.js";
import router from "./routes/Route.js"
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());
app.use("/user",router);


const PORT = 8080;
app.listen(PORT,async (res,req)=>{
    try {
        await connection()
        console.log(`server is running on ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})
