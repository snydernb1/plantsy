import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useEffect, useState } from "react";

// import { fetchNewReview, fetchEditReview } from "../../../../store/reviews";

import './ReviewModal.css'


export default function CreateReview({spotId, sessionUser, existReview, reviewType, spotName}) {
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
            const editedReview = await dispatch(fetchEditReview(reviewData))
            closeModal();
        } else {
            const newReview = await dispatch(fetchNewReview(reviewData))
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
              <i id="1" className="fa fa-star"></i>
            </div>
        )
      }


      let makeDisabled = false;

      if (!Object.values(errors).length > 0) {
        makeDisabled = true
      }


    return (<section id="reviewModal">
    <h1 id="reviewHeader">How was your stay {existReview ? "at " + spotName : null}?</h1>

    <form onSubmit={handleSubmit} id='reviewForm'>

        <textarea
            type="text"
            value={review}
            placeholder="Leave your review here..."
            id='reviewText'
            onChange={(e) => setReview(e.target.value)}
            />

        <div id='starDiv'>
            {[1,2,3,4,5].map((num)=>starRating(num))}
            <h4>Stars</h4>
        </div>


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
