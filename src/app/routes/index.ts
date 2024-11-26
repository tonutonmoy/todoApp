import express from "express";
import { authRouters } from "../modules/auth/auth.routes";
import { userRouters } from "../modules/user/user.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRouters,
  },
  {
    path: "/auth",
    route: authRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
