const Ciudad = require('../models/serverModels');

async function getCiudades(req, res) {
    try {
        const ciudades = await Ciudad.find();
        res.json(ciudades);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

async function getOneCiu(req, res) {
    try {
        const id = req.params.id;
        const ciudad = await Ciudad.findById(id);

        if (!ciudad) {
            return res.status(404).json({ message : "Not Found"});
        }
        res.json(ciudad);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

module.exports = {
    getCiudades,
    getOneCiu
}
