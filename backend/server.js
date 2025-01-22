const express = require('express');
const connectDB = require('./config/db');
const riderRoutes = require('./routes/riderRoutes');
const autoDriverRoutes = require('./routes/autoDriverRoutes');
const dotenv = require('dotenv');
const morgan = require('morgan'); // For logging HTTP requests
const cors = require('cors'); // For enabling CORS
const { errorHandler } = require('./middleware/errorHandler'); // Custom error handler

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Initialize the Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(morgan('dev')); // Log HTTP requests in development mode
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/riders', riderRoutes);
app.use('/api/drivers', autoDriverRoutes);

// Custom error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    // Optionally, you can close the server and exit the process
    server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    // Optionally, you can close the server and exit the process
    server.close(() => process.exit(1));
});