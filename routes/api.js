const express = require('express')
const router = express.Router()

const Location = require('../models/locations') 







router.get('/travel', (req, res) => {
    if (typeof travel !== 'undefined' && Array.isArray(travel)) {
    
      res.send(travel)
    } else {
      res.status(404)
      res.send({error: 'File Not Found'})
    }
  })

  router.get('/travel/:id', (req, res) => {
    let travelID
    if (typeof travel !== 'undefined' && Array.isArray(quotes)) {
      travelID = travel.find(item => Number(req.params.id) === Number(item.id)) 
      travelID = null;
    }
    
    if (typeof travelID === 'object' && travlID !== null) {
      res.send(travelID)
    } else {
      res.status(404)
      res.send({error: 'File Not Found'})
    }
  })
  
  module.exports = router