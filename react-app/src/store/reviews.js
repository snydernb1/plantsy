const ALL_REVIEWS = 'reviews/ALL_REVIEWS';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';


const allReviews = (reviews) => {
    return {
        type: ALL_REVIEWS,
        reviews
    };
};

const allReviews = (reviews) => {
    return {
        type: ALL_REVIEWS,
        reviews
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

        default:
            return state
    };
};

export default reviewsReducer
