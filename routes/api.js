const express = require('express')
const router = express.Router()

const Location = require('../models/locations') 







router.get('/locations', async (req, res) => {
    try {
      let data = await Location.find()
  
      
      if (data.length === 0) {
        data = localLocation
      }
     else { 
        res.send(data) 
      }
    } catch (err) {
        console.log(err) 
        res.send({ error: 'Location Not Found' }) // send JSON 404 error
      }
    })

    router.get('/locations/:id', async (req, res) => {
        try {
       
          let data = await Location.findOne({ id: req.params.id })
      
          
          if (!data) {
            data = localLocation.find(location => Number(req.params.id) === location.id) 
          }
      
          if (data) { 
            res.send(data) 
          } else { 
            res.send({ error: 'Location Doesnt Exist' }) // send JSON 404 error
          }
      
        } catch (err) {
          console.log(err) 
          res.send({ error: '404 Not Found' }) // send JSON 404 error
        }
      })
  
  module.exports = router