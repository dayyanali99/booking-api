const registerService = require('../services/registerService')
const customError = require('../utils/customError')

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {function} next 
 */
const registerUser = async (req, res, next) => {
    try {
        if (!req.body.username || !req.body.password || !req.body.email) {
            return next(customError(400, 'Missing required fields!'))
        }
        const registeredUser = await registerService.registerUser(req.body)
        if (registeredUser) res.status(201).json({ message: 'User Created successfully!' });
    } catch (error) {
        next(error)
    }
}

module.exports = { registerUser }