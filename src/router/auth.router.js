import { Router } from "express";

import { loginController } from "../controller/auth.controller.js";

const AuthRouter = Router();

AuthRouter.post("/login",loginController );               //Login


export { AuthRouter };
