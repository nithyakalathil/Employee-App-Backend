const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {employeemodel}=require("./models/employee")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nithya:nithya913@cluster0.r7eo1il.mongodb.net/employeesdb?retryWrites=true&w=majority&appName=Cluster0")


app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/add",(req,res)=>{
    let input=req.body
    let employee=new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({status:"Success"})
    
})

app.get("/view",(req,res)=>{
    employeemodel.find().then((data)=>{
        res.json(data)

    }).catch()
    
})

app.listen(8081,()=>{
    console.log("server started")
})
