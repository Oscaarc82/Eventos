const express = require('express');
const router = express.Router();
const ec = require('../controllers/eventoController');

router.get("/", ec.getEventos);
router.get("/:id", ec.getOneEve);
router.put("/:id", ec.updateEve);
router.delete("/:id", ec.deleteEve);
router.post("/", ec.createPar);

module.exports = router;
