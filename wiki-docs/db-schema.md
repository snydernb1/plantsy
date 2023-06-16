
# Database Schema and Backend Routes

## DB Schema

![database-schema](https://imgur.com/V4CbG8G.jpg)

## Backend Routes

### Users

GET /api/users/:id
* Returns information of single user

### Session

GET /api/auth
* Returns the information of the logged in user

POST /api/auth/signup
* Signs up a new user

POST /api/auth/login
* Logs in a user

Delete /api/auth
* Logs out a user

### Listings

GET /api/listings/:listingsid
* Returns information of single listing

GET /api/listings
* Returns information of all listings

POST /api/listing/
* Creates new listing

PUT /api/listings/:listingid
* Edits a listing

DELETE /api/listings/:listingid
* Deletes a listing

### Shop

GET /api/shops/:shopid
* Returns information of single shop

POST /api/shops/
* Creates new shop

PUT /api/shops/:shopid
* Edits a shop

DELETE /api/shops/:shopid
* Deletes a shop

### Cart

GET /api/users/:id/cart
* Returns information of users cart

POST /api/cart/
* Adds item to cart

DELETE /api/cart/:itemid
* Deletes cart item

DELETE /api/users/:userid/cart
* Clears users cart
