import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world')
})


const PORT = 8000;
// connection();
app.listen(PORT,(res,req)=>{
console.log(`server is running on ${PORT}`)
})