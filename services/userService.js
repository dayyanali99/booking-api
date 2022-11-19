const User = require('../models/User')

const updateUser = async (userId, updatedUser) => {
    const userToUpdate = await User.findOne().where('_id').equals(userId).exec();
    for (let key in updatedUser) {
        if (updatedUser[key] != null) {
            userToUpdate[key] = updatedUser[key];
        }
    }
    const result = await userToUpdate.save();
    return result;
}

const deleteUser = async (userId) => {
    const result = await User.deleteOne({ _id: userId }).exec();
    return result;
}

const getUser = async (userId) => {
    const result = await User.findOne({ _id: userId }).exec();
    return result;
}

const getAllUsers = async () => {
    const result = await User.find({}).exec();
    return result;
}


module.exports = { updateUser, deleteUser, getUser, getAllUsers }