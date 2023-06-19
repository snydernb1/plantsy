from .db import db, environment, SCHEMA, add_prefix_for_prod


class Cart(db.Model):
    __tablename__ = 'carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer, nullable=False)
    # Foreign Keys
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('listings.id')), nullable=False)

    # Relationships
    user = db.relationship('User', back_populates='cart')
    items = db.relationship('Listing', back_populates='cart')


    def to_dict(self):
        return {
            'id': self.id,
            'quantity': self.quantity,
            'user_id': self.user_id,
            'listing_id': self.listing_id,
        }


# cart = db.Table(
#     'carts',
#     db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id'))),
#     db.Column('listing_id', db.Integer, db.ForeignKey(add_prefix_for_prod('listings.id'))),
# )


# if environment == "production":
#     cart.schema = SCHEMA
