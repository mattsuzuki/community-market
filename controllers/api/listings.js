const listing = require("../../models/listing");
module.exports = {
  getAll,
  create,
};

async function getAll(req, res) {
console.log("hello")
  const listings = await listing.find({});
  res.json(listings);
}

async function create(req, res) {
  const newListing = await listing.create(req.body);
  res.json(newListing);
}
