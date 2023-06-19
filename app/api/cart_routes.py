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
    item = Listing.query.get(data)

    add_item = Cart (
        quantity = data['quantity'],
        user_id = user.id,
        listing_id = item.id
    )

    db.session.add(add_item)
    db.session.commit()

    return add_item.to_dict()

@cart_routes.route('/')
@login_required
def get_cart():
    '''
    Query for user's cart
    '''

    user = current_user
    cart = Cart.query.filter(Cart.user_id == user.id).all()

    return [item.to_dict() for item in cart]
