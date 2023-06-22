import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { addItemToCart } from "../../store/cart";

import stockImg from '../imgs/p.jpg'

import './ListingDetail.css'


export default function ListingDetails () {
    const dispatch = useDispatch()
    const history = useHistory()
    const listingsObj = useSelector(state => state.listings.listings)
    const cartObj = useSelector(state => state.cart.cart)
    const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState({})
    const [mainImg, setMainImg] = useState('loading')
    const [quantity, setQuantity] = useState(1)
    const [ranNum, setRanNum] = useState(0)
    const [submit, setSubmit] = useState(false)
    const {listId} = useParams();

    const listing = listingsObj[Number(listId)]

    let prevImage;

    useEffect(()=> {
        setMainImg(prevImage)
        setRanNum(Math.floor(Math.random() * 21))
        setSubmit(false)
    }, [])

    //====Checking for Errors=======================================
    useEffect(() => {
        const errors = {}
        console.log('is this even a number?', cartObj[listId]?.quantity + quantity > 10)
        console.log('math', Number(cartObj[listId]?.quantity) + Number(quantity))
        console.log('quantity?', quantity)
        if (Number(cartObj[listId]?.quantity) + Number(quantity) > 10) errors.quantity = "The seller has limited the purchase quantity to 10. If you would like to purchase more, please place a second order after checkout."
        setErrors(errors)
        }, [quantity])

    if (listing === undefined) return  false

    const imgs = listing.imgs

    for (let img of imgs) {
        if (img.preview === true) {
            prevImage = img.img_url
        }
    }

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
        console.log('what are errors', errors)
        if (Object.values(errors).length === 0) {
            console.log('are we getting ehre?')
            const cartItem = {
                quantity,
                listing_id: listId,
                id: cartObj[listId]?.id
            };
            await dispatch(addItemToCart(cartItem))

        };
    };


    const priceClass = listing.discount > 0 ? 'slash' : 'noslash'

    return (
        <section className="listingDetailContainer">
            <div className="leftColumn">

                <div className="backToListings"  onClick={returnHome}>
                    <i className="fas fa-arrow-left" />
                    <p>Back to listings</p>
                </div>

                <div className="imgContainer">
                    <div className="imgContainerColumn">
                        {listing.imgs.map((img)=> (
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
