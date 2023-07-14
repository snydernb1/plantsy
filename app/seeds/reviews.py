from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    review_1 = Review(
        review='I absolutely love this kit!!! This is so cute and adorable!!! My succulent was pretty dry upon delivery (it was a very warm week) but with some TLC, it’s thriving!!! I can’t wait to order more!!!',
        date='May 27, 2021',
        date_num= 1685145600000,
        rating=4,
        user_id=3,
        listing_id=1
    )
    review_2 = Review(
        review='Perfection! Purchased for a gift and they were so happy with it! The kit and succulent sent were awesome. Instructions were curated so well. Love it!!',
        date='June 3, 2021',
        date_num=1680480000000,
        rating=3,
        user_id=4,
        listing_id=1
    )
    review_3 = Review(
        review='Exactly as advertised and super cute. It has a hole in the bottom for water drainage. It came early.',
        date='Feb 24, 2022',
        date_num=1680134400000,
        rating=2,
        user_id=5,
        listing_id=1
    )
    review_4 = Review(
        review='Love this pot so much!! Way more space than I imagined too (:',
        date='Mar 2, 2022',
        date_num=1677715200000,
        rating=5,
        user_id=1,
        listing_id=3
    )
    review_5 = Review(
        review='Super adorable! Cute little booty for my succulents! It didn\'t come dirty. Like the dirt ring won\'t come off on the outside. I\'m OCD enough that it bothers me when I look but most people won\'t haven\'t noticed it.',
        date='Mar 14, 2022',
        date_num=1677715200000,
        rating=3,
        user_id=8,
        listing_id=26
    )
    review_6 = Review(
        review='Love it! Fast shipping and it looks amazing in my bathroom!',
        date='Jun 14, 2022',
        date_num=1677715200000,
        rating=5,
        user_id=7,
        listing_id=26
    )
    review_7 = Review(
        review='Cute pots and delivered exactly as it was described. I cannot wait to gift it this season!',
        date='Aug 9, 2022',
        date_num=1677715200000,
        rating=5,
        user_id=5,
        listing_id=26
    )
    review_8 = Review(
        review='Amazing quality and the aesthetic goes great with my room! Love it',
        date='Nov 24, 2022',
        date_num=1677715200000,
        rating=5,
        user_id=4,
        listing_id=8
    )
    review_9 = Review(
        review='Quality is amazing. Packaged super well I would definitely purchase again. Cant wait for more colors to be available',
        date='Dec 19, 2022',
        date_num=1677715200000,
        rating=5,
        user_id=3,
        listing_id=8
    )
    review_10 = Review(
        review='The planter is nice but not exactly what I was expecting for a little over $90. The bright, white and shiny exterior makes it look like cheap plastic. Based on the photos I thought it was going to be an off white with a matte finish - which it\'s not.',
        date='Mar 10, 2023',
        date_num=1677715200000,
        rating=3,
        user_id=8,
        listing_id=8
    )
    review_11 = Review(
        review='Beautiful lightweight set of pots. I bought the ones made from bamboo fiber. Nice big drainage trays. The only thing I changed was to enlarge the holes in the bottom of the pots a bit to improve drainage, which was easy to do.',
        date='Mar 15, 2023',
        date_num=1677715200000,
        rating=5,
        user_id=8,
        listing_id=9
    )
    review_12 = Review(
        review='Nice. Would be more elegant if the edge on the saucer was clean and simple like the top edge of the pot great color and weight.',
        date='Mar 20, 2023',
        date_num=1677715200000,
        rating=4,
        user_id=7,
        listing_id=9
    )
    review_13 = Review(
        review='The prefect size (and weight) planter for my indoor house plant shelf. I used it for a spider plant and it really pops in white.',
        date='Apr 12, 2023',
        date_num=1677715200000,
        rating=4,
        user_id=7,
        listing_id=11
    )
    review_14 = Review(
        review='I thought it would be bigger... It\'s hard to keep a plant alive and the material is a cheap plastic',
        date='May 18, 2023',
        date_num=1677715200000,
        rating=1,
        user_id=8,
        listing_id=18
    )
    review_15 = Review(
        review='Wish it was bigger, all my plants keep dying',
        date='May 21, 2023',
        date_num=1677715200000,
        rating=2,
        user_id=2,
        listing_id=18
    )
    review_16 = Review(
        review='The price is amazing for the size of the pot! The color looks even better in person!',
        date='Jun 6, 2023',
        date_num=1677715200000,
        rating=5,
        user_id=8,
        listing_id=22
    )
    review_17 = Review(
        review='Absolutely love these!! I went back and bought more after the first one arrived!! You won\'t regret it:)',
        date='Jun 15, 2023',
        date_num=1677715200000,
        rating=5,
        user_id=5,
        listing_id=22
    )
    review_18 = Review(
        review='Amazing product!',
        date='Jun 21, 2023',
        date_num=1677715200000,
        rating=5,
        user_id=7,
        listing_id=22
    )
    review_19 = Review(
        review='Cool design but the finish is a little underwhelming',
        date='Jul 1, 2023',
        date_num=1677715200000,
        rating=3,
        user_id=7,
        listing_id=20
    )
    review_20 = Review(
        review='A bit small but the design is so cool! Very modern and fits well with my home.',
        date='Jul 4, 2023',
        date_num=1677715200000,
        rating=4,
        user_id=7,
        listing_id=28
    )
    review_21 = Review(
        review='Love the design! The seller was great to deal with too!',
        date='Jul 7, 2023',
        date_num=1677715200000,
        rating=5,
        user_id=8,
        listing_id=28
    )

    all_reviews = [review_1, review_2, review_3, review_4,review_5,review_6,review_7,review_8,review_9,review_10,review_11,review_12,review_13,review_14,review_15,review_16,review_17,review_18,review_19,review_20,review_21,]

    [db.session.add(review) for review in all_reviews]
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
