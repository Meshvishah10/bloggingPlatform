import { Router } from "express";
import {
  getBlogPostController,
  getAllBlogPostController,
  updateBlogPostController,
  deleteBlogPostController,
  createBlogPostController,
} from "../controller/blogPost.controller.js";
import { blogPostValidator } from "../validation/blogPost.validation.js";
// import { userValidator } from "../validators/user.validators.js";
// import { auth } from "../middleware/auth.js";
const BlogPostRouter = Router();

BlogPostRouter.post("/",blogPostValidator, createBlogPostController);

BlogPostRouter.get("/", getAllBlogPostController);
BlogPostRouter.get("/:id", getBlogPostController);
BlogPostRouter.put("/:id", updateBlogPostController);
BlogPostRouter.delete("/:id", deleteBlogPostController);

export { BlogPostRouter };
