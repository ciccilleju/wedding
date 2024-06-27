const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  notes: { type: String },
  guests: { type: Number },
  guests_children: { type: Number },
  attendance: { type: Boolean, default: false },
  language: { type: String, enum: ['it', 'en', 'hu'], required: false },
  role: { type: String, enum: ['guest', 'admin', 'guest_hungary', 'guest_italy'], default: 'guest' },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
