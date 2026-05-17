import User from "../models/User.js"
import bcrypt from "bcryptjs"

export const sigupUser = async (req, res)=>{
    try{
        const {name, email, password} = req.body;
    //Check if user already exists.
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(409).json({message : "User alredy exists"})
        }

    //Hash password
        const hashPassword = await bcrypt.hash(password, 10);


    //create user
        await User.create({
            name,
            email,
            password: hashPassword
        });

       return res.status(201).json({
            message : "User registered successfully."
        });
    }
    catch(error){
        res.status(500).json({message : "Server error", error});
    }
    
    
}