const express = require("express")
const { allMenuController } = require("../../controller/MenuController/MenuController")
const { API } = require("../../utils/content")
const menuRouter = express.Router()



menuRouter.get(
    API.API_CONTEXT + API.allMenuGet,
    allMenuController
)
module.exports=menuRouter