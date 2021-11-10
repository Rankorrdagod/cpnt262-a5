const express = require('express')
const app = express()
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URL,
    { useUnifiedTopology: true, useNewUrlParser: true },
    )
    .then(function(){
      console.log('Connected to DB...')
    })
    .catch(function(err){
      console.log(err)
    });

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
      
      /*****************/
      /* Compile Model */
      /*****************/
      
      const location = mongoose.model('locations', locationSchema);
      
      const travel = require('../models/locations')




app.get('/travel', (req, res) => {
    if (typeof travel !== 'undefined' && Array.isArray(travel)) {
      // Variable is an array!
      res.send(travel)
    } else {
      res.status(404)
      res.send({error: 'File Not Found'})
    }
  })
  app.get('/travel/:id', (req, res) => {
    let travelID
    if (typeof travel !== 'undefined' && Array.isArray(quotes)) {
      travelID = travel.find(item => Number(req.params.id) === Number(item.id)) // Use Array.find() here
    } else {
      travelID = null;
    }
    
    if (typeof travelID === 'object' && travlID !== null) {
      res.send(travelID)
    } else {
      res.status(404)
      res.send({error: 'File Not Found'})
    }
  })
  
  module.exports = app