const Employee=require('../Models/Employee')
const createEmployee=async(req,res)=>{
    try{
        const {name,classno,id}=req.body
        const employee=new Employee({name,classno,id})
    await employee.save()
    console.log("Employee Saved to Database:", employee);
    res.status(201).json(employee)
    }
    catch(error){
            console.log(error)
            res.status(500).json({message:'server error'})
    }
}

const getEmployee=async(req,res)=>{
    try{
     const employee=await Employee.find()
    
    console.log("Employee Saved to Database:", employee);
    
    }
    catch(error){
            console.log(error)
            res.status(500).json({message:'server error'})
    }
}


const updateEmployee=async(req,res)=>{
    try{
        const {name,classno,id}=req.body 
        const employee=await Employee.findByIdAndUpdate(req.param.id,{name,classno,id})
    if(!employee){
   console.log(employee)
    return res.status(400).json({message:"not found"})
    }
    res.status(500).json(employee)
   }catch(error){
        console.log("not found")
        res.status(500).json({message:"sever error"})
    }

} 
    module.exports={createEmployee,getEmployee,updateEmployee}