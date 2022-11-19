const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const verifyToken = require('../middleware/verifyJWT')
const verifyAdmin = require('../middleware/verifyAdmin')

// Middleware
router.use(verifyToken)

// GET ALL
router.get('/', userController.getAllUsers)
// UPDATE
router.put('/:id', verifyAdmin, userController.updateUser)
// DELETE
router.delete('/:id', userController.deleteUser)
// GET
router.get('/:id', userController.getUser)

module.exports = router;