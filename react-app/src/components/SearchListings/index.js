import { useDispatch, useSelector } from "react-redux";

import ListingCard from "../AllListings/ListingCard";
import './SearchListings.css'

export default function SearchListings () {
    const listingsObj = useSelector(state => state.listings.search)
    const searchTermObj = useSelector(state => state.listings.searchTerm)

    const listings = Object.values(listingsObj)
    const searchTerm = searchTermObj.term


    return (
    <section className="allListingContainer">

        <div className="banner">

            <div id="welcomeMessage">
                <p className="welcomeMessage">Results for</p>
                <p className="welcomeMessage" id="name"> {searchTerm}!</p>
            </div>

            <div className="listings">
                {listings.map((listing) => (
                    <ListingCard
                    key={listing.id}
                    listing={listing}
                    />
                ))}
            </div>

        </div>

    </section>
    )
};
