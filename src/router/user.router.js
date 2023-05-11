import { Router } from "express";
import {
  getUserController,
  getAllUserController,
  updateUserController,
  deleteUserController,
  createUserController,
} from "../controller/user.controller.js";
import { auth } from "../middleware/auth.js";

const UserRouter = Router();

UserRouter.post("/",createUserController);
UserRouter.get("/", auth , getAllUserController);
UserRouter.get("/:id",auth, getUserController);
UserRouter.put("/:id",auth, updateUserController);
UserRouter.delete("/:id",auth, deleteUserController);

export { UserRouter };
