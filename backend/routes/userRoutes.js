const User = require('../models/User');
  
router.put('/assign_role/:userId', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, { role: req.body.roleId }, { new: true });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });