const get =(model)=>async (req,res)=>{

    try{
        let item =await model.find().lean().exec();

        return res.status(200).send(item);
    }
    catch (err)
    {
        return res.status(500).send({Message:err.Message})
    }
}


const post =(model)=>async (req,res)=>{

    try{
        let item =await model.create(req.body).lean().exec();

        return res.status(200).send(req.body);
    }
    catch (err)
    {
        return res.status(500).send({Message:err.Message})
    }
}

const patch =(model)=>async (req,res)=>{

    try{
        let item =await model.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        return res.status(200).send(item);
    }
    catch (err)
    {
        return res.status(500).send({Message:err.Message})
    }
}


const deleted =(model)=>async (req,res)=>{

    try{
        let item =await model.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(item);
    }
    catch (err)
    {
        return res.status(500).send({Message:err.Message})
    }
}


const getByID =(model)=>async (req,res)=>{

    try{
        let item =await model.findById(req.params.id)
        .populate({path:"userId",select:{firstName:1,lastname:1}})
        .populate({path:"brachId",select:{name:1,IFSC:1}})
        .populate({path:"savingId",select:{account_number:1,balance:1,interestRate:1}})
        .populate({path:"fixedId",select:{account_number:1,balance:1,interestRate:1}})
        .lean().exec();

        return res.status(200).send(item);
    }
    catch (err)
    {
        return res.status(500).send({Message:err.Message})
    }
}

module.exports ={get,post,patch,deleted,getByID}


