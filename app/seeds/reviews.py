from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    review_1 = Review(
        review='I absolutely love this kit!!! This is so cute and adorable!!! My succulent was pretty dry upon delivery (it was a very warm week) but with some TLC, it’s thriving!!! I can’t wait to order more!!!',
        date='May 27, 2023',
        date_num= 1685145600000,
        rating=4,
        user_id=3,
        listing_id=1
    )
    review_2 = Review(
        review='Perfection! Purchased for a gift and they were so happy with it! The kit and succulent sent were awesome. Instructions were curated so well. Love it!!',
        date='Apr 3, 2023',
        date_num=1680480000000,
        rating=3,
        user_id=4,
        listing_id=1
    )
    review_3 = Review(
        review='Exactly as advertised and super cute. It has a hole in the bottom for water drainage. It came early.',
        date='Mar 30, 2023',
        date_num=1680134400000,
        rating=2,
        user_id=5,
        listing_id=1
    )
    review_4 = Review(
        review='Love this pot so much!! Way more space than I imagined too (:',
        date='Mar 2, 2023',
        date_num=1677715200000,
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
