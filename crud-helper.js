// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Listing = require('./models/listing')

let user, listing, profile;
let users, listings;