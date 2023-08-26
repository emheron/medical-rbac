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
PatientSchema.index({ medicalHistory: 'text' });

module.exports = mongoose.model('Patient', PatientSchema);
