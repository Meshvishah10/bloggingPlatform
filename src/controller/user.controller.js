import {
  creatUserService,
  deleteUserService,
  getAllUserService,
  getUserService,
  updateUserService,
} from "../service/user.service.js";
import { resType } from "../response/res.types.js";
export async function createUserController(req, res) {
  const data = req.body;
  const result = await creatUserService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

export async function getUserController(req, res) {
  const id = req.params.id;
  //console.log(id)
  const result = await getUserService(id);
  if (result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//get All Users
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
//Update User By Id
export async function updateUserController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateUserService(id, data);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete User By Id
export async function deleteUserController(req, res) {
  const id = req.params.id;
  const result = await deleteUserService(id);
  if (result == null || result == undefined || result.length <= 0)
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
