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
        img_url='https://imgur.com/dt0zhXz.jpg',
        preview=True,
        listing_id=3,
    )
    temple_large_2 = ListingImages(
        img_url='https://imgur.com/y9gGZrJ.jpg',
        preview=False,
        listing_id=3,
    )
    temple_large_3 = ListingImages(
        img_url='https://imgur.com/bosdFzF.jpg',
        preview=False,
        listing_id=3,
    )
    temple_large_4 = ListingImages(
        img_url='https://imgur.com/YQRuPzu.jpg',
        preview=False,
        listing_id=3,
    )
    temple_large_5 = ListingImages(
        img_url='https://imgur.com/fkEotKr.jpg',
        preview=False,
        listing_id=3,
    )
    temple_small_1 = ListingImages(
        img_url='https://imgur.com/jQeQMHF.jpg',
        preview=True,
        listing_id=4,
    )
    temple_small_2 = ListingImages(
        img_url='https://imgur.com/NrcwZOL.jpg',
        preview=False,
        listing_id=4,
    )
    temple_small_3 = ListingImages(
        img_url='https://imgur.com/2l1ekcw.jpg',
        preview=False,
        listing_id=4,
    )
    temple_small_4 = ListingImages(
        img_url='https://imgur.com/etNpyhJ.jpg',
        preview=False,
        listing_id=4,
    )
    temple_small_5 = ListingImages(
        img_url='https://imgur.com/t9wbYjO.jpg',
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
    organic_1 = ListingImages(
        img_url='https://i.etsystatic.com/34600947/r/il/280b10/4430124392/il_1140xN.4430124392_exml.jpg',
        preview=True,
        listing_id=6,
    )
    organic_2 = ListingImages(
        img_url='https://i.etsystatic.com/34600947/r/il/247130/4430122100/il_1140xN.4430122100_3yf9.jpg',
        preview=False,
        listing_id=6,
    )
    organic_3 = ListingImages(
        img_url='https://i.etsystatic.com/34600947/r/il/9acbdb/4979588178/il_1140xN.4979588178_ph9g.jpg',
        preview=False,
        listing_id=6,
    )
    skull_1 = ListingImages(
        img_url='https://i.etsystatic.com/31745154/r/il/92e7ff/3474114413/il_1140xN.3474114413_t52w.jpg',
        preview=True,
        listing_id=7,
    )
    skull_2 = ListingImages(
        img_url='https://i.etsystatic.com/31745154/r/il/26fb2f/4911904707/il_1140xN.4911904707_ht7i.jpg',
        preview=False,
        listing_id=7,
    )
    organic_2_1 = ListingImages(
        img_url='https://i.etsystatic.com/13272655/r/il/3d9552/4410234809/il_1140xN.4410234809_agq6.jpg',
        preview=True,
        listing_id=8,
    )
    organic_2_2 = ListingImages(
        img_url='https://i.etsystatic.com/13272655/r/il/de230e/4376109975/il_1140xN.4376109975_i9d5.jpg',
        preview=False,
        listing_id=8,
    )
    organic_2_3 = ListingImages(
        img_url='https://i.etsystatic.com/13272655/r/il/c3c733/3960060087/il_1140xN.3960060087_juqe.jpg',
        preview=False,
        listing_id=8,
    )
    organic_2_4 = ListingImages(
        img_url='https://i.etsystatic.com/13272655/r/il/2c4240/3817693314/il_1140xN.3817693314_tnu0.jpg',
        preview=False,
        listing_id=8,
    )
    stone_1 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/f59f23/4261237757/il_1140xN.4261237757_aw7f.jpg',
        preview=True,
        listing_id=9,
    )
    stone_2 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/bf9313/4261236235/il_1140xN.4261236235_pkgb.jpg',
        preview=False,
        listing_id=9,
    )
    stone_3 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/cd1de3/4261236221/il_1140xN.4261236221_20r7.jpg',
        preview=False,
        listing_id=9,
    )
    stone_2_1 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/8e6e7f/4757634229/il_1140xN.4757634229_pkns.jpg',
        preview=True,
        listing_id=10,
    )
    stone_2_2 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/61230f/4725065518/il_1140xN.4725065518_1xfl.jpg',
        preview=False,
        listing_id=10,
    )
    stone_2_3 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/19af43/4757634155/il_1140xN.4757634155_42a1.jpg',
        preview=False,
        listing_id=10,
    )
    stone_3_1 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/ae1d13/3981282921/il_1140xN.3981282921_kvk9.jpg',
        preview=True,
        listing_id=11,
    )
    stone_3_2 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/45180e/3218171834/il_1140xN.3218171834_gx6f.jpg',
        preview=False,
        listing_id=11,
    )
    stone_3_3 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/db463d/2756189956/il_1140xN.2756189956_pc19.jpg',
        preview=False,
        listing_id=11,
    )
    stone_4_1 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/b7350d/4226788683/il_1140xN.4226788683_q3o7.jpg',
        preview=True,
        listing_id=12,
    )
    stone_4_2 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/39e8f9/4086951232/il_1140xN.4086951232_ixul.jpg',
        preview=False,
        listing_id=12,
    )
    stone_4_3 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/af1412/3684364517/il_1140xN.3684364517_sxj2.jpg',
        preview=False,
        listing_id=12,
    )
    stone_5_1 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/585f88/3494850872/il_1140xN.3494850872_a3to.jpg',
        preview=True,
        listing_id=13,
    )
    stone_5_2 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/fed7a1/3542492595/il_1140xN.3542492595_9rky.jpg',
        preview=False,
        listing_id=13,
    )
    stone_5_3 = ListingImages(
        img_url='https://i.etsystatic.com/24265176/r/il/f0a634/3494851204/il_1140xN.3494851204_a6e1.jpg',
        preview=False,
        listing_id=13,
    )
    stone_6_1 = ListingImages(
        img_url='https://i.etsystatic.com/18636518/r/il/f7bc25/4007243857/il_1140xN.4007243857_rs19.jpg',
        preview=True,
        listing_id=14,
    )
    stone_6_2 = ListingImages(
        img_url='https://i.etsystatic.com/18636518/r/il/deba17/4007244301/il_1140xN.4007244301_e20a.jpg',
        preview=False,
        listing_id=14,
    )
    stone_6_3 = ListingImages(
        img_url='https://i.etsystatic.com/18636518/r/il/f7c002/3959586076/il_1140xN.3959586076_meau.jpg',
        preview=False,
        listing_id=14,
    )
    stone_15_1 = ListingImages(
        img_url='https://i.etsystatic.com/13275732/r/il/70fe97/2084796646/il_1140xN.2084796646_b4l5.jpg',
        preview=True,
        listing_id=15,
    )
    stone_15_2 = ListingImages(
        img_url='https://i.etsystatic.com/13275732/r/il/01850e/2084796100/il_1140xN.2084796100_5qmt.jpg',
        preview=False,
        listing_id=15,
    )
    stone_15_3 = ListingImages(
        img_url='https://i.etsystatic.com/13275732/r/il/f9729e/2053246097/il_1140xN.2053246097_fw36.jpg',
        preview=False,
        listing_id=15,
    )
    stone_16_1 = ListingImages(
        img_url='https://i.etsystatic.com/22241268/r/il/cccbd2/2567553674/il_1140xN.2567553674_ti90.jpg',
        preview=True,
        listing_id=16,
    )
    stone_16_2 = ListingImages(
        img_url='https://i.etsystatic.com/22241268/r/il/8ee8d5/2615210191/il_1140xN.2615210191_99o3.jpg',
        preview=False,
        listing_id=16,
    )
    stone_16_3 = ListingImages(
        img_url='https://i.etsystatic.com/22241268/r/il/764cf0/3542692321/il_1140xN.3542692321_amhh.jpg',
        preview=False,
        listing_id=16,
    )
    stone_17_1 = ListingImages(
        img_url='https://i.etsystatic.com/22241268/r/il/d88b5e/3801317125/il_1140xN.3801317125_1adx.jpg',
        preview=True,
        listing_id=17,
    )
    stone_17_2 = ListingImages(
        img_url='https://i.etsystatic.com/22241268/r/il/a41854/3801317117/il_1140xN.3801317117_kasy.jpg',
        preview=False,
        listing_id=17,
    )
    stone_17_3 = ListingImages(
        img_url='https://i.etsystatic.com/22241268/r/il/798774/3801317133/il_1140xN.3801317133_cokr.jpg',
        preview=False,
        listing_id=17,
    )
    stone_18_1 = ListingImages(
        img_url='https://i.etsystatic.com/25801476/r/il/bef32b/3005592238/il_1140xN.3005592238_h5sy.jpg',
        preview=True,
        listing_id=18,
    )
    stone_18_2 = ListingImages(
        img_url='https://i.etsystatic.com/25801476/r/il/ba55a5/3053306725/il_1140xN.3053306725_asl9.jpg',
        preview=False,
        listing_id=18,
    )
    stone_18_3 = ListingImages(
        img_url='https://i.etsystatic.com/25801476/r/il/a5688f/3005591342/il_1140xN.3005591342_5faj.jpg',
        preview=False,
        listing_id=18,
    )
    stone_19_1 = ListingImages(
        img_url='https://i.etsystatic.com/25801476/r/il/58191e/3145702297/il_1140xN.3145702297_npzk.jpg',
        preview=True,
        listing_id=19,
    )
    stone_19_2 = ListingImages(
        img_url='https://i.etsystatic.com/25801476/r/il/2cc134/3145702525/il_1140xN.3145702525_s1ma.jpg',
        preview=False,
        listing_id=19,
    )
    stone_19_3 = ListingImages(
        img_url='https://i.etsystatic.com/25801476/r/il/4b7917/3097979268/il_1140xN.3097979268_quum.jpg',
        preview=False,
        listing_id=19,
    )
    stone_20_1 = ListingImages(
        img_url='https://i.etsystatic.com/24822223/r/il/3fcb7f/4748182077/il_1140xN.4748182077_68tz.jpg',
        preview=True,
        listing_id=20,
    )
    stone_20_2 = ListingImages(
        img_url='https://i.etsystatic.com/24822223/r/il/c8ff1b/4642503735/il_1140xN.4642503735_z2of.jpg',
        preview=False,
        listing_id=20,
    )
    stone_20_3 = ListingImages(
        img_url='https://i.etsystatic.com/24822223/r/il/bf0ed7/4716763751/il_1140xN.4716763751_fbpj.jpg',
        preview=False,
        listing_id=20,
    )
    stone_21_1 = ListingImages(
        img_url='https://i.etsystatic.com/24822223/r/il/1ac5f1/4703177898/il_1140xN.4703177898_sq9r.jpg',
        preview=True,
        listing_id=21,
    )
    stone_21_2 = ListingImages(
        img_url='https://i.etsystatic.com/24822223/r/il/4ea23c/4636086935/il_1140xN.4636086935_t3eb.jpg',
        preview=False,
        listing_id=21,
    )
    stone_21_3 = ListingImages(
        img_url='https://i.etsystatic.com/24822223/r/il/f5c555/4703178786/il_1140xN.4703178786_eiib.jpg',
        preview=False,
        listing_id=21,
    )
    stone_22_1 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03656_360x.jpg',
        preview=True,
        listing_id=22,
    )
    stone_22_2 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03657_360x.jpg',
        preview=False,
        listing_id=22,
    )
    stone_22_3 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03658_360x.jpg',
        preview=False,
        listing_id=22,
    )
    stone_23_1 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03689_360x.jpg',
        preview=True,
        listing_id=23,
    )
    stone_23_2 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03690_360x.jpg',
        preview=False,
        listing_id=23,
    )
    stone_23_3 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03691_360x.jpg',
        preview=False,
        listing_id=23,
    )
    stone_24_1 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03640_360x.jpg',
        preview=True,
        listing_id=24,
    )
    stone_24_2 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03641_360x.jpg',
        preview=False,
        listing_id=24,
    )
    stone_24_3 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03642_360x.jpg',
        preview=False,
        listing_id=24,
    )
    stone_25_1 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03765_360x.jpg',
        preview=True,
        listing_id=25,
    )
    stone_25_2 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03766_360x.jpg',
        preview=False,
        listing_id=25,
    )
    stone_25_3 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03768_360x.jpg',
        preview=False,
        listing_id=25,
    )
    stone_26_1 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03753_360x.jpg',
        preview=True,
        listing_id=26,
    )
    stone_26_2 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03754_360x.jpg',
        preview=False,
        listing_id=26,
    )
    stone_26_3 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03755_360x.jpg',
        preview=False,
        listing_id=26,
    )
    stone_27_1 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03803_360x.jpg',
        preview=True,
        listing_id=27,
    )
    stone_27_2 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03804_360x.jpg',
        preview=False,
        listing_id=27,
    )
    stone_27_3 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03805_360x.jpg',
        preview=False,
        listing_id=27,
    )
    stone_28_1 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03829_grande.jpg',
        preview=True,
        listing_id=28,
    )
    stone_28_2 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03830_grande.jpg',
        preview=False,
        listing_id=28,
    )
    stone_28_3 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03831_grande.jpg',
        preview=False,
        listing_id=28,
    )
    stone_29_1 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03833_grande.jpg',
        preview=True,
        listing_id=29,
    )
    stone_29_2 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03834_grande.jpg',
        preview=False,
        listing_id=29,
    )
    stone_29_3 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03835_grande.jpg',
        preview=False,
        listing_id=29,
    )
    stone_29_4 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03836_grande.jpg',
        preview=False,
        listing_id=29,
    )
    stone_30_1 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03905_grande.jpg',
        preview=True,
        listing_id=30,
    )
    stone_30_2 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03906_grande.jpg',
        preview=False,
        listing_id=30,
    )
    stone_30_3 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03907_grande.jpg',
        preview=False,
        listing_id=30,
    )
    stone_30_4 = ListingImages(
        img_url='https://cdn.shopify.com/s/files/1/0347/6422/6604/files/DSC03908_grande.jpg',
        preview=False,
        listing_id=30,
    )
    stone_31_1 = ListingImages(
        img_url='https://i.etsystatic.com/24758479/r/il/3d3d69/3931136707/il_1140xN.3931136707_bmkr.jpg',
        preview=True,
        listing_id=31,
    )
    stone_31_2 = ListingImages(
        img_url='https://i.etsystatic.com/24758479/r/il/c949fc/3883651484/il_1140xN.3883651484_jsix.jpg',
        preview=False,
        listing_id=31,
    )
    stone_31_3 = ListingImages(
        img_url='https://i.etsystatic.com/24758479/r/il/a388a5/3883651532/il_1140xN.3883651532_4adf.jpg',
        preview=False,
        listing_id=31,
    )
    stone_32_1 = ListingImages(
        img_url='https://i.etsystatic.com/33208167/r/il/a022d4/4596605401/il_1140xN.4596605401_3sb5.jpg',
        preview=True,
        listing_id=32,
    )
    stone_32_2 = ListingImages(
        img_url='https://i.etsystatic.com/33208167/r/il/115219/4549212122/il_1140xN.4549212122_ja4f.jpg',
        preview=False,
        listing_id=32,
    )
    stone_32_3 = ListingImages(
        img_url='https://i.etsystatic.com/33208167/r/il/e3d260/4596603769/il_1140xN.4596603769_dcq6.jpg',
        preview=False,
        listing_id=32,
    )
    stone_33_1 = ListingImages(
        img_url='https://i.etsystatic.com/25029876/r/il/4d5e3c/3504605392/il_1140xN.3504605392_e9g8.jpg',
        preview=True,
        listing_id=33,
    )
    stone_33_2 = ListingImages(
        img_url='https://i.etsystatic.com/25029876/r/il/11be14/3485564641/il_1140xN.3485564641_92k9.jpg',
        preview=False,
        listing_id=33,
    )
    stone_33_3 = ListingImages(
        img_url='https://i.etsystatic.com/25029876/r/il/e3d5a8/3437891146/il_1140xN.3437891146_atgj.jpg',
        preview=False,
        listing_id=33,
    )
    stone_34_1 = ListingImages(
        img_url='https://i.etsystatic.com/21834267/r/il/9689c0/4518161629/il_1140xN.4518161629_8ckk.jpg',
        preview=True,
        listing_id=34,
    )
    stone_34_2 = ListingImages(
        img_url='https://i.etsystatic.com/21834267/r/il/694150/4518161849/il_1140xN.4518161849_kvsg.jpg',
        preview=False,
        listing_id=34,
    )
    stone_34_3 = ListingImages(
        img_url='https://i.etsystatic.com/21834267/r/il/ebfa0e/3723247687/il_1140xN.3723247687_dptk.jpg',
        preview=False,
        listing_id=34,
    )
    stone_35_1 = ListingImages(
        img_url='https://i.etsystatic.com/27740056/r/il/9f644a/4927411788/il_1140xN.4927411788_ctud.jpg',
        preview=True,
        listing_id=35,
    )
    stone_35_2 = ListingImages(
        img_url='https://i.etsystatic.com/27740056/r/il/7ea95d/4927414736/il_1140xN.4927414736_4nxs.jpg',
        preview=False,
        listing_id=35,
    )
    stone_35_3 = ListingImages(
        img_url='https://i.etsystatic.com/27740056/r/il/96960a/4489324577/il_1140xN.4489324577_61wl.jpg',
        preview=False,
        listing_id=35,
    )
    stone_36_1 = ListingImages(
        img_url='https://i.etsystatic.com/8279081/r/il/f70f27/2663927592/il_1140xN.2663927592_iyfq.jpg',
        preview=True,
        listing_id=36,
    )
    stone_36_2 = ListingImages(
        img_url='https://i.etsystatic.com/8279081/r/il/5ca9df/4314603208/il_1140xN.4314603208_9zmk.jpg',
        preview=False,
        listing_id=36,
    )
    stone_37_1 = ListingImages(
        img_url='https://i.etsystatic.com/13346155/r/il/acad4e/3794592454/il_1140xN.3794592454_mqa5.jpg',
        preview=True,
        listing_id=37,
    )
    stone_37_2 = ListingImages(
        img_url='https://i.etsystatic.com/13346155/r/il/e700f6/3793316762/il_1140xN.3793316762_83xa.jpg',
        preview=False,
        listing_id=37,
    )
    stone_37_3 = ListingImages(
        img_url='https://i.etsystatic.com/13346155/r/il/ce31f8/3840898305/il_1140xN.3840898305_izlc.jpg',
        preview=False,
        listing_id=37,
    )
    stone_38_1 = ListingImages(
        img_url='https://i.etsystatic.com/30566915/r/il/f43daa/4845655780/il_1140xN.4845655780_epfl.jpg',
        preview=True,
        listing_id=38,
    )
    stone_38_2 = ListingImages(
        img_url='https://i.etsystatic.com/30566915/r/il/c2b031/4845648650/il_1140xN.4845648650_a7qh.jpg',
        preview=False,
        listing_id=38,
    )
    stone_38_3 = ListingImages(
        img_url='https://i.etsystatic.com/30566915/r/il/c8a0a6/4845650170/il_1140xN.4845650170_px1u.jpg',
        preview=False,
        listing_id=38,
    )
    stone_39_1 = ListingImages(
        img_url='https://i.etsystatic.com/7498684/r/il/4f8ccb/2714926299/il_1140xN.2714926299_r9zc.jpg',
        preview=True,
        listing_id=39,
    )
    stone_39_2 = ListingImages(
        img_url='https://i.etsystatic.com/7498684/r/il/e0890b/2548414121/il_1140xN.2548414121_6nim.jpg',
        preview=False,
        listing_id=39,
    )
    stone_39_3 = ListingImages(
        img_url='https://i.etsystatic.com/7498684/r/il/8d339e/2667244504/il_1140xN.2667244504_f8cf.jpg',
        preview=False,
        listing_id=39,
    )



    all_imgs = [bulbasaur_planter_1, bulbasaur_planter_2, bulbasaur_planter_3, gengar_planter_1, gengar_planter_2, gengar_planter_3, temple_large_1,temple_large_2,temple_large_3,temple_large_4,temple_large_5,temple_small_1,temple_small_2,temple_small_3,temple_small_4,temple_small_5,d_green_1,d_green_2,d_green_3,organic_1,organic_2,organic_3,skull_1,skull_2,organic_2_1,organic_2_2,organic_2_3,organic_2_4,stone_1,stone_2,stone_3,stone_2_1,stone_2_2,stone_2_3,stone_3_1,stone_3_2,stone_3_3,stone_4_1, stone_4_2, stone_4_3, stone_5_1, stone_5_2, stone_5_3, stone_6_1, stone_6_2, stone_6_3, stone_15_1, stone_15_2, stone_15_3, stone_16_1, stone_16_2, stone_16_3, stone_17_1, stone_17_2, stone_17_3, stone_18_1, stone_18_2, stone_18_3, stone_19_1, stone_19_2, stone_19_3, stone_20_1, stone_20_2, stone_20_3, stone_21_1, stone_21_2, stone_21_3, stone_22_1, stone_22_2, stone_22_3, stone_23_1, stone_23_2, stone_23_3, stone_24_1, stone_24_2, stone_24_3, stone_25_1, stone_25_2, stone_25_3, stone_26_1, stone_26_2, stone_26_3, stone_27_1, stone_27_2, stone_27_3, stone_28_1, stone_28_2, stone_28_3, stone_29_1, stone_29_2, stone_29_3, stone_29_4, stone_30_1, stone_30_2, stone_30_3, stone_30_4, stone_31_1, stone_31_2, stone_31_3, stone_32_1, stone_32_2, stone_32_3, stone_33_1, stone_33_2, stone_33_3, stone_34_1, stone_34_2, stone_34_3, stone_35_1, stone_35_2, stone_35_3, stone_36_1, stone_36_2, stone_37_1, stone_37_2, stone_37_3, stone_38_1, stone_38_2, stone_38_3, stone_39_1, stone_39_2, stone_39_3,]

    [db.session.add(img) for img in all_imgs]
    db.session.commit()



def undo_listing_imgs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.listings_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM listings_images"))

    db.session.commit()
