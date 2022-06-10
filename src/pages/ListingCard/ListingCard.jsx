import CreateListingPage from "../CreateListingPage/CreateListingPage";
import { deleteListing } from "../../utilities/listings-api";
import "./ListingCard.css";


export default function ListingCard({listing, handleDelete, allowDelete}) { 

    return (
        <>
        <div className="container">
        <div className="contained">
        <div className="listCard">
        <h2>Item / Service</h2>
        <h3>Item: {listing.name}</h3>
        <h3>Description: {listing.description}</h3>
        <h3>Price: ${listing.price}</h3>
        <a href={`/profile/${listing.user}`}>Seller: {listing.user}</a>
        {allowDelete ? (
            <button onClick={() => handleDelete(listing._id)}>DELETE</button>
            ) : (
                <></>
            )};
        </div>
        </div>
        </div>
        </>
    )
}

