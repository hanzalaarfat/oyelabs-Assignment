const express = require("express");
const router = express.Router();
const ans3Controller = require("../Controller/ans3Controller");

router.post("/add", ans3Controller.addNameEmail);
router.post("/update", ans3Controller.ExistEmailThenUpdateName);

module.exports = router;
