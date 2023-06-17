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
    crochet_lily_1 = ListingImages(
        img_url='https://i.etsystatic.com/39446140/r/il/53d078/4882058728/il_1140xN.4882058728_npel.jpg',
        preview=True,
        listing_id=3,
    )
    crochet_lily_2 = ListingImages(
        img_url='https://i.etsystatic.com/39446140/r/il/4ec0fe/4457434526/il_1140xN.4457434526_aw2x.jpg',
        preview=False,
        listing_id=3,
    )
    crochet_lily_3 = ListingImages(
        img_url='https://i.etsystatic.com/39446140/r/il/bfd81e/4504798329/il_1140xN.4504798329_ed8o.jpg',
        preview=False,
        listing_id=3,
    )

    all_imgs = [bulbasaur_planter_1, bulbasaur_planter_2, bulbasaur_planter_3, gengar_planter_1, gengar_planter_2, gengar_planter_3, crochet_lily_1, crochet_lily_2, crochet_lily_3]

    [db.session.add(img) for img in all_imgs]
    db.session.commit()



def undo_listing_imgs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.listings_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM listings_images"))

    db.session.commit()
