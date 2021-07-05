const {Router} = require("express")
const router= Router()

const{getTurismo,getTurismoName}=require("../controllers/turismo.controller")
router.get("/servicios",getTurismo)
router.get("/",getTurismo)


module.exports=router