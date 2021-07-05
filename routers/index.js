const {Router} = require('express')
const Turismo=require("../controllers/turismo.controller")

const router= Router()
router.get("/servicios",Turismo.getTurismo)
router.get("/",Turismo.getTurismo)

module.exports=router