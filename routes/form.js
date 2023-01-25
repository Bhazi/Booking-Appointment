const express = require("express");

const path = require("path");
const router = express.Router();
const formsController = require("../controller/forms");

router.get("/", formsController.getForm);
router.post("/", formsController.postForm);
router.post("/delete", formsController.postDeleteProduct);

module.exports = router;
