import express from 'express'
import { getAllDoctorsController,getAllUsersController,changeAccountStatusController } from '../Controller/AdminCtrl.js';
import authMiddleware from '../Middleware/authMiddleware.js';

const routeradmin = express.Router();

//GET METHOD || USERS
routeradmin.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
routeradmin.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//POST ACCOUNT STATUS
routeradmin.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

export default routeradmin;