import { Router } from "express";
import {
  getUserController,
  getAllUserController,
  updateUserController,
  deleteUserController,
  createUserController,
} from "../controller/user.controller.js";
import { auth } from "../middleware/auth.js";
import { userValidator } from "../validation/user.validation.js";

const UserRouter = Router();

UserRouter.post("/", userValidator ,createUserController);               //Create User 
UserRouter.get("/", auth , getAllUserController);                        //Get All User
UserRouter.get("/:id",auth, getUserController);                          //Get User By Id
UserRouter.put("/:id",auth, updateUserController);                       //Update User By Id
UserRouter.delete("/:id",auth, deleteUserController);                    //Delete User By Id

export { UserRouter };
