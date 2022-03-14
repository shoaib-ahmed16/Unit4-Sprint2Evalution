const express =require("express")

const app =express();

app.use(express.json())

const userController =require("./controllers/user-controller.js")
const masterController =require("./controllers/masterAccount-controller.js")
const branchController =require("./controllers/brachDetail-controller.js")
const savingController =require("./controllers/saving-controller.js")
const fixedController =require("./controllers/fixed-controller.js")


app.use("/User",userController)
app.use("/BranchDetail",branchController)
app.use("/MasterAccount",masterController)
app.use("/SavingsAccount",savingController)
app.use("/FixedAccount",fixedController)

module.exports=app;