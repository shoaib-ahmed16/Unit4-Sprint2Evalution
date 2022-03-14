const mongoose =require("mongoose")

const masterSchema =new mongoose.Schema(
    {
        userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
        brachId:{type:mongoose.Schema.Types.ObjectId,ref:"BranchDetail"},
        savingId:{type:mongoose.Schema.Types.ObjectId,ref:"SavingsAccount"},
        fixedId:{type:mongoose.Schema.Types.ObjectId,ref:"FixedAccount"},
        balance:{type:Number,require:true},
        createdAt:{type:String,require:true},
        updatedAt:{type:String,require:true}
    }
)

module.exports =mongoose.model("MasterAccount",masterSchema)