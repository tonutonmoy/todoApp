import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';

import { UserValidations } from './todo.validation';
import { TodoControllers } from './todo.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(UserValidations.registerUser),
  TodoControllers.crerateTodo,
);


router.get('/', TodoControllers.getAllTodos);


router.put(
  '/',

  TodoControllers.updateTodo,
);


router.delete(
  '/',
 
  TodoControllers.deleteTodo,
);



export const TodoRouters = router;
