//Crud app using express. js
const express = require('express');
const bodyParser = require('body-parser'); // Import the body-parser middleware
const app = express();

app.use(bodyParser.json()); // Add body-parser middleware to parse JSON bodies

// Read operation - Retrieve all items
app.get('/items', (req, res) => {
  // Retrieve data from the database or any other source
  // Send the data as a response
  res.send('Retrieving all items');
});

// Read operation - Retrieve a specific item
app.get('/items/:id', (req, res) => {
  // Retrieve data for the specified item from the database or any other source
  const itemId = req.params.id;
  res.send(`Retrieving item with ID ${itemId}`);
});

// Create operation - Create a new item
app.post('/items', (req, res) => {
  // Extract the data from the request body
  const newItem = req.body;
  // Store the new item in the database or any other source
  res.send('Item created successfully');
});

// Update operation - Update an existing item
app.put('/items/:id', (req, res) => {
  // Extract the data from the request body
  const updatedItem = req.body;
  // Update the item with the specified ID in the database or any other source
  const itemId = req.params.id;
  res.send(`Item with ID ${itemId} updated successfully`);
});

// Delete operation - Delete an item
app.delete('/items/:id', (req, res) => {
  // Delete the item with the specified ID from the database or any other source
  const itemId = req.params.id;
  res.send(`Item with ID ${itemId} deleted successfully`);
});

const port = 4000; // or any other port number you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  console.log(`Server is listening on port ${port}`);
});

