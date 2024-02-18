const express=require('express')
const router=express.Router()
const controllers=require("../controllers/Controllers")
const model=require('../Models/Employee')
router.post('/add-employee',controllers.createEmployee)
router.get('/getemployee',controllers.getEmployee)
router.put('/update/:id',controllers.updateEmployee)
module.exports=router