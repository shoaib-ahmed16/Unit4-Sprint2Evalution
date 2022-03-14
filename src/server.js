const connect =require("./configue/database.js")

const app = require("./index.js")


app.listen(4445,async ()=>{
    try{
        await connect()
    }
    catch (err)
    {
        console.log("DATABASE ERROR:",err)
    }

})