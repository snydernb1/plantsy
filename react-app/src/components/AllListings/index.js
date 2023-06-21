
import { useDispatch, useSelector } from "react-redux";


import ListingCard from "./ListingCard";

import './Listing.css'

export default function AllListings(){
    const listingsObj = useSelector(state => state.listings.listings)
    const sessionUser = useSelector(state => state.session.user);
    const listings = Object.values(listingsObj)


    return (
        <section className="allListingContainer">
            <div className="banner">

            </div>
                {sessionUser &&
                <div id="welcomeMessage">

                <p className="welcomeMessage">Welcome back,</p>

                <p className="welcomeMessage" id="name"> {sessionUser.first_name}!</p>
                </div>
                }
            <div className="listings">
                {listings.map((listing) => (
                    <ListingCard
                    key={listing.id}
                    listing={listing}
                    />
                ))}
            </div>
        </section>
    );
};
