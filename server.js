

const dotenv = require('dotenv').config();
const express = require('express')

const app = express();
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


const Place = require('./models/Places.js')
console.log(Place);

// List entry route
app.get('/api/travel', async (request, response) => {

  const places = await Places.find()

  response.send(places)

})

// Item route
app.get('/api/travel/:title', async (request, response) => {

  try {
    const places = await Places.findOne({title: request.params.title})
    if (!places) {
      throw new Error()
    }
    response.send(places)
  } catch(err) {
    response.send({error: 'Places Not Found'})
  }
  
})
// Handle 404 errors with middleware
app.use(function(request, response) {

  // If path starts with `/api`, send JSON 404
  if (request.url.startsWith('/api')) {

    response.status(404)
    response.send({error: 'File Noooot Found'})

  } else {
  
    // else send HTML 404
    response.status(404)
    response.send('<h1>404: File Not Found</h1>')

  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});