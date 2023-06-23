import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import ListingForm from '../CreateListing/CreateListingForm';

export default function UpdateListing () {
    const {listId} = useParams();
    const listingsObj = useSelector(state => state.listings.listings)

    const listing = listingsObj[listId]

    return (
        <>
         <ListingForm
        listing={listing}
        formType='update'
        />
        </>
    );
};
