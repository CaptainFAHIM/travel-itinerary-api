const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/itinerary.controller');


router.post('/createitinerary/:id', itineraryController.createItinerary);
// router.patch('/updateitinerary/:id', itineraryController.updateItineraryById);
// router.delete('/deleteitinerary/:id', itineraryController.deleteItineraryById);
// router.post('/showitinerary/:id', itineraryController.getItineraryById);
// router.post('/showallitinerary/:id', itineraryController.getAllItineraryById);


module.exports = router;