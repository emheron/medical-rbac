const Patient = require('../models/Patient'); 

router.post('/add_patient', hasPermission(['Doctor', 'Nurse']), async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
