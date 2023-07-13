const ALL_LISTINGS = 'listings/ALL_LISTINGS';
const NEW_LISTING = 'listings/NEW_LISTING';
const NEW_LISTING_IMG = 'listings/NEW_LISTING_IMG';
const EDIT_LISTING = 'listings/EDIT_LISTING';
const DELETE_LISTING = 'listings/DELETE_LISTING';
const DELETE_LISTING_IMG = 'listings/DELETE_LISTING_IMG';

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
const editListing = (listing) => {
    return {
        type: EDIT_LISTING,
        listing
    };
};
const deleteListing = (listing) => {
    return {
        type: DELETE_LISTING,
        listing
    };
};
const deleteListingImg = (listingImgData) => {
    console.log('are we getting into the action?')
    return {
        type: DELETE_LISTING_IMG,
        listingImgData
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

export const putListing = (data) => async (dispatch) => {
    const response = await fetch(`/api/listings/${data.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    if (response.ok) {
		const listing = await response.json();
		dispatch(editListing(listing));
		return listing;
	} else {
		return ["An error occurred. Please try again."];
	};
};


export const delListing = (id) => async (dispatch) => {
    const response = await fetch(`/api/listings/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
		const listing = await response.json();
		dispatch(deleteListing(id));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};

export const deleteListingImgThunk = (data) => async (dispatch) => {
    const response = await fetch(`/api/listings/imgs/${data.listingImgId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
		const msg = await response.json();
		dispatch(deleteListingImg(data));
        console.log('msg from backend', msg)
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};

export const createNewListingImg = (data) => async (dispatch) => {
    const response = await fetch('/api/listings/imgs', {
        method: 'POST',
        // headers: {'Content-Type': 'application/json'}, ==> No longer needed due to AWS
        body: data
    });

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

        case EDIT_LISTING:

            const editListing = action.listing
            listingState = {...state, listings: {...state.listings}}

            listingState.listings[editListing.id] = editListing

            return listingState

        case DELETE_LISTING:

            const id = action.listing
            listingState = {...state, listings: {...state.listings}}

            delete listingState.listings[id]

            return listingState

        case DELETE_LISTING_IMG:

            const imgId = action.listingImgData.listingImgId
            const listingId = action.listingImgData.listingId

            console.log('imgid', imgId)
            console.log('listingid', listingId)
            listingState = {...state, listings: {...state.listings}}

            listingState.listings[listingId].imgs.forEach((img, i) => {
                if (img.id === imgId) {
                    listingState.listings[listingId].imgs.splice(i, i)
                    console.log('am i getting into the loop if statement?')
                }
            });

            return listingState

        case NEW_LISTING_IMG:

            const newListingImg = action.listingImg
            listingState = {...state, listings: {...state.listings}}

            listingState.listings[newListingImg.listing_id].imgs = [...listingState.listings[newListingImg.listing_id].imgs, newListingImg]

            return state

        default:
            return state
    };
};

export default listingsReducer
