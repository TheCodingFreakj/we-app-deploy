const express = require("express");
const router = express.Router();
const {
  Signup,
  Signin,
  Signout,
  // accessAuthenticated,
} = require("../controllers/usersController");
const { runValidation } = require("../middlewares/valiadtionErrors");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../middlewares/checkValidation");
//const { protectionAuth } = require("../middlewares/protectionAuth");
router.post("/signup", userSignupValidator, runValidation, Signup);
router.post("/signin", userSigninValidator, runValidation, Signin);
// router.get("/signin", protectionAuth, accessAuthenticated);
router.get("/signout", Signout);

module.exports = router;
