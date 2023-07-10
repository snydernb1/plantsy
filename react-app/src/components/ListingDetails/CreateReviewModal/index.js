import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useEffect, useState } from "react";
import { createReviewThunk, editReviewThunk } from "../../../store/reviews";

import stockImg from '../../imgs/p.jpg'
import './ReviewModal.css'


export default function CreateReview({spotId, sessionUser, existReview, reviewType, spotName, listing, listingImage}) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [review, setReview] = useState(existReview?.review || "");
    const [rating, setRating] = useState(existReview?.stars || 0);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const errors = {}
        if (review.length < 10) errors.review = "Review needs a minimum of 10 characters"
        if (rating < 1) errors.rating = "Rating must have a minimum of 1 star"

        setErrors(errors)
    }, [rating, review]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const reviewData = {
            spotId: spotId,
            reviewData: {
                backend: {review, stars: rating},
                frontend: {user: {
                    id: sessionUser.id,
                    firstName: sessionUser.firstName,
                    lastName: sessionUser.lastName}
                }
            }
        }

        if (existReview) {
            reviewData.reviewData.frontend.spot =  existReview.Spot
            reviewData.revId = existReview.id
        }


        if (reviewType === "edit") {
            const editedReview = await dispatch(editReviewThunk(reviewData))
            closeModal();
        } else {
            const newReview = await dispatch(createReviewThunk(reviewData))
            closeModal();
        }

        // if (newReview.id) {
        //     closeModal();
        // } else {
        //     setErrors(newReview.errors)
        // }
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

    <h1 id="reviewFormHeader">Leave a Review {existReview ? "at " + spotName : null}?</h1>

    <div>

        <div id="reviewProductInfo">

            <div id="reviewFormImgContainer">
                <img
                src={listingImage}
                id="reviewFormImg"
                onError={e => { e.currentTarget.src = stockImg; }}
                />
            </div>

            <h4>{listing.name}</h4>

        </div>

    </div>



    <form onSubmit={handleSubmit} id='reviewForm'>

        <h4>My review</h4>

        <div id='starDiv'>
            {[1,2,3,4,5].map((num)=>starRating(num))}
        </div>

        <p id="reviewFormSubHeader">Help others by sharing your feedback</p>
        <p id="reviewFormSubHeaderText">What do you like about this product? Did it ship on time? Describe your experience with this step.</p>

        <textarea
            type="text"
            value={review}
            placeholder="At least 30 characters"
            id='reviewText'
            onChange={(e) => setReview(e.target.value)}
            />



        <button
        type="submit"
        disabled={Object.values(errors).length > 0} //add validations
        className={makeDisabled === false ? "reviewButtonDisabled" : "reviewButton"}
        >
            Submit Your Review
           {/* {formType === "Create" ? 'Create Spot' : 'Update Spot'} */}
        </button>

    </form>
    </section>);
};
