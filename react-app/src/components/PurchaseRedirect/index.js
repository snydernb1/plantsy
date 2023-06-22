import { useHistory } from 'react-router-dom';
import img from '../ManageListings/imgs/empty.png'

export default function PurchaseRedirect ({}) {
    const history = useHistory()

    const viewListings = () => {
        history.push('/')
    }

    return (
        <>
           <div id="emptyContent">
                <h2 id="storeTitle">Purchase Confirmed!</h2>
                <h2>Thank you for shopping at Plantsy!</h2>
                <div id="storeImgDiv">
                    <img src={img} id='storeImg'/>
                </div>
                <button onClick={viewListings} id='viewListings'>View listings</button>
            </div>
        </>
    );
};
