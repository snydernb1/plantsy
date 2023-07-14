from .db import db, environment, SCHEMA, add_prefix_for_prod



class ReviewImage(db.Model):
    __tablename__ = 'review_images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.String, nullable=False)
    # Foreign Keys
    review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('reviews.id')), nullable=False)

    # Relationships
    review = db.relationship('Review', back_populates='imgs')


    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'rating': self.rating,
            'user_id': self.user_id,
            'listing_id': self.listing_id,
        }
