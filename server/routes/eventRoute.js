const express = require("express")
const Router = express.Router()

const { addNewTask } = require("../controllers/eventController")


Router.post('/' , addNewTask)


module.exports = Router