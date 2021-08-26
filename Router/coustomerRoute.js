const express = require("express");
const router = express.Router();
const CoustomerController = require("../Controller/coustomerController");

const {
  validateSignupRequest,
  validateSigninRequest,
  isRequestValidated,
} = require("../validator/validator");

router.post(
  "/signup",
  validateSignupRequest,
  isRequestValidated,
  CoustomerController.CoustomerSignup
);
router.post(
  "/login",
  validateSigninRequest,
  isRequestValidated,
  CoustomerController.CoustomerLogin
);

module.exports = router;
