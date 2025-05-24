import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req,res) => {
    try {
        let image_filename = `${req.file.filename}`;
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashedPassword, image: image_filename, });
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}