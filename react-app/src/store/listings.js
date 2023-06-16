const ALL_LISTINGS = 'listings/ALL_LISTINGS';

const allListings = (listings) => {
    return {
        type: ALL_LISTINGS,
        listings
    };
};


export const fetchAllListings = () => async (dispatch) => {
    const response = await fetch('/api/listings/')

    if (response.ok) {
		const listings = await response.json();
		dispatch(allListings(listings));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};


const initialState = { listings: {}}

const listingsReducer = (state = initialState, action) => {
    let listingState;

    switch(action.type) {
        case ALL_LISTINGS:

            const allListings = action.listings
            listingState = {...state, listings: {...state.listings}}

            allListings.forEach(listing => {
                listingState.listings[listing.id] = listing
            });
            return listingState

        default:
            return state
    };
};

export default listingsReducer
