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
    organic_plant_1 = Listing(
        name='Plant Pot with Saucer',
        description=f'Finally, a cute planter with ample drainage and a big saucer! The Gelato collection features pottery with a curvy base and thick saucer for a modern look. Includes 5 drainage holes. The opening of the Small planter is about 5", however the base is larger so can actually hold quite a lot more soil than regular 5" pots, and similarly, the medium 8" pot holds around the same amount of soil as a 10" planter. Perfect for your plant parent friends!',
        price=71.37,
        free_shipping=True,
        discount=None,
        owner_id=2,
        shop_id=2
    )
    skull_plant_1 = Listing(
        name='Skull Planter',
        description=f'Skull planter for succulents or small plants. It is well suited for live or artificial plants and succulents, as well as a variety of other uses! Available in multiple sizes, and many colors, with or without a drainage hole. Please see photos for available sizes and colors. This item is 3D printed using PLA, an eco-friendly plant-based plastic. PLA is lightweight and durable and can withstand lots of wear and tear. These planters are best suited for indoor use, or outdoors in a shaded area. Long term sun exposure may cause discoloration.',
        price=15.00,
        free_shipping=False,
        discount=.15,
        owner_id=2,
        shop_id=2
    )
    organic_plant_2 = Listing(
        name='Light + Ladder: Fondra Ceramic Self Watering Pot',
        description=f'Don\'t worry about your plants when you go on vacation! This planter will easily keep your plant watered for 3-6 weeks. Fondra, which translates to “will melt” in French, is Light + Ladder’s sub-irrigation planter for Greenery Unlimited. Inspired by soft masses colliding and merging, this organic shape was created using 3d software to simulate the physics of gravitational impact. The form was then 3D printed, cast in plaster, and hand worked to ensure the desired organic and fluid gesture. Utilizing Greenery Unlimited\'s patented self watering system, this planter can be used either as a self-watering system or as a traditional planter with the basin acting as a catchment tray.',
        price=89.00,
        free_shipping=False,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    marble_plant_1 = Listing(
        name='Modern Indoor Planter Houseplant Round Japandi Sustainable Flower Pot',
        description='Made from agricultural by-products, each planter has been transformed into durable but natural-looking planters each with its own unique characteristics. Equipped with a drainage hole and a saucer, this pot is also a perfect starter for plant beginners.',
        price=45.00,
        free_shipping=False,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    stone_plant_1 = Listing(
        name='11" Tall Planter Pot with Drainage Hole & Plug',
        description='These planters offer a modern update to the traditional earthy tones. Elevate your aesthetic, and add a unique contrast to your plant collection. 11” planter pots come in 3 different colorways and 2 finishes. Each comes with a drainage hole and plug. Perfect to place in corners and entryways of your home. Made with recycled plastics, the finished product is combined with materials like natural stone and wood to completely change the nature of plastic into a green composite material. As each planter is the result of handcrafted finishes, each item contains its own personality and unique details.',
        price=33.95,
        free_shipping=False,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    stone_plant_2 = Listing(
        name='6" Planter Pot with Drainage Hole & Plug',
        description='This traditional planter has been marbled with a natural white stone finish to give it a natural concrete look. It is perfect for any medium-size plant. For a more modern look, pair with a Ficus Lyrata. Made with recycled plastics, the finished product is combined with materials like natural stone and wood to completely change the nature of plastic into a green composite material. As each planter is the result of handcrafted finishes, each item contains its own personality and unique details.',
        price=23.00,
        free_shipping=False,
        discount=None,
        owner_id=2,
        shop_id=2
    )
    stone_plant_3 = Listing(
        name='Harmony 7" Planters',
        description='These planters offer a modern update to the traditional earthy tones. Elevate your aesthetic, and add a unique contrast to your plant collection. 7” planter pots come in 5 different colorways. Each comes with a drainage hole, plug, and a matching saucer. Made with recycled plastics, the finished product is combined with materials like natural stone and wood to completely change the nature of plastic into a green composite material. As each planter is the result of handcrafted finishes, each item contains its own personality and unique details.',
        price=29.00,
        free_shipping=False,
        discount=None,
        owner_id=2,
        shop_id=2
    )
    stone_plant_4 = Listing(
        name='7" Planter Pot with Saucer',
        description='Made from agricultural by-products, each planter has been transformed into durable but natural-looking planters each with its own unique characteristics. Equipped with a drainage hole and a saucer, this pot is also a perfect starter for plant beginners.',
        price=66.00,
        free_shipping=True,
        discount=None,
        owner_id=2,
        shop_id=2
    )
    stone_plant_5 = Listing(
        name='Cement Planter Pots Including Drainage Holes',
        description='This beautifully constructed item would be the perfect gift for anyone who loves having indoor flowers and plants. Great gift for plant lovers or any occasion: birthdays, Valentine\'s Day, Mother\'s Day, anniversaries, housewarmings, and other holidays. This planter includes a drainage hole in the base. This provides vital air flow for the plant to grow and helps to prevent damage to the roots.',
        price=24.99,
        free_shipping=False,
        discount=.2,
        owner_id=2,
        shop_id=2
    )
    stone_plant_15 = Listing(
        name='Geometric Planter from Concrete Multicolor Indoor Outdoor Plant Flower Pot',
        description='Personalize your space with a geometric concrete planter. A large, sleek, and solid geometric concrete plant pot with many edges and faces that gleam in the sun and cast interesting shadows. Entirely handmade from concrete, the edgy planter pot has a multicolor, textured effect, although the one in the examples has a blue-black color combination, each planter will be unique, the same color but texture will vary. Bring some color and greenery to your space with a planter made just for you!',
        price=51.00,
        free_shipping=False,
        discount=.1,
        owner_id=1,
        shop_id=1
    )
    stone_plant_16 = Listing(
        name='Miniature Concrete Planter | Concrete Planter',
        description='Small hand poured concrete planter, perfect for a small plants such as succulents, air plants or small house plants. Measures approximately 1 7/8” tall. Every planter is made to order so the color may vary slightly from what is pictured in the listing. You may also see a few small air bubbles which is the nature of hand poured concrete and what makes each piece individual and unique.',
        price=15.00,
        free_shipping=False,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    stone_plant_17 = Listing(
        name='Concrete Cactus Planter',
        description='Small hand poured concrete planter, perfect for a small plants such as succulents, air plants or small house plants. Measures approximately 1 7/8” tall. Every planter is made to order so the color may vary slightly from what is pictured in the listing. You may also see a few small air bubbles which is the nature of hand poured concrete and what makes each piece individual and unique.',
        price=15.00,
        free_shipping=False,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    stone_plant_18 = Listing(
        name='People Planter',
        description='People Planter Pots are an excellent way to add a personal touch to any home or outdoor space. Not only do they look great, but they make the perfect gift for those who love plants and gardening. These planters come in four distinct styles – Thinking, Relaxing, Yoga, and Meditation – all printed with eco-friendly PLA material, which is sensitive to high temperatures. They are available in three sizes – 5.75 inches tall (large), 4 inches tall (default) and 2 inches tall (air plants only). All the planters come equipped with drainage holes so that excess water can escape and prevent root rot.',
        price=10.99,
        free_shipping=False,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    stone_plant_19 = Listing(
        name='Chinese Takeout Planter',
        description='A modern Eco Friendly take on the Chinese Take Out Planter. Perfect to add personalization to any indoor or outdoor area. These can be personalized with the many colors we have available. This 4 inch version can fit pretty much any succulent out there and has built in drainage holes for easy watering.',
        price=9.99,
        free_shipping=False,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    stone_plant_20 = Listing(
        name='Mid-Century Modern Pot in Matte Olive Green',
        description='Mid-century modern designed 3d printed planter made with high quality, eco-friendly plant based materials. Great for indoor houseplants. Take the stress out of the day with unique plant pots that not only look great, but are good for your plants too! These planters are recyclable and bio-degradable although they will last for years.',
        price=20.00,
        free_shipping=False,
        discount=.15,
        owner_id=1,
        shop_id=1
    )
    stone_plant_21 = Listing(
        name='Bubble Pot',
        description='Introducing our latest innovation - the 3D printed bubble planter made from plants. This stunning planter is designed to elevate your indoor garden with its modern and contemporary style. Each planter is crafted with precision, using high-quality materials and 3D printing technology, to create a beautiful and durable product. Includes drainage and option drip tray. The bubble planter features a unique shape that is perfect for displaying your favorite plants. The top of the planter is a clear, spherical bubble that allows for plenty of light to filter through, ensuring your plants have ample access to sunlight. The base of the planter is made from biodegradable materials, which are not only eco-friendly but also provide a stable foundation for your plants.',
        price=20.00,
        free_shipping=False,
        discount=.15,
        owner_id=1,
        shop_id=1
    )
    stone_plant_22 = Listing(
        name='4.5" Short Planter - Cubes',
        description='This one-of-a-kind large porcelain planter is 4.5 inches (12 cm) tall and 4 inches (10 cm) wide. Hammerly Ceramics planters are perfect for succulents, cacti, or any small house plant. Every Hammerly Ceramics piece is handmade by Curt in his studio outside Denver, Colorado. Starting from a prototype designed in 3D modeling software each design then has custom molds produced in-house. These unique molds are cast in porcelain, fired, coated in handmade glazes, and high fired again in a custom computer-controlled gas kiln. Each planter is designed to grow happy, healthy plants and finished in high-quality, beautiful, colorful glazes. Made from high-fired porcelain that is strong and durable.',
        price=80.00,
        free_shipping=False,
        discount=None,
        owner_id=5,
        shop_id=5
    )
    stone_plant_23 = Listing(
        name='4.5" Short Planter - Coral',
        description='This one-of-a-kind large porcelain planter is 4.5 inches (12 cm) tall and 4 inches (10 cm) wide. Hammerly Ceramics planters are perfect for succulents, cacti, or any small house plant. Every Hammerly Ceramics piece is handmade by Curt in his studio outside Denver, Colorado. Starting from a prototype designed in 3D modeling software each design then has custom molds produced in-house. These unique molds are cast in porcelain, fired, coated in handmade glazes, and high fired again in a custom computer-controlled gas kiln. Each planter is designed to grow happy, healthy plants and finished in high-quality, beautiful, colorful glazes. Made from high-fired porcelain that is strong and durable.',
        price=80.00,
        free_shipping=False,
        discount=None,
        owner_id=5,
        shop_id=5
    )
    stone_plant_24 = Listing(
        name='4.5" Short Planter - Web',
        description='This one-of-a-kind large porcelain planter is 4.5 inches (12 cm) tall and 4 inches (10 cm) wide. Hammerly Ceramics planters are perfect for succulents, cacti, or any small house plant. Every Hammerly Ceramics piece is handmade by Curt in his studio outside Denver, Colorado. Starting from a prototype designed in 3D modeling software each design then has custom molds produced in-house. These unique molds are cast in porcelain, fired, coated in handmade glazes, and high fired again in a custom computer-controlled gas kiln. Each planter is designed to grow happy, healthy plants and finished in high-quality, beautiful, colorful glazes. Made from high-fired porcelain that is strong and durable.',
        price=80.00,
        free_shipping=False,
        discount=None,
        owner_id=5,
        shop_id=5
    )
    stone_plant_25 = Listing(
        name='7" Tall Planter - Cubes',
        description='This one-of-a-kind large porcelain planter is 7 inches (18 cm) tall and 6 inches (15 cm) wide. Hammerly Ceramics planters are perfect for succulents, cacti, or any small house plant. Every Hammerly Ceramics piece is handmade by Curt in his studio outside Denver, Colorado. Starting from a prototype designed in 3D modeling software each design then has custom molds produced in-house. These unique molds are cast in porcelain, fired, coated in handmade glazes, and high fired again in a custom computer-controlled gas kiln. Each planter is designed to grow happy, healthy plants and finished in high-quality, beautiful, colorful glazes. Made from high-fired porcelain that is strong and durable.',
        price=145.00,
        free_shipping=False,
        discount=None,
        owner_id=5,
        shop_id=5
    )
    stone_plant_26 = Listing(
        name='7" Tall Planter - Web',
        description='This one-of-a-kind large porcelain planter is 7 inches (18 cm) tall and 6 inches (15 cm) wide. Hammerly Ceramics planters are perfect for succulents, cacti, or any small house plant. Every Hammerly Ceramics piece is handmade by Curt in his studio outside Denver, Colorado. Starting from a prototype designed in 3D modeling software each design then has custom molds produced in-house. These unique molds are cast in porcelain, fired, coated in handmade glazes, and high fired again in a custom computer-controlled gas kiln. Each planter is designed to grow happy, healthy plants and finished in high-quality, beautiful, colorful glazes. Made from high-fired porcelain that is strong and durable.',
        price=145.00,
        free_shipping=False,
        discount=None,
        owner_id=5,
        shop_id=5
    )
    stone_plant_27 = Listing(
        name='7" Tall Planter - Coral',
        description='This one-of-a-kind large porcelain planter is 7 inches (18 cm) tall and 6 inches (15 cm) wide. Hammerly Ceramics planters are perfect for succulents, cacti, or any small house plant. Every Hammerly Ceramics piece is handmade by Curt in his studio outside Denver, Colorado. Starting from a prototype designed in 3D modeling software each design then has custom molds produced in-house. These unique molds are cast in porcelain, fired, coated in handmade glazes, and high fired again in a custom computer-controlled gas kiln. Each planter is designed to grow happy, healthy plants and finished in high-quality, beautiful, colorful glazes. Made from high-fired porcelain that is strong and durable.',
        price=145.00,
        free_shipping=False,
        discount=None,
        owner_id=5,
        shop_id=5
    )
    stone_plant_28 = Listing(
        name='7" Tall Planter',
        description='This one-of-a-kind large porcelain planter is 7 inches (18 cm) tall and 6 inches (15 cm) wide. Hammerly Ceramics planters are perfect for succulents, cacti, or any small house plant. Every Hammerly Ceramics piece is handmade by Curt in his studio outside Denver, Colorado. Starting from a prototype designed in 3D modeling software each design then has custom molds produced in-house. These unique molds are cast in porcelain, fired, coated in handmade glazes, and high fired again in a custom computer-controlled gas kiln. Each planter is designed to grow happy, healthy plants and finished in high-quality, beautiful, colorful glazes. Made from high-fired porcelain that is strong and durable.',
        price=145.00,
        free_shipping=False,
        discount=None,
        owner_id=5,
        shop_id=5
    )
    stone_plant_29 = Listing(
        name='8" Wide Planter - Fruit',
        description='This one-of-a-kind large porcelain planter is 6 inches (18 cm) tall and 8 inches (15 cm) wide. Hammerly Ceramics planters are perfect for succulents, cacti, or any small house plant. Every Hammerly Ceramics piece is handmade by Curt in his studio outside Denver, Colorado. Starting from a prototype designed in 3D modeling software each design then has custom molds produced in-house. These unique molds are cast in porcelain, fired, coated in handmade glazes, and high fired again in a custom computer-controlled gas kiln. Each planter is designed to grow happy, healthy plants and finished in high-quality, beautiful, colorful glazes. Made from high-fired porcelain that is strong and durable.',
        price=160.00,
        free_shipping=False,
        discount=None,
        owner_id=5,
        shop_id=5
    )
    stone_plant_30 = Listing(
        name='8" Wide Planter - Oreo',
        description='This one-of-a-kind large porcelain planter is 6 inches (18 cm) tall and 8 inches (15 cm) wide. Hammerly Ceramics planters are perfect for succulents, cacti, or any small house plant. Every Hammerly Ceramics piece is handmade by Curt in his studio outside Denver, Colorado. Starting from a prototype designed in 3D modeling software each design then has custom molds produced in-house. These unique molds are cast in porcelain, fired, coated in handmade glazes, and high fired again in a custom computer-controlled gas kiln. Each planter is designed to grow happy, healthy plants and finished in high-quality, beautiful, colorful glazes. Made from high-fired porcelain that is strong and durable.',
        price=160.00,
        free_shipping=False,
        discount=None,
        owner_id=5,
        shop_id=5
    )
    stone_plant_31 = Listing(
        name='Sage Green Ceramic Round Planter Pot with Saucer',
        description='Bring your plant to life with this beautifully crafted planter. It features a light sage green crackle glaze for the perfect pop of color as well as an attached saucer for essential drainage.',
        price=19.03,
        free_shipping=False,
        discount=.1,
        owner_id=2,
        shop_id=2
    )
    stone_plant_32 = Listing(
        name='Unique Modern 3D Printed in White for Flower and Succulents',
        description='This modern and unique planter pot is expertly crafted using 3D printing technology and boasts a sleek and stylish green color. Its modern design is sure to complement any contemporary space, and the durable 3D printed material ensures long-lasting use. Whether you\'re a plant enthusiast or just looking for a stylish decor piece, this planter pot is the perfect addition to any home or office. Add a touch of sophistication to your space with this stunning 3D printed white planter pot.',
        price=18.99,
        free_shipping=True,
        discount=None,
        owner_id=2,
        shop_id=2
    )
    stone_plant_33 = Listing(
        name='Booty Pot',
        description='Is that a butt? Yes! Meet our Booty concrete planter. A minimalist planter that is cheeky and sure to start a conversation. Shapely little butts - This planter is raw unsealed concrete and has a matte finish to it. Great for small house plants or succulents. Our planter comes with a drainage hole included. These items look great with any design style (modern farmhouse, industrial, boho, minimalist). They also make excellent wedding and housewarming gifts.',
        price=24.95,
        free_shipping=False,
        discount=None,
        owner_id=2,
        shop_id=2
    )
    stone_plant_34 = Listing(
        name='Planter Pot With Drainage - Snow White',
        description='A modern Eco-friendly planter designed to enhance any living space. These planters add a decorative touch and provide a stylish home for a variety of authentic or synthetic flora including succulents, cactus, flowers and small plants. Our designs are fabricated using 3-D printing technology allowing us to push the boundaries of planter designs. By using our custom corn-based plastic we are able to provide a sustainable product without sacrificing quality and durability. We prioritize the environment and value products manufactured close to home which reduces the emission of greenhouse gasses into the atmosphere due to transportation. Our products are proudly manufactured in Canada.',
        price=49.99,
        free_shipping=True,
        discount=.25,
        owner_id=2,
        shop_id=2
    )
    stone_plant_35 = Listing(
        name='BOOTY Terracotta Clay Pot',
        description='Ideal for a variety of plants, this terracotta clay pot is a beautiful statement piece. You can\'t go wrong with terracotta pots. Their beautiful reddish brown natural color — and porous material — is perfect for nearly any space and most plants. Terracotta clay is an especially ideal home for cacti, succulents, orchids, and hoyas. If you notice a white, crusty buildup on your pot develop over time, don’t worry! This is just a natural consequence of moisture evaporation—salts and minerals get released along with the water, and sometimes they’ll stick to the clay. The best way to clean it off is with a scrub brush and some warm water and vinegar.',
        price=32.00,
        free_shipping=True,
        discount=None,
        owner_id=2,
        shop_id=2
    )
    stone_plant_36 = Listing(
        name='Purple copper planter with drainage hole',
        description='4 inch or 6 inch planter with drainage hole and saucer to catch water. Please note every piece is handmade and one of a kind. Some attributes may vary from piece to piece',
        price=59.00,
        free_shipping=True,
        discount=None,
        owner_id=1,
        shop_id=1
    )
    stone_plant_37 = Listing(
        name='Indoor planter - ITO - Original planter gift',
        description='4 inch or 6 inch planter with drainage hole and saucer to catch water. Please note every piece is handmade and one of a kind. Some attributes may vary from piece to piece',
        price=30.97,
        free_shipping=False,
        discount=.15,
        owner_id=1,
        shop_id=1
    )
    stone_plant_38 = Listing(
        name='The Zero Planter',
        description='Accentuate the beauty of your favorite plants with this modern and stylish 3D printed planter. The Zero round planter also makes a perfect and unique gift for the plant lovers in your life. This original design is perfect for succulents, cacti, bonsai, flowers, herbs, and small woody stem plants. It is extremely lightweight and durable, which also makes it perfect for hanging plants and plants that get frequently moved.',
        price=20.00,
        free_shipping=False,
        discount=.2,
        owner_id=1,
        shop_id=1
    )
    stone_plant_39 = Listing(
        name='Smokey Quartz Planter',
        description='One of a kind handcrafted concrete planter. Handcrafted means there may be natural caused air bubbles which gives it character since each one is handmade and imperfect. This Medium sized container is 0.603 lbs and Internal diameter 2.95", internal depth 2.95". The length is 3.3” and the thickness of the cement is 0.2”. This cement is hand poured and handcrafted. Silver or Gold paint with a Natural Crystal Smokey Quartz points and smooth mercury glass surrounding it.',
        price=35.00,
        free_shipping=False,
        discount=None,
        owner_id=2,
        shop_id=2
    )


    all_listings = [bulbasaur_planter, gengar_planter, conc_plant_1, conc_plant_2, d_plant_1, organic_plant_1, skull_plant_1, organic_plant_2, marble_plant_1, stone_plant_1, stone_plant_2, stone_plant_3,  stone_plant_4,  stone_plant_5,  stone_plant_15,  stone_plant_16,  stone_plant_17,  stone_plant_18,  stone_plant_19,  stone_plant_20, stone_plant_21, stone_plant_22, stone_plant_23, stone_plant_24, stone_plant_25, stone_plant_26, stone_plant_27, stone_plant_28, stone_plant_29, stone_plant_30, stone_plant_31, stone_plant_32, stone_plant_33, stone_plant_34, stone_plant_35, stone_plant_36, stone_plant_37, stone_plant_38, stone_plant_39,]

    [db.session.add(listing) for listing in all_listings]
    db.session.commit()



def undo_listings():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.listings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM listings"))

    db.session.commit()
