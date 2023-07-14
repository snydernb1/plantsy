import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import ReviewCard from "../ListingDetails/ReviewCard";
import img from '../ManageListings/imgs/empty.png'

import './ManageReviews.css'

export default function ManageReviews () {
    const history = useHistory()
    const listingsObj = useSelector(state => state.listings.listings)
    const sessionUser = useSelector(state => state.session.user);
    const reviewsObj = useSelector(state => state.reviews.reviews);

    const revsByListing = Object.values(reviewsObj)
    const userReviews = []

    for (let listing of revsByListing) {
        const reviews = Object.values(listing)
        for (let review of reviews) {
            if (review.user_id === sessionUser.id) {
                userReviews.push(review)
            }
        }
    }

    console.log('this is user reviews', userReviews)
    const viewListings = () => {
        history.push('/')
    }

    return (
        <section className="manageReviewsContainer">

            {
                userReviews.length === 0 ?

                <div id="emptyContent">
                <h2 id="storeTitle">Hmmm, looks like you haven't written any reviews yet.</h2>
                <h2>Click the button below to view all items.</h2>
                <div id="storeImgDiv">
                    <img src={img} id='storeImg'/>
                </div>
                <button onClick={viewListings} id='viewListings'>View listings</button>
                </div>

                :
                <div>

                    <h2 className="manageReviewsHeader">Manage reviews</h2>
                    <div className="userRevsContainer">
                        {
                            userReviews.map((review) => (
                                <ReviewCard
                                key={review.id}
                                rev={review}
                                listing={listingsObj[review.listing_id]}
                                saveMainImg={listingsObj[review.listing_id].imgs[1].img_url}
                                cardType={'manage'}
                                />

                                ))
                        }
                    </div>
                </div>
            }


        </section>
    )
}
