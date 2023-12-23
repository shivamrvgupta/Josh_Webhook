const express = require("express");
const router = express.Router();
const {whatsAppController} = require("../controllers")

router
.get("/", whatsAppController.verifyToken )
.post("/", whatsAppController.receivedToken)

module.exports = router