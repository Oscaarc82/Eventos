const express = require('express');
const router = express.Router();
const pC = require('../controllers/participanteController');

router.get("/participante", pC.getParticipantes);
router.get("/participante/:id", pC.getOnePar);
router.post("/participante", pC.createPar);
router.delete("/participante/:id", pC.deletePar);
router.put("/participante/:id", pC.updatePar);
router.get("/participante/login/:email", pC.getUser);
router.post("/participante/nvoEvento", pC.saveEventos);
router.post("/participante/genero", pC.getGender);
router.get("/participantes/evento/:evento", pC.getPartEvento);

module.exports = router;
