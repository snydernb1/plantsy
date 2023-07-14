const ALL_LISTINGS = 'listings/ALL_LISTINGS';
const NEW_LISTING = 'listings/NEW_LISTING';
const NEW_LISTING_IMG = 'listings/NEW_LISTING_IMG';
const EDIT_LISTING = 'listings/EDIT_LISTING';
const DELETE_LISTING = 'listings/DELETE_LISTING';
const DELETE_LISTING_IMG = 'listings/DELETE_LISTING_IMG';
const SEARCH_LISTING = 'listings/SEARCH_LISTING'

const allListings = (listings) => {
    return {
        type: ALL_LISTINGS,
        listings
    };
};
const searchListing = (listings, search) => {
    return {
        type: SEARCH_LISTING,
        listings,
        search
    };
};
const newListing = (listing) => {
    return {
        type: NEW_LISTING,
        listing
    };
};
const newListingImg = (listingImg, objNum) => {
    return {
        type: NEW_LISTING_IMG,
        listingImg,
        objNum
    };
};
const editListing = (listing, imgsObj) => {
    return {
        type: EDIT_LISTING,
        listing,
        imgsObj
    };
};
const deleteListing = (listing) => {
    return {
        type: DELETE_LISTING,
        listing
    };
};
const deleteListingImg = (listingImgData, objNum) => {
    return {
        type: DELETE_LISTING_IMG,
        listingImgData,
        objNum
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

export const searchAllListings = (search) => async (dispatch) => {
    const response = await fetch('/api/listings/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(search)
    })

    if (response.ok) {
		const listings = await response.json();

		dispatch(searchListing(listings, search.searchData));
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

export const putListing = (data, imgsObj) => async (dispatch) => {
    const response = await fetch(`/api/listings/${data.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    if (response.ok) {
		const listing = await response.json();
		dispatch(editListing(listing, imgsObj));
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

export const deleteListingImgThunk = (data, objNum) => async (dispatch) => {
    const response = await fetch(`/api/listings/imgs/${data.listingImgId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
		const msg = await response.json();
		dispatch(deleteListingImg(data, objNum));
        console.log('msg from backend', msg)
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};

export const createNewListingImg = (data, objNum) => async (dispatch) => {
    const response = await fetch('/api/listings/imgs', {
        method: 'POST',
        // headers: {'Content-Type': 'application/json'}, ==> No longer needed due to AWS
        body: data
    });

    if (response.ok) {
		const img = await response.json();
		dispatch(newListingImg(img, objNum));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};


const initialState = { listings: {}, search: {}, searchTerm: {}}

const listingsReducer = (state = initialState, action) => {
    let listingState;

    switch(action.type) {
        case ALL_LISTINGS:

            const allListings = action.listings
            listingState = {...state, listings: {...state.listings}, search: {...state.search}, searchTerm: {...state.searchTerm}}


            allListings.forEach(listing => {
                const imgs = listing.imgs
                delete listing.imgs

                listing.imgs = {}

                imgs.forEach((img, i) => {
                    listing.imgs[i + 1] = img
                })

                listingState.listings[listing.id] = listing
            });

            return listingState

        case SEARCH_LISTING:

            const search = action.listings
            const searchTerm = action.search
            listingState = {...state, listings: {...state.listings}, search: {}, searchTerm: {}}

            listingState.searchTerm['term'] = searchTerm

            search.forEach(listing => {
                const imgs = listing.imgs
                delete listing.imgs

                listing.imgs = {}

                imgs.forEach((img, i) => {
                    listing.imgs[i + 1] = img
                })

                listingState.search[listing.id] = listing
            });

            return listingState

        case NEW_LISTING:

            const newListing = action.listing
            listingState = {...state, listings: {...state.listings}, search: {...state.search}, searchTerm: {...state.searchTerm}}

            newListing.imgs = {}

            listingState.listings[newListing.id] = newListing

            return listingState

        case EDIT_LISTING:

            const editListing = action.listing
            const imgsObj = action.imgsObj
            listingState = {...state, listings: {...state.listings}, search: {...state.search}, searchTerm: {...state.searchTerm}}

            console.log('Does the edited listing come returned with an arr?',editListing)

            editListing.imgs = imgsObj

            listingState.listings[editListing.id] = editListing

            return listingState

        case DELETE_LISTING:

            const id = action.listing
            listingState = {...state, listings: {...state.listings}, search: {...state.search}, searchTerm: {...state.searchTerm}}

            delete listingState.listings[id]

            return listingState

        case DELETE_LISTING_IMG:

            const imgId = action.listingImgData.listingImgId
            const listingId = action.listingImgData.listingId
            const objNum = action.objNum

            listingState = {...state, listings: {...state.listings}, search: {...state.search}, searchTerm: {...state.searchTerm}}

            delete listingState.listings[listingId].imgs[objNum]

            return listingState

        case NEW_LISTING_IMG:

            const newListingImg = action.listingImg
            const num = action.objNum
            listingState = {...state, listings: {...state.listings}, search: {...state.search}, searchTerm: {...state.searchTerm}}

            listingState.listings[newListingImg.listing_id].imgs[num] = newListingImg

            return state

        default:
            return state
    };
};

export default listingsReducer
