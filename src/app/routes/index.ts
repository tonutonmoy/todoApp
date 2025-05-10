import express from 'express';
import { AuthRouters } from '../modules/Auth/auth.routes';
import { UserRouters } from '../modules/User/user.routes';
import { RoomateRouters } from '../modules/RoomMate/roommates.routes';

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
    path: '/roomates',
    route: RoomateRouters,
  },
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
