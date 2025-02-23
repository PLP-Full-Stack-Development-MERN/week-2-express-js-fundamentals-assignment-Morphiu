function errorHandler(err, req, res, next){
    console.error(err.stack) // logs stack trace for debugging.

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Uses existing status or default to 500
    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // Sends stack in development
    });
}

module.exports = errorHandler;