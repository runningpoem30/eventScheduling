const express = require("express")

const Router = express.Router();


const { registerNewUser , loginUser } = require("../controllers/signupController")

Router.post("/signup" , registerNewUser)
Router.post("/login" , loginUser)


module.exports = Router;