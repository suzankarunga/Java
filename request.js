// /* eslint-disable */

require("dotenv").config(); // environment variable

// require packages
const express = require("express");
const mongoose = require("mongoose");

// initialise express
const app = express();

//  mondodb connect
mongoose
  .connect(
    "mongodb+srv://kennymusasizi:u5FXlwVWTv9TMy9U@cluster0.mdqhtb6.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// create a schema
const studentSchema = new mongoose.Schema({
  roll_no: Number,
  name: String,
  year: Number,
  subjects: [String]
});

// create a model with studentSchema
const Student = mongoose.model('Student', studentSchema);

// Create a new document
const stud = new Student({
  roll_no: 1001,
  name: 'Madison Hyde',
  year: 3,
  subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
const stud2 = new Student({
  roll_no: 10021,
  name: 'Madison Hyde',
  year: 3,
  subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
// Add the document to Collections
stud.save().then(() => console.log("One entry added"), (err) => console.log(err));
stud2.save().then(() => console.log("One entry added"), (err) => console.log(err));
// Save method can also be written as:
// stud.save((err, result) => {
//     if(err) console.log(err);
//     else console.log("entry added");
// });

// get documents
app.get('/', (req, res) => {
  Student.find()
    .then((ourData) => {
      return res.status(200).json({
         ourData
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });

  // Student.find((err, found) => {
  //     if (!err) {
  //         res.send(found);
  //     } else {
  //         console.log(err);
  //         res.send("Some error occured!")
  //     } 
  // }).catch(err => console.log("Error occured, " + err));
});

// Server listen
app.listen(3000, () => console.log("Server listening to port 3000"));