import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { purchaseItems } from "../../../store/cart";




export default function Checkout() {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handlePurchase = (e) => {
        e.preventDefault();
        dispatch(purchaseItems())
        closeModal()

    };

    return (<section id='checkoutModal'>

    <h1>Confirm Purchase</h1>
    <button onClick={handlePurchase}>Confirm</button>


    </section>);
};
