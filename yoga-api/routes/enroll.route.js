const express = require("express")
const router = express.Router()

const {enrollUser} = require("../controller/enrollment.controller")

router.post("/enrollUser", enrollUser)

module.exports=router
