const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (user) => {

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPwd = await bcrypt.hash(user.password, salt);

    const registeredUser = await User.create({
        username: user.username,
        email: user.email,
        password: hashedPwd
    })

    return registeredUser
}

module.exports = { registerUser }