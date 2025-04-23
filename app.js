import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/db.js';
//.js is important
import dashboardRoutes from './routes/dashboardRoute.js';

dotenv.config();

const app = express();

//app.use(express.json()) parses incoming JSON requests into JavaScript objects,
app.use(express.json());
// app.use(cors()) enables Cross-Origin Resource Sharing to allow frontend apps from different domains to access your backend API.
app.use(cors());



// simplest Express route, often used for testing if the server is running. 
app.get('/',(req,res)=>{
    res.send("hello world")
})

// mounts all routes from dashboardRoute under the /dashboard path for modular routing.
app.use('/dashboard',dashboardRoutes);

// Uses $PORT if set, else 7001
const port = process.env.PORT || 7001;

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
// Binds the app to a port so it can accept HTTP requests, while confirming it's live via console.


// http://localhost:7000/dashboard/total-population