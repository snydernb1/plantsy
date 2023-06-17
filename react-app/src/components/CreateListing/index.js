import ListingForm from "./CreateListingForm";

export default function CreateListing () {

    const listing = {
        name: '',
        description: '',
        price: '',
        free_shipping: '',
        discount: '',
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
