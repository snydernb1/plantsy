import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

import { delListing } from "../../store/listings";
import { deleteReviewThunk } from "../../store/reviews";

import './DeleteConfirmModal.css'


export default function DeleteConfirm({id, deleteType, listingId}) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        if (deleteType === 'listing') {
            dispatch(delListing(id));
            closeModal();
        } else {
            const data = {
                listingId: listingId,
                reviewId: id
            }
            dispatch(deleteReviewThunk(data));
            closeModal();
        }
    };

    return (<section id='deleteConfirmModal'>

    <h1>Confirm Delete</h1>

    <h3 id='areYouSure'>{deleteType === 'listing' ? 'Are you sure you want to remove this item from your listings?' : 'Are you sure you want to delete this review?'}</h3>

    <div className="confirmButtonsContainer">

        <button id='confirmDelete' onClick={handleDelete}>Yes (Delete {deleteType === 'listing' ? 'Item' : 'Review'})</button>

        <button id='confirmKeep' onClick={closeModal}>No (Keep {deleteType === 'listing' ? 'Item' : 'Review'})</button>

    </div>

    </section>);
};
