import CreateListingPage from "../CreateListingPage/CreateListingPage"
import "./ListingCard.css";

export default function ListingCard({listing}) { 
    return (
        <>
        <div className="listCard">
        <h2>Item / Service</h2>
        <h3>Item: {listing.name}</h3>
        <h3>Description: {listing.description}</h3>
        <h3>Price: ${listing.price}</h3>
        <a href={`/profile/${listing.user}`}>Seller: {listing.user}</a>
        </div>
        </>
    )
}