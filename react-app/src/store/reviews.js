const ALL_REVIEWS = 'reviews/ALL_REVIEWS';


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
