const mongoose = require('./db')

/*****************/
/* Define Schema */
/*****************/

const placeSchema = new mongoose.Schema({
  id: Number,
  title: {
    type: String,
    unique: true
  },
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

module.exports = mongoose.model('Places', placeSchema)