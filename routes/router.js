const express = require("express")
const menuRouter = require("./MenuRouter/MenuRouter")
const appRouter = express.Router()

// menu router 
appRouter.use(menuRouter)
module.exports=appRouter