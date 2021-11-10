
const mongoose = require('mongoose')


      /********/
      /*Schema*/
      /********/
const locationSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    width: String,
    height: String,
    pathURL: String,
    linkURL: String,
    credit: String,
    creditURL: String,
    
  
  })
  module.exports = mongoose.model('locations', locationSchema)