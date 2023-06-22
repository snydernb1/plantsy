import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { purchaseItems } from "../../../store/cart";
import { useHistory } from "react-router-dom";




export default function Checkout() {
    const history = useHistory()
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const sessionUser = useSelector(state => state.session.user);

    const handlePurchase = (e) => {
        e.preventDefault();
        dispatch(purchaseItems())
        closeModal()
        history.push(`/users/${sessionUser.id}/purchase`)

    };

    return (

    <section id='deleteConfirmModal'>

        <h1>Confirm Purchase</h1>

        <div className="confirmButtonsContainer">
        <button id='confirmKeep' onClick={handlePurchase}>Confirm</button>
        <button id='confirmDelete' onClick={closeModal}>Still thinking</button>
        </div>

    </section>
    );
};
