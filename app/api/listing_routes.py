from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from random import sample
from app.models import Listing, db, ListingImages
from app.forms.new_listing_form import NewListingForm
from app.forms.new_listing_img_form import NewListingImgForm
from .AWS_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3

listing_routes = Blueprint('listings', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


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


@listing_routes.route('/search', methods = ['POST'])
def search_listings():
    '''
    Search for listings
    '''

    data = request.get_json()
    search = data['searchData']
    search_data = []

    search_res = Listing.query.filter(Listing.name.like('%' + search + '%')).all()

    [search_data.append(listing.to_dict()) for listing in search_res]

    return search_data


@listing_routes.route('/', methods = ['POST'])
@login_required
def create_listing():
    '''
    Adds a new listing to the db
    '''

    form = NewListingForm()
    form['csrf_token'].data = request.cookies['csrf_token'] # Boilerplate code

    if form.validate_on_submit():
        new_listing = Listing(
            owner_id = form.data["owner_id"],
            name = form.data["name"],
            price = form.data["price"],
            description = form.data["description"],
            discount = form.data["discount"],
            free_shipping = form.data["free_shipping"],
            shop_id = form.data["shop_id"],
        )

        db.session.add(new_listing)
        db.session.commit()
        return new_listing.to_dict()


    if form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@listing_routes.route('/<int:listing_id>', methods = ['PUT'])
@login_required
def edit_listing(listing_id):
    '''
    Edits a listing in the db
    '''
    listing = Listing.query.get(listing_id)
    data = request.get_json()

    listing.owner_id = data["owner_id"]
    listing.name = data["name"]
    listing.price = data["price"]
    listing.description = data["description"]
    listing.discount = data["discount"]
    listing.free_shipping = data["free_shipping"]
    listing.shop_id = data["shop_id"]

    db.session.commit()
    return listing.to_dict()


@listing_routes.route('/<int:listing_id>', methods = ['DELETE'])
@login_required
def delete_listing(listing_id):
    '''
    Deletes listing from the db
    '''
    listing = Listing.query.get(listing_id)
    imgs = ListingImages.query.filter(ListingImages.listing_id == listing_id).all()

    for img in imgs:
        remove_file_from_s3(img.img_url)


    db.session.delete(listing)
    db.session.commit()
    return {"Message": "Successfully Deleted"}


@listing_routes.route('/imgs', methods = ['POST'])
@login_required
def create_listing_img():
    '''
    Adds a new listing image to the db
    '''

    # data = request.get_json() ==> This was messing things up

    form = NewListingImgForm()
    form['csrf_token'].data = request.cookies['csrf_token'] # Boilerplate code


    if form.validate_on_submit():

        image_url = form.data['image']
        image_url.filename = get_unique_filename(image_url.filename)
        upload = upload_file_to_s3(image_url)

        if 'url' not in upload:
            return 'error' #Fix this later for react


        new_listing_img = ListingImages(
            listing_id = form.data["listing_id"],
            img_url = upload['url'],
            preview = form.data["preview"],
        )

        db.session.add(new_listing_img)
        db.session.commit()
        return new_listing_img.to_dict()

    if form.errors:
        return form.errors, 400


@listing_routes.route('/imgs/<int:id>', methods = ['DELETE'])
@login_required
def delete_listing_img(id):

    img = ListingImages.query.get(id)


    file_delete = remove_file_from_s3(img.img_url) #.image_url could be wrong?

    if file_delete:
        db.session.delete(img)
        db.session.commit()
        return {"Message": "Successfully Deleted"}

    else:
        return "img delete error" #Fix later with react
