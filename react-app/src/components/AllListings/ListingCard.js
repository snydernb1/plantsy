import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import OpenModalMenuItem from '../OpenModalButton'
import DeleteConfirm from '../DeleteConfirmModal';

import './ListingCard.css'


export default function ListingCard ({listing, manage}) {
    const history = useHistory()
    const [showMenu, setShowMenu] = useState(false);

    let prevImage;
    const imgs = listing.imgs
    // Grabs img preview
    for (let img of imgs) {
        if (img.preview === true) {
            prevImage = img.img_url
        }
    }

    const closeMenu = () => setShowMenu(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        history.push(`/listings/${listing.id}/edit`)
    }


    return (
        <>
            <Link

                className="listCard"
                to={`/listings/${listing.id}`}
                >

                <div className='imgDiv'>
                    <img src={prevImage} className='toolTip'/>
                </div>

                {/* <div className='rating'>
                    <p className='boldText'>{spot.city}, {spot.state}</p>

                    <div id='rating'>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <p className='boldText'>{spot.avgRating !== null ? spot.avgRating?.toFixed(1) : 'New'}</p>
                    </div>
                </div> */}

                <div>
                    <p>{listing.name}</p>
                </div>

                <div className='price'>
                    {listing.discount !== null ?
                    <p>${(Number(listing.price) - (Number(listing.discount) * Number(listing.price))).toFixed(2)}</p>
                    :
                    null
                    }

                    <p className="addLater">${Number(listing.price).toFixed(2)}</p>

                    {listing.discount !== null ?
                    <p>({listing.discount * 100}% off)</p>
                    :
                    null
                    }
                </div>

                <div>
                    {listing.free_shipping ?
                    <p>FREE shipping</p>
                    :
                    null
                    }
                </div>

            </Link>

            {manage === "manage" &&
                <div className='updateDelete'>
                    <button onClick={handleUpdate} id='updateButton'>Update</button>
                    <div id='deleteButton'>
                        <OpenModalMenuItem
                        buttonText="Delete"
                        onItemClick={closeMenu}
                        modalComponent={<DeleteConfirm id={listing.id} deleteType='listing'/>}
                        />
                    </div>
                </div>
            }
        </>
    );
};
