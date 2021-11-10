

const dotenv = require('dotenv').config();
const express = require('express')

const app = express();
app.use(express.static('public'))


const api = require('./routes/api')
app.use('/api', api)

const mongoose = require('./models/db')

// Handle 404 errors with middleware
app.use((req, res) => {

  // If path starts with `/api`, send JSON 404
  if (req.url.startsWith('/api')) {

    res.status(404)
    res.send({error: 'File Not Found'})

  } else {
  
    // else send HTML 404
    res.status(404)
    res.redirect('/404.html')
    //res.sendFile(__dirname + '/public/404.html')
  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

   