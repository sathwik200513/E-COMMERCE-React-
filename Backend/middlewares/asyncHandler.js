const asyncHandler = (fn) => (req,res,next) => {
    Promise.resolve(fn(req,res,next)).catch(error=>{
        res.status(500).json({message:error.message});
    });
};
export default asyncHandler;

// This middleware handles async errors in route handlers by catching them and sending a 500 response with the error message.
// It is used to wrap route handlers to ensure that any errors thrown are caught and handled gracefully.