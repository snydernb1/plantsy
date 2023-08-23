import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { addItemToCart } from "../../store/cart";

import stockImg from '../imgs/p.jpg'
import OpenModalButton from '../OpenModalButton'
import img from '../ManageListings/imgs/empty.png'
import ReviewCard from "./ReviewCard";
import CreateReview from "./CreateReviewModal";

import './ListingDetail.css'


export default function ListingDetails () {
    const dispatch = useDispatch()
    const history = useHistory()
    const listingsObj = useSelector(state => state.listings.listings)
    const cartObj = useSelector(state => state.cart.cart)
    const reviewObj = useSelector(state => state.reviews.reviews)
    const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState({})
    const [mainImg, setMainImg] = useState('loading')
    const [saveMainImg, setSaveMainImg] = useState('loading')
    const [quantity, setQuantity] = useState(1)
    const [ranNum, setRanNum] = useState(0)
    const [submit, setSubmit] = useState(false)
    const {listId} = useParams();
    const [showMenu, setShowMenu] = useState(false);

    const listing = listingsObj[Number(listId)]
    let reviews = reviewObj[Number(listId)]


    if (reviews !== undefined) reviews = Object.values(reviews)
    else {reviews = []}

    reviews = reviews.reverse()

    const rating = () => {
        let sum = 0;

        reviews.forEach(rev => {
            sum += rev.rating
        });

        let avg = sum / reviews.length
        return Math.floor(avg)
    }

    const closeMenu = () => setShowMenu(false);

    let prevImage = listing?.imgs[1].img_url;

    useEffect(()=> {
        setMainImg(prevImage)
        setSaveMainImg(prevImage)
        setRanNum(Math.floor(Math.random() * 21))
        setSubmit(false)
    }, [])

    //====Checking for Errors=======================================
    useEffect(() => {
        const errors = {}
        if (Number(cartObj[listId]?.quantity) + Number(quantity) > 10) errors.quantity = "The seller has limited the purchase quantity to 10. If you would like to purchase more, please place a second order after checkout."
        setErrors(errors)
        }, [quantity])


    const viewListings = () => {
        history.push('/')
    }


    if (listing === undefined) return  (
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
    )

    // const imgs = Object.values(listing.imgs)

    // for (let img of imgs) {
    //     if (img.preview === true) {
    //         prevImage = img.img_url
    //     }
    // }

    const setImg = (e) => {
        let img = e.target.dataset.user
        setMainImg(img)
    }

    const returnHome = () => {
        history.push('/')
    }

    const handleEdit = () => {
        history.push(`/listings/${listing.id}/edit`)
    }




    const addToCart = async (e) => {
        e.preventDefault()
        setSubmit(true);
        setRanNum(ranNum + 1)
        if (Object.values(errors).length === 0) {
            const cartItem = {
                quantity,
                listing_id: listId,
                id: cartObj[listId]?.id
            };
            await dispatch(addItemToCart(cartItem))

        };
    };

    function starRating (num) {
        const props = {};

        return (
          <div key={num} className={`${rating() >= num ? "filled" : "empty"}`}
            {...props}
            >
              <i id="1" className="fas fa-leaf"></i>
            </div>
        )
      }


    const priceClass = listing.discount > 0 ? 'slash' : 'noslash'


    const hasReview = reviews.find((review) => review.user_id === sessionUser?.id)
    const imgArr = Object.values(listing.imgs)

    return (
        <section className="listingDetailContainer">
            <div className="leftColumn">

                <div className="backToListings"  onClick={returnHome}>
                    <i className="fas fa-arrow-left" />
                    <p>Back to listings</p>
                </div>

                <div className="imgContainer">
                    <div className="imgContainerColumn">
                        {imgArr.map((img)=> (
                            <div key={img.id} className="imageTiles">
                                <img onClick={setImg}
                                src={img.img_url}
                                data-user={img.img_url}
                                className="img"
                                id={img.img_url === mainImg ? 'imgSelect' : null}
                                onError={e => { e.currentTarget.src = stockImg; }}
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="mainImgContainer">
                            <img
                            src={mainImg}
                            className="img"
                            id="mainImg"
                            onError={e => { e.currentTarget.src = stockImg; }}
                            />
                        </div>
                    </div>
                </div>

                <div className="reviewContainer">

                    <div id="reviewHeader">
                        <h3 className="reviewCount">{reviews.length > 0 ?
                        reviews.length > 1 ? `${reviews.length} reviews` : `${reviews.length} review`
                        :
                        'Be the first to leave a review!'}</h3>

                        {/* <div id="rating">
                            {reviews.length > 0 && <i className="fas fa-leaf" />}
                            <h3>{reviews.length > 0 ? `${rating()} /5.0`: null}</h3>
                        </div> */}

                        { reviews.length > 0 &&
                        <div id='starDiv'>
                            {[1,2,3,4,5].map((num)=>starRating(num))}
                        </div>
                        }

                    </div>

                    {reviews.length > 0 && <div id="reviewSubHeader">
                        <p id="reviewSubHeaderText">{reviews.length > 1 ? `Reviews for this item` : `Review for this item`}</p>
                    </div>}

                    {/* =============================*/}

                    {
                        sessionUser && sessionUser.id !== listing.owner_id && !hasReview &&
                        <div id='createReview'>
                            <OpenModalButton
                            buttonText="Post Your Review"
                            modalType='button'
                            onItemClick={closeMenu}
                            modalComponent={<CreateReview listingId={listing.id} sessionUser={sessionUser} listing={listing} listingImage={saveMainImg}/>}
                            />
                        </div>
                    }

                    {/* =============================*/}


                    <div>
                        {reviews.map((rev) => (
                            <ReviewCard
                            key={rev.id}
                            listing={listing}
                            saveMainImg={saveMainImg}
                            rev={rev}
                            />
                        ))}
                    </div>


                </div>
            </div>

            <div className="rightColumn">

                {ranNum === 0 ?
                null
                :
                <p id="inCarts">In {ranNum} {ranNum > 1 ? 'carts' : 'cart'}</p>
                }

                <div className="namePrice">

                    <div className="price">

                    {listing.discount > 0 ?
                    <p className='discountDetail'>${(Number(listing.price) - (Number(listing.discount) * Number(listing.price))).toFixed(2)}</p>
                    :
                    null
                    }

                    <p className={priceClass}>${Number(listing.price).toFixed(2)}</p>

                    {listing.discount > 0 ?
                    <p className='discountDetail'>({listing.discount * 100}% off)</p>
                    :
                    null
                    }
                    </div>


                    <p id="detailsName">{listing.name}</p>
                </div>


                {listing.owner_id !== sessionUser?.id ?
                <form onSubmit={addToCart} className="detailForm">
                    <p >Quantity: </p>
                    <select onChange={(e) => setQuantity(e.target.value)} id="detailInput">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <button type='submit' className={sessionUser === null ? 'detailAddDisabled' : "detailAdd"} disabled={sessionUser === null ? true : false}>Add to cart</button>

                    {submit && errors.quantity && (
                        <div className="detailErrors">* {errors.quantity}</div>
                        )}

                </form>
                :
                <button onClick={handleEdit} className="detailEdit">Edit listing</button>
                }

                <section className="detailDesc">
                    <h4 id="descTitle">Description</h4>
                    <div className="descTest">
                    <pre id="descWrap">{listing.description}</pre>
                    </div>
                </section>
            </div>



        </section>
    );
};
