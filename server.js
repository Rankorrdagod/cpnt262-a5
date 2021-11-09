

const dotenv = require('dotenv').config();
const express = require('express')

const app = express();
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

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