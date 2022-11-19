const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room');

// GET ALL
router.get('/', roomController.getAllRooms)
// CREATE
router.post('/:hotelId', roomController.createRoom)
// UPDATE
router.put('/:id', roomController.updateRoom)
// DELETE
router.delete('/:id/:hotelId', roomController.deleteRoom)
// GET
router.get('/:id', roomController.getRoom)

module.exports = router;