import { useEffect, useState } from "react";
import { getAll } from "../../utilities/listings-api";
import ListingCard from "../../pages/ListingCard/ListingCard";

export default function Listings() {
  const [listings, setListings] = useState([]);
  async function getListings() {
    const listings = await getAll();
    setListings(listings);
  }
  useEffect(() => {
    getListings();
  }, []);

  return <div>
    {listings.map(function(listing){
     return <ListingCard listing={listing} />
    })}
  </div>;
}
