import { useEffect, useState } from "react";
import { getAll } from "../../utilities/listings-api";
import ListingCard from "../../pages/ListingCard/ListingCard";
import { deleteListing } from "../../utilities/listings-api";

export default function Listings() {
  const [listings, setListings] = useState([]);
  async function getListings() {
    const listings = await getAll();
    setListings(listings);
  }
  useEffect(() => {
    getListings();
  }, []);

  function handleDelete(id) {
    deleteListing(id);
    const newListings = listings.filter(function (listing) {
      return listing._id != id;
    });
    setListings(newListings);
  }
  return (
    <div>
      {listings.map(function (listing) {
        return <ListingCard listing={listing} handleDelete={handleDelete} />;
      })}
    </div>
  );
}
