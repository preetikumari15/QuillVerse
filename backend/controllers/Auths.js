import fs from 'fs';
import jwt from 'jsonwebtoken'
import multer from 'multer';
import { FileUploadeToColoudinary } from '../libs/Cloudinary.js';
import UserModal from '../models/User.js';
import bcrypt from 'bcryptjs'

const Register = async (req, res) => {
    try {
        const { FullName, email, password } = req.body;

        // Check if file is provided
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Profile picture is required' });
        }

        const imagePath = req.file.filename;  // Safe to access after checking
        console.log(imagePath);  // To debug and see the image filename

        // Check if the user already exists
        const existUser = await UserModal.findOne({ email });
        if (existUser) {
            return res.status(301).json({ success: false, message: "User Already Exists. Please Login" });
        }

        const hashedPassword = await bcrypt.hashSync(password, 10);
        const newUser = new UserModal({
            FullName: FullName,
            email: email,
            password: hashedPassword,
            profile: imagePath,  // Store the filename or URL if you upload to Cloudinary
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ success: true, message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error during registration', error);
        res.status(500).json({ error: 'Error during registration' });
    }
};




const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const FindUser = await UserModal.findOne({ email });
        if (!FindUser) {
            return res.status(404).json({ success: false, message: "Account not found. Please register." });
        }
        const comparePassword = await bcrypt.compare(password, FindUser.password);
        if (!comparePassword) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        const token = jwt.sign({ userId: FindUser._id }, process.env.JWT_SECRET);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
        });
        
        return res.status(200).json({ success: true, message: "Login successfully", user: FindUser, token });
    } catch (error) {
        console.error('Error during login', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const Logout=async(req,res)=>{
    try {
        // Clear the token cookie
        res.clearCookie('token');

        // Return success message
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        // Handle error
        console.error("Error logging out:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const { FullName, oldpassword, newpassword } = req.body;

        // Find the user by ID
        const ExistUser = await UserModal.findById(userId);
        if (!ExistUser) {
            return res.status(404).json({ success: false, message: "Account not found." });
        }

        // Check if old password and new password are provided and validate old password
        if (oldpassword) {
            const comparePassword = await bcrypt.compare(oldpassword, ExistUser.password);
            if (!comparePassword) {
                return res.status(401).json({ success: false, message: "Old password is incorrect." });
            }
        }

        // Update FullName if provided
        if (FullName) {
            ExistUser.FullName = FullName;
        }

        // Update password if old and new passwords are provided and valid
        if (oldpassword && newpassword) {
            const hashedPassword = await bcrypt.hash(newpassword, 10);
            ExistUser.password = hashedPassword;
        } else if (oldpassword && !newpassword) {
            return res.status(400).json({ success: false, message: "New password is required when old password is provided." });
        }

        

    
        await ExistUser.save();

        // Return success response
        res.status(200).json({ success: true, message: "Profile updated successfully.", user: ExistUser });

    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export {Register,Login,Logout,updateProfile}