import express from 'express';
import {createUser} from '../controllers/userController.js';
const router=express.Router();


router.route('/').post(createUser); // Route to create a new user


export default router;
// This code sets up a route for creating a new user by importing the createUser controller function and defining the route using Express Router.