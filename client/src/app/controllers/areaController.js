const Area = require('../models/areaModel');

/*exports.getAreas = async (req, res) => {
    try {
        const data = await Area.find({});
        res.json({ success : true, data : data });
    } catch (error) {
        res.status(500).json({ success : false, message : error.message })
    }
}*/

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

/*exports.getOneArea = async (req, res) => {
    try {
        const id = req.params._id;
        const result = await Area.findById(id);
        if (!result) {
            return res.status(404).json({ success : false, message : "Not Found"});
        }
        res.json({ success : true, data : result });
    } catch (error) {
        res.status(500).json({ success : false, message : error.message });
    }
}*/