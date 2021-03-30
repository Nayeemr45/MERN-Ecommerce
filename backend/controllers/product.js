import express from 'express';
import mongoose from 'mongoose';

import Product from '../models/Product.js';

const router = express.Router();


export const getProduct = async (req , res) => {
    try{

        const AllProduct = await Product.find();

        res.status(200).json(AllProduct);
    }catch (error){
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req , res) => {
    const product = req.body;
    
    const newProduct = new Product({ ...product});

    try {
        await newProduct.save();
        res.status(201).json(newProduct)

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

