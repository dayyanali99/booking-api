const authService = require('../services/authService')
const ERequest = require('express').request
const EResponse = require('express').response
const jwtUtil = require('../utils/jwtUtil')

/**
 * 
 * @param {ERequest} req 
 * @param {EResponse} res 
 * @param {Function} next 
 */
const login = async (req, res, next) => {
    try {
        const foundUser = await authService.verifyUser(req.body)
        const token = jwtUtil.createAccessToken(foundUser)
        res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(foundUser)
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {ERequest} req 
 * @param {EResponse} res 
 * @param {Function} next 
 */
const logout = async (req, res, next) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204)

    res
        .clearCookie('jwt', { httpOnly: true })
        .sendStatus(204)
}

module.exports = { login, logout }