import { Router } from "express"; //servira para definir las rutas
import *as motController from '../controllers/moto.controller'  //todos los modulos de ../controllers/task.controller bajo el nombre taskController
 
const router = Router();

router.post('/registrarse', motController.nuevoMotorista);


router.get('/iniciarSesion' ,motController.iniciarSesion )

router.get('/ordenesDisponibles/:zona' ,motController.listarOrdenes ) //enviar req.body.estado:0
router.get('/ordenesTomadas/:zona' ,motController.listarOrdenes ) //enviar req.body.estado:1
router.get('/ordenesEntregadas/:zona' ,motController.listarOrdenes ) //enviar req.body.estado:3

router.get('/detallesOrden/:idOrden' ,motController.detallerOrden )

router.put('/tomarOrden/' ,motController.cambiarEstadoOrden) //actualizara estado de la orden  req.body.estado:1
router.put('/enCaminoOrden/' ,motController.cambiarEstadoOrden) //actualizara estado de la orden  req.body.estado:2
router.put('/enElOrigenOrden/' ,motController.cambiarEstadoOrden) //actualizara estado de la orden  req.body.estado:3
router.put('/enElDestinoOrden/' ,motController.cambiarEstadoOrden) //actualizara estado de la orden  req.body.estado:4


export default router; //exportando el modulo