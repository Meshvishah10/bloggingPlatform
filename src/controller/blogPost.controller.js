import {
  creatBlogPostService,
  deleteBlogPostService,
  getAllBlogPostService,
  getBlogPostService,
  updateBlogPostService,
} from "../service/blogPost.service.js";
import { resType } from "../response/res.types.js";

export async function createBlogPostController(req, res) {
  const data = req.body;
  const result = await creatBlogPostService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

export async function getBlogPostController(req, res) {
  const id = req.params.id;
  const result = await getBlogPostService(id);
  if (result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//get All Users
export async function getAllBlogPostController(req, res) {
  const result = await getAllBlogPostService();
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Update User By Id
export async function updateBlogPostController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateBlogPostService(id, data);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete User By Id
export async function deleteBlogPostController(req, res) {
  const id = req.params.id;
  const result = await deleteBlogPostService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

export async function getUserByIdPostController(req, res) {
  const id = req.params.id;
  const result = await getBlogPostService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
