from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    review_1 = Review(
        review='Review text',
        rating=4,
        user_id=3,
        listing_id=1
    )
    review_2 = Review(
        review='Review text',
        rating=3,
        user_id=4,
        listing_id=1
    )
    review_3 = Review(
        review='Review text',
        rating=2,
        user_id=5,
        listing_id=1
    )
    review_4 = Review(
        review='Review text',
        rating=5,
        user_id=1,
        listing_id=3
    )

    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review_4)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
