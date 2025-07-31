// Packages
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Utils
const port = process.env.PORT;

// DB connection
connectDB(); // This must connect to MongoDB and log success/failure

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
