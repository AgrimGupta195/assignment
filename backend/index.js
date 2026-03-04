import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./utils/db";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:"*"
    }
));


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})