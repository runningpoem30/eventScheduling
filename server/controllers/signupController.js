const express = require("express");
const signupModel = require("../models/signupModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

async function registerNewUser(req, res) {
  try {
    const { firstName, lastName, companyName, email, phoneNumber, city, state, street, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !companyName || !email || !phoneNumber || !city || !state || !street || !password || !confirmPassword) {
      return res.status(400).send({
        message: "Send all the required fields"
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).send({
        message: "Passwords do not match"
      });
    }

    const existingUser = await signupModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        message: "Email already exists"
      });
    }

    const newUser = await signupModel.create({
      firstName,
      lastName,
      companyName,
      email,
      phoneNumber,
      city,
      state,
      street,
      password,
      confirmPassword
    });

    return res.status(201).json(newUser);
  } catch (e) {
    console.error(e); // Log the error for debugging
    res.status(500).send({ message: "Failed adding new user", error: e.message });
  }
}


async function loginUser(req ,res) {
  try{
    const {email , password} = req.body;
    if(!email || !password){
      return res.status(400).send({message : "please provide email and password"})
    }

    const user = await signupModel.findOne({email});
    if(!user){
      return res.status(404).send({message : "user not found"})
    }
    const isPasswordValid = await bcrypt.compare(password , user.password);

    if(!isPasswordValid){
      return res.status(400).send({message : "wrong password"})
    }
    else{
      return res.json("success")
    }
    return res.json({message : "login successful "})
  }
  catch(e){
    res.status(500).send({message : "failed to login  user" , error : e.message})
  }
}


module.exports = {
  registerNewUser,
  loginUser
};
