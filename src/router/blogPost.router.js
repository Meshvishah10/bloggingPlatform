import { Router } from "express";
import {
  getBlogPostController,
  getAllBlogPostController,
  updateBlogPostController,
  deleteBlogPostController,
  createBlogPostController,
} from "../controller/blogPost.controller.js";
import { blogPostValidator } from "../validation/blogPost.validation.js";
const BlogPostRouter = Router();

BlogPostRouter.post("/",blogPostValidator, createBlogPostController);

BlogPostRouter.get("/", getAllBlogPostController);
BlogPostRouter.get("/:id", getBlogPostController);
BlogPostRouter.put("/:id", updateBlogPostController);
BlogPostRouter.delete("/:id", deleteBlogPostController);

export { BlogPostRouter };
