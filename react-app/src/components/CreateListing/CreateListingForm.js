import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { createNewListing } from '../../store/listings'
import { createNewListingImg } from '../../store/listings'
import { putListing } from "../../store/listings";

import './ListingForm.css'

export default function ListingForm ({listing, formType}) {
    const [errors, setErrors] = useState({})

    const [name, setName] = useState(listing?.name)
    const [description, setDescription] = useState(listing?.description)
    const [price, setPrice] = useState(listing?.price)
    const [shipping, setShipping] = useState(listing?.free_shipping)
    const [wholediscount, setWholeDiscount] = useState(Number(listing?.discount) * 100)
    const [prevImg, setPrevImg] = useState("")
    const [imgs, setImgs] = useState({})

    const [submit, setSubmit] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    console.log(price)

    //====Checking for Errors=======================================
    useEffect(() => {
        const errors = {}
        if (!name.length) errors.name = "Please provide a title for your item"
        if (Number(price) === 0 || price.length === 0) errors.price = "Please provide a price for your item"

        if (shipping !== true && shipping !== false) errors.shipping = "Please select shipping preference"

        if (Number(wholediscount) !== 0) {
            if (Number(wholediscount) < 10 || Number(wholediscount) > 90) errors.discount = "Please select discount between 10 and 90"
        }

        if (description.length < 30) errors.description = "Please add a description of at least 30 characters"
        if (formType === "create") {
            if (!prevImg.length ) errors.prevImg = "Please provide a preview image"

        if (prevImg.length === 0 || prevImg.endsWith('.png') || prevImg.endsWith('.jpg') ||prevImg.endsWith('.jpeg') || prevImg.startsWith('http://') || prevImg.startsWith('https://')) {} else{errors.image = 'Image URL must end in .png, .jpg, or .jpeg and start with "http://" or "https://"'}

            const images = Object.values(imgs) // this might mess up img order, can revisit later
            for (let image of images) {
                if (image.url.length === 0 || image.url.endsWith('.png') || image.url.endsWith('.jpg') || image.url.endsWith('.jpeg') || prevImg.startsWith('http://') || prevImg.startsWith('https://')) {} else{errors.image = 'Image URL must end in .png, .jpg, or .jpeg and start with "http://" or "https://"'}
            }
        }
        setErrors(errors)
      }, [description, name, price, prevImg, imgs, shipping, wholediscount])

      useEffect(()=> {
        setSubmit(false)
      }, [])



    //====Submit Logic================================================
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(true);

        let discount = wholediscount / 100

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

                const preview = {
                    listing_id: newListing.id,
                    image_url: prevImg,
                    preview: true
                }
                await dispatch(createNewListingImg(preview))

                const images = Object.values(imgs)
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
        <section className="listingFormContainer">
            {
            formType === 'create' ?
            <h2 className="listingFormTitle">Listing details</h2>
            :
            <h2 className="listingFormTitle">Update listing details</h2>
            }
            <p>Tell the world all about your item and why they'll love it.</p>

            <form onSubmit={handleSubmit} className="listingFormBody">

                <section className="formSection">
                    <div className="inputTitle">
                        <h4>Title*</h4>
                        <p>Include keywords that buyers would use to search for your item.</p>
                    </div>

                    <div className='listingInputDiv'>

                    <input
                        type="text"
                        value={name}
                        maxLength='40'
                        className='listingFormInput'
                        onChange={(e) => setName(e.target.value)}
                        />

                        {submit && errors.name && (
                            <div className="createListingErrors">* {errors.name}</div>
                            )}
                    </div>
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

            <section className="formSection">
                <div className="inputTitle">
                    <h4>Description*</h4>
                    <p id="textAreaDesc">Start with a brief overview that describes your item's finest features. Shoppers will only see the first few lines of your description at first, so make it count!</p>
                    <p>Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.</p>
                </div>

                <div className='listingInputDiv'>
                    <textarea
                        type="text"
                        value={description}
                        className='listingFormInput'
                        id="listingFormTextArea"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    {submit && errors.description && (
                    <div className="createListingErrors">* {errors.description}</div>
                    )}
                </div>
            </section>

            <section className="formSection">
                    <div className="inputTitle">
                        <h4>Price*</h4>
                        <p>Factor in the costs of materials and labor, plus any related expenses.</p>
                    </div>

                    <div className='listingInputDiv'>
                        <input
                            type="number"
                            value={price > 0 ? price : ""}
                            max='1000'
                            className='listingFormInput'
                            onChange={(e) => setPrice(e.target.value)}
                            />

                            {submit && errors.price && (
                            <div className="createListingErrors">* {errors.price}</div>
                            )}
                    </div>
            </section>

            <section className="formSection">
                    <div className="inputTitle">
                        <h4>Shipping*</h4>
                        <p>Offering free shipping is a great way to win over shoppers! Just don't forget to adjust your price to include that expense.</p>
                    </div>

                    <div className='listingInputDiv'>
                    <select
                        type="number"
                        className='listingFormInput'
                        defaultValue={shipping}
                        onChange={(e) => setShipping(e.target.value === 'true' ? true : false)}
                        >
                        <option></option>
                        <option value={'true'} >Free Shipping</option>
                        <option value={'false'} >Calculate Shipping at Checkout</option>
                    </select>

                    {submit && errors.shipping && (
                    <div className="createListingErrors">* {errors.shipping}</div>
                    )}
                    </div>
            </section>

            <section className="formSection">
                    <div className="inputTitle">
                        <h4>Discount</h4>
                        <p>We don't suggest adding a discount initially, BUT a discount can be a great way to encourage shoppers and build up some great reviews!</p>
                    </div>
                    <div className='listingInputDiv'>
                    <input
                        type="number"
                        value={wholediscount}
                        className='listingFormInput'
                        placeholder="optional"
                        onChange={(e) => setWholeDiscount(e.target.value)}
                        />
                        {submit && errors.discount && (
                            <div className="createListingErrors">* {errors.discount}</div>
                        )}
                            </div>

            </section>

            {formType === 'create' &&
            <section className="formSection">
                        <div className="inputTitle">
                            <h4>Photos*</h4>
                            <p>Add at least one photo. Use all five photos to show off your item's finest features.</p>
                        </div>
                    <div className="listingFormUrls">


                    <div className='listingInputDiv'></div>
                    <input
                    type="text"
                    value={prevImg}
                    placeholder="Example: https://a0.muscache.com/737b978b2b6a.jpg"
                    className='listingFormInput'
                    onChange={(e) => setPrevImg(e.target.value)}
                    />

                    <input
                    type="text"
                    value={imgs[2]?.url}

                    className='listingFormInput'
                    onChange={(e) => setImgs({...imgs, 2: {url: e.target.value}})}
                    />

                    <input
                    type="text"
                    value={imgs[3]?.url}

                    className='listingFormInput'
                    onChange={(e) => setImgs({...imgs, 3: {url: e.target.value}})}
                    />

                    <input
                    type="text"
                    value={imgs[4]?.url}

                    className='listingFormInput'
                    onChange={(e) => setImgs({...imgs, 4: {url: e.target.value}})}
                    />

                    <input
                    type="text"
                    value={imgs[5]?.url}

                    className='listingFormInput'
                    id='lasturlInput'
                    onChange={(e) => setImgs({...imgs, 5: {url: e.target.value}})}
                    />

                    {submit && errors.prevImg && (
                        <div className="createListingErrors">* {errors.prevImg}</div>
                        )}

                    {submit && errors.image && (
                        <div className="createListingErrors">* {errors.image}</div>
                        )}
                    </div>

            </section>
            }

            <div  id='createButtonDiv'>
                <button
                type="submit"
                disabled={!makeDisabled}
                id='createListing'
                className={makeDisabled === false ? "submitListingDisabled" : "submitListing"}
                >
                {formType === "create" ? 'Create Listing' : 'Update your Listing'}
                </button>
            </div>

            </form>
        </section>
    );
};
