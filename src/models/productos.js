import {Schema, model  } from "mongoose";

const Productos = new Schema({
    nombre: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    idSubcategoria: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    unidades: {
        type: Number        ,
        required: true
    },
    precio: {
        type: Number        ,
        required: true
    },
    urlImagen: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    },
    descripcion: {
        type: String,
        required: true, //obligatoriamente requerido 
        trim: true //limpiar espacios
    }

    
}, {
    versionKey : false, 
    timestamps : false //fecha actualizacion y creacion
});


export default model('Productos ', Productos); // export default model('nombre del schema', schema);