import { User } from '@prisma/client';

import prisma from '../../utils/prisma';
import { ITodo } from './todo.interface';





// Create a Todo
const createTodoIntoDB = async (payload: ITodo|any) => {
  console.log(payload,'hello')
  const result = await prisma.todo.create({
    data: payload,
  });
  return result;
};

const getTodosFromDB = async (userId: string) => {
  const result = await prisma.todo.findMany({
    where:{
      userId: userId
    },
    include: {
      user: true,
    },
  });
  return result;
};


// Update a Todo by its ID
const updateTodoFromDB = async (id: string, payload: Partial<ITodo>) => {
  
  const result = await prisma.todo.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteTodoFromDB = async (id: string,) => {
  const result = await prisma.todo.delete({
    where: { id },
    
  });
  return result;
};




export const TodoServices = {
  createTodoIntoDB,
  getTodosFromDB,
  updateTodoFromDB,
  deleteTodoFromDB
};
