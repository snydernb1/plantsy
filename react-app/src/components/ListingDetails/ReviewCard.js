import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import OpenModalMenuItem from '../OpenModalButton'
import DeleteConfirm from '../DeleteConfirmModal';

import './ReviewCard.css'

export default function ReviewCard ({rev}) {
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const closeMenu = () => setShowMenu(false);

  const handleUpdate = (e) => {
      e.preventDefault();
      // history.push(`/listings/${listing.id}/edit`)
  }

  let hasReview = false;
  console.log(rev)

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

            <div className='reviewRating'>
                {[1,2,3,4,5].map((num)=>starRating(num))}

              {hasReview && <div className='updateDelete'>

                <button onClick={handleUpdate} id='updateButton'>Update</button>

                <div id='deleteButton'>
                    <OpenModalMenuItem
                    buttonText="Delete"
                    onItemClick={closeMenu}
                    modalComponent={<DeleteConfirm id={rev.id} deleteType='review'/>}
                    />
                </div>

              </div>}
            </div>

            <p className='reviewTextLarge'>{rev.review}</p>

            <div className='nameDate'>
              <p className='nameDateSmaller'>{rev.user_name}</p>
              <p className='nameDateSmaller'>{rev.date}</p>
            </div>

        </section>
    )
}
