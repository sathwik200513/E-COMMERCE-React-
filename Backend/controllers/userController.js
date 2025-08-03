import User from '../models/userModel.js';
import asyncHandler from '../middlewares/asyncHandler.js';  
import bcrypt from 'bcryptjs';
import createToken from '../utils/createToken.js';


const createUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
     
    if(!username ||!email || !password){
        throw new Error ("please fill all the input.");
    }

    const userExists = await User.findOne({email})
    if(userExists) res.status(400).send("User already exists");

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)




    const newUser = new User({username, email, password: hashedPassword})
    try{
        await newUser.save();
        createToken(res, newUser._id); // Create and set the token in the response
        // Respond with the user data excluding the password

        res.status(201).json(
            {_id: newUser._id, 
                username: newUser.username, 
                email: newUser.email, 
                isAdmin: newUser.isAdmin}
        )
    }catch(error){
        res.status(400)
        throw new Error("Invalid user data");
    }



});

export { createUser };
// This code defines a controller function `createUser` that handles the creation of a new user.
// It uses the `asyncHandler` middleware to catch any errors that occur during the execution of the function.
