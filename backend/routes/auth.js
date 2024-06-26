const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const verifyToken = require('./validate-token');

const router = express.Router();
const secret = 'your_jwt_secret';

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send('Error registering user:' + err);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id, role: user.role }, secret, {
      expiresIn: '96h',
    });
    res.json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/validate-token', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password'); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ valid: true, user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
