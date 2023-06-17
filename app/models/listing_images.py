from .db import db, environment, SCHEMA, add_prefix_for_prod



class ListingImages(db.Model):
    __tablename__ = 'listings_images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.String, nullable=False)
    preview = db.Column(db.Boolean, nullable=False)
    # Foreign Keys
    listing_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('listings.id')), nullable=False)

    # Relationships
    listing = db.relationship('Listing', back_populates='imgs')


    def to_dict(self):
        return {
            'id': self.id,
            'img_url': self.img_url,
            'preview': self.preview,
            'listing_id': self.listing_id,
        }
