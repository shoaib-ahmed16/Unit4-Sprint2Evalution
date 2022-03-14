const mongoose =require("mongoose")

const savingSchema =new mongoose.Schema(
    {
        account_number:{type:Number,require:true},
        balance:{type:Number,require:true},
        interestRate:{type:Number,require:true},
        createdAt:{type:String,require:true},
        updatedAt:{type:String,require:true}
    }
)

module.exports =mongoose.model("SavingsAccount",savingSchema)