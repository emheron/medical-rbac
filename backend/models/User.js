const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
});

module.exports = mongoose.model('User', UserSchema);
