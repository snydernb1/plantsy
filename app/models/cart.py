from .db import db, environment, SCHEMA, add_prefix_for_prod


cart = db.Table(
    'carts',
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id'))),
    db.Column('listing_id', db.Integer, db.ForeignKey(add_prefix_for_prod('listings.id'))),
)


if environment == "production":
    cart.schema = SCHEMA
