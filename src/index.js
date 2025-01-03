const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const connectDB = require('./config/db');
const songRoutes = require('./routes/songRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// CORS Configuration
app.use(cors({
    origin: 'https://music-frontend-brown.vercel.app', // Set your frontend's URL
    credentials: true, // Allow cookies and credentials to be sent with requests
}));

// Middleware
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

// Base route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// API Routes
app.use('/api', songRoutes);
app.use('/api/auth', authRoutes); // Authentication routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    process.exit(1);
});
