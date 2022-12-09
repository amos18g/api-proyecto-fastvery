import { Router } from "express"; //servira para definir las rutas
import *as adminController from '../controllers/admin.controller'; //exportara todos los modulos de ../controllers/task.controller bajo el nombre adminController
import *as motController from '../controllers/moto.controller' 
 
const router = Router();

// router.post('/', adminController.newAdmin);

router.post('/', adminController.login) //iniciar sesion

//categorias
router.post('/nuevaCategoria', adminController.nuevaCategoria) //crear categoria

router.get('/obtenerCategorias', adminController.obtenerCategorias) //obtener categorias

//empresas
router.post('/crearEmpresa/:idCategoria', adminController.crearEmpresa);

router.delete('/eliminarEmpresa/:idEmpresa', adminController.eliminarEmpresa);

router.get('/obtenerCategorias', adminController.obtenerCategorias) //obtener categorias

router.post('/obtenerEmpresas', adminController.obtenerEmpresas) //obtener categorias

router.get('/obtenerEmpresas/:idCategoria', adminController.obtenerEmpresasCategoria) //obtener empresas de una categoria

//sub categorias
router.post('/nuevaSubCategoria/:idEmpresa', adminController.nuevaSubCategoria) 

router.get('/obtenerSubCategorias', adminController.obtenerSubCategorias)

//productos
router.post('/crearProducto/:idSubcategoria', adminController.crearProducto)

router.get('/crearProducto/obtenerProductos/subcategoria/:idEmpresa', adminController.obtenerProductosSubCat)//devolvera los productos separados por sub categoria , se le enviara el id de la empresa


//solicitudes motoristas
router.get('/solicitudes', adminController.obtenerSolicitudes); //enviara una lista con los motoristas que estan en solicitud

router.put('/solicitud/aprobar/:idMotorista', adminController.aprobarMotorista); //aprobara motorista enviado por id

router.delete('/solicitud/rechazar/:idMotorista', adminController.rechazarMotorista ); //eliminara un motorista solicitante

router.get('/solicitud/:idMotorista', adminController.obtenerMotorista); //devolvera un motorista por id

router.post('/ordenesDisponibles/:zona' ,motController.listarOrdenes ) //enviar req.body.estado:0 y zn en params

router.get('/listarMotoristas' ,adminController.listarMotoristas )

router.put('/asignarOrdenMotorista' , motController.cambiarEstadoOrden) //enviar req.body con estado:1, idMotorista y idOrden 




export default router; //exportando el modulo