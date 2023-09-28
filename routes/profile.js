const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/profile', authMiddleware, (req, res) => {
  // This route is protected and can only be accessed with a valid token
  res.json({ message: 'Authenticated user', userId: req.userData.userId });
});

module.exports = router;
