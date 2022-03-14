const mongoose =require("mongoose")

const userSchema =new mongoose.Schema(
    {
        firstName:{type:String,require:true},
        middleName:{type:String},
        lastName:{type:String,require:true},
        age:{type:String,require:true},
        address:{type:String,require:true},
        email:{type:String,require:true},
        gender:{type:String,default:"Female"},
        type:{type:String,default:"customer"},
        createdAt:{type:String,require:true},
        updatedAt:{type:String,require:true}
    }
)

module.exports =mongoose.model("User",userSchema)