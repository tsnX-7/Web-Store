import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/product", (req, res)=>{
    res.send("Bismillah, server is ready! Alhamdulillah");
    
});

console.log(process.env.MONGO_URI);

app.listen(5000, ()=>{
    console.log("Server is listening to port 5000 at http://localhost:5000");
});

// 