const express = require('express');
const router = express.Router();
const incidentTypeController = require('../controllers/incidentTypeControllers');

// Create a new incident type
router.post('/', incidentTypeController.createIncidentType);

// Get all incident types
router.get('/', incidentTypeController.getIncidentTypes);

// Update an incident type
router.put('/:incidentId', incidentTypeController.updateIncidentType);

// Delete an incident type
router.delete('/:incidentId', incidentTypeController.deleteIncidentType);

module.exports = router;
