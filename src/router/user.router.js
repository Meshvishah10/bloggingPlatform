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

UserRouter.post("/", userValidator ,createUserController);
UserRouter.get("/", auth , getAllUserController);
UserRouter.get("/:id",auth, getUserController);
UserRouter.put("/:id",auth, updateUserController);
UserRouter.delete("/:id",auth, deleteUserController);

export { UserRouter };
