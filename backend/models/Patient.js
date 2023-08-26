const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  medicalHistory: { 
    type: String, 
    default: "No history available" 
  },
  age: Number,
  gender: String,
  dateOfBirth: Date,
});

module.exports = mongoose.model('Patient', PatientSchema);
