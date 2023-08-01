// // app/routes/userRoutes.js

// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userControllers');

// // Create a new user
// router.post('/', microServiceController.createmicroService);

// // Get all users
// router.get('/', microServiceController.getmicroService);

// // Get a user by ID
// // router.get('/:id', userController.getUserById);

// //router.post('/api/auth/signin', microServiceController.signInUser);

// // Update a user
// router.put('/api/user/update-user',microServiceController.authenticateToken, microServiceController.updatemicroService);

// // Delete a user
// router.delete('/api/user/delete-microService',microServiceController.authenticateToken, microServiceController.delete);

// module.exports = router;
// app/routes/userRoutes.js

const express = require('express');
const router = express.Router();

const microServiceController = require('../controllers/microServiceController');


// Create a new microService
router.post('/', microServiceController.createMicroService);

// Get all microServices
router.get('/', microServiceController.getMicroServices);

// Get a microService by ID
// router.get('/:id', microServiceController.getMicroServiceById);

// Update a microService
router.put('/api/user/update-microService', microServiceController.authenticateToken, microServiceController.updateMicroService);

// Delete a microService
router.delete('/api/user/delete-microService', microServiceController.authenticateToken, microServiceController.deleteMicroService);

module.exports = router;
