const express = require("express");
const { register, login, refresh, logout } = require("../controllers/authController");
const { auth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh",  refresh);
router.post("/logout",  logout);

module.exports = router;
