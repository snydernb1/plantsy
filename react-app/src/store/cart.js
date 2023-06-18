const ADD_CART = 'cart/ADD_CART';

const addCart = (cartItem) => {
    return {
        type: ADD_CART,
        cartItem
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
