import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TodoServices } from './todo.service';
import config from '../../../config';
import { jwtHelpers } from '../../errors/helpers/jwtHelpers';
import prisma from '../../utils/prisma';

const crerateTodo = catchAsync(async (req, res) => {
  const token = req.headers.authorization as string;

  if (!token) {
    throw new Error("Unauthorized Access");
  }

  const { email } = jwtHelpers.verifyToken(
    token,
    config.jwt.access_secret as string
  );
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new Error("Unauthorized Access");
  }
  const result = await TodoServices.createTodoIntoDB(req.body);


  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message:
      'todo created successfully',
    data: result,
  });
});

const getAllTodos = catchAsync(async (req, res) => {

  const token = req.headers.authorization as string;

  if (!token) {
    throw new Error("Unauthorized Access");
  }

  const { email } = jwtHelpers.verifyToken(
    token,
    config.jwt.access_secret as string
  );
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new Error("Unauthorized Access");
  }

  const result = await TodoServices.getTodosFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Todo Retrieve successfully',
    data: result,
  });
});

const updateTodo = catchAsync(async (req, res) => {
  const token = req.headers.authorization as string;

  if (!token) {
    throw new Error("Unauthorized Access");
  }

  const { email } = jwtHelpers.verifyToken(
    token,
    config.jwt.access_secret as string
  );
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new Error("Unauthorized Access");
  }
 
  const result = await TodoServices.updateTodoFromDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'todo update successfully',
    data: result,
  });
});

const deleteTodo = catchAsync(async (req, res) => {
  const token = req.headers.authorization as string;

  if (!token) {
    throw new Error("Unauthorized Access");
  }

  const { email } = jwtHelpers.verifyToken(
    token,
    config.jwt.access_secret as string
  );
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new Error("Unauthorized Access");
  }
 
  const result = await TodoServices.deleteTodoFromDB(req?.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'todo delete successfully',
    data: result,
  });
});


export const TodoControllers = {
  crerateTodo,
  deleteTodo,
  updateTodo,
  getAllTodos

};
