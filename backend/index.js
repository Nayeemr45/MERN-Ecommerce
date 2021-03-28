import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/' , postRoutes);


const CONNECTION_URL = 'mongodb+srv://nayeem:n017710587890%40%23@cluster0.lcdib.mongodb.net/mern_ecommerce?authSource=admin&replicaSet=atlas-zr9ql1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => app.listen(PORT , () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);