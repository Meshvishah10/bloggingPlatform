import { Router } from "express";

import { loginController } from "../controller/auth.controller.js";
// import { userValidator } from "../validators/user.validators.js";
// import { auth } from "../middleware/auth.js";
const AuthRouter = Router();

AuthRouter.post("/login", loginController );


export { AuthRouter };
