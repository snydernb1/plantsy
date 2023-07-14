from app.models import db, Shop, environment, SCHEMA
from sqlalchemy.sql import text


def seed_shops():
    bill_shop = Shop(
        name='Bill\'s Planters',
        description='New designs coming 2023! Please do not hesitate to reach out with any questions. Thank you for visiting our shop!',
        img_url='https://imgur.com/aRJ49xE.jpg',
        owner_id=1
    )
    marnie_shop = Shop(
        name='Marnie\'s Flowers',
        description='Struggling to care for a plant? Look no further... Marnie\'s flowers are all crocheted by hand and do not require sunlight or water. Implossible to kill! Unless your cat decides to eat them.',
        img_url='https://imgur.com/iQFo4eL.jpg',
        owner_id=2
    )
    sam_shop = Shop(
        name='Coming Soon',
        description='Coming Soon',
        img_url='https://imgur.com/iQFo4eL.jpg',
        owner_id=3
    )
    ns_shop = Shop(
        name='Notably Special',
        description='Coming soon',
        img_url='https://imgur.com/iQFo4eL.jpg',
        owner_id=4
    )
    hc_shop = Shop(
        name='Hammerly Ceramics',
        description='Coming soon',
        img_url='https://imgur.com/iQFo4eL.jpg',
        owner_id=5
    )

    db.session.add(bill_shop)
    db.session.add(marnie_shop)
    db.session.add(sam_shop)
    db.session.add(ns_shop)
    db.session.add(hc_shop)
    db.session.commit()

def undo_shops():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shops RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shops"))

    db.session.commit()
