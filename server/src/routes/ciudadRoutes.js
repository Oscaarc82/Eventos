const express = require('express');
const router = express.Router();
const sc = require('../controllers/ciudadController');

router.get('/ciudad', sc.getCiudades);
router.get('/ciudad/:id', sc.getOneCiu);
router.post('/ciudad', sc.createCiu);

module.exports = router;