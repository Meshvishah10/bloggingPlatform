import {
  creatUserService,
  deleteUserService,
  getAllUserService,
  getUserService,
  updateUserService,
} from "../service/user.service.js";
import { resType } from "../response/res.types.js";
import { validate } from "uuid";

//Creat User Controller
export async function createUserController(req, res) {
  const data = req.body;
  const result = await creatUserService(data);
  if (result === null)
    return res.status(400).json({ res: resType.EMAIL, statusCode: 400 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//Get User By Id Controller
export async function getUserController(req, res) {
  const id = req.params.id;
  if (!validate(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  const result = await getUserService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//get All Users Controller
export async function getAllUserController(req, res) {
  const result = await getAllUserService();
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//Update User By Id Controller
export async function updateUserController(req, res) {
  const data = req.body;
  const id = req.params.id;
  if (!validate(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  if (Object.keys(data).length === 0 || data == undefined)
    return res
      .status(400)
      .json({ response: resType.EMPTYDATA, statusCode: 400 });
  const result = await updateUserService(id, data);
  if (result == null || result == undefined || result[0] === 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });

  const updated_data = await getUserService(id);
  return res
    .status(200)
    .json({ data: updated_data, res: resType.SUCCESS, statusCode: 200 });
}

//Delete User By Id Controller
export async function deleteUserController(req, res) {
  const id = req.params.id;
  if (!validate(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  const result = await deleteUserService(id);

  if (result == null || result == undefined || result === 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

export async function getUserByIdController(req, res) {
  const id = req.params.id;
  const result = await getUserService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
