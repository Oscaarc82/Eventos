const Area = require('../models/areaModel');

async function getAreas(req, res) {
    try {
        const areas = await Area.find();
        res.json(areas);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

async function getOneArea(req, res) {
    try {
        const id = req.params.id;
        const area = await Area.findById(id);

        if (area.lenth > 0) res.json(area); else res.status(500).json({ message : error.message });
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

module.exports = {
    getAreas,
    getOneArea
}