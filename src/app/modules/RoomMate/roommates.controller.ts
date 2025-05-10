import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

import { calculatePagination } from '../../utils/calculatePagination';
import { RoomMateDBServices } from './roommates.service';


const addRoomMateBlog = catchAsync(async (req, res) => {
  const result = await RoomMateDBServices.createRoomMateIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
 
    message: 'Add Roomate  successfully',
    data: result,
  });
});

const getAllRoomMates = catchAsync(async (req, res) => {
 
  const{skip,limit,page}=  calculatePagination({})

  const { data, total } = await RoomMateDBServices.getRoomMateIntoDB({ skip, limit });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Paginated blogs retrieved successfully',
    meta: {
      limit,
      page,
      total,
      totalPage: Math.ceil(total / limit),
    
    },
    data,
  });
});


const getMyRoomMate = catchAsync(async (req, res) => {
  const { userId } = req.user;
  const{skip,limit,page}=  calculatePagination({})
  const { data, total } = await RoomMateDBServices.getMyRoomMateIntoDB(userId,{ skip, limit });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Paginated blogs retrieved successfully',
    meta: {
      limit,
      page,
      total,
      totalPage: Math.ceil(total / limit),
    
    },
    data,
  });
});

export const RoomMateControllers = {
  addRoomMateBlog,
  getAllRoomMates,
  getMyRoomMate,
};
