const Role = require('../models/Role');
  
  router.post('/add_role', async (req, res) => {
    try {
      const newRole = new Role(req.body);
      await newRole.save();
      res.status(201).json(newRole);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


  
  