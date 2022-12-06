import { json } from "express";
import {Schema, model } from "mongoose";

const motoristas = new Schema({
    nombre: {
        type: String ,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    correo: {
        type: String ,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    contrasenia: {
        type: String ,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    residencia: {
        type: String ,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    celular: {
        type: String ,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    celularAlternativo: {
        type: String ,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    fechaNacimiento: Schema.Types.Mixed,

    ordenes: {
        type: Array ,
        required: true, //obligatoriamente requerido 
        
    },
    aprobado:{
        type: Boolean ,
        required: true, //obligatoriamente requerido
    },
    sexo: {
        type: String ,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    }


    
}, {
    versionKey : false, 
    timestamps : false //fecha actualizacion y creacion
});


export default model('motoristas', motoristas); // export default model('nombre del schema', schema);