const ALL_REVIEWS = 'reviews/ALL_REVIEWS';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';


const allReviews = (reviews) => {
    return {
        type: ALL_REVIEWS,
        reviews
    };
};

const editReview = (review) => {
    return {
        type: EDIT_REVIEW,
        review
    };
};

const createReview = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    };
};

const deleteReview = (review) => {
    return {
        type: DELETE_REVIEW,
        review
    };
};


export const fetchAllReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews/')

    if (response.ok) {
		const reviews = await response.json();
		dispatch(allReviews(reviews));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};

export const createReviewThunk = (data) => async (dispatch) => {
    const response = await fetch('/api/reviews/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data.reviewData.backend)
    })

    if (response.ok) {
		const review = await response.json();
		dispatch(createReview(review));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};

export const editReviewThunk = (data) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${data.revId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data.reviewData.backend)
    })

    if (response.ok) {
		const review = await response.json();
		dispatch(editReview(review));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};

export const deleteReviewThunk = (data) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${data.reviewId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })

    if (response.ok) {
		const review = await response.json();
		dispatch(deleteReview(data));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};


const initialState = { reviews: {}}

const reviewsReducer = (state = initialState, action) => {
    let reviewState;

    switch(action.type) {
        case ALL_REVIEWS:

            const allReviews = action.reviews
            reviewState = {...state, reviews: {...state.reviews}}

            allReviews.forEach(review => {
                reviewState.reviews[review.listing_id] = {...reviewState.reviews[review.listing_id], [review.id]: review}
            });
            return reviewState

        case CREATE_REVIEW:

            const newReview = action.review
            reviewState = {...state, reviews: {...state.reviews}}

            reviewState.reviews[newReview.listing_id] = {...reviewState.reviews[newReview.listing_id], [newReview.id]: newReview}

            return reviewState

        case EDIT_REVIEW:

            const editedReview = action.review
            reviewState = {...state, reviews: {...state.reviews}}

            reviewState.reviews[editedReview.listing_id] = {...reviewState.reviews[editedReview.listing_id], [editedReview.id]: editedReview}

            return reviewState

        case DELETE_REVIEW:

            const ids = action.review
            reviewState = {...state, reviews: {...state.reviews}}

            delete reviewState.reviews[ids.listingId][ids.reviewId]

            return reviewState

        default:
            return state
    };
};

export default reviewsReducer
