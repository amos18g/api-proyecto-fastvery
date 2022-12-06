import { json } from "express";
import {Schema, model  } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    description: {
        type: String,
        //no requerido 
        trim: true //limpiar espacios
    },
    done: { 
        type: Boolean,
        default: false, //valor por defecto
    },

}, {
    versionKey : false, 
    timestamps : false //fecha actualizacion y creacion
});


export default model('Task', taskSchema); // export default model('nombre del schema', schema);