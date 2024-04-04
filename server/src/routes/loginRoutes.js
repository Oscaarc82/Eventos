const express = require('express');
const router = express.Router();
const lc = require('../controllers/loginController');

router.get('/login/:email', lc.getUser);

module.exports = router;
