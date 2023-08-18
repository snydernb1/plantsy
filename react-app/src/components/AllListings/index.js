
import { useDispatch, useSelector } from "react-redux";


import ListingCard from "./ListingCard";

import greyLeaf from '../imgs/grey_leaf.png'
import greenLeaf from '../imgs/green_leaf.png'

import './Listing.css'
import { useEffect, useState } from "react";

export default function AllListings(){
    const listingsObj = useSelector(state => state.listings.listings)
    const sessionUser = useSelector(state => state.session.user);
    const listings = Object.values(listingsObj)
    console.log('what is listsingsObj before load', listings)
    const [showListings, setShowListings] = useState(listings ? true : false)

    useEffect(() => {
        setTimeout(() => {
            setShowListings(true)
        }, '3500')

    }, [])


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

            {showListings === false &&

                <div id="loadingLeaf">
                    <i className="fas fa-seedling" id="colorChangeLeaf"/>
                    {/* <img src={greyLeaf} id="greyLeaf"/>
                    <img src={greenLeaf} id="greenLeaf"/> */}

                </div>

            }


            {showListings &&

                <div className="listings">
                {listings.map((listing) => (
                    <ListingCard
                    key={listing.id}
                    listing={listing}
                    />
                    ))}
                </div>
            }


        </section>
    );
};
