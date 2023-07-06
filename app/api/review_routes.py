from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review, db, ReviewImage

review_routes = Blueprint('reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@review_routes.route('/')
def all_reviews():
    '''
    Query to get all reviews
    '''

    user = current_user
    review_data = []

    reviews = Review.query.all()

    [review_data.append(review.to_dict()) for review in reviews]

    return review_data
