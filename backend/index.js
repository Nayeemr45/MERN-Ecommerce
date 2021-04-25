import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/product.js';
import userRoutes from './routes/users.js';
import sellerRoutes from './routes/sellers.js';
import orderRoutes from './routes/orders.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/user' , userRoutes);
app.use('/seller' , sellerRoutes);
app.use('/product' ,productRoutes);
app.use('/orders' ,orderRoutes);


const CONNECTION_URL = 'mongodb+srv://nayeem:n017710587890%40%23@cluster0.lcdib.mongodb.net/mern_ecommerce';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => app.listen(PORT , () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);