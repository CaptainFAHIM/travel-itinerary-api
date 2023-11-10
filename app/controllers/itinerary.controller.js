const jwt = require("jsonwebtoken");
const ObjectId = require('mongoose').Types.ObjectId;

// Local imports
const __res_ = require('../utils/helpers/send-response');
const ItineraryModel = require('../models/itinerary.model');


module.exports = {
    createItinerary: async function (req, res) {
        try {
            const id = new ObjectId(req.params.id);
            const body = {
                iName: req.body.iName,
                dates: req.body.dates,
                destinations: req.body.destinations,
                activities: req.body.activities,
                transportationDetails: req.body.transportationDetails,
                accommodationDetails: req.body.accommodationDetails,
                user: id,
            }
            if (id) {
                const data = await new ItineraryModel(body).save();
                return __res_.out(req, res, {
                    status: true,
                    statusCode: 201,
                    message: "Successfully added!",
                    data: data,
                });
            }
        } catch (error) {
            console.log(error);
            return __res_.out(req, res, {
                status: true,
                statusCode: 500,
                message: "Internal server error!!!",
                data: error
            });
        }
    }
}