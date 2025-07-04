import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/connectionDB.js';
import userRoutes from './routes/user.routes.js';
dotenv.config();
import blogRoutes from './routes/blog.routes.js';

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: 'https://quillverse.vercel.app',
        methods: ['GET', 'POST', 'PUT'],
        credentials: true
    }
));

//API ENDPOINTS
app.use("/images", express.static("uploads"));
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
const PORT = 4000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on ${PORT}`);
    
});
