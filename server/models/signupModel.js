const mongoose = require ("mongoose")
const bcrypt = require("bcrypt")
const signUpSchema = new mongoose.Schema({
  firstName : {
    type : String,
    require : true
  },
  lastName : {
    type : String,
    require : true
  }, 
  companyName : {
    type : String,
    require : true
  },
  email : {
    type : String,
    require: true,
  },
  phoneNumber : {
    type : Number ,
    require : true
  },
  city : {
    type : String , 
    required : true
  },
  state : {
    type :String , 
    required : true
  },
  password : {
    type : String , 
    required : true ,
    minlength : 6,
  },
  confirmPassword : {
    type : String,
    required : true
  }
})

signUpSchema.methods.isPasswordMatch = function () {
  return this.password = this.confirmPassword
}


signUpSchema.pre("save" , async function(next) {
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password , 10)
  }
  next()
})

const signupModel = mongoose.model("signup" , signUpSchema)
module.exports = signupModel ; 