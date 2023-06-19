import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { createNewListing } from '../../store/listings'
import { createNewListingImg } from '../../store/listings'
import { putListing } from "../../store/listings";

export default function ListingForm ({listing, formType}) {
    const [errors, setErrors] = useState({})

    const [name, setName] = useState(listing?.name)
    const [description, setDescription] = useState(listing?.description)
    const [price, setPrice] = useState(listing?.price)
    const [shipping, setShipping] = useState(listing?.free_shipping)
    const [discount, setDiscount] = useState(listing?.discount)
    const [prevImg, setPrevImg] = useState("")
    const [imgs, setImgs] = useState({})

    const [submit, setSubmit] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    //====Checking for Errors=======================================
    useEffect(() => {
        const errors = {}
        if (!name.length) errors.name = "Please provide a title for your item"
        if (!price.toString().length) errors.price = "Please provide a price for your item"

        if (shipping !== true && shipping !== false) errors.shipping = "Please select shipping preference"

        if (description.length < 30) errors.description = "Please add a description of at least 30 characters"
        if (formType === "create") {
            if (!prevImg.length ) errors.prevImg = "Please provide a preview image"

        if (prevImg.length === 0 || prevImg.endsWith('.png') || prevImg.endsWith('.jpg') ||prevImg.endsWith('.jpeg')) {} else{errors.image = "Image URL must end in .png, .jpg, or .jpeg"}

            const images = Object.values(imgs) // this might mess up img order, can revisit later
            for (let image of images) {
                if (image.url.length === 0 || image.url.endsWith('.png') || image.url.endsWith('.jpg') || image.url.endsWith('.jpeg')) {} else{errors.image = "Image URL must end in .png, .jpg, or .jpeg"}
            }
        }
        setErrors(errors)
      }, [description, name, price, prevImg, imgs, shipping])

      useEffect(()=> {
        setSubmit(false)
      }, [])

    //====Submit Logic================================================
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(true);

        const listingData = {
            ...listing,
            owner_id: sessionUser.id,
            name,
            price,
            description,
            discount,
            free_shipping: shipping,
            shop_id: 1
        }

        if (Object.values(errors).length === 0) {
            if (formType === 'create') {
                const newListing = await dispatch(createNewListing(listingData))
                console.log('this is the new listing', newListing)

                const preview = {
                    listing_id: newListing.id,
                    image_url: prevImg,
                    preview: true
                }
                await dispatch(createNewListingImg(preview))

                const images = Object.values(imgs)
                console.log('Are these the valuse', images)
                for (let img of images) {
                    if (img.url.length > 0) {
                        const newImg = {
                            listing_id: newListing.id,
                            image_url: img.url,
                            preview: false
                        }
                        await dispatch(createNewListingImg(newImg))
                    }
                }

                history.push(`/listings/${newListing.id}`)

            } else if (formType === 'update') {
                const editedListing = await dispatch(putListing(listingData))
                history.push(`/listings/${editedListing.id}`)
            }
        }

    }

    useEffect(()=> {
        setSubmit(false)
      }, [])


    let makeDisabled = false;


    if (name?.length) {
      makeDisabled = true
    }


    //====Form ================================================
    return (
        <section>
            {
            formType === 'create' ?
            <h2>Listing details</h2>
            :
            <h2>Update listing details</h2>
            }
            <p>Tell the world all about your item and why they'll love it.</p>

            <form onSubmit={handleSubmit}>

                <section>
                    <div>
                        <h4>Title*</h4>
                        <p>Include keywords that buyers would use to search for your item.</p>
                    </div>

                    <input
                        type="text"
                        value={name}
                        maxLength='40'
                        className='formInput'
                        onChange={(e) => setName(e.target.value)}
                        />

                        {submit && errors.name && (
                        <div className="createSpotErrors">* {errors.name}</div>
                        )}
                </section>

            {/*
                <section>
                <div>
                <h4>Renewal options*</h4>
                <p>Each renewal lasts for four months or until the listing sells out.</p>
                </div>

                <input
                type="radio"
                className='formRadio'
                value="Automatic"
                />
            </section> */}

            <section>
                <div>
                    <h4>Description*</h4>
                    <p>Start with a brief overview that describes your item's finest features. Shoppers will only see the first few lines of your description at first, so make it count!</p>
                    <p>Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.</p>
                </div>

                <textarea
                    type="text"
                    value={description}
                    className='formInput'
                    onChange={(e) => setDescription(e.target.value)}
                />

                {submit && errors.description && (
                <div className="createSpotErrors">* {errors.description}</div>
                )}
            </section>

            <section>
                    <div>
                        <h4>Price*</h4>
                        <p>Factor in the costs of materials and labor, plus any related expenses.</p>
                    </div>
                    <input
                        type="number"
                        value={price}
                        max='999999'
                        className='formInput'
                        onChange={(e) => setPrice(e.target.value)}
                        />

                        {submit && errors.price && (
                        <div className="createSpotErrors">* {errors.price}</div>
                        )}
            </section>

            <section>
                    <div>
                        <h4>Shipping*</h4>
                        <p>Offering free shipping is a great way to win over shoppers! Just don't forget to adjust your price to include that expense.</p>
                    </div>
                    <select
                        type="number"
                        className='formInput'
                        defaultValue={shipping}
                        onChange={(e) => setShipping(e.target.value === 'true' ? true : false)}
                        >
                        <option></option>
                        <option value={'true'} >Free Shipping</option>
                        <option value={'false'} >Calculate Shipping at Checkout</option>
                    </select>

                    {submit && errors.shipping && (
                    <div className="createSpotErrors">* {errors.shipping}</div>
                    )}
            </section>

            <section>
                    <div>
                        <h4>Discount</h4>
                        <p>We don't suggest adding a discount initially, BUT a discount can be a great way to encourage shoppers and build up some great reviews!</p>
                    </div>

                    <input
                        type="number"
                        value={discount}
                        className='formInput'
                        placeholder="optional"
                        onChange={(e) => setDiscount(e.target.value)}
                        />
            </section>

            {formType === 'create' &&
            <section>
                        <div>
                            <h4>Photos*</h4>
                            <p>Add at least one photo. Use all five photos to show off your item's finest features.</p>
                        </div>

                    <input
                    type="text"
                    value={prevImg}
                    placeholder="Example: https://a0.muscache.com/737b978b2b6a.jpg"
                    className="urlLinks"
                    onChange={(e) => setPrevImg(e.target.value)}
                    />

                    <input
                    type="text"
                    value={imgs[2]?.url}

                    className="urlLinks"
                    onChange={(e) => setImgs({...imgs, 2: {url: e.target.value}})}
                    />

                    <input
                    type="text"
                    value={imgs[3]?.url}

                    className="urlLinks"
                    onChange={(e) => setImgs({...imgs, 3: {url: e.target.value}})}
                    />

                    <input
                    type="text"
                    value={imgs[4]?.url}

                    className="urlLinks"
                    onChange={(e) => setImgs({...imgs, 4: {url: e.target.value}})}
                    />

                    <input
                    type="text"
                    value={imgs[5]?.url}

                    className="urlLinks"
                    id='lasturlInput'
                    onChange={(e) => setImgs({...imgs, 5: {url: e.target.value}})}
                    />

                    {submit && errors.prevImg && (
                    <div className="createSpotErrors">* {errors.prevImg}</div>
                    )}

                    {submit && errors.image && (
                    <div className="createSpotErrors">* {errors.image}</div>
                    )}

            </section>
            }

            <div  id='createSpotDiv'>
                <button
                type="submit"
                disabled={!makeDisabled}
                id='createListing'
                className={makeDisabled === false ? "loginButtonDisabled" : "loginButton"}
                >
                {formType === "create" ? 'Create Listing' : 'Update your Listing'}
                </button>
            </div>

            </form>
        </section>
    );
};
