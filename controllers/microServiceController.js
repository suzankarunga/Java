const MicroService = require("../models/microService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Create a new microservice
exports.createMicroService = async (req, res) => {
  try {
    const { serviceId, serviceName, serviceStatus } = req.body;
    const microService = new MicroService({ serviceId, serviceName, serviceStatus });
    await microService.save();

    const toReturned = {
      myServiceid: serviceId,
      myServicename: serviceName,
      myServicestatus: serviceStatus,

    };

    res.status(201).json({ message: "MicroService created successfully", toReturned });
  } catch (error) {
    res.status(500).json({ message: "Failed to create MicroService", error });
  }
};

exports.signInMicroService = async (req, res) => {
  try {
    const microservice = await MicroService.findOne({ servicename: req.body.servicename });
    console.log(microservice);
    if (!microservice) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, microservice.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign(
      { serviceId: microservice.serviceid, servicename: microservice.servicename },
      "your-secret-key",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

exports.authenticateToken = (req, res, next) => {
  // Exclude authentication check for the "createMicroService" and "signInMicroService" routes
  if (req.path === "/createMicroService" || req.path === "/signInMicroService") {
    return next();
  }

  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }

  const token = authorizationHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, "your-secret-key");
    const serviceId = decodedToken.serviceId;
    req.microService = { serviceId }; // Set the microservice object in the request

    next(); // Call the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Get all microservices
exports.getMicroServices = async (req, res) => {
  try {
    const microServices = await MicroService.find();
    res.json(microServices);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch microservices", error });
  }
};

// Update a microservice
exports.updateMicroService = async (req, res) => {
  try {
    const { serviceId } = req.microService; // Access the serviceId from req.microService
    const { serverid, servicename } = req.body;

    // Check if the token is true (authenticated)
    if (!serviceId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    // Find the microservice by serviceId and update its information
    const microservice = await MicroService.findByIdAndUpdate(
      serviceId,
      { serverid, servicename },
      { new: true }
    );

    if (!microservice) {
      return res.status(404).json({ message: "MicroService not found" });
    }

    res.json({ message: "MicroService updated successfully", microservice });
  } catch (error) {
    res.status(500).json({ message: "Failed to update MicroService", error });
  }
};

// Delete a microservice
exports.deleteMicroService = async (req, res) => {
  try {
    const { serviceId } = req.microService; // Access the serviceId from req.microService

    // Check if the token is true (authenticated)
    if (!serviceId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    // Find the microservice by serviceId and delete it
    const microservice = await MicroService.findByIdAndDelete(serviceId);

    if (!microservice) {
      return res.status(404).json({ message: "MicroService not found" });
    }

    res.json({ message: "MicroService deleted successfully", microservice });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete MicroService", error });
  }
};
