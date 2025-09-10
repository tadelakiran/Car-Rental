const express = require("express");
const { getProfile, updateProfile, changePassword } = require("../controllers/userController");
const { auth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/getprofile", auth, getProfile);
router.put("/updateProfile", auth, updateProfile);
router.put("/user/change-password", auth, changePassword);

module.exports = router;
