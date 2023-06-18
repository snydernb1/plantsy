from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Listing, db, User


cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/', methods = ['POST'])
def add_cart():
    '''
    Route to add item to cart
    '''
    data = request.get_json()
    user = current_user
    item = Listing.query.get(data)

    user.items.append(item)
    db.session.commit()

    return {"Message": "Added to Cart"}
