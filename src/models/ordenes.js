import { json } from "express";
import {Schema, model, SchemaType, SchemaTypes  } from "mongoose";

const Ordenes = new Schema({
    productos: {
        type: Array ,
        // required: true, //obligatoriamente requerido 

    },
    estado: {
        type: Number,
        // required: true, //obligatoriamente requerido 
  
    },
    subTotal: {
        type: Number        ,
        // required: true
    },
    envio: {
        type: Number,
        // required: true
    },
    total: {
        type: Number        ,
        // required: true
    },
    idUsuario: {
        type: String,
         required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    idEmpresa: {
        type: String,
        // required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    destino: {
        type: Schema.Types.Mixed,        
    }, 
    idEmpresa: {
        type: String,
        // required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    }, 
    zona: {
        type: String,
        // required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    direccionCliente: {
        type: String,
        // required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },   

    idMotorista: {
        type: String,
        // required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    }
    
}, {
    versionKey : false, 
    timestamps : false //fecha actualizacion y creacion
});


export default model('Ordenes', Ordenes); // export default model('nombre del schema', schema);