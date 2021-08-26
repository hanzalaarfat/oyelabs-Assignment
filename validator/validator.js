const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
  check("name")
    .isLength({ min: 4 })
    .withMessage("Name is required minimum 4 Charactor"),

  check("phone")
    .isLength({ min: 10 })
    .isLength({ max: 10 })
    .withMessage("Phone Number  must be 10 digit"),
];

exports.validateSigninRequest = [
  check("phone")
    .isLength({ min: 10 })
    .withMessage("Phone Number  must be 10 digit"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
