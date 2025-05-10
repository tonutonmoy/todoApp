import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { RoomMateControllers } from './roommates.controller';
import { RoomMateListingValidation } from './roommates.validation';


const router = express.Router();

router.post(
  '/',auth(),
  validateRequest(RoomMateListingValidation.RoomMateListing),
  RoomMateControllers.addRoomMateBlog,
);
router.get(
  '/',auth(),
  RoomMateControllers.getAllRoomMates,
);
router.get(
  '/myRoomMate',auth(),
  RoomMateControllers.getMyRoomMate,
);



export const RoomateRouters = router;
