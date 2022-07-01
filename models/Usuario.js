const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    image: {
        type: String,
    },
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    apellido: {
        type: String,
        require: true,
        trim: true
    },
    edad: {
        type: Number,
        require: true,
        trim: true
    },
    ocupacion: {
        type: String,
        require: true,
        trim: true
    },
    linkedin: {
        type: String,
        require: true,
        trim: true
    },
    telefono: {
        type: Number,
        require: true,
        trim: true
    },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
