import {app} from "./app.js";
import dotenv from "dotenv"

dotenv.config({path:"./backend/config/config.env"});


app.listen(process.env.PORT,()=>{
    console.log(`server is  running on Port ${process.env.PORT}`);
})