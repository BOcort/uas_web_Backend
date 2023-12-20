const express = require("express")
const {create,login} = require("../controller/userController")

const router = express.Router()

router.post('/',create)
router.post('/login',login)

module.exports = router