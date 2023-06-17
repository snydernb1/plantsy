import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

import './DeleteConfirmModal.css'


export default function DeleteConfirm({id, deleteType}) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        if (deleteType === 'listing') {
            dispatch();
            closeModal();
        }
    };

    return (<section id='deleteConfirmModal'>

    <h1>Confirm Delete</h1>
    <h3 id='areYouSure'>{deleteType === 'spot' ? 'Are you sure you want to remove this spot from the listings?' : 'Are you sure you want to delete this review?'}</h3>
    <button id='confirmDelete' onClick={handleDelete}>Yes (Delete {deleteType === 'spot' ? 'Spot' : 'Review'})</button>
    <button id='confirmKeep' onClick={closeModal}>No (Keep {deleteType === 'spot' ? 'Spot' : 'Review'})</button>
    </section>);
};
