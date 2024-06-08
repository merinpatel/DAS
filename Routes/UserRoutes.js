import express from 'express'
import { authController,bookingAvailabilityController,userAppointmentsController, loginController,registerController ,applyDoctorController,getAllNotificationController,deleteAllNotificationController,getAllDocotrsController,bookeAppointmnetController} from '../Controller/UserCtrl.js';
import authMiddleware from '../Middleware/authMiddleware.js';

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

router.post("/getUserData",authMiddleware,authController)

router.post("/apply-doctor", authMiddleware, applyDoctorController);


router.post(
    "/get-all-notification",
    authMiddleware,
    getAllNotificationController
  );

  router.post(
    "/delete-all-notification",
    authMiddleware,
    deleteAllNotificationController
  );
  router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);
  router.post("/book-appointment", authMiddleware, bookeAppointmnetController);
  router.post(
    "/booking-availbility",
    authMiddleware,
    bookingAvailabilityController
  );
  router.get("/user-appointments", authMiddleware, userAppointmentsController);
export default router;