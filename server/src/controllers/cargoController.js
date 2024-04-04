const Cargo = require('../models/cargoModel');

async function getCargos(req, res) {
    try {
        const cargos = await Cargo.find();
        res.json(cargos);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

async function getOneCargo(req, res) {
    try {
        const id = req.params.id;
        const cargo = await Cargo.findById(id);

        if (!cargo) {
            return res.status(404).json({ message : "Not Found"});
        }
        res.json(cargo);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

module.exports = {
    getCargos,
    getOneCargo
}
