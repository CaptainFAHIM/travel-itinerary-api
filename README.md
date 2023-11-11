Travel Itinerary App
===============
Overview
The Travel Itinerary App is a Node.js application for managing travel itineraries. Users can create, delete, and view itineraries through a set of API endpoints.

Installation
===============

npm install

Usage
===============

node index.js
The app will run at http://127.0.0.1:your_port.

API Routes
===============

Create User:
POST /create - Create a new user.

User Login:
POST /login - Authenticate and log in a user.

Create Itinerary:
POST /createitinerary/:id - Create a new travel itinerary for the user with the specified ID.

Delete Itinerary:
DELETE /deleteitinerary/:id - Delete a travel itinerary by its ID.

Show Itinerary by ID:
GET /showitinerary/:id - Retrieve a travel itinerary by its ID.

Show All Itineraries by User ID:
GET /showallitinerary/:id - Retrieve all travel itineraries for the user with the specified ID.

## Postman Collection
[Explore API in Postman](https://www.postman.com/fahim4251/workspace/public/overview)

Authentication
===============

Protected routes require a valid JWT token. Include it in the Authorization header.

Contributing
Contributions are welcome!