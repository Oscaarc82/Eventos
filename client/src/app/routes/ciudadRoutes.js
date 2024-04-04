const express = require('express');
const router = express.Router();
const sc = require('../controllers/ciudadController');

router.get("/", sc.getCiudades);
router.get("/:id", sc.getOneCiu);

module.exports = router;
