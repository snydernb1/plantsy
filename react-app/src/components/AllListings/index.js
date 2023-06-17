
import { useDispatch, useSelector } from "react-redux";


import ListingCard from "./ListingCard";

import './Listing.css'

export default function AllListings(){
    const listingsObj = useSelector(state => state.listings.listings)

    const listings = Object.values(listingsObj)


    return (
        <section>
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
