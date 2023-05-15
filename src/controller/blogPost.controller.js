import {
  creatBlogPostService,
  deleteBlogPostService,
  getAllBlogPostService,
  getBlogPostService,
  updateBlogPostService,
} from "../service/blogPost.service.js";
import { resType } from "../response/res.types.js";
import { validate } from "uuid";

//Creat BLog Post Controller
export async function createBlogPostController(req, res) {
  const data = req.body;
  const result = await creatBlogPostService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//Get Blog Post By Id Controller
export async function getBlogPostController(req, res) {
  const id = req.params.id;
  if (!validate(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  const result = await getBlogPostService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//Get All Blog Post Controller
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

//Update Blog Post Controller
export async function updateBlogPostController(req, res) {
  const data = req.body;
  const id = req.params.id;
  if (!validate(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  if (Object.keys(data).length === 0 || data == undefined)
    return res
      .status(400)
      .json({ response: resType.EMPTYDATA, statusCode: 400 });
  const result = await updateBlogPostService(id, data);
  // console.log(result[0])
  if (result == null || result == undefined || result[0] === 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });

  const updated_data = await getBlogPostService(id);
  return res
    .status(200)
    .json({ data: updated_data, res: resType.SUCCESS, statusCode: 200 });
}

//Delete BlogPost Controller
export async function deleteBlogPostController(req, res) {
  const id = req.params.id;
  if (!validate(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  const result = await deleteBlogPostService(id);
  if (result == null || result == undefined || result === 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
