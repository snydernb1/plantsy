import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllListings } from "../../store/listings";

import ListingCard from "./ListingCard";

import './Listing.css'

export default function AllListings(){
    const dispatch = useDispatch()
    const listingsObj = useSelector(state => state.listings.listings)

    const listings = Object.values(listingsObj)


    useEffect(()=> {
        dispatch(fetchAllListings())
    }, [dispatch])

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
