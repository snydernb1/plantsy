import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ListingCard from "../AllListings/ListingCard";
import './SearchListings.css'

export default function SearchListings () {
    const history = useHistory()
    const listingsObj = useSelector(state => state.listings.search)
    const searchTermObj = useSelector(state => state.listings.searchTerm)

    const listings = Object.values(listingsObj)
    const searchTerm = searchTermObj.term

    const returnHome = () => {
        history.push('/')
    }

    return (
    <section className="searchListingContainer">

        <div className="banner"></div>

            <div id="welcomeMessage">
                <p className="welcomeMessage">Results for</p>
                <p className="welcomeMessage" id="name"> {searchTerm}!</p>
            </div>

            <div className="searchListings">
                {listings.map((listing) => (
                    <ListingCard
                    key={listing.id}
                    listing={listing}
                    />
                ))}
            </div>

            <div className="returnHome">
                <h2 className="end">{listings.length > 0 ? 'End of results...' : 'Oops, looks there are no results...'}</h2>
                <button onClick={returnHome} type="button" id='backButton'>Back to all listings</button>
            </div>


    </section>
    )
};
