from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review, db, ReviewImage
from ..forms.new_review_form import NewReviewForm

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


@review_routes.route('/', methods = ['POST'])
@login_required
def create_review():
    '''
    Creates a new review in the db
    '''
    user = current_user

    form = NewReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token'] # Boilerplate code

    if form.validate_on_submit():
        new_review = Review(
            review = form.data['review'],
            date = form.data['date'],
            rating = form.data['rating'],
            user_id = user.id,
            listing_id = form.data['listing_id'],
        )

        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()

    if form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/<int:review_id>', methods = ['DELETE'])
@login_required
def delete_review(review_id):
    '''
    Deletes review from the db
    '''

    review = Review.query.get(review_id)

    db.session.delete(review)
    db.session.commit()
    return {"Message": "Successfully Deleted"}


@review_routes.route('/<int:review_id>', methods = ['PUT'])
@login_required
def update_review(review_id):
    '''
    Updates an existing review in the db
    '''

    review = Review.query.get(review_id)
    data = request.get_json()

    review.review = data['review']
    review.date = data['date']
    review.rating = data['rating']

    db.session.commit()
    return review.to_dict()
