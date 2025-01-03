const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '4m', // Access token expires in 15 minutes
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: '1d', // Refresh token expires in 1 days
    });
};

module.exports = { generateAccessToken, generateRefreshToken };
