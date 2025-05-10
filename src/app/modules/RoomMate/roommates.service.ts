import { PrismaClient } from '@prisma/client';
import { IRoomMateListing } from './roommates.interface';

const prisma = new PrismaClient();

// Function to create a new RoomMateListing
const createRoomMateIntoDB = async (payload: any) => {
  const result = await prisma.$transaction(async (tx) => {
    const newListing = await tx.roomMateListing.create({
      data: payload
    });
    return newListing;
  });

  return result;
};

// Function to get all RoomMate listings
const getRoomMateIntoDB = async ({ skip, limit }: { skip: number; limit: number }) => {
  const data = await prisma.addRoomet.findMany({
    skip,
    take: limit,
  });

  const total = await prisma.addRoomet.count();

  return { data, total };
};

// Function to get RoomMate listings by authorId
const getMyRoomMateIntoDB = async (
  id: string,
  { skip, limit }: { skip: number; limit: number }
) => {
  // const result = await prisma.addRoomet.findMany({
  //   where: { userId: id },  // Assuming userId is the correct field for author
  //   skip,
  //   take: limit,
  //   include: {
  //     user: true,  // Assuming user is the relation name, update based on schema
  //     comments: true,
  //     likes: true,
  //   },
  // });

  // const total = await prisma.addRoomet.count({
  //   where: { userId: id },  // Assuming userId is the correct field for author
  // });

  // return {
  //   data: result,
  //   total,
  // };
  return {
    data: {},
    total: 10,
  };
};

export const RoomMateDBServices = {
  createRoomMateIntoDB,
  getRoomMateIntoDB,
  getMyRoomMateIntoDB,
};
