import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from "../../store/cart";
import { updateQuantity } from "../../store/cart";

import stockImg from '../imgs/p.jpg'

import './CartItemTile.css'
import { useHistory } from "react-router-dom";

export default function CartItemTile ({item, cartData, shipping}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [ranNum, setRanNum] = useState(0)
    const [quantity, setQuantity] = useState(cartData?.quantity)
    const [minDate, setMinDate] = useState("")
    const [maxDate, setMaxDate] = useState("")

    const months = {
        'Jan': 31,
        'Feb': 28,
        'Mar': 31,
        'Apr': 30,
        'May': 31,
        'Jun': 30,
        'Jul': 31,
        'Aug': 31,
        'Sep': 30,
        'Oct': 31,
        'Nov': 30,
        'Dec': 31
    }

    const dateToday = new Date()
    const dateParts = dateToday.toDateString().split(' ')

    let month = dateParts[1]
    let prevMonthDays;
    const day = Number(dateParts[2])

    let minTempDays;
    let minTempMonth;
    let maxTempDays;
    let maxTempMonth;

    const minRanAdd = 7
    const maxRanAdd = Math.floor(Math.random() * 10) + 1

    if ((minRanAdd + day) > months[month]) {
        const keys = Object.keys(months)
        prevMonthDays = months[month]
        const i = keys.indexOf(month)
        minTempMonth = keys[i + 1]
        minTempDays = (day + minRanAdd) - prevMonthDays
    } else {
        minTempDays = day + minRanAdd
        minTempMonth = month
    }

    if ((maxRanAdd + minTempDays) > months[minTempMonth]) {
        const keys = Object.keys(months)
        prevMonthDays = months[month]
        const i = keys.indexOf(month)
        maxTempMonth = keys[i + 1]
        maxTempDays = (maxRanAdd + minTempDays) - prevMonthDays
    } else {
        maxTempDays = maxRanAdd + minTempDays
        maxTempMonth = minTempMonth
    }


    useEffect(()=> {
        setRanNum(Math.floor(Math.random() * 21))
        setMinDate(`${minTempMonth} ${minTempDays}`)
        setMaxDate(`${maxTempMonth} ${maxTempDays}`)
    }, [item])

    let prevImage;
    if (!item) return

    const imgs = item.imgs

    for (let img of imgs) {
        if (img.preview === true) {
            prevImage = img.img_url
        }
    }

    const removeItem = async () => {
        await dispatch(removeItemFromCart(cartData.id, cartData.listing_id))
    }

    const goDetail = () => {
        history.push(`/listings/${item.id}`)
    }

    const updateItem = async () => {
        cartData.quantity = quantity
        await dispatch(updateQuantity(cartData))
    }

    const classPrice = item.discount !== null ? 'cross' : 'nocross'

    return (
        <section>
            <div className="checkoutContainer">

                <section className="checkoutEdit">

                    <div className="checkoutUpperLeft">
                        <div id="checkoutImgDiv">
                            <img src={prevImage} id="checkoutImg"  onError={e => { e.currentTarget.src = stockImg; }} onClick={goDetail}/>
                        </div>

                        <div className="checkoutName">

                            <p id="checkoutItemName">{item.name}</p>

                            <div className="checkoutQuantity">
                            <select onChange={(e) => setQuantity(Number(e.target.value))} value={quantity} id="checkoutInput">
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

                            <button onClick={updateItem} className="checkoutButtons">Update</button>
                            </div>

                            <button onClick={removeItem} className="checkoutButtons" id="checkoutRemove">Remove</button>
                        </div>
                    </div>




                    <div className="checkoutCardPrice">

                        <div className="checkoutCardPriceText">
                            <p className={classPrice}>${item.price}</p>

                            {item.discount !== null ?
                                <p className="greenText">${(Number(item.price) - (Number(item.discount) * Number(item.price))).toFixed(2)}</p>
                                :
                                null
                            }
                                {item.discount !== null ?
                                <p className="greenText">({item.discount * 100}% off)</p>
                                :
                                null
                            }
                        </div>
                        {ranNum === 0 ?
                        null
                        :
                        <p id="checkoutRed">{ranNum} people have this item in their {ranNum > 1 ? 'carts' : 'cart'}</p>
                        }

                    </div>
                </section>



                <div className="checkoutBotCard">
                    <div className="checkoutBox">
                        <input type='checkbox' id="checkoutGift"/>
                        <div className="checkoutGift">
                            <p>This order is a gift</p>
                            <p className="checkoutSmallText">Prices will not be shown on packing slip</p>
                        </div>
                    </div>

                    <div className="checkoutShipping">
                        <h4>Shipping: ${shipping}</h4>
                        <p className="checkoutSmallText">Estimated delivery: {minDate} - {maxDate}</p>
                    </div>

                </div>


            </div>


        </section>
    );
};
