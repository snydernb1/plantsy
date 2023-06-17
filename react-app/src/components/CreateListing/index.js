import ListingForm from "./CreateListingForm";

export default function CreateListing () {

    const listing = {
        name: '',
        description: '',
        price: 0,
        free_shipping: '',
        discount: 0,
        shop_id: 1
    }


    return (
        <>
         <ListingForm
        listing={listing}
        formType='create'
        />
        </>
    );
};
