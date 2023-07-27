const IncidentType = require("../models/incidentType");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Create a new incident type
exports.createIncidentType = async (req, res) => {
  try {
    const { incidentName, incidentId } = req.body;
    const incidentType = new IncidentType({ incidentName, incidentId });
    await incidentType.save();

    const toReturned = {
      myIncidentName: incidentName,
      myIncidentId: incidentId,
    };

    res.status(201).json({ message: "Incident type created successfully", toReturned });
  } catch (error) {
    res.status(500).json({ message: "Failed to create incident type", error });
  }
};

exports.signInUser = async (req, res) => {
  try {
    // Your sign in logic here
  } catch (error) {
    // Error handling
  }
};

exports.authenticateToken = (req, res, next) => {
  // Your authentication logic here
};

// Get all incident types
exports.getIncidentTypes = async (req, res) => {
  try {
    const incidentTypes = await IncidentType.find();
    res.json(incidentTypes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch incident types", error });
  }
};

// Update an incident type
exports.updateIncidentType = async (req, res) => {
  try {
    const { incidentId } = req.params;
    const { incidentName } = req.body;

    const incidentType = await IncidentType.findByIdAndUpdate(
      incidentId,
      { incidentName },
      { new: true }
    );

    if (!incidentType) {
      return res.status(404).json({ message: "Incident type not found" });
    }

    res.json({ message: "Incident type updated successfully", incidentType });
  } catch (error) {
    res.status(500).json({ message: "Failed to update incident type", error });
  }
};

// Delete an incident type
exports.deleteIncidentType = async (req, res) => {
  try {
    const { incidentId } = req.params;

    const incidentType = await IncidentType.findByIdAndDelete(incidentId);

    if (!incidentType) {
      return res.status(404).json({ message: "Incident type not found" });
    }

    res.json({ message: "Incident type deleted successfully", incidentType });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete incident type", error });
  }
};
