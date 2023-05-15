import { resType } from "../response/res.types.js";
import { getUserByEmailService } from "../service/user.service.js";
import { tokenGen } from "../helper/tokenGen.helper.js";
import { passwordBcrypt } from "../helper/passwordBcrypt.helper.js";

//Login Password Controller
export async function loginController(req, res) {
  const { email, password } = req.body;
  const data = await getUserByEmailService({ email });
  if (!data)
    return res
      .status(401)
      .json({ res: resType.WRONG_CREDENTIAL, statusCode: 401 });
  const hash = data.password;
  const result = await passwordBcrypt(password, hash);
  if (!result)
    return res
      .status(401)
      .json({ res: resType.WRONG_CREDENTIAL, statusCode: 401 });
  const obj = {
    email: email,
    id: data.id,
  };
  const accessToken = await tokenGen(obj);
  return res.status(200).json({
    data: { data, accessToken },
    res: resType.LOGGED_IN,
    statusCode: 200,
  });
}
