import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TodoServices } from './todo.service';
import config from '../../../config';
import { jwtHelpers } from '../../errors/helpers/jwtHelpers';
import prisma from '../../utils/prisma';

const crerateTodo = catchAsync(async (req, res) => {

 

const {userId}=req.user;
req.body.userId=userId

  const result = await TodoServices.createTodoIntoDB(req.body);


  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message:
      'todo created successfully',
    data: result,
  });
});


const getAllTodos = catchAsync(async (req, res) => {

  
  const {userId}=req.user;
  const result = await TodoServices.getTodosFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Todo Retrieve successfully',
    data: result,
  });
});

const updateTodo = catchAsync(async (req, res) => {

  const result = await TodoServices.updateTodoFromDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'todo update successfully',
    data: result,
  });
});

const deleteTodo = catchAsync(async (req, res) => {
 
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
