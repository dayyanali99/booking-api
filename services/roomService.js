const Room = require('../models/Room');

const createRoom = async (room) => {
    const createdRoom = await Room.create(room);
    return createdRoom;
}

const updateRoom = async (roomId, updatedRoom) => {
    const RoomToUpdate = await Room.findOne().where('_id').equals(roomId).exec();
    for (const key in updatedRoom) {
        if (updatedRoom[key] != null) {
            RoomToUpdate[key] = updatedRoom[key];
        }
    }
    const result = await RoomToUpdate.save();
    return result;
}

const deleteRoom = async (roomId) => {
    const result = await Room.deleteOne({ _id: roomId }).exec();
    return result;
}

const getRoom = async (roomId) => {
    const result = await Room.findOne({ _id: roomId }).exec();
    return result;
}

const getAllRooms = async () => {
    const result = await Room.find({}).exec();
    return result;
}

module.exports = { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms }