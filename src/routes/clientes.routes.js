import { Router } from "express"; //servira para definir las rutas
import *as clienteController from '../controllers/cliente.controller'  //todos los modulos de ../controllers/task.controller bajo el nombre taskController
 
const router = Router();

router.post('/registrarse', clienteController.nuevoCliente);


router.post('/iniciarSesion' ,clienteController.iniciarSesion )

router.get('/obtenerCategorias' ,clienteController.obtenerCategorias )

router.post('/crearOrden' ,clienteController.nuevaOrden)

router.get('/obtenerEmpresas/:idCategoria' ,clienteController.obtenerEmpresasCategoria )

router.get('/obtenerUnaEmpresa/:idEmpresa' ,clienteController.obtenerUnaEmpresa ) //obtener nombree informacion de una unica empresa

router.get('/obtenerProductosSub/:idEmpresa' ,clienteController.obtenerProductosSubCat )

router.get('/ordenEntregada/:idOrden' ,clienteController.ordenEntregada )





export default router; //exportando el modulo