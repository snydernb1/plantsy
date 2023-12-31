import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { createNewListing, deleteListingImgThunk } from '../../store/listings'
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
    const [prevImg, setPrevImg] = useState()
    // const [imgs, setImgs] = useState([]) ==> From url img handling
    const [imgTwo, setImgTwo] = useState()
    const [imgThree, setImgThree] = useState()
    const [imgFour, setImgFour] = useState()
    const [imgFive, setImgFive] = useState()

    const [mainPreview, setMainPreview] = useState(formType === 'update' ? listing?.imgs[1]?.img_url : undefined)
    const [imgTwoPreview, setImgTwoPreview] = useState(formType === 'update' ? listing?.imgs[2]?.img_url : undefined)
    const [imgThreePreview, setImgThreePreview] = useState(formType === 'update' ? listing?.imgs[3]?.img_url : undefined)
    const [imgFourPreview, setImgFourPreview] = useState(formType === 'update' ? listing?.imgs[4]?.img_url : undefined)
    const [imgFivePreview, setImgFivePreview] = useState(formType === 'update' ? listing?.imgs[5]?.img_url : undefined)

    // These are to store the incoming post to be updated urls. They will be compared below to determine if url should be deleted from db or just removed from the preview above
    const [existingMainPreview, setExistingMainPreview] = useState(formType === 'update' ? listing?.imgs[1]?.img_url : undefined)
    const [existingImgTwoPreview, setExistingImgTwoPreview] = useState(formType === 'update' ? listing?.imgs[2]?.img_url : undefined)
    const [existingImgThreePreview, setExistingImgThreePreview] = useState(formType === 'update' ? listing?.imgs[3]?.img_url : undefined)
    const [existingImgFourPreview, setExistingImgFourPreview] = useState(formType === 'update' ? listing?.imgs[4]?.img_url : undefined)
    const [existingImgFivePreview, setExistingImgFivePreview] = useState(formType === 'update' ? listing?.imgs[5]?.img_url : undefined)


    // const [imgPreviews, setImgPreviews] = useState([]) ==> From url img handling

    const [submit, setSubmit] = useState(false)
    const [loadingScreen, setLoadingScreen] = useState(false)


    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const handlePrevImg = async (e) => {
        e.preventDefault();
        if (existingMainPreview !== mainPreview) {
            setPrevImg(null)
            setMainPreview(undefined)
        } else {
            const data = {
                listingId: listing.id,
                listingImgId: listing.imgs[1].id
            }

            await dispatch(deleteListingImgThunk(data, 1))
            setMainPreview(undefined)
        }
        // Store update img urls, if old url doesn't match new url delete else set null


    }
    const handleImgTwo = async (e) => {
        e.preventDefault();
        if (existingImgTwoPreview !== imgTwoPreview) {
            setImgTwo(null)
            setImgTwoPreview(undefined)
        } else {
            const data = {
                listingId: listing.id,
                listingImgId: listing.imgs[2].id
            }

            await dispatch(deleteListingImgThunk(data, 2))
            setImgTwoPreview(undefined)
        }
    }
    const handleImgThree = async (e) => {
        e.preventDefault();
        if (existingImgThreePreview !== imgThreePreview) {
            setImgThree(null)
            setImgThreePreview(undefined)
        } else {
            const data = {
                listingId: listing.id,
                listingImgId: listing.imgs[3].id
            }

            await dispatch(deleteListingImgThunk(data, 3))
            setImgThreePreview(undefined)
        }
    }
    const handleImgFour = async (e) => {
        e.preventDefault();
        if (existingImgFourPreview !== imgFourPreview) {
            setImgFour(null)
            setImgFourPreview(undefined)
        } else {
            const data = {
                listingId: listing.id,
                listingImgId: listing.imgs[4].id
            }

            await dispatch(deleteListingImgThunk(data, 4))
            setImgFourPreview(undefined)
        }
    }
    const handleImgFive = async (e) => {
        e.preventDefault();
        if (existingImgFivePreview !== imgFivePreview) {
            setImgFive(null)
            setImgFivePreview(undefined)
        } else {
            const data = {
                listingId: listing.id,
                listingImgId: listing.imgs[5].id
            }

            await dispatch(deleteListingImgThunk(data, 5))
            setImgFivePreview(undefined)
        }
    }


    useEffect(() => {
        let mainUrl;
        let imgTwoUrl;
        let imgThreeUrl;
        let imgFourUrl;
        let imgFiveUrl;

        if (!prevImg) {
            if (formType !== 'update') setMainPreview(undefined)
        } else {
            mainUrl = URL.createObjectURL(prevImg)
            setMainPreview(mainUrl)
        }

        if (!imgTwo) {
            if (formType !== 'update') setImgTwoPreview(undefined)
        } else {
            imgTwoUrl = URL.createObjectURL(imgTwo)
            setImgTwoPreview(imgTwoUrl)
        }

        if (!imgThree) {
            if (formType !== 'update') setImgThreePreview(undefined)
        } else {
            imgThreeUrl = URL.createObjectURL(imgThree)
            setImgThreePreview(imgThreeUrl)
        }

        if (!imgFour) {
            if (formType !== 'update') setImgFourPreview(undefined)
        } else {
            imgFourUrl = URL.createObjectURL(imgFour)
            setImgFourPreview(imgFourUrl)
        }

        if (!imgFive) {
            if (formType !== 'update') setImgFivePreview(undefined)
        } else {
            imgFiveUrl = URL.createObjectURL(imgFive)
            setImgFivePreview(imgFiveUrl)
        }


        return () => URL.revokeObjectURL(mainUrl, imgTwoUrl, imgThreeUrl, imgFourUrl, imgFiveUrl)
    }, [prevImg, imgTwo, imgThree, imgFour, imgFive])



    // useEffect(() => {
    //     if (imgs.length === 0) {
    //         setImgPreviews([])
    //         return
    //     }

    //     imgs.forEach((img) => {
    //         const imgUrl = URL.createObjectURL(img)
    //         setImgPreviews([...imgPreviews, imgUrl])
    //     })

    //     return () => imgPreviews.forEach((img) => URL.revokeObjectURL(img))
    // }, [imgs])



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

        if (!prevImg && mainPreview === undefined) errors.prevImg = "Please provide a preview image"

        if (prevImg) {
            if (prevImg.name.endsWith('.png') || prevImg.name.endsWith('.jpg') ||prevImg.name.endsWith('.jpeg')) {}
            else {
                errors.image = 'Image URL must end in .png, .jpg, or .jpeg'
            }
        }
        if (imgTwo) {
            if (imgTwo.name.endsWith('.png') || imgTwo.name.endsWith('.jpg') ||imgTwo.name.endsWith('.jpeg')) {}
            else {
                errors.image = 'Image URL must end in .png, .jpg, or .jpeg'
            }
        }
        if (imgThree) {
            if (imgThree.name.endsWith('.png') || imgThree.name.endsWith('.jpg') ||imgThree.name.endsWith('.jpeg')) {}
            else {
                errors.image = 'Image URL must end in .png, .jpg, or .jpeg'
            }
        }
        if (imgFour) {
            if (imgFour.name.endsWith('.png') || imgFour.name.endsWith('.jpg') ||imgFour.name.endsWith('.jpeg')) {}
            else {
                errors.image = 'Image URL must end in .png, .jpg, or .jpeg'
            }
        }
        if (imgFive) {
            if (imgFive.name.endsWith('.png') || imgFive.name.endsWith('.jpg') ||imgFive.name.endsWith('.jpeg')) {}
            else {
                errors.image = 'Image URL must end in .png, .jpg, or .jpeg'
            }
        }

        if (formType === "create") {
            // if (!prevImg.length ) errors.prevImg = "Please provide a preview image"

        // if (prevImg.length === 0 || prevImg.endsWith('.png') || prevImg.endsWith('.jpg') ||prevImg.endsWith('.jpeg') || prevImg.startsWith('http://') || prevImg.startsWith('https://')) {} else{errors.image = 'Image URL must end in .png, .jpg, or .jpeg and start with "http://" or "https://"'}

            // const images = Object.values(imgs) // this might mess up img order, can revisit later
            // for (let image of images) {
            //     if (image.url.length === 0 || image.url.endsWith('.png') || image.url.endsWith('.jpg') || image.url.endsWith('.jpeg') || prevImg.startsWith('http://') || prevImg.startsWith('https://')) {} else{errors.image = 'Image URL must end in .png, .jpg, or .jpeg and start with "http://" or "https://"'}
            // }
        }

        setErrors(errors)
      }, [description, name, price, shipping, prevImg, mainPreview, wholediscount, imgTwo, imgThree, imgFour, imgFive])

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
            setLoadingScreen(true)
            if (formType === 'create') {
                const newListing = await dispatch(createNewListing(listingData))
                // AWS Section

                if (prevImg) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', newListing.id)
                    formDataPrev.append('image', prevImg)
                    formDataPrev.append('preview', true)

                    await dispatch(createNewListingImg(formDataPrev, 1))
                }

                if (imgTwo) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', newListing.id)
                    formDataPrev.append('image', imgTwo)
                    formDataPrev.append('preview', false)

                    await dispatch(createNewListingImg(formDataPrev, 2))
                }

                if (imgThree) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', newListing.id)
                    formDataPrev.append('image', imgThree)
                    formDataPrev.append('preview', false)

                    await dispatch(createNewListingImg(formDataPrev, 3))
                }

                if (imgFour) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', newListing.id)
                    formDataPrev.append('image', imgFour)
                    formDataPrev.append('preview', false)

                    await dispatch(createNewListingImg(formDataPrev, 4))
                }

                if (imgFive) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', newListing.id)
                    formDataPrev.append('image', imgFive)
                    formDataPrev.append('preview', false)

                    await dispatch(createNewListingImg(formDataPrev, 5))
                }


                // AWS Section End

                // const preview = {
                //     listing_id: newListing.id,
                //     image_url: prevImg,
                //     preview: true
                // } ==> No longer needed due to AWS


                // const images = Object.values(imgs)
                // for (let img of imgs) {
                //     if (img.name.length > 0) {
                //         // const newImg = {
                //         //     listing_id: newListing.id,
                //         //     image_url: img.url,
                //         //     preview: false
                //         // } ==> No longer needed due to AWS
                //         const formDataImg = new FormData()

                //         formDataImg.append('listing_id', newListing.id)
                //         formDataImg.append('image', img) // Might need to change how we are saving imgs in state
                //         formDataImg.append('preview', false)


                //         await dispatch(createNewListingImg(formDataImg))
                //     }
                // }

                history.push(`/listings/${newListing.id}`)




            } else if (formType === 'update') {
                const editedListing = await dispatch(putListing(listingData, listing.imgs))

                if (prevImg) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', listing.id)
                    formDataPrev.append('image', prevImg)
                    formDataPrev.append('preview', true)

                    await dispatch(createNewListingImg(formDataPrev, 1))
                }

                if (imgTwo) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', listing.id)
                    formDataPrev.append('image', imgTwo)
                    formDataPrev.append('preview', false)

                    await dispatch(createNewListingImg(formDataPrev, 2))
                }

                if (imgThree) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', listing.id)
                    formDataPrev.append('image', imgThree)
                    formDataPrev.append('preview', false)

                    await dispatch(createNewListingImg(formDataPrev, 3))
                }

                if (imgFour) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', listing.id)
                    formDataPrev.append('image', imgFour)
                    formDataPrev.append('preview', false)

                    await dispatch(createNewListingImg(formDataPrev, 4))
                }

                if (imgFive) {
                    const formDataPrev = new FormData()

                    formDataPrev.append('listing_id', listing.id)
                    formDataPrev.append('image', imgFive)
                    formDataPrev.append('preview', false)

                    await dispatch(createNewListingImg(formDataPrev, 5))
                }

                history.push(`/listings/${editedListing.id}`)
            }
        }

    }

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

            <form onSubmit={handleSubmit} className="listingFormBody" encType='multipart/form-data'>

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


            <section className="formSection">
                        <div className="inputTitle" id="photoHeader">
                            <h4>Photos*</h4>
                            <p>Add at least one photo. Use all five photos to show off your item's finest features.</p>
                        </div>

                <div>
                <div className="listingFormUrls">


                    { !prevImg && mainPreview === undefined ?
                    <div id='inputMainContainer'>

                        <div className="textDiv">
                            <div className="previewImageRequired">
                                <p className="inputMainImgText">Drag & drop to upload file</p>
                                <p className="inputMainImgText">*Preview image is required</p>
                            </div>
                            <p className="browse">Browse</p>
                        </div>
                        <input
                        type="file"
                        accept='image/*'
                        // value={prevImg} ==> No longer needed due to AWS
                        className='inputMainImg'
                        id="uploadMain"
                        onChange={(e) => setPrevImg(e.target.files[0])}
                        />

                    </div>
                    :
                    <div id='inputMainContainerPost'>
                        <button className='removeImgButton' onClick={handlePrevImg} type='button'>X</button>
                        <img src={mainPreview}/>
                    </div>

                    }


                    <div className="inputRightContainer">

                        { !imgTwo && imgTwoPreview === undefined ?
                            <div className="inputSubContainer">
                                <div className="textSubDiv">
                                    <p className="inputSubImgText">Drag & drop to upload file</p>
                                    <p className="browse">Browse</p>
                                </div>
                                <input
                                type="file"
                                accept='image/*'
                                // value={imgs[2]?.url} ==> No longer needed due to AWS

                                className='inputSubImg'
                                // onChange={(e) => setImgs({...imgs, 2: {url: e.target.files[0]}})} ==> From url img handling, for reference
                                onChange={(e) => setImgTwo(e.target.files[0])}
                                />
                            </div>
                        :
                            <div className="inputSubContainerPost">
                                <button className='removeImgButton' onClick={handleImgTwo} type='button'>X</button>
                                <img src={imgTwoPreview}/>
                            </div>
                        }

                        { !imgThree && imgThreePreview === undefined ?
                            <div className="inputSubContainer">
                                <div className="textSubDiv">
                                    <p className="inputSubImgText">Drag & drop to upload file</p>
                                    <p className="browse">Browse</p>
                                </div>
                                <input
                                type="file"
                                accept='image/*'
                                // value={imgs[2]?.url} ==> No longer needed due to AWS

                                className='inputSubImg'
                                // onChange={(e) => setImgs({...imgs, 2: {url: e.target.files[0]}})} ==> From url img handling, for reference
                                onChange={(e) => setImgThree(e.target.files[0])}
                                />
                            </div>
                        :
                            <div className="inputSubContainerPost">
                                <button className='removeImgButton' onClick={handleImgThree} type='button'>X</button>
                                <img src={imgThreePreview}/>
                            </div>
                        }

                        { !imgFour && imgFourPreview === undefined ?
                            <div className="inputSubContainer">
                                <div className="textSubDiv">
                                    <p className="inputSubImgText">Drag & drop to upload file</p>
                                    <p className="browse">Browse</p>
                                </div>
                                <input
                                type="file"
                                accept='image/*'
                                // value={imgs[2]?.url} ==> No longer needed due to AWS

                                className='inputSubImg'
                                // onChange={(e) => setImgs({...imgs, 2: {url: e.target.files[0]}})} ==> From url img handling, for reference
                                onChange={(e) => setImgFour(e.target.files[0])}
                                />
                            </div>
                        :
                            <div className="inputSubContainerPost">
                                <button className='removeImgButton' onClick={handleImgFour} type='button'>X</button>
                                <img src={imgFourPreview}/>
                            </div>
                        }

                        { !imgFive && imgFivePreview === undefined ?
                            <div className="inputSubContainer">
                                <div className="textSubDiv">
                                    <p className="inputSubImgText">Drag & drop to upload file</p>
                                    <p className="browse">Browse</p>
                                </div>
                                <input
                                type="file"
                                accept='image/*'
                                // value={imgs[2]?.url} ==> No longer needed due to AWS

                                className='inputSubImg'
                                // onChange={(e) => setImgs({...imgs, 2: {url: e.target.files[0]}})} ==> From url img handling, for reference
                                onChange={(e) => setImgFive(e.target.files[0])}
                                />
                            </div>
                        :
                            <div className="inputSubContainerPost">
                                <button className='removeImgButton' onClick={handleImgFive} type='button'>X</button>
                                <img src={imgFivePreview}/>
                            </div>
                        }



                    </div>


                </div>
                    {submit && errors.prevImg && (
                        <div className="createListingErrors">* {errors.prevImg}</div>
                        )}

                    {submit && errors.image && (
                        <div className="createListingErrors">* {errors.image}</div>
                        )}
                </div>

            </section>


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

            {loadingScreen &&
            <div className="loadingContainer">
                <h2>Thanks for making a post!</h2>
                <p>You will be redirected to your listing in a moment.</p>
                <i class="fa-solid fa-circle-notch"></i>
            </div>
            }

        </section>
    );
};
