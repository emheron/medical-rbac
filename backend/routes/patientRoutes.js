const Patient = require('../models/Patient'); 
const express = require('express');
const { hasPermission } = require('./routes');
const router = express.Router();

router.post('/add_patient', hasPermission(['Doctor', 'Nurse', 'Admin']), async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/all_patients', hasPermission(['Doctor', 'Nurse', 'Admin']), async (req, res) => {
    const patients = await Patient.find();
    res.json(patients);
  });
  

  router.get('/patient/:id', hasPermission(['Doctor', 'Nurse', 'Admin']), async (req, res) => {
    try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
    }
    res.json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  });

  router.get('/search_patients', hasPermission(['Doctor', 'Nurse', 'Admin']), async (req, res) => {
    try {
        const searchQuery = req.query.search;
        const patientResult = await Patient.find({
            $text: { $search: searchQuery }
        });
        res.status(200).json(patientResult);
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
  });

  router.put('/update_patient/:id', hasPermission(['Doctor']), async (req, res) => {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPatient);
  });
  

  router.delete('/delete_patient/:id', hasPermission(['Doctor']), async (req, res) => {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: 'Patient deleted' });
  });

  module.exports = router;