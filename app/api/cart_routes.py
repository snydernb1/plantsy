from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Listing, db, Cart


cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/', methods = ['POST'])
@login_required
def add_cart():
    '''
    Route to add item to cart
    '''
    data = request.get_json()
    user = current_user

    if 'id' in data.keys():
        item = Cart.query.get(data['id'])
        item.quantity = item.quantity + int(data['quantity'])

        db.session.commit()
        return item.to_dict()

    else :
        add_item = Cart (
            quantity = data['quantity'],
            user_id = user.id,
            listing_id = data['listing_id']
        )

        db.session.add(add_item)
        db.session.commit()

        return add_item.to_dict()


@cart_routes.route('/<int:item_id>', methods = ['DELETE'])
@login_required
def remove_item(item_id):
    '''
    Removes item from cart
    '''
    item = Cart.query.get(item_id)

    db.session.delete(item)
    db.session.commit()
    return {"Message": "Successfully Removed"}


@cart_routes.route('/', methods = ['DELETE'])
@login_required
def purchase():
    '''
    Removes item from cart
    '''
    user = current_user
    items = Cart.query.filter(Cart.user_id == user.id).all()

    [db.session.delete(item) for item in items]
    db.session.commit()
    return {"Message": "Successfully Removed"}


@cart_routes.route('/<int:item_id>', methods = ['PUT'])
@login_required
def update_item(item_id):
    '''
    Removes item from cart
    '''
    item = Cart.query.get(item_id)
    data = request.get_json()

    item.quantity = data['quantity']

    db.session.commit()
    return item.to_dict()




@cart_routes.route('/')
@login_required
def get_cart():
    '''
    Query for user's cart
    '''

    user = current_user
    print('============> current user?', user.id)
    cart = Cart.query.filter(Cart.user_id == user.id).all()

    return [item.to_dict() for item in cart]
