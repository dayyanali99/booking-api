const userService = require('../services/userService')

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
const deleteUser = async (req, res, next) => {
    try {
        await userService.deleteUser(req.params.id);
        res.status(200).json({ message: 'Record Deletion Successful!' });
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
const getUser = async (req, res, next) => {
    try {
        const result = await userService.getUser(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
const getAllUsers = async (req, res, next) => {
    try {
        const result = await userService.getAllUsers();
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = { updateUser, deleteUser, getUser, getAllUsers }