import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello');
})
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    
});