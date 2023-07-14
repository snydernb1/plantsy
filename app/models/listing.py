from .db import db, environment, SCHEMA, add_prefix_for_prod
# from .cart import cart



class Listing(db.Model):
    __tablename__ = 'listings'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    free_shipping = db.Column(db.Boolean, nullable=False)
    discount = db.Column(db.Float)
    # Foreign Keys
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    shop_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('shops.id')), nullable=False)

    # Relationships
    imgs = db.relationship('ListingImages', cascade='all, delete-orphan', back_populates='listing')
    user = db.relationship('User', back_populates='listings')
    shop = db.relationship('Shop', back_populates='listings')
    cart = db.relationship('Cart', back_populates='items')
    reviews = db.relationship('Review', back_populates='listing')

    # Join Table
    # user = db.relationship(
    #     'User',
    #     secondary=cart,
    #     back_populates='items'
    # )
    def find_avg_rating(self):
        sum = 0
        total_num = len(self.reviews)

        if (len(self.reviews) == 0):
            return 'new'

        for review in self.reviews:
            sum += review.rating

        avg = sum / total_num

        return avg



    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'free_shipping': self.free_shipping,
            'discount': self.discount,
            'owner_id': self.owner_id,
            'shop_id': self.shop_id,
            'imgs': [img.to_dict() for img in self.imgs],
            'rating': self.find_avg_rating()
        }
