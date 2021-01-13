var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const RecetaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen_principal: { type: String, required: false},
    ingredientes:
        [{
            producto: { type: String, required: true },
            cantidad: { type: Number, required: true },
            unidad_medida: { type: String, required: true }
        }],
    pasos: [{ 
        numeracion: {type: Number, required: true},
        descripcion: {type: String, required: true},
        imagen: {type: String, required: false},
    }],
    // creador: [{ type: ObjectId, ref: 'usuario' }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

RecetaSchema.pre('save', (next) => {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now
    }
    next();
});

module.exports = mongoose.model('Receta', RecetaSchema);