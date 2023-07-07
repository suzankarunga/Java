const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth_controller");

const express = require("express");
const router = express.Router();

module.exports = function(app) {
  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  router.post("/api/auth/signin", controller.signin);
};
module.exports = router;