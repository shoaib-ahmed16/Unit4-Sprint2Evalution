const mongoose =require("mongoose")

const fixedSchema =new mongoose.Schema(
    {
        account_number:{type:Number,require:true},
        balance:{type:Number,require:true},
        interestRate:{type:Number,require:true},
        startDate:{type:Number,require:true},
        maturityDate:{type:Number,require:true},
        createdAt:{type:String,require:true},
        updatedAt:{type:String,require:true}
    }
)

module.exports =mongoose.model("FixedAccount",fixedSchema)