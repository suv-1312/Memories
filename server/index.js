import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

//initialize the app
const app = express();

app.use(bodyParser.json({limit:"30mb", extended: "true"}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: "true"}));
app.use(cors());

//middleware to connect to our application
app.use('/posts',postRoutes);

//connection with database

const CONNECTION_URL = 'mongodb://suv1312:suv1312@ac-8vlni3u-shard-00-00.ll0ie35.mongodb.net:27017,ac-8vlni3u-shard-00-01.ll0ie35.mongodb.net:27017,ac-8vlni3u-shard-00-02.ll0ie35.mongodb.net:27017/?ssl=true&replicaSet=atlas-h4w8tj-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true})
 .then( () => app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`) ))
 .catch((error) => console.log(error.message));


 //mongoose.set('useFindAndModify',false);