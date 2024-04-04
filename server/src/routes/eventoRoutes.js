const express = require('express');
const router = express.Router();
const ec = require('../controllers/eventoController');

router.get("/evento", ec.getEventos);
router.get("/evento/:id", ec.getOneEve);
router.put("/evento/:id", ec.updateEve);
router.delete("/evento/:id", ec.deleteEve);
router.post("/evento", ec.createEve);
router.get("/evento/area/:area", ec.getEventosArea);
router.get("/evento/nomEvento/:evento", ec.getAreaEvento);

module.exports = router;