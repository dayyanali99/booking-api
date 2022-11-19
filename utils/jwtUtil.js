const jwt = require('jsonwebtoken')
const customError = require('../utils/customError')

const createAccessToken = (user) => {
    return jwt.sign(
        { user: { username: user._id, isAdmin: user.isAdmin } },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' })
}

const createRefreshToken = (user) => {
    return jwt.sign(
        { user: { username: user._id, isAdmin: user.isAdmin } },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    )
}

module.exports = { accessToken: createAccessToken, refreshToken: createRefreshToken }