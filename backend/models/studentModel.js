const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  marks: { type: Array, default: [] },
});

module.exports = mongoose.model('Student', studentSchema);
