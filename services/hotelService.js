const Hotel = require('../models/Hotel')


const createHotel = async (hotel) => {
    const newHotel = Hotel.create(hotel);
    return newHotel;
}

const updateHotel = async (hotelId, updatedHotel) => {
    const hotelToUpdate = await Hotel.findOne().where('_id').equals(hotelId).exec();
    for (const key in updatedHotel) {
        if (updatedHotel[key] != null) {
            hotelToUpdate[key] = updatedHotel[key];
        }
    }
    const result = await hotelToUpdate.save();
    return result;
}

const deleteHotel = async (hotelId) => {
    const result = await Hotel.deleteOne({ _id: hotelId }).exec();
    return result;
}

const getHotel = async (hotelId) => {
    const result = await Hotel.findOne({ _id: hotelId }).exec();
    return result;
}

const getAllHotels = async () => {
    const result = await Hotel.find({}).exec();
    return result;
}

const countByCity = async (cities) => {
    const list = await Promise.allSettled(cities.map(city => {
        return Hotel.countDocuments({city: city}).exec();
    }))

    return list.map(result => result.value);
}

module.exports = { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels, countByCity }