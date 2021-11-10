

const dotenv = require('dotenv').config();
const express = require('express')

const app = express();
app.use(express.static('public'))


const api = require('./routes/api')
app.use('/api', api)

const mongoose = require('./models/db')

// Handle 404 errors with middleware
app.use((req, res) => {
  try {

    if (req.url.startsWith('/api')) {
      res.status(404).send({ error: '404 Not Found' })
    } else {
     
      res.status(404).redirect('/404.html') 
    }
  } catch {
    res.status(404).send({ error: '404 Not Found' }) 
  }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

   