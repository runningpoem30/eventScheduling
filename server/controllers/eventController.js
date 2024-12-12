const mongoose = require("mongoose")
const express = require("express")
const eventModel = require("../models/eventModel")

async function addNewTask(req , res){
  try {
    const {eventName , date , time , venue , remindBefore , description } = req.body;

    if(!eventName || !date || !time || !remindBefore || !description){
      return res.status(500).send({message : "Please enter all input fields"})
    }

    const newEvent = await  eventModel.create({eventName , date , time , venue , remindBefore , description })

   return res.status(201).send({message : "Event Added Successfully"})
  }

  catch(e){
    return res.status(404).send({message : "failed adding a new event"})
  }
}


module.exports ={
  addNewTask
}