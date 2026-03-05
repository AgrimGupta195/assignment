import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import moduleRoute from "./routes/moduleRoute.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:"*",
        methods:["GET","POST"],
        credentials:true
    },
    
));
app.use("/api",moduleRoute);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})