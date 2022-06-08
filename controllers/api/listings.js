const listing = require("../../models/listing");
module.exports = {
  getAll,
  create,

};

async function getAll(req, res) {
  const listings = await listing.find();
  res.json(listings);
}

async function create(req, res) {
  req.body.user = req.user._id;
  var newListing = new listing(req.body);
  await newListing.save()
  // const newListing = await listing.create(req.body);
  res.json(newListing);
}

