import { passwordHash } from "../helper/passwordhash.helper.js";
import { UserSchema } from "../model/user.model.js";

export async function updateUserService(id,body) {
  const result = await UserSchema.update(body,{ where: { id } } );
  return result;
}
export async function creatUserService(data) {
  const email =await  getUserByEmailService({email:data.email})
  if(email) return null
   const hash = await passwordHash(data.password);
   data.password = hash;

  const result = await UserSchema.create(data);
  return result;
}

export async function getUserService(id) {
  const result = await UserSchema.findOne({ where: {id} });
  return result;
}
export async function getUserByEmailService(email) {
  const result = await UserSchema.findOne({ where: email  });
  return result;
}
export async function getAllUserService() {
  const result = await UserSchema.findAll();
  return result;
}

export async function deleteUserService(id) {
  const result = await UserSchema.destroy({ where: {id} });
  return result;
}
