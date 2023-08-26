const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  name: String,
  permissions: [String]
});

module.exports = mongoose.model('Role', RoleSchema);
