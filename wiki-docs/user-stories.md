# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/` modal:
    * I would like to be able to enter my first name, email and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/` modal:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` modal and `/login` modal to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` modals:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to the home page.
      * So that I can easily log out to keep my information secure.

## Listings

### Viewing Listing

* As a logged in user, I want to be able to view my store and listings.
    * When I'm on the any page:
     * There is a navbar button to navigate to the user store page.
        * On the store page all my listings are displayed in a tile format similar to home page.

### Create Listing

* As a logged in user, I want to be able to navigate to my store.
  * When I'm on the any page:
    * There is a navbar button to navigate to the user store page.
        * On the store page there is a button to create a new listing.
    * Selecting create a new listing navigates me to a clearly laid out new listing form.
        * When I successfully submit the form, I want to be navigated to the new listing page.
        * If I unsuccessfully submit the form, I want the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries.

### Updating Listing

* As a logged in user, I want to be able to navigate to my store.
  * When I'm on the any page:
    * There is a navbar button to navigate to the user store page.
        * On the store page all my listings are displayed in a tile format similar to home page.
        * Each listing has an edit button below the listing.
            * Clicking on the edit button takes me to the listing creation form where the previous data is pre-populated
            * When I successfully submit the form, I want to be navigated to the new listing page.
            * If I unsuccessfully submit the form, I want the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries.

### Deleting Listing

* As a logged in user, I want to be able to navigate to my store.
  * When I'm on any page:
    * There is a navbar button to navigate to the user store page.
        * On the store page all my listings are displayed in a tile format similar to home page.
        * Each listing has an delete button below the listing.
        * Clicking delete opens a confirmation modal with a confirm and cancel button.
         * Selecting confirm deletes the listing, selecting cancel closes the modal


## Cart

### Viewing Cart

* As a logged in user, I want to be able to view my cart.
    * When I'm on any page:
        * There is a cart button in the navbar
            * Clicking on the cart button navigates me to the cart page

### Adding to Cart

* As a logged in user, I want to be able to add an item to my cart
  * When I'm on a item listing page:
    * There is a button to add item and select the quantity.
    * If I am not a logged in user the button to add item to cart is disabled.
    * Clicking the button as a logged in user adds the item and quantity to my cart

### Removing Item from Cart

* As a logged in user, I want to be able to remove an item from my cart.
    * When I'm on any page:
        * There is a cart button in the navbar
            * Clicking on the cart button navigates me to the cart page
            * On the cart page, each item has a remove button, which removes the item from the cart

### Buying (Clearing Cart)

* As a logged in user, I want to be able to buy the items in my cart.
    * When I'm on any page:
        * There is a cart button in the navbar
            * Clicking on the cart button navigates me to the cart page
            * On the cart page, there is a purchase button
                * Clicking on purchase button opens a confirm modal, selecting confirm navigates me to an order summary page and clears cart. Selecting cancel returns me to the cart page.
