import { config } from "dotenv";
const secret = process.env.JWT_KEY;
import jwt from "jsonwebtoken";

//Token Generate Function
const tokenGen = async (obj) => {
  try {
    const accessToken = jwt.sign(
      {
        obj,
      },
      secret,
      { expiresIn: "6hr" }
    );
    return accessToken;
  } catch {
    return;
  }
};

export { tokenGen };
