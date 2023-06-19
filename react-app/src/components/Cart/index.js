import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CartItemTile from './CartItemTile';
import OpenModalMenuItem from '../OpenModalButton'
import Checkout from './ConfirmPurchaseModal';

export default function Cart () {
    const sessionUser = useSelector(state => state.session.user);
    const cartObj = useSelector(state => state.cart.cart);
    const listingsObj = useSelector(state => state.listings.listings)
    const [showMenu, setShowMenu] = useState(false);

    const cartKeys = Object.keys(cartObj);
    const items = [];

    cartKeys.forEach((itemId) => {
        items.push(listingsObj[Number(itemId)])
    });


    const closeMenu = () => setShowMenu(false);

    return (
        <section>
            <h2>{cartKeys.length} {cartKeys.length !== 1? 'items': 'item'} in your cart</h2>

            {
                items !== undefined &&
                <div className='cartItems'>
                {items.map((item)=> (
                    <CartItemTile
                    item={item}
                    cartData={cartObj[item?.id]}
                    key={item?.id}
                    />
                    ))}
            </div>
            }




            <div>

                <div id='checkout'>
                        <OpenModalMenuItem
                        buttonText="Proceed to checkout"
                        onItemClick={closeMenu}
                        modalComponent={<Checkout/>}
                        />
                </div>
            </div>

        </section>
    );
};
