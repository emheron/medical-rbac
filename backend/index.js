const express = require('express');
const app = express();
const PORT = 3001;
const mongoose = require('mongoose');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');

app.use(cors());

mongoose.connect('mongodb://localhost:27017/medicalRBAC', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', patientRoutes);  

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
