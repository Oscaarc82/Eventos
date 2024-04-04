const express = require('express');
const router = express.Router();
const pC = require('../controllers/participanteController');

router.get("/", pC.getParticipantes);
router.get("/:id", pC.getOnePar);
router.post("/", pC.createPar);
router.delete("/:id", pC.deletePar);
router.put("/:id", pC.updatePar);

module.exports = router;
