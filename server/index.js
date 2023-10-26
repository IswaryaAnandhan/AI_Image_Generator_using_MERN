import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import dalleRoutes from './routes/dalleRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async(req, res)=>{
    res.send("Hello from DALL-E!");
})

const startServer= async()=>{
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(5000,()=> console.log("Server has started on port http://localhost:5000"));
    } catch (error) {
        console.error(error);
    }

    
}

startServer();