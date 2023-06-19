import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { addItemToCart } from "../../store/cart";

import './ListingDetail.css'


export default function ListingDetails () {
    const dispatch = useDispatch()
    const history = useHistory()
    const listingsObj = useSelector(state => state.listings.listings)
    const sessionUser = useSelector(state => state.session.user);
    const [mainImg, setMainImg] = useState('loading')
    const [quantity, setQuantity] = useState('1')
    const [ranNum, setRanNum] = useState(0)
    const {listId} = useParams();

    const listing = listingsObj[Number(listId)]

    let prevImage;

    useEffect(()=> {
        setMainImg(prevImage)
        setRanNum(Math.floor(Math.random() * 21))
    }, [listing])

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

        const cartItem = {
            quantity,
            listing_id: listId
        }

        await dispatch(addItemToCart(cartItem))
    }


    return (
        <section className="listingDetailContainer">
            <div className="leftColumn">

                <p onClick={returnHome}>Back to listings</p>

                <div className="imgContainer">
                    <div className="imgContainerColumn">
                        {listing.imgs.map((img)=> (
                            <div key={img.id} className="imageTiles">
                                <img onClick={setImg} src={img.img_url} data-user={img.img_url}/>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="mainImg">
                            <img src={mainImg} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="rightColumn">

                <p>In {ranNum} {ranNum > 1 ? 'carts' : 'cart'}</p>

                <div className="namePrice">
                    <h3>{listing.name}</h3>

                    {listing.discount !== null ?
                    <p>${(Number(listing.price) - (Number(listing.discount) * Number(listing.price))).toFixed(2)}</p>
                    :
                    null
                    }
                </div>

                {listing.owner_id !== sessionUser?.id ?
                <form onSubmit={addToCart}>
                    <select onChange={(e) => setQuantity(e.target.value)}>
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
                    <button type='submit'>Add to cart</button>
                </form>
                :
                <button onClick={handleEdit}>Edit listing</button>
                }


                <h4>Description</h4>
                <p>{listing.description}</p>
            </div>



        </section>
    );
};
