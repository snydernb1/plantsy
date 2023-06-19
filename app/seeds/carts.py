from app.models import db, Cart, environment, SCHEMA
from sqlalchemy.sql import text


def seed_cart():
    demo_cart = Cart (
        quantity=2,
        user_id=1,
        listing_id=3
    )

    db.session.add(demo_cart)
    db.session.commit()


def undo_cart():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM carts"))

    db.session.commit()
