const hotelService = require('../services/hotelService')
const ERequest = require('express').request;
const EResponse = require('express').response;

/**
 * 
 * @param {ERequest} req 
 * @param {EResponse} res 
 * @param {Function} next 
 */
const createHotel = async (req, res, next) => {
    try {
        const createdHotel = await hotelService.createHotel(req.body);
        res.status(201).json(createdHotel)
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {ERequest} req 
 * @param {EResponse} res 
 * @param {Function} next 
 */
const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await hotelService.updateHotel(req.params.id, req.body);
        res.status(200).json(updatedHotel);
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {ERequest} req 
 * @param {EResponse} res 
 * @param {Function} next 
 */
const deleteHotel = async (req, res, next) => {
    try {
        await hotelService.deleteHotel(req.params.id);
        res.status(200).json({ message: 'Record Deletion Successful!' });
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {ERequest} req 
 * @param {EResponse} res 
 * @param {Function} next 
 */
const getHotel = async (req, res, next) => {
    try {
        const result = await hotelService.getHotel(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {ERequest} req 
 * @param {EResponse} res 
 * @param {Function} next 
 */
const getAllHotels = async (req, res, next) => {
    try {
        const result = await hotelService.getAllHotels();
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {ERequest} req 
 * @param {EResponse} res 
 * @param {Function} next 
 */
 const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const result = await hotelService.countByCity(cities);
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels, countByCity }