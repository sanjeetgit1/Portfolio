import {app} from "./app.js";
import dotenv from "dotenv"

import {connectDatabase} from './config/database.js'

dotenv.config({path:"./backend/config/config.env"});


// call database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`server is  running on Port ${process.env.PORT}`);
})