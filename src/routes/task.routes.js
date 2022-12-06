import { Router } from "express"; //servira para definir las rutas
import *as taskController from '../controllers/task.controller'; //exportara todos los modulos de ../controllers/task.controller bajo el nombre taskController
 
const router = Router();

router.post('/', taskController.newTask);

router.get('/', taskController.findAllTasks);

router.get('/done', taskController.findAllDoneTrue);    

router.get('/:id', taskController.fideOneTask);

router.delete('/:id', taskController.deleteTask);

router.put('/:id', taskController.updateTask);



export default router; //exportando el modulo