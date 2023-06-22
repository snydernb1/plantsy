import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartItemTile from './CartItemTile';
import OpenModalMenuItem from '../OpenModalButton'
import Checkout from './ConfirmPurchaseModal';

import img from '../ManageListings/imgs/empty.png'

import './Cart.css'

export default function Cart () {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    const cartObj = useSelector(state => state.cart.cart);
    const listingsObj = useSelector(state => state.listings.listings)
    const [showMenu, setShowMenu] = useState(false);

    const cartKeys = Object.keys(cartObj);
    const items = [];
    const shippingArr = [];

    const viewListings = () => {
        history.push('/')
    }


    if (!Object.keys(cartObj).length) return (
        <>
        {items.length === 0 ?
            <div id="emptyContent">
                <h2 id="storeTitle">Hmmm, looks like your cart is empty...</h2>
                <h2>Click the button below to view all items.</h2>
                <div id="storeImgDiv">
                    <img src={img} id='storeImg'/>
                </div>
                <button onClick={viewListings} id='viewListings'>View listings</button>
            </div>
            :
            null
        }
        </>
    )
    if (!Object.keys(listingsObj).length) return false

    cartKeys.forEach((itemId) => {
        items.push(listingsObj[Number(itemId)])
    });

    const itemPrice = () => {
        let price = 0
        for (let item of items) {
            if (item.discount > 0) {
                let temp = (item.price - (item.price * item.discount)) * cartObj[item.id].quantity
                price += temp
            } else {
                let temp = item.price * cartObj[item.id].quantity
                price += temp
            }
        }
        return price
    }

    for (let item of items) {
        shippingArr.push((Math.random() * 30).toFixed(2))
    }

    const totalShipping = () => {
        let shippingCost = 0;

        for (let item of shippingArr) {

            shippingCost += Number(item)
        }
        return shippingCost
    }

    const closeMenu = () => setShowMenu(false);

    console.log(items)

    return (
        <section className='cartContainer'>

            <h2 id='cartTitle'>{cartKeys.length} {cartKeys.length !== 1? 'items': 'item'} in your cart</h2>

            <div className='cartSection'>

                {
                    items !== undefined &&
                    <div className='cartItems'>
                    {items.map((item, i)=> (
                        <CartItemTile
                        item={item}
                        cartData={cartObj[item?.id]}
                        key={item?.id}
                        shipping={shippingArr[i]}
                        />
                        ))}
                    </div>
                }

                <section className='cartRight'>
                    <h4>How you'll pay</h4>

                    <label className='paymentChecks'>
                        <input type='checkbox' id="paymentOption"/>
                        Credit
                    </label>

                    <label className='paymentChecks'>
                    <input type='checkbox' id="paymentOption"/>
                        Debit
                    </label>

                    <label className='paymentChecks'>
                    <input type='checkbox' id="paymentOption"/>
                        Gift Card
                    </label>

                    <div className='itemTotal'>
                        <p>item(s) total</p>
                        <p>${itemPrice().toFixed(2)}</p>
                    </div>

                    <div className='itemTotal' id='botLine'>
                        <p>Shipping</p>
                        <p>${totalShipping().toFixed(2)}</p>
                    </div>

                    <div className='itemTotal'>
                        <p>Total ({cartKeys.length} {cartKeys.length !== 1? 'items': 'item'})</p>
                        <p>$ {(Number(totalShipping()) + Number(itemPrice())).toFixed(2)}</p>
                    </div>


                    <div id='checkoutButton'>
                            <OpenModalMenuItem
                            buttonText="Purchase"
                            onItemClick={closeMenu}
                            modalComponent={<Checkout/>}
                            />
                    </div>

                    <div className='noteDiv'>
                    <p className="checkoutSmallText" id='noteColor'>* Additional duties and taxes may apply</p>
                    </div>
                </section>

            </div>

        </section>
    );
};
