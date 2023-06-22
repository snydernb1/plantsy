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
    conc_plant_1 = Listing(
        name='Large Temple Planter',
        description='Each planter stands roughly 1\' tall and 6” wide. The plant bed itself consists of two joined compartments. The top is roughly 6” wide by 3” tall and the bottom is 4” wide x 2” tall. The planters are made out of Rockite (similar to concrete) and the pieces are joined together with an epoxy. Over time as you water your plant, the planter will begin to develop a slight patina. The plant bed has a drainage hole and water will drip from the top piece into the sunken basin at the base. From my experience in Boulder, water typically evaporates from the basin within a day or two (other climates will vary). Follow me on insta @notablyspecial for the latest updates. ',
        price=79.99,
        free_shipping=False,
        discount=None,
        owner_id=4,
        shop_id=4
    )
    conc_plant_2 = Listing(
        name='Small Temple Planter',
        description='Each planter stands roughly 6 ¼” tall and 4 ¾” wide. The plant bed itself consists of two joined compartments. The top is roughly 3 ½” wide by 1 ¾” tall and the bottom is 2” wide x 1 ¼” tall. The planters are made out of Rockite (similar to concrete) and the pieces are joined together with an epoxy. Over time as you water your plant, the planter will begin to develop a slight patina. The plant bed has a drainage hole and water will drip from the top piece into the sunken basin at the base. From my experience in Boulder, water typically evaporates from the basin within a day or two (other climates will vary). Follow me on insta @notablyspecial for the latest updates. ',
        price=39.99,
        free_shipping=False,
        discount=None,
        owner_id=4,
        shop_id=4
    )
    d_plant_1 = Listing(
        name='3D Printed in Green Planter',
        description="This modern and unique planter pot is expertly crafted using 3D printing technology and boasts a sleek and stylish green color. Its modern geometric design is sure to complement any contemporary space, and the durable 3D printed material ensures long-lasting use. Whether you're a plant enthusiast or just looking for a stylish decor piece, this planter pot is the perfect addition to any home or office. Add a touch of sophistication to your space with this stunning 3D printed green planter pot.",
        price=18.99,
        free_shipping=False,
        discount=.2,
        owner_id=2,
        shop_id=2
    )


    all_listings = [bulbasaur_planter, gengar_planter, conc_plant_1, conc_plant_2, d_plant_1]
    [db.session.add(listing) for listing in all_listings]

    db.session.commit()



def undo_listings():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.listings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM listings"))

    db.session.commit()
