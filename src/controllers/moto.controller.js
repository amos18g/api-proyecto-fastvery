import e from "express";
import Empresas from "../models/Empresas";
import Motorista from  "../models/Motoristas"; 
import ordenes from "../models/ordenes";

export const nuevoMotorista = async (req, res) => {
    const nuevoMot = new Motorista({
    nombre: req.body.nombre,
    fechaNacimiento : {
        dia: req.body.dia,
        mes: req.body.mes, 
        anio: req.body.anio,
    },
    // done: req.body.done ? req.body.done : false, //operador ternario
    residencia: req.body.residencia,
    correo: req.body.correo,
    contrasenia: req.body.contrasenia,
    celular: req.body.celular,
    celularAlternativo: req.body.celularAlternativo,
    ordenes: [],
    aprobado: false ,
    sexo: req.body.sexo

    });
    const existeMotorista = await Motorista.find({correo : req.body.correo});
    console.log(existeMotorista)
        let motoristaGuardado;

    console.log(existeMotorista.length)

    if(existeMotorista.length > 0){
        res.json({mensaje:'motorista registrado anteriormente' , existe:true})
    }else {
        motoristaGuardado = await nuevoMot.save();
        res.json({mensaje:'Registrado correctamente espere ser aprobado' , existe:false,id: motoristaGuardado._id})
    }
    

    
    // res.json(motoristaGuardado);
};


export const iniciarSesion  = async (req ,res) => {
    const existeUsuario = await Motorista.findOne({correo : req.body.correo});
    let existeContr = null
    if(existeUsuario == null){
        existeContr = null
    }else{
        existeContr = await Motorista.findOne({contrasenia : existeUsuario.contrasenia});
    }

    console.log(existeContr);

    if(existeContr == null){
        res.json({mensaje:'Correo o contrasenia incorrectos', registrado : false});
    }else
    {
        res.json({mensaje:'Datos ingresados correctamente', registrado : true, id: existeContr._id});
    }


}


export const listarOrdenes  = async (req ,res) => {
    
    const ordenesDisponibles = await ordenes.find({estado:req.body.estado , zona:req.params.zona});
    let detallesEmpresas = [];
    if(ordenesDisponibles.length == 0){
        res.json(detallesEmpresas)
    }else{

        ordenesDisponibles.forEach(async (orden, i) => {
            const empresa = await Empresas.findById(orden.idEmpresa)
            console.log('empresa  ',empresa)
            detallesEmpresas.push({idOrden: orden._id,nombreEmpresa:empresa.nombre, direccionEmpresa: empresa.direccion,  destino:orden.direccionCliente})
    
            
            console.log(orden._id)
            if(i == ordenesDisponibles.length - 1){
                res.json(detallesEmpresas)
            }
        });
    }



    // console.log(ordenesDisponibles)

    // res.json('probando ordenesDisponibles')
}

export const detallerOrden = async (req ,res) =>{
    const orden = await ordenes.findById(req.params.idOrden);

    res.json(orden);
}

export const cambiarEstadoOrden = async (req ,res) =>{
    const orden = await ordenes.findByIdAndUpdate({_id: req.body.idOrden},{
        estado: req.body.estado ,
        idMotorista:req.body.idMotorista
    });

    res.json({mensaje:'La orden se asigno correctamente', actualizado:true});
}
