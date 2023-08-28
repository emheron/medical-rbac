const express = require('express');
const User = require('../models/User');
const Role = require('../models/Role');

const router = express.Router();

const hasPermission = (permissions) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (!role || !permissions.includes(role.name)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};

router.get('/doctors_only', hasPermission(['Doctor']), (req, res) => {
  res.send('What up doc!');
});

module.exports = {
  router,
  hasPermission
};
