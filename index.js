import express, { json as _json } from "express";
import "dotenv/config.js";
import { router } from "./src/router/router.js";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }));
router(app);
app.listen(process.env.SPORT, () => {
  console.log(`Application is listening at port ${process.env.SPORT}`);
});
app.get("/", (req, res) => {
  res.json("messhvi");
});

