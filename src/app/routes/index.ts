import express from 'express';
import { AuthRouters } from '../modules/Auth/auth.routes';
import { UserRouters } from '../modules/User/user.routes';
import { TodoRouters } from '../modules/TodoModule/todo.routes';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/users',
    route: UserRouters,
  },
  {
    path: '/todo',
    route: TodoRouters,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
