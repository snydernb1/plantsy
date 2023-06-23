import { useHistory } from 'react-router-dom';
import img from '../ManageListings/imgs/empty.png'

export default function FourOhFour () {
    const history = useHistory()

    const viewListings = () => {
        history.push('/')
    }
    return (
        <>
           <div id="emptyContent">
                <h2 id="storeTitle">Ooops, you're out of bounds...</h2>
                <h2>Click the button below to return home.</h2>
                <div id="storeImgDiv">
                    <img src={img} id='storeImg'/>
                </div>
                <button onClick={viewListings} id='viewListings'>View listings</button>
            </div>
        </>
    );
};
