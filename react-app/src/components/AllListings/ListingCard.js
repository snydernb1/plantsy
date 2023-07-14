import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import OpenModalMenuItem from '../OpenModalButton'
import DeleteConfirm from '../DeleteConfirmModal';
import stockImg from '../imgs/p.jpg'

import './ListingCard.css'


export default function ListingCard ({listing, manage}) {
    const history = useHistory()
    const reviewObj = useSelector(state =>  state.reviews.reviews)
    const [showMenu, setShowMenu] = useState(false);

    let prevImage = listing.imgs[1].img_url;

    const reviews = reviewObj[listing.id]

    console.log('this is the rview obj', reviews)
    // const imgs = listing.imgs
    // // Grabs img preview
    // for (let img of imgs) {
    //     if (img.preview === true) {
    //         prevImage = img.img_url
    //     }
    // }

    const closeMenu = () => setShowMenu(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        history.push(`/listings/${listing.id}/edit`)
    }

    const priceClass = listing.discount > 0 ? 'slash' : 'noslash'

    function starRating (num) {
        const props = {};

        if (listing.rating === 'new' ) {
            return
        } else {
            return (
                <div key={num} className={`${listing.rating >= num ? "filledSmall" : "emptySmall"}`}
                {...props}
                >
                <i id="1" className="fas fa-leaf"></i>
                </div>

            )
        }


    }

    return (
        <section className='listCardContainer'>

            {manage === "manage" &&
                <div className='updateDelete'>

                    <button onClick={handleUpdate} id='updateButton'>Update</button>

                    <OpenModalMenuItem
                    buttonText="Delete"
                    modalType='buttonDelete'
                    onItemClick={closeMenu}
                    modalComponent={<DeleteConfirm id={listing.id} deleteType='listing'/>}
                    />

                </div>
            }

            <Link

                className="listCard"
                to={`/listings/${listing.id}`}
                >

                <div className='imgDiv'>
                    <img
                    src={prevImage}
                    className='img'
                    onError={e => { e.currentTarget.src = stockImg; }}
                    />
                </div>

                {/* <div className='rating'>
                    <p className='boldText'>{spot.city}, {spot.state}</p>

                    <div id='rating'>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <p className='boldText'>{spot.avgRating !== null ? spot.avgRating?.toFixed(1) : 'New'}</p>
                    </div>
                </div> */}

                <div>
                    <p className='itemName'>{listing.name}</p>
                </div>

                {/* {listing.rating === 'new' &&
                <p>New!</p>
                } */}

                <div className='reviewRating'>
                    {[1,2,3,4,5].map((num)=>starRating(num))}
                </div>

                <div className='price'>
                    {listing.discount > 0 ?
                    <p className='discount'>${(Number(listing.price) - (Number(listing.discount) * Number(listing.price))).toFixed(2)}</p>
                    :
                    null
                    }

                    <p className={priceClass}>${Number(listing.price).toFixed(2)}</p>

                    {listing.discount > 0 ?
                    <p className='discount'>({listing.discount * 100}% off)</p>
                    :
                    null
                    }
                </div>

                    {listing.free_shipping ?
                    <p id='freeShipping'>FREE shipping</p>
                    :
                    null
                    }


            </Link>


        </ section>
    );
};
