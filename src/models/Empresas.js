import { json } from "express";
import {Schema, model  } from "mongoose";

const Empresas = new Schema({
    nombre: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    idCategoria: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    urlImagen: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    zona: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    nombreCategoria: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    informacion: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    direccion: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    }
    
}, {
    versionKey : false, 
    timestamps : false //fecha actualizacion y creacion
});


export default model('Empresas', Empresas); // export default model('nombre del schema', schema);