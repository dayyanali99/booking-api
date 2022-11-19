const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel')


// GET ALL
router.get('/', hotelController.getAllHotels)
router.get('/countByCity', hotelController.countByCity)
router.get('/countByType', hotelController.getAllHotels)
// CREATE
router.post('/', hotelController.createHotel)
// UPDATE
router.put('/:id', hotelController.updateHotel)
// DELETE
router.delete('/:id', hotelController.deleteHotel)
// GET
router.get('/:id', hotelController.getHotel)

module.exports = router;