const mongoose = require('mongoose');

const cargoSchema = mongoose.Schema({
});

module.exports = mongoose.model("Cargo", cargoSchema);