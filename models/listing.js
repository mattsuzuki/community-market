const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const listingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },

},
  
 {
  timestamps: true,

});


module.exports = mongoose.model('Listing', listingSchema);