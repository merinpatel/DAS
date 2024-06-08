import express from 'express'
import { getDoctorInfoController,updateProfileController ,updateStatusController,doctorAppointmentsController,getDoctorByIdController} from '../Controller/doctorCtrl.js';
import authMiddleware from '../Middleware/authMiddleware.js';
const doctorrouter = express.Router();

//POST SINGLE DOC INFO
doctorrouter.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
doctorrouter.post("/updateProfile", authMiddleware, updateProfileController);
doctorrouter.post("/getDoctorById", authMiddleware, getDoctorByIdController);
doctorrouter.get(
    "/doctor-appointments",
    authMiddleware,
    doctorAppointmentsController
  );
  doctorrouter.post("/update-status", authMiddleware, updateStatusController);
export default doctorrouter;

//POST UPDATE PROFILE