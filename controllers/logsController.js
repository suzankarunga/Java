const Log = require("../models/logs");


exports.createLog = async (req, res) => {
  console.log("chgc")
  try {
    // const { username, email, password } = req.body;
    // const log = new Log({ username, email, password });
    // await log.save();
    // Extract data from the request body
    const {  incident_name, incident_id, incident_log_number,
    reporting_date_and_time, incident_description, priority,
    micro_service_id, status, reported_by,estimated_time_of_restoration,
    restored_by, follow_up_steps, follow_up_incharge, closure_notes,
    user_id, incident_type_id } = req.body;

    // Create a new log object
    const log = new Log({  incident_name, incident_id, incident_log_number,
      reporting_date_and_time, incident_description, priority,
      micro_service_id, status, reported_by,estimated_time_of_restoration,
      restored_by, follow_up_steps, follow_up_incharge, closure_notes,
      // user_id incident_type_id 
    });

    // Save the log to the database
    await log.save();

    res.status(201).json({ message: "Log created successfully", Log });
  } catch (error) {
    res.status(500).json({ message: "Failed to create log", error });
  }
};

exports.signInLog = async (req, res) => {
  try {
    const log = await Log.findOne({ email: req.body.email });
    console.log(log);
    if (!log) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, log.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign(
      { userId: log._id, email: log.email },
      "your-secret-key",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

exports.getLog = async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch logs", error });
  }
};

exports.updateLog = async (req, res) => {
  try {
    const { userId } = req.user; // Access the userId from req.user
    const { username, email, password } = req.body;

    // Check if the token is true (authenticated)
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    // Find the log by userId and update their information
    const log = await Log.findByIdAndUpdate(
      userId,
      { username, email, password },
      { new: true }
    );

    if (!log) {
      return res.status(404).json({ message: "Log not found" });
    }

    res.json({ message: "Log updated successfully", log });
  } catch (error) {
    res.status(500).json({ message: "Failed to update log", error });
  }
};

exports.deleteLog = async (req, res) => {
  try {
    const { userId } = req.user; // Access the userId from req.user

    // Check if the token is true (authenticated)
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    // Find the log by userId and delete them
    const log = await Log.findByIdAndDelete(userId);

    if (!log) {
      return res.status(404).json({ message: "Log not found" });
    }

    res.json({ message: "Log deleted successfully", log });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete log", error });
  }
};
