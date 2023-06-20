const ADD_CART = 'cart/ADD_CART';
const GET_CART = 'cart/GET_CART';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const UPDATE_ITEM = 'cart/UPDATE_ITEM';
const PURCHASE = 'cart/PURCHASE';

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

const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    };
};

const updateItem = (cartItem) => {
    return {
        type: UPDATE_ITEM,
        cartItem
    };
};

const purchase = () => {
    return {
        type: PURCHASE,
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


export const removeItemFromCart = (id, itemId) => async (dispatch) => {
    const response = await fetch(`/api/cart/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(id)
    });

    if (response.ok) {
		const cartItem = await response.json();
		dispatch(removeItem(itemId));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};


export const updateQuantity = (cartItem) => async (dispatch) => {
    const response = await fetch(`/api/cart/${cartItem.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cartItem)
    });

    if (response.ok) {
		// const cartItem = await response.json();
		dispatch(updateItem(cartItem));
		return null;
	} else {
		return ["An error occurred. Please try again."];
	};
};


export const purchaseItems = () => async (dispatch) => {
    const response = await fetch(`/api/cart/`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
		dispatch(purchase());
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
            cartState = { cart: {} }
            console.log('What is cart state?', cartState)
            console.log('What is cart state?', initialState)

            allItems.forEach(item => {
                cartState.cart[item.listing_id] = item
            });
            return cartState

        case ADD_CART:
            const item = action.cartItem;
            cartState = {...state, cart: {...state.cart}}

            cartState.cart[item.listing_id] = item

            return cartState

        case UPDATE_ITEM:
            const cartItem = action.cartItem;
            cartState = {...state, cart: {...state.cart}}

            cartState.cart[cartItem.listing_id] = cartItem

            return cartState

        case REMOVE_ITEM:
            const id = action.id
            cartState = {...state, cart: {...state.cart}}

            delete cartState.cart[id]

            return cartState

        case PURCHASE:
            cartState = { cart: {} }

            return cartState

        default:
            return state
    };
};


export default cartReducer
