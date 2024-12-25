const User = require('../models/userModel');
const { generateAccessToken, generateRefreshToken } = require('../utils/tokenUtils');
const jwt = require('jsonwebtoken');
exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await User.create({ name, email, password, role });

        res.status(201).json({
            message: 'User registered successfully',
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login and generate tokens
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.status(200).json({
            accessToken,
            refreshToken,
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(401).json({ message: 'Refresh token is required' });
        }

        // Verify the refresh token
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

        // Check expiration manually (optional, jwt.verify already does this)
        const now = Math.floor(Date.now() / 1000); // Current time in seconds
        if (decoded.exp < now) {
            return res.status(403).json({ message: 'Refresh token has expired' });
        }

        // Generate a new access token
        const accessToken = jwt.sign(
            { id: decoded.id, role: decoded.role },
            process.env.JWT_SECRET,
            { expiresIn: '1m' } // Access token valid for 15 minutes
        );

        res.status(200).json({ accessToken });
    } catch (error) {
        console.error('Refresh token error:', error.message);

        if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ message: 'Refresh token has expired' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ message: 'Invalid refresh token' });
        }

        res.status(500).json({ message: 'Internal server error' });
    }
};

