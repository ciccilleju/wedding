const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/wedding', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/api/auth', authRoutes);

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
