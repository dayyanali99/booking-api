const customError = require('../utils/customError')

const verifyAdmin = (req, res, next) => {
    const isAdmin = req.user?.isAdmin;

    if (!isAdmin) return next(customError(403, 'Forbidden Request'))
    next()
}

module.exports = verifyAdmin