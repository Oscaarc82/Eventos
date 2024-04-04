const express = require('express');
const router = express.Router();
const sc = require('../controllers/cargoController');

router.get("/", sc.getCargos);
router.get("/:id", sc.getOneCar);

module.exports = router;
