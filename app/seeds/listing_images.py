from app.models import db, ListingImages, environment, SCHEMA
from sqlalchemy.sql import text


def seed_listing_imgs():
    bulbasaur_planter_1 = ListingImages(
        img_url='https://i.etsystatic.com/24577853/r/il/8d0284/3413905857/il_1140xN.3413905857_d9q3.jpg',
        preview=True,
        listing_id=1,
    )
    bulbasaur_planter_2 = ListingImages(
        img_url='https://i.etsystatic.com/24577853/r/il/49342a/3366235058/il_1140xN.3366235058_ghpv.jpg',
        preview=False,
        listing_id=1,
    )
    bulbasaur_planter_3 = ListingImages(
        img_url='https://i.etsystatic.com/24577853/r/il/a8fbfe/3413905839/il_1140xN.3413905839_maol.jpg',
        preview=False,
        listing_id=1,
    )
    gengar_planter_1 = ListingImages(
        img_url='https://i.etsystatic.com/24577853/r/il/b2d6b6/4823535957/il_1140xN.4823535957_3skp.jpg',
        preview=True,
        listing_id=2,
    )
    gengar_planter_2 = ListingImages(
        img_url='https://i.etsystatic.com/24577853/r/il/c1804e/4823474365/il_1140xN.4823474365_kbke.jpg',
        preview=False,
        listing_id=2,
    )
    gengar_planter_3 = ListingImages(
        img_url='https://i.etsystatic.com/24577853/r/il/4ea137/4823474355/il_300x300.4823474355_4yb3.jpg',
        preview=False,
        listing_id=2,
    )
    temple_large_1 = ListingImages(
        img_url='https://imgur.com/dt0zhXz',
        preview=True,
        listing_id=3,
    )
    temple_large_2 = ListingImages(
        img_url='https://imgur.com/y9gGZrJ',
        preview=False,
        listing_id=3,
    )
    temple_large_3 = ListingImages(
        img_url='https://imgur.com/bosdFzF',
        preview=False,
        listing_id=3,
    )
    temple_large_4 = ListingImages(
        img_url='https://imgur.com/YQRuPzu',
        preview=False,
        listing_id=3,
    )
    temple_large_5 = ListingImages(
        img_url='https://imgur.com/fkEotKr',
        preview=False,
        listing_id=3,
    )
    temple_small_1 = ListingImages(
        img_url='https://imgur.com/jQeQMHF',
        preview=True,
        listing_id=4,
    )
    temple_small_2 = ListingImages(
        img_url='https://imgur.com/NrcwZOL',
        preview=False,
        listing_id=4,
    )
    temple_small_3 = ListingImages(
        img_url='https://imgur.com/2l1ekcw',
        preview=False,
        listing_id=4,
    )
    temple_small_4 = ListingImages(
        img_url='https://imgur.com/etNpyhJ',
        preview=False,
        listing_id=4,
    )
    temple_small_5 = ListingImages(
        img_url='https://imgur.com/t9wbYjO',
        preview=False,
        listing_id=4,
    )
    d_green_1 = ListingImages(
        img_url='https://i.etsystatic.com/33208167/r/il/0fac16/4531990590/il_1140xN.4531990590_1zox.jpg',
        preview=True,
        listing_id=5,
    )
    d_green_2 = ListingImages(
        img_url='https://i.etsystatic.com/33208167/r/il/f56ee2/4531969698/il_1140xN.4531969698_hd66.jpg',
        preview=False,
        listing_id=5,
    )
    d_green_3 = ListingImages(
        img_url='https://i.etsystatic.com/33208167/r/il/6e3354/4531972210/il_1140xN.4531972210_novb.jpg',
        preview=False,
        listing_id=5,
    )


    all_imgs = [bulbasaur_planter_1, bulbasaur_planter_2, bulbasaur_planter_3, gengar_planter_1, gengar_planter_2, gengar_planter_3,]

    [db.session.add(img) for img in all_imgs]
    db.session.commit()



def undo_listing_imgs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.listings_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM listings_images"))

    db.session.commit()
