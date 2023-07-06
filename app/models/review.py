from .db import db, environment, SCHEMA, add_prefix_for_prod



class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    # Foreign Keys
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('listings.id')), nullable=False)

    # Relationships
    listing = db.relationship('Listing', back_populates='reviews')
    user = db.relationship('User', back_populates='reviews')
    imgs = db.relationship('ReviewImage', back_populates='review')


    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'rating': self.rating,
            'user_id': self.user_id,
            'listing_id': self.listing_id,
            'user_name': self.user.first_name
        }
