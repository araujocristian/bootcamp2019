import { Router } from 'express';

import authMiddleware from './app/middleware/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// ROTAS PARA USUÁRIOS DO SISTEMA
routes.put('/users', UserController.update);

// ROTAS PARA ESTUDANTES
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

// ROTAS PARA PLANOS
routes.post('/plans', PlanController.store);
routes.get('/plans', PlanController.index);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

export default routes;
