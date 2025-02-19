import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionController from './controllers/ConnectionControllers';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionController();

//Uma interface determina os tipos de arquivos que temos no Item.

routes.get('/classes', classesControllers.index); 
routes.post('/classes', classesControllers.create); 

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)


export default routes;
