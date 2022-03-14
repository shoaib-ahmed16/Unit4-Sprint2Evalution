const mongoose =require("mongoose")

const branchSchema =new mongoose.Schema(
    {
        name:{type:String,require:true},
        address:{type:String,require:true},
        IFSC:{type:String,require:true},
        MICR:{type:Number,require:true},
        createdAt:{type:String,require:true},
        updatedAt:{type:String,require:true}
    }
)

module.exports =mongoose.model("BranchDetail",branchSchema)