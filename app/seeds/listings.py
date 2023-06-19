from app.models import db, Listing, environment, SCHEMA
from sqlalchemy.sql import text

def seed_listings():
    bulbasaur_planter = Listing(
        name='Bulbasaur Planter',
        description='Dimensions are: Overall (widest points) - 4"D 3.5H 3.5W Cavity - 2.5"Dia x 2.5"D With Drain Hole. *Due to the rustic nature of concrete, air bubbles and natural pores cannot be avoided. These are handmade and slight variations in color and texture may occur.*',
        price=23.99,
        free_shipping=True,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    gengar_planter = Listing(
        name='Gengar Concrete Planter',
        description='Dimensions are: Overall (widest points) - 6"L x 6.2"W x 5.5"H Cavity - 3.5"Dia x 3.5"D - 4" INCH PLANT will fit With Drain Hole Super Solid 3.15 LB Heavy Planter These are Designed & Sculpted By DoolittleDorks Only available on Etsy. Made in the USA *Due to the rustic nature of concrete, air bubbles and natural pores cannot be avoided. These are handmade and slight variations in color and texture may occur.*',
        price=17.99,
        free_shipping=False,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    crochet_lily = Listing(
        name='Crochet Lily Potted Plant',
        description='The item will come with the entire pot. This is a finished product, not a crochet potted flower tool set. Handmade crochet flowers will never die, just as our love and spirit will lasts forever:). Due to the light and screen setting difference, the item\'s color may be slightly different from the pictures. Please allow slight dimension difference due to different manual measurement.',
        price=17.99,
        free_shipping=False,
        discount=.1,
        owner_id=2,
        shop_id=2
    )

    db.session.add(bulbasaur_planter)
    db.session.add(gengar_planter)
    db.session.add(crochet_lily)
    db.session.commit()



def undo_listings():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.listings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM listings"))

    db.session.commit()
