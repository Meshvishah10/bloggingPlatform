import { blogSchema } from "../model/blog.model.js";

export async function updateBlogPostService(body, id) {
  const result = await blogSchema.update(body, {where:{id}});
  return result;
}

export async function creatBlogPostService(data) {
  const result = await blogSchema.create(data);
  return result;
}

export async function getBlogPostService(id) {
  const result = await blogSchema.findOne({ where: {id} });
  return result;
}

export async function getAllBlogPostService() {
  const result = await blogSchema.findAll();
  return result;
}

export async function deleteBlogPostService(id) {
  const result = await blogSchema.destroy({ where: {id} });
  return result;
}
