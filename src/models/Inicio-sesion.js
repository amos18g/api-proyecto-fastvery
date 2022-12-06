import { json } from "express";
import {Schema, model  } from "mongoose";

const inicioSesion = new Schema({
    usuario: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    password: {
        type: String,
        required: true,
        trim: true //limpiar espacios
    },
}, {
    versionKey : false, 
    timestamps : false //fecha actualizacion y creacion
});


export default model('InicioSesion', inicioSesion); // export default model('nombre del schema', schema);