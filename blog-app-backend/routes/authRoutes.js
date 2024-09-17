const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      
      console.log('Registering user with:', { username, email });

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        console.log('Username already exists');
        return res.status(400).json({ message: 'Username already exists' });
      }

      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        console.log('Email already exists');
        return res.status(400).json({ message: 'Email already exists' });
      }
  
     
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
  
      res.status(201).json({ message: 'Registration successful' });
    } catch (err) {
      console.error('Error during registration:', err); // Log error for debugging
      if (err.code === 11000) {
       
        res.status(400).json({ message: 'Username or email already exists' });
      } else {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
      }
    }
  });
  

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'User not found' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid password' });
  
      res.json({ message: 'Login successful' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;

