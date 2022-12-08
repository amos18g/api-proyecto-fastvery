import Clientes from "../models/Clientes";
import Motorista from "../models/Clientes";
import Inicio from "../models/Inicio-sesion";
import Categoria from "../models/categorias";
import Empresas from "../models/Empresas";
import SubCategorias from "../models/Subcategorias";
import Producto from "../models/productos";
import ordenes from "../models/ordenes";

export const nuevoCliente = async (req, res) => {
  const nuevoCliente = new Clientes({
    nombre: req.body.nombre,
    fechaNacimiento: {
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
    sexo: req.body.sexo,
  });
  const existeCliente = await Clientes.find({ correo: req.body.correo });
  console.log(existeCliente);
  let clienteGuardado;

  console.log(existeCliente.length);

  if (existeCliente.length > 0) {
    res.json({ mensaje: "cliente registrado anteriormente", existe: true });
  } else {
    clienteGuardado = await nuevoCliente.save();
    res.json({
      mensaje: "Registrado correctamente",
      existe: false,
      id: clienteGuardado._id,
    });
  }

  // res.json(clienteGuardado);
};

export const iniciarSesion = async (req, res) => {
  const existeUsuario = await Clientes.findOne({ correo: req.body.correo });
  console.log(existeUsuario);
  let existeContr = null;
  if (existeUsuario == null) {
    existeContr = null;
  } else {
    existeContr = await Clientes.findOne({ contrasenia: req.body.contrasenia });
  }

  console.log(existeContr);

  if (existeContr == null || existeContr == []) {
    res.json({
      mensaje: "Correo o contrasenia incorrectos",
      registrado: false,
    });
  } else {
    res.json({
      mensaje: "Datos ingresados correctamente",
      registrado: true,
      id: existeContr._id,
    });
  }
};

export const obtenerCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};

export const obtenerEmpresasCategoria = async (req, res) => {
  //devolvera empresas de una determinada categoria
  const empresas = await Empresas.find({ idCategoria: req.params.idCategoria });
  if (empresas.length == 0) {
    res.json({ mensaje: "categoria vacia" });
  } else {
    res.json(empresas);
  }
};

export const obtenerUnaEmpresa = async (req, res) => {
  //devolvera el nombre e informacion de una empresa
  const empresas = await Empresas.findById(req.params.idEmpresa, {
    nombre: true,
    informacion: true,
    urlImagen: 1,
  });
  res.json(empresas);
};

export const obtenerProductosSubCat = async (req, res) => {
  //devolvera los productos separados por sub categoria

  let productosArray = [];
  const sub = await SubCategorias.find({ idEmpresa: req.params.idEmpresa });

  if (sub.length == 0) {
    res.json(productosArray);
  }

  sub.forEach(async (subC, i) => {
    let idSubC = subC._id.toHexString();
    let productos = await Producto.find({ idSubcategoria: idSubC });

    productosArray.push({ nombreSubCategoria: subC.nombre, productos });

    if (i == sub.length - 1) {
      res.json(productosArray);
    }
  });
};

export const nuevaOrden = async (req, res) => {
  console.log(req.body);
  if (req.body.direccionCliente != "") {
    const nuevaOrden = new ordenes({
      productos: req.body.productos,
      estado: 0,
      subTotal: req.body.subTotal,
      envio: 20,
      impuestos: req.body.subTotal * 0.12,
      total: req.body.subTotal + 20 + req.body.subTotal * 0.12,
      idUsuario: req.body.idUsuario,
      idEmpresa: req.body.idEmpresa,
      destino: { latitud: "12153321315", altitud: "1121845654" },
      zona: req.body.zona,
      direccionCliente: req.body.direccionCliente,
      idMotorista: "",
    });

    // console.log(nuevaOrden)
    const ordenGuardada = await nuevaOrden.save();
    res.json([
      {
        guardada: true,
        mensaje: "guardo correctamente",
        idOrden: ordenGuardada._id,
      },
    ]);
  } else {
    res.json([{ guardada: false, mensaje: "no se guardo correctamente" }]);
  }
};

export const ordenEntregada = async (req, res) => {
  const orden = await ordenes.findById(req.params.idOrden, {
    estado: true,
  });
  if (orden.estado == 4) {
    res.json({ ordenEnDestino: true });
  } else {
    res.json({ ordenEnDestino: false });
  }
};
