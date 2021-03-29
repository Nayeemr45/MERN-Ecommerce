import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Seller from '../models/seller.js';

export const signin = async (req , res) => {
    const { email , password } = req.body;

    try {
        const existingSeller = await Seller.findOne({ email });

        console.log("🚀 ~ file: seller.js ~ line 11 ~ signin ~ existingSeller", existingSeller)
        

        if(!existingSeller) return res.status(404).json({ message: "User doesn't exists." });

        const isPasswordCorrect = await bcrypt.compare(password , existingSeller.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingSeller.email, id: existingSeller._id } , 'test' , { expiresIn: "1h" });

        res.status(200).json({ result: existingSeller, token });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong1.' });
    }
}
export const signup = async (req , res) => {
    const { email, password, confirmPassword, firstName, lastName , type } = req.body;

    try {
        const existingUser = await Seller.findOne({ email });
        
        if(existingUser) return res.status(400).json({ message: "User already exists." });
       
        if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match." })
        
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Seller.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, type });
        
        const token = jwt.sign( { email: result.email, id: result._id }, 'test', { expiresIn: "1h" } );

        res.status(200).json({ result, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong2" });

    }

}