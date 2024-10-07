const mongoose = require("mongoose");

const mortosSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    tamanho: { 
        type: String,
        required: true
    },
    causa: {
        type: String,
        required: true 
    },
    idade: {
        type: Number, 
        required: true },
})

const Mortos = mongoose.model("Mortos", mortosSchema);

module.exports = Mortos;