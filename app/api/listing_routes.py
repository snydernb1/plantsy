from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Listing

listing_routes = Blueprint('listings', __name__)


@listing_routes.route('/')
def all_listings():
    '''
    Query to get all listings
    '''

    user = current_user
    listing_data = []

    listings = Listing.query.all()

    [listing_data.append(listing.to_dict()) for listing in listings]

    return listing_data
