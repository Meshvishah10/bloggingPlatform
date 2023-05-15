import jwt from "jsonwebtoken";
import { getUserService } from "../service/user.service.js";
import { resType } from "../response/res.types.js";
const secret = process.env.JWT_KEY;
export async function auth(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    if (typeof authHeader !== "undefined") {
      const token = authHeader.split(" ")[1];

      // Verify token
      jwt.verify(token, secret, async (err, payload) => {
        if (err) return res.sendStatus(403);

        const { obj } = payload;

        const { id } = obj;
        const result = await getUserService(id);

        if (!result)
          return res.json({ res: resType.INVALIDTOKEN, statusCode: 404 });

        req.user = obj;

        next();
      });
    } else {
      return res.json({ res: resType.INVALIDHEADER, statusCode: 400 });
    }
  } catch (error) {
    return res.json({ error: error.message, statusCode: 500 });
  }
}
