const express = require("express");
const router = express.Router();
const controller = require("../controllers/records");

router.get("/", controller.getAllRecords);

router.get("/:id", controller.getRecord);

router.post("/", controller.addRecord);

router.post("/:id", controller.updateRecord);

router.post("/favorites/:id", controller.updateFavorites);

router.delete("/", controller.removeRecord);

module.exports = router;
