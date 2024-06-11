const mongoose=require("mongoose")
const schema = mongoose.Schema(

   { "name":String,
    "addr":String,
    "age":String,
   "dept":String,
   }
)

let employeemodel=mongoose.model("employees",schema)

module.exports={employeemodel}