import { useSelector, useDispatch } from 'react-redux';
import CartItemTile from './CartItemTile';

export default function Cart () {
    const sessionUser = useSelector(state => state.session.user);
    const cartObj = useSelector(state => state.cart.cart);
    const listingsObj = useSelector(state => state.listings.listings)

    const cartKeys = Object.keys(cartObj);
    const items = [];

    cartKeys.forEach((itemId) => {
        items.push(listingsObj[Number(itemId)])
    });

    return (
        <section>
            <h2>{cartKeys.length} {cartKeys.length !== 1? 'items': 'item'} in your cart</h2>

            <div className='cartItems'>
                {items.map((item)=> (
                    <CartItemTile
                    item={item}
                    cartData={cartObj[item.id]}
                    key={item.id}
                    />
                ))}

            </div>




            <div></div>

        </section>
    );
};
