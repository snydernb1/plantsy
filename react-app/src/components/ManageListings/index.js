import { useDispatch, useSelector } from "react-redux";
import ListingCard from "../AllListings/ListingCard";
import { useHistory } from "react-router-dom";

import './ManageListings.css'
import img from './imgs/empty.png'

export default function ManageListings () {
    const listingsObj = useSelector(state => state.listings.listings)
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()

    const listings = Object.values(listingsObj)
    const userListings = []

    for (let list of listings) {
        if (list.owner_id === sessionUser.id) {
            userListings.push(list)
        }
    }

    const toListForm = () => {
        history.push('/listings')
    }

    return (
        <section className="storeContainer">

            <div className="emptyStore">

            {userListings.length === 0 ?
            <div id="emptyContent">
                <h2 id="storeTitle">Hmmm, looks like you haven't added anything to sell.</h2>
                <h2>Click the button below to get started!</h2>
                <div id="storeImgDiv">
                    <img src={img} id='storeImg'/>
                </div>
            </div>
            :
            null
            }

            <button onClick={toListForm} id="storeeSellButton">Sell something!</button>


            </div>
            {userListings.length !== 0 ?
            <div className="listings">
                {userListings.map((listing) => (
                    <ListingCard
                    key={listing.id}
                    listing={listing}
                    manage={"manage"}
                    />
                ))}
            </div>
              :
              null
              }


        </section>
    );
};
