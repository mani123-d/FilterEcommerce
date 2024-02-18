const mongoose=require('mongoose')
const employeeTable=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    classno:{
        type:Number,
        required:true
    },
    id:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Employee',employeeTable)