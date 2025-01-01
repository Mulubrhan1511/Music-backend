const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '60m', // Access token expires in 15 minutes
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: '15m', // Refresh token expires in 7 days
    });
};

module.exports = { generateAccessToken, generateRefreshToken };
