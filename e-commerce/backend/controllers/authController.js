import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//Signup User........
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

//Login User.........
export const loginUserController = async(req, res)=>{
    try{
        const {email, password} = req.body;

// Check if user already exists
const userExist = await User.findOne({email});
if(!userExist){
    return res.status(400).json({
        message : "Email is not registered."
    })
}

// Compare password
    const isPassword = await bcrypt.compare(password, userExist.password);
    if(!isPassword){
        return res.status(400).json({
            message : "Email or password is not found."
        })
    }

//Generate JWT token
      const token = jwt.sign({ id : userExist._id }, process.env.JWT_SECRET, { expiresIn : '7d' });



    return res.status(200).json({
        message : "Login successfully.",
        id : userExist._id,
        name : userExist.name,
        email : userExist.email,
        token : token
    })
    }
    catch(err){
       res.status(500).json({
        message: "Server error",
        error: err.message
        });
    }
}

