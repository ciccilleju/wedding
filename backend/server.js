require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

const app = express();
app.use(express.json());

//const localUri = "mongodb://localhost:27017/wedding";
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
