const express = require('express');
const router = express.Router();
const sc = require('../controllers/cargoController');

router.get("/cargo", sc.getCargos);
router.get("/cargo/:id", sc.getOneCargo);

module.exports = router;
