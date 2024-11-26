import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { userService } from "./user.service";

const registerUser = catchAsync(async (req, res) => {
  const result = await userService.registerUserIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User registered successfully",
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await userService.getAllUsersFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Users Retrieve successfully",
    data: result,
  });
});

const getMyProfile = catchAsync(async (req, res) => {
  const id = req.user.id;
  const result = await userService.getMyProfileFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Profile retrieved successfully",
    data: result,
  });
});

const getUserDetails = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.getUserDetailsFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User details retrieved successfully",
    data: result,
  });
});

const updateMyProfile = catchAsync(async (req, res) => {
  const id = req.user.id;
  const result = await userService.updateMyProfileIntoDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User profile updated successfully",
    data: result,
  });
});

const updateUserRoleStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.updateUserRoleStatusIntoDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User updated successfully",
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await userService.changePassword(user, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Password changed successfully",
    data: result,
  });
});

export const userController = {
  registerUser,
  getAllUsers,
  getMyProfile,
  getUserDetails,
  updateMyProfile,
  updateUserRoleStatus,
  changePassword,
};
