import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useEffect, useState } from "react";
import { createReviewThunk, editReviewThunk } from "../../../store/reviews";

import stockImg from '../../imgs/p.jpg'
import './ReviewModal.css'


export default function CreateReview({listingId, sessionUser, existReview, reviewType, listing, listingImage}) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [review, setReview] = useState(existReview?.review || "");
    const [rating, setRating] = useState(existReview?.rating || 0);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const errors = {}
        if (review.length < 15) errors.review = "Review needs a minimum of 15 characters"
        if (rating < 1) errors.rating = "Rating must have a minimum of 1 leaf"

        setErrors(errors)
    }, [rating, review]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const dateObj = new Date()
        const dateStr = `${dateObj}`
        const dateArr = dateStr.split(' ')

        const year = dateArr[3]
        const month = dateArr[1]
        const day = dateArr[2]

        const reviewData = {
            listingId: listingId,
            reviewData: {
                backend: {review, rating: rating, date: `${month} ${day}, ${year}`, listing_id: listingId, date_num: dateObj.getTime()},
            }
        }

        if (existReview) {
            reviewData.revId = existReview.id
        }

        if (reviewType === "edit") {
            const editedReview = await dispatch(editReviewThunk(reviewData))
            closeModal();
        } else {
            const newReview = await dispatch(createReviewThunk(reviewData))
            closeModal();
        }
    }

    function starRating (num) {
        const props = {};
        props.onMouseEnter = () =>  setRating(num)
        props.onMouseLeave = () => setRating(rating)
        props.onClick = () => setRating(num)

        return (
          <div key={num} className={`${rating >= num ? "filled" : "empty"}`}
            {...props}
            >
              <i id="1" className="fas fa-leaf"></i>
            </div>
        )
      }


      let makeDisabled = false;

      if (!Object.values(errors).length > 0) {
        makeDisabled = true
      }


    return (
    <section id="reviewModal">

    <h1 id="reviewFormHeader">Leave a Review</h1>

        <div id="reviewProductInfo">

            <div id="reviewFormImgContainer">
                <img
                src={listingImage}
                id="reviewFormImg"
                onError={e => { e.currentTarget.src = stockImg; }}
                />
            </div>

            <h4 id="reviewFormListingName">{listing.name}</h4>

        </div>

    <form onSubmit={handleSubmit} id='reviewForm'>

        <h3>My review</h3>

        <div id='starDiv'>
            {[1,2,3,4,5].map((num)=>starRating(num))}
        </div>

        <p id="reviewFormSubHeader">Help others by sharing your feedback</p>
        <p className="reviewFormSubHeaderText">What do you like about this product? Did it ship on time? Describe your experience with this step.</p>

        <textarea
            type="text"
            value={review}
            placeholder="At least 15 characters"
            id='reviewText'
            onChange={(e) => setReview(e.target.value)}
            />

        {/* <div className="reviewFormBotHeader">
            <h3>Add a photo</h3>
            <p>(optional)</p>
        </div>
        <p className="reviewFormSubHeaderText">Show your appreciation and inspire the community!</p> */}

        <div id="reviewDisclaimerContainer">
            <i className="fas fa-user-circle" id="profileImg"/>

            <div id="reviewDisclaimer">
                <div className="reviewFormBotHeader">
                    <p>Reviewed by</p>
                    <h4>{sessionUser.first_name}</h4>
                </div>

                <p className="reviewFormSubHeaderText">Your review and profile information will be publicly displayed.</p>
            </div>
        </div>

        <div id="reviewButtons">

            <button id='cancelReview' onClick={closeModal}>Cancel</button>

            <button
            type="submit"
            disabled={Object.values(errors).length > 0} //add validations
            className={makeDisabled === false ? "reviewButtonDisabled" : "reviewButton"}
            >
                Post Your Review

            </button>
        </div>

    </form>
    </section>);
};
