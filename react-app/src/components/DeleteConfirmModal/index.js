import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

import { delListing } from "../../store/listings";

import './DeleteConfirmModal.css'


export default function DeleteConfirm({id, deleteType}) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    console.log('id from the confirm menu', id)

    const handleDelete = (e) => {
        e.preventDefault();

        if (deleteType === 'listing') {
            dispatch(delListing(id));
            closeModal();
        }
    };

    return (<section id='deleteConfirmModal'>

    <h1>Confirm Delete</h1>

    <h3 id='areYouSure'>{deleteType === 'listing' ? 'Are you sure you want to remove this item from your listings?' : 'Are you sure you want to delete this review?'}</h3>

    <button id='confirmDelete' onClick={handleDelete}>Yes (Delete {deleteType === 'listing' ? 'Item' : 'Review'})</button>

    <button id='confirmKeep' onClick={closeModal}>No (Keep {deleteType === 'listing' ? 'Item' : 'Review'})</button>
    </section>);
};
