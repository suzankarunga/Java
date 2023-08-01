// //const express = require('express');
// //const router = express.Router();
// //const logController = require('../controllers/logControllers');

// // Create a new log
// router.post('/', logController.createLog);

// // Get all logs
// router.get('/', logController.getLogs);

// // Get a log by ID
// // router.get('/:id', logController.getLogById);

// router.post('/api/auth/signin', logController.signInLog);

// // Update a log
// router.put('/api/log/update-log', logController.authenticateToken, logController.updateLog);

// // Delete a log
// router.delete('/api/log/delete-log', logController.authenticateToken, logController.deleteLog);

// module.exports = router;

const express = require('express');
const router = express.Router();

const logsController = require('../controllers/logsController');


// Create a new logs
router.post('/', logsController.createLog);

// // Get all logs
router.get('/', logsController.getLog);

// // Get a logs by ID
// router.get('/:id', logsController.getLogById);

// // Update a microService
// router.put('/api/user/update-logs', logsController.authenticateToken, logsController.updateLog);

// // Delete a microService
// router.delete('/api/user/delete-logs', logs.authenticateToken, logs.delete);

module.exports = router;
