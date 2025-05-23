import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/connectionDB.js';
import userRoutes from './routes/user.routes.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//API ENDPOINTS
app.use("/images", express.static("uploads"));
app.use("/user", userRoutes);
const PORT = 4000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on ${PORT}`);
    
});