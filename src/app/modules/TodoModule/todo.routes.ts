import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';

import { UserValidations } from './todo.validation';
import { TodoControllers } from './todo.controller';
const router = express.Router();

router.post(
  '/',auth(),
  validateRequest(UserValidations.registerUser),
  TodoControllers.crerateTodo,
);


router.get('/',auth(), TodoControllers.getAllTodos);


router.put(
  '/:id',

  auth(),TodoControllers.updateTodo,
);


router.delete(
  '/:id',auth(),
 
  TodoControllers.deleteTodo,
);



export const TodoRouters = router;
