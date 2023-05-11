import { resType } from "../response/res.types.js";

export async function blogPostValidator(req, res, next) {
  const result = req.body;
  console.log(result);
  if (!result.heading && !result.detail)
    return await res
      .status(400)
      .json({ res: resType.VALIDAION, statusCode: 400 });
  next();
}
