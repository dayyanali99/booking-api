const roomService = require("../services/roomService");
const hotelService = require("../services/hotelService");
const Hotel = require("../models/Hotel");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
const createRoom = async (req, res, next) => {
  const hotelId = req.params?.hotelId;
  try {
    const newRoom = await roomService.createRoom(req.body);
    const hotelToUpdate = await hotelService.getHotel(hotelId);
    hotelToUpdate.rooms.push(newRoom._id);
    await hotelToUpdate.save();
    console.log(hotelToUpdate);
    res.status(200).json(newRoom);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await roomService.updateRoom(req.params.id, req.body);
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
const deleteRoom = async (req, res, next) => {
    const hotelId = req.params?.hotelId;
  try {
    await roomService.deleteRoom(req.params.id);
    const hotelToUpdate = await hotelService.getHotel(hotelId);
    const newRoomsList = hotelToUpdate.rooms.filter(room => room.toString() !== req.params.id);
    hotelToUpdate.rooms = [...newRoomsList];
    await hotelToUpdate.save();
    res.status(200).json({ message: "Record Deletion Successful!" });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
const getRoom = async (req, res, next) => {
  try {
    const result = await roomService.getRoom(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
const getAllRooms = async (req, res, next) => {
  try {
    const result = await roomService.getAllRooms();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms };