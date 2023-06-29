from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    review_1 = Review(
        review='Review text',
        rating=4,
        user_id=1,
        listing_id=1
    )

    db.session.add(review_1)
    db.session.commit()

def undo_shops():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
