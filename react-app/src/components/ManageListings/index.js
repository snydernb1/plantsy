import { useDispatch, useSelector } from "react-redux";
import ListingCard from "../AllListings/ListingCard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ManageListings () {
    const listingsObj = useSelector(state => state.listings.listings)
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()

    const listings = Object.values(listingsObj)
    const userListings = []

    for (let list of listings) {
        if (list.owner_id === sessionUser.id) {
            userListings.push(list)
        }
    }

    const toListForm = () => {
        history.push('/listing')
    }

    return (
        <section>

            <button onClick={toListForm}>Sell something!</button>

            <div className="listings">
                {userListings.map((listing) => (
                    <ListingCard
                    key={listing.id}
                    listing={listing}
                    />
                ))}
            </div>
        </section>
    );
};
