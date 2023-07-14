import express from "express";
// import { signup, signin } from '../controllers/auth'

const router = express.Router();

//controllers
const { signup, signin } = require("../controllers/auth");

router.get("/", (req, res) => {
  return res.json({
    data: "Hello",
  });
});

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
