import CreateListingPage from "../CreateListingPage/CreateListingPage"
import "./ListingCard.css";

export default function ListingCard({listing}) { 
    return (
        <>
        <div className="listCard">
        <h2>Item / Service</h2>
        <h3>{listing.name}</h3>
        <h3>{listing.description}</h3>
        <h3>{listing.price}</h3>
        </div>
        </>
    )
}