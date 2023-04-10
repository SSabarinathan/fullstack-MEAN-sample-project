import cors from 'cors';
import express, {json} from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { newUserRouter } from './routes/newUser.router';
import { mobileRouter } from './routes/mobile.router';
import { laptopRouter } from './routes/laptop.router';

const app= express();
app.use(json());
app.use(cors());
// app.use(bodyParser.json());



//routing
app.use('/newUser', newUserRouter);
app.use('/mobile', mobileRouter);
app.use('/laptop',laptopRouter )




const port = 3000
mongoose.connect('mongodb://127.0.0.1:27017/eShoppingApp').then(()=>{
    console.log('Connected DB!!.. Good job');
    app.listen(port,()=>{
        console.log('Running on the port ',{port});
        
    })
    
})