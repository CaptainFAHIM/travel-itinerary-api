const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/itinerary.controller');
const authGuard = require('../middlewares/authGuard');

router.post('/createitinerary/:id',authGuard, itineraryController.createItinerary);
router.delete('/deleteitinerary/:id', authGuard, itineraryController.deleteItineraryById);
router.get('/showitinerary/:id', authGuard, itineraryController.getItineraryById);
router.get('/showallitinerary/:id', authGuard, itineraryController.getAllItineraryById);


module.exports = router;