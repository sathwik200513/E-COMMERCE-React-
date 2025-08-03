import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    //set JUT as an HTTP-only cookie

    res.cookie('jwt',token,{
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds

    })
    
    return token;
};

export default generateToken;
// This code defines a function `generateToken` that creates a JWT token for a user and sets it as an HTTP-only cookie in the response.
// The token is signed with a secret key and has an expiration time of 30 days. 