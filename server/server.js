const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const app = express()
const User = require("./models/signupModel")
const userRouter = require("./routes/signupRoute")
const eventRouter = require("./routes/eventRoute")


app.use(express.json())
app.use(cors())
const PORT = 5001;


app.use('/user' , userRouter)
app.use('/event' , eventRouter)

mongoose.connect("mongodb://localhost:27017/eventSchedulingApp")
.then(() => {
  console.log("mongoDB successfully connected");
  app.listen(PORT , () => {console.log(`SERVER IS LISTENING ON PORT ${PORT}`)})
})
.catch((err) => console.log(err))



