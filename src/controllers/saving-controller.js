const express = require("express")

const user =require("../models/saving.js")

const crudcontroller =require("./crud-controller")

const router =express.Router();

router.get("",crudcontroller.get(user))

router.post("",crudcontroller.post(user))

router.patch("/:id",crudcontroller.patch(user))

router.delete("/:id",crudcontroller.deleted(user))



module.exports =router;


