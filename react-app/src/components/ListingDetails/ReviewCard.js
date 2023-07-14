import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import CreateReview from './CreateReviewModal';
import OpenModalButton from '../OpenModalButton'
import DeleteConfirm from '../DeleteConfirmModal';

import './ReviewCard.css'

export default function ReviewCard ({rev, listing, saveMainImg, cardType}) {
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const closeMenu = () => setShowMenu(false);

  let hasReview = false;


  if (rev.user_id === sessionUser?.id) hasReview = true

  function starRating (num) {
      const props = {};

      return (
        <div key={num} className={`${rev.rating >= num ? "filled" : "empty"}`}
          {...props}
          >
            <i id="1" className="fas fa-leaf"></i>
          </div>
      )
  }

  return (
        <section className="reviewCardContainer">

            {cardType === 'manage' &&

              <div className='revImgContainer'>
                <img src={saveMainImg} className='revImage'/>
              </div>

            }

          <div className='reviewTextContainer'>

            <div className='reviewRating'>
                {[1,2,3,4,5].map((num)=>starRating(num))}
            </div>

            <p className='reviewTextLarge'>{rev.review}</p>

            <div className='nameDate'>
              <p className='nameDateSmaller'>{rev.user_name}</p>
              <p className='nameDateSmaller'>{rev.date}</p>

              {hasReview && <div className='updateDelete'>
                    <OpenModalButton
                    buttonText="Update"
                    modalType='buttonSmall'
                    onItemClick={closeMenu}
                    modalComponent={<CreateReview listingId={listing.id} sessionUser={sessionUser} listing={listing} reviewType='edit' listingImage={saveMainImg} existReview={rev}/>}
                    />

                    <OpenModalButton
                    buttonText="Delete"
                    modalType='buttonDelete'
                    onItemClick={closeMenu}
                    modalComponent={<DeleteConfirm id={rev.id} deleteType='review' listingId={rev.listing_id}/>}
                    />
              </div>}

            </div>
          </div>

        </section>
    )
}
