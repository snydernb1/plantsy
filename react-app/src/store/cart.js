const ADD_CART = 'cart/ADD_CART';
const GET_CART = 'cart/GET_CART';

const addCart = (cartItem) => {
    return {
        type: ADD_CART,
        cartItem
    };
};

const getCart = (cart) => {
    return {
        type: GET_CART,
        cart
    };
};


export const fetchUserCart = () => async (dispatch) => {
    const response = await fetch ('/api/cart/')

    if (response.ok) {
		const cart = await response.json();

		dispatch(getCart(cart));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};


export const addItemToCart = (data) => async (dispatch) => {
    const response = await fetch('/api/cart/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    if (response.ok) {
		const cartItem = await response.json();
		dispatch(addCart(cartItem));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};


const initialState = { cart: {} }

const cartReducer = (state = initialState, action) => {
    let cartState;

    switch(action.type) {
        case GET_CART:
            const allItems = action.cart;
            cartState = {...state, cart: {...state.cart}}

            allItems.forEach(item => {
                cartState.cart[item.listing_id] = item
            });
            return cartState

        case ADD_CART:
            const item = action.cartItem;
            cartState = {...state, cart: {...state.cart}}

            cartState.cart[item.listing_id] = item

            return cartState

        default:
            return state
    };
};


export default cartReducer
