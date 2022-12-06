
import { json } from "express";
import {Schema, model  } from "mongoose";

const categorias = new Schema({
    nombre: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    
}, {
    versionKey : false, 
    timestamps : false //fecha actualizacion y creacion
});


export default model('categorias', categorias); // export default model('nombre del schema', schema);