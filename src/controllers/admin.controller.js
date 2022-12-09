import Inicio from  "../models/Inicio-sesion"; 
import Categoria from  "../models/categorias"; 
import Empresas from  "../models/Empresas"; 
import SubCategorias from  "../models/Subcategorias"; 
import Producto from "../models/productos";
import Motorista from  "../models/Motoristas";


//iniciar sesion
export const login = async (req, res) => {
  const login = await Inicio.find({ usuario: req.body.usuario, password: req.body.password});
  // const tasks = await Task.find();
  // console.log(tasks)
  console.log(login.length)
  if(login.length == 1){
    res.json({login: true, ruta: './admin-solicitudes.html', id: login[0]._id})
  }else{
    res.json({login: false})
  }
};

//categorias
export const nuevaCategoria = async (req, res) => {
  const nuevaCategoria = new Categoria({
  nombre: req.body.nombre,
  // done: req.body.done ? req.body.done : false, //operador ternario
});
const categoriaGuardada = await nuevaCategoria.save();
res.json(categoriaGuardada);
};

export const obtenerCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};

//empresas

export const crearEmpresa = async (req, res) => {
  const crearEmpresa = new Empresas({
    urlImagen : req.body.urlImagen,
    nombre : req.body.nombre,
    zona : req.body.zona,
    idCategoria : req.params.idCategoria,
    nombreCategoria : req.body.nombreCategoria,
    informacion : req.body.informacion, 
    direccion:req.body.direccion
  });

  const empresaGuardada = await crearEmpresa.save();
  res.json(empresaGuardada);
};


export const eliminarEmpresa = async (req, res) => {
  const eliminarEmpresa = await Empresas.findByIdAndDelete(req.params.idEmpresa);
  if (eliminarEmpresa == null) {
    res.json({
      message: "la tarea no existe",
    });
  } else {
    res.json({
      message: "se elimino con exito",
    });
  }
};


export const obtenerEmpresas = async (req, res) => {
  const empresas = await Empresas.find({nombreCategoria : req.body.nombreCategoria, zona: req.body.zona});
  res.json(empresas);
};


export const obtenerEmpresasCategoria = async (req, res) => { //devolvera empresas de una determinada categoria
  const empresas = await Empresas.find({ idCategoria : req.params.idCategoria});
  if(empresas.length == 0){
    res.json({mensaje : 'categoria vacia'})
  }else{
    res.json(empresas);
  }  
};

//subcategorias
export const nuevaSubCategoria = async (req, res) => {
  const crearSub = new SubCategorias({
    nombre : req.body.nombre,
    idEmpresa : req.params.idEmpresa,
  });

  const subGuardada = await crearSub.save();
  res.json({subGuardada});
};

export const obtenerSubCategorias = async (req, res) => { //devolvera las subcategorias
  const sub = await SubCategorias.find();
  res.json(sub);  
};


export const crearProducto = async (req, res) => {
  const crearProducto = new Producto({
    urlImagen : req.body.urlImagen,
    nombre : req.body.nombre,
    idSubcategoria : req.params.idSubcategoria,  
    descripcion : req.body.descripcion,
    precio : req.body.precio,
    unidades:1
  });

  const productoGuardado = await crearProducto.save();
  res.json(productoGuardado);
};




export const obtenerProductosSubCat = async (req, res) => { //devolvera los productos separados por sub categoria
  
  let productosArray = []
  const sub = await SubCategorias.find({idEmpresa : req.params.idEmpresa});


  if(sub.length == 0){
    res.json(productosArray);  
  }

  sub.forEach(async (subC, i) => {


    let idSubC = subC._id.toHexString()
    let productos =  await Producto.find({idSubcategoria : idSubC});


    productosArray.push({nombreSubCategoria: subC.nombre, productos})


    
    if(i == sub.length - 1){
  
      res.json(productosArray);  
    }
    
  });



};


export const obtenerSolicitudes = async (req, res) => { //enviara una lista con los motoristas que estan en solicitud
  const motoristas = await Motorista.find({aprobado:false}, {nombre:1 , _id : 1});
  res.json(motoristas);
};


export const obtenerMotorista = async (req, res) => { //devolvera un motorista(o solicitante por id)
  const motorista = await Motorista.find({ _id : req.params.idMotorista});
  if(motorista.length == 0){
    res.json({mensaje : 'categoria vacia'})
  }else{
    res.json(motorista);
  }  
};

export const aprobarMotorista = async (req, res) => {
  const aprobado = await Motorista.findByIdAndUpdate(req.params.idMotorista, {aprobado : true}, { new: true }); //true
  if(aprobado != null){
    res.json({
      message: "aprobado con exito",
    });
  }else{
    res.json({
      message: "error",
    });
  }
};


export const rechazarMotorista = async (req, res) => {
  const motoristaEliminado = await Motorista.findByIdAndDelete(req.params.idMotorista);


  if (motoristaEliminado == null) {
    res.json({
      message: "el solicitante no existe",
    });
  } else {
    res.json({
      message: "se elimino con exito",
    });
  }
};

export const listarMotoristas = async (req, res) => {
  const motoristas = await Motorista.find({}, {
    _id:true, nombre: true
  });

  res.json(motoristas)
}