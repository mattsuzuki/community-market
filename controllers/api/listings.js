const listing = require("../../models/listing");
module.exports = {
  getAll,
  create,
};

async function getAll(req, res) {
  const listings = await listing.find({user: req.user._id});
  res.json(listings);
}

async function create(req, res) {
  req.body.user = req.user._id; 
  var listing = new Listing(req.body);
  await listing.save()
  // const newListing = await listing.create(req.body);
  res.json(newListing);
}
