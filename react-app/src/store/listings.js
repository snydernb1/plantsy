const ALL_LISTINGS = 'listings/ALL_LISTINGS';
const NEW_LISTING = 'listings/NEW_LISTING';
const NEW_LISTING_IMG = 'listings/NEW_LISTING_IMG';

const allListings = (listings) => {
    return {
        type: ALL_LISTINGS,
        listings
    };
};
const newListing = (listing) => {
    return {
        type: NEW_LISTING,
        listing
    };
};
const newListingImg = (listingImg) => {
    return {
        type: NEW_LISTING_IMG,
        listingImg
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

export const createNewListing = (data) => async (dispatch) => {
    const response = await fetch('/api/listings/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    if (response.ok) {
		const listing = await response.json();
		dispatch(newListing(listing));
		return listing;
	} else {
		return ["An error occurred. Please try again."];
	};
};

export const createNewListingImg = (data) => async (dispatch) => {
    const response = await fetch('/api/listings/imgs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    if (response.ok) {
		const img = await response.json();
		dispatch(newListingImg(img));
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

        case NEW_LISTING:

            const newListing = action.listing
            listingState = {...state, listings: {...state.listings}}

            listingState.listings[newListing.id] = newListing

            return listingState

        case NEW_LISTING_IMG:

            const newListingImg = action.listingImg
            console.log('===================>', newListingImg)
            listingState = {...state, listings: {...state.listings}}

            listingState.listings[newListingImg.listing_id].imgs = [...listingState.listings[newListingImg.listing_id].imgs, newListingImg]

            return state

        default:
            return state
    };
};

export default listingsReducer
