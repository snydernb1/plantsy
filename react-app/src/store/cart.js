const ADD_CART = 'cart/ADD_CART';

const addCart = (id) => {
    return {
        type: ADD_CART,
        id
    };
};
