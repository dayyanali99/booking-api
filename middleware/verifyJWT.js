const jwt = require("jsonwebtoken");
const customError = require("../utils/customError");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
const verifyToken = (req, res, next) => {
  const cookies = req.cookies;
  if (!cookies?.access_token) return next(customError(401, "Unauthorized"));

  const token = cookies.access_token;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return next(customError(403, "Forbidden: Invalid Token"));
    req.user = decoded.user;
    next();
  });
};

module.exports = verifyToken;
