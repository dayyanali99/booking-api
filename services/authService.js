const User = require('../models/User')
const bcrypt = require('bcrypt')
const customError = require('../utils/customError')

const verifyUser = async (authDetails) => {
    const foundUser = await User.findOne({ username: authDetails.username }).exec();
    if (!foundUser) throw customError(401, 'User not found');

    const isPasswordCorrect = await bcrypt.compare(authDetails.password, foundUser.password);
    if (!isPasswordCorrect) throw customError(401, 'Password incorrect');

    const { password, ...otherDetails } = foundUser._doc;

    return { ...otherDetails };
}

module.exports = { verifyUser }