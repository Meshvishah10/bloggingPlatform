//const ClientRouter = require("./client.router")
// import { AuthRouter } from "./auth.router.js";

import { auth } from "../middleware/auth.js";
import { AuthRouter } from "./auth.router.js";
import { BlogPostRouter } from "./blogPost.router.js";
import { UserRouter } from "./user.router.js";

const router = (app) => {
  app.use("/user", UserRouter); //User
  app.use("/posts",auth, BlogPostRouter);
  app.use("/auth",AuthRouter)
};

export { router };
