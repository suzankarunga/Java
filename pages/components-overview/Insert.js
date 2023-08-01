import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText, Grid } from '@mui/material';
import './background.webp';
import './typo.css';

const IncidentForm = () => {
  const [formData, setFormData] = useState({
    dateAndTime: new Date(),
    incidentType: '',
    microService: '',
    priority: '',
    reportedBy: '',
    estimatedTimeOfRestoration: '',
    incidentDescription: '',
    restorationDateTime: new Date(),
    schedule: '',
    status: '',
    restoredBy: '',
    restorationDescription: '',
    followUpSteps: '',
    followUpInCharge: '',
    closureNotes: ''
  });

  const handleDateTimeChange = (name, date) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      dateAndTime: new Date(),
      incidentType: '',
      microService: '',
      priority: '',
      reportedBy: '',
      estimatedTimeOfRestoration: '',
      incidentDescription: '',
      restorationDateTime: new Date(),
      schedule: '',
      status: '',
      restoredBy: '',
      restorationDescription: '',
      followUpSteps: '',
      followUpInCharge: '',
      closureNotes: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Date and Time"
              value={formData.dateAndTime}
              onChange={(date) => handleDateTimeChange('dateAndTime', date)}
              renderInput={(params) => <TextField {...params} />}
              fullWidth
              className="text-field"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="incidentType-label">Incident Type</InputLabel>
              <Select
                labelId="incidentType-label"
                id="incidentType"
                name="incidentType"
                value={formData.incidentType}
                onChange={handleChange}
                required
              >
                <MenuItem value="Type 1">Type 1</MenuItem>
                <MenuItem value="Type 2">Type 2</MenuItem>
                <MenuItem value="Type 3">Type 3</MenuItem>
              </Select>
              <FormHelperText>Select an incident type</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="microService-label">Micro-service</InputLabel>
              <Select
                labelId="microService-label"
                id="microService"
                name="microService"
                value={formData.microService}
                onChange={handleChange}
                required
              >
                <MenuItem value="Service 1">Service 1</MenuItem>
                <MenuItem value="Service 2">Service 2</MenuItem>
                <MenuItem value="Service 3">Service 3</MenuItem>
              </Select>
              <FormHelperText>Select a micro-service</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select labelId="priority-label" id="priority" name="priority" value={formData.priority} onChange={handleChange} required>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
              <FormHelperText>Select a priority</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Reported By"
              id="reportedBy"
              name="reportedBy"
              value={formData.reportedBy}
              onChange={handleChange}
              fullWidth
              className="text-field"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Estimated Time of Restoration"
              id="estimatedTimeOfRestoration"
              name="estimatedTimeOfRestoration"
              value={formData.estimatedTimeOfRestoration}
              onChange={handleChange}
              required
              fullWidth
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Incident Description"
              id="incidentDescription"
              name="incidentDescription"
              value={formData.incidentDescription}
              onChange={handleChange}
              required
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              className="text-area"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Restoration Date and Time"
              value={formData.restorationDateTime}
              onChange={(date) => handleDateTimeChange('restorationDateTime', date)}
              renderInput={(params) => <TextField {...params} />}
              fullWidth
              className="text-field"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Select labelId="status-label" id="status" name="status" value={formData.status} onChange={handleChange} required>
                <MenuItem value="Down">Down</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Resolved">Resolved</MenuItem>
              </Select>
              <FormHelperText>Select status</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Restored By"
              id="restoredBy"
              name="restoredBy"
              value={formData.restoredBy}
              onChange={handleChange}
              fullWidth
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Restoration Description"
              id="restorationDescription"
              name="restorationDescription"
              value={formData.restorationDescription}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              className="text-area"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Follow-up Steps"
              id="followUpSteps"
              name="followUpSteps"
              value={formData.followUpSteps}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              className="text-area"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Follow-up In Charge"
              id="followUpInCharge"
              name="followUpInCharge"
              value={formData.followUpInCharge}
              onChange={handleChange}
              fullWidth
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Closure Notes"
              id="closureNotes"
              name="closureNotes"
              value={formData.closureNotes}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              className="text-area"
            />
          </Grid>
        </Grid>
        <br />
        <Button variant="contained" type="submit">
          Save Incident
        </Button>
      </form>
    </div>
  );
};

export default IncidentForm;
