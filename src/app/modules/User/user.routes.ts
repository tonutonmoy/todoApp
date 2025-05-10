import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';
import { UserValidations } from './user.validation';
const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidations.registerUser),
  UserControllers.registerUser,
);

router.post(
  '/resend-verification-email',
  UserControllers.resendUserVerificationEmail,
);

router.get('/', UserControllers.getAllUsers);

router.get('/me', auth('USER', 'ADMIN'), UserControllers.getMyProfile);

router.get('/:id', UserControllers.getUserDetails);
router.put(
  '/update-profile',
  auth('USER', 'ADMIN'),
  UserControllers.updateMyProfile,
);
router.get('/verify-email/:token', UserControllers.verifyUserEmail);

router.put(
  '/update-user/:id',
  auth('ADMIN'),
  UserControllers.updateUserRoleStatus,
);

router.post(
  '/change-password',
  auth('USER', 'ADMIN'),
  UserControllers.changePassword,
);



router.post('/reset-password/send-otp', UserControllers.sendResetOtp);
router.post('/reset-password/verify-otp', UserControllers.resetPasswordWithOtp);


export const UserRouters = router;
