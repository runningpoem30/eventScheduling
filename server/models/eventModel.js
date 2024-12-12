const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  eventName : {
    type : String ,
    required : true
  },
  date : {
    type : Date ,
    required : true
  },
  time:{
    type : String,
    required : true
  },
  venue : {
    type : String
  },
  remindBefore :{
    type : String
  },
  description : {
    type : String
  }
})

const Event = mongoose.model("Event" , eventSchema)
module.exports = Event;
