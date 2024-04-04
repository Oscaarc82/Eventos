const express = require('express');
const router = express.Router();
const ac = require('../controllers/areaController');

router.get('/areas', ac.getAreas);
router.get('/areas/:id', ac.getOneArea);

/*router.get("/", sc.getAreas);
router.get("/:id", sc.getOneArea);*/

module.exports = router;