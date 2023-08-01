// app/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// Create a new user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getUsers);

// Get a user by ID
// router.get('/:id', userController.getUserById);

router.post('/api/auth/signin', userController.signInUser);

// Update a user
router.put('/api/user/update-user',userController.authenticateToken, userController.updateUser);

// Delete a user
router.delete('/api/user/delete-user',userController.authenticateToken, userController.deleteUser);

module.exports = router;
