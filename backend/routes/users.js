const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a user
router.post('/', async (req, res) => {
  const { username, password, role, language, attendance, notes, guests, firstName, lastName } = req.body;
  try {
    const user = new User({ username, password, role, language, attendance, notes, guests, firstName, lastName });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all users
router.get('/', async (req, res) => {
  const { page = 1, limit = 3 } = req.query;

  try {
    const users = await User.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await User.countDocuments();

    res.json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  const { username, password, role, language, attendance, notes, guests, firstName, lastName } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { username, password, role, language, attendance, notes, guests, firstName, lastName }, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
