import { useSelector, useDispatch } from 'react-redux';
import CartItemTile from './CartItemTile';

export default function Cart () {
    const sessionUser = useSelector(state => state.session.user);

    console.log(sessionUser.items)

    return (
        <section>
            <h2>{sessionUser.items.length} {sessionUser.items.length > 1? 'items': 'item'} in your cart</h2>

            <div className='cartItems'>
                {sessionUser.items.map((item)=> (
                    <CartItemTile
                    item={item}
                    key={item.id}
                    />
                ))}

            </div>




            <div></div>

        </section>
    );
};
