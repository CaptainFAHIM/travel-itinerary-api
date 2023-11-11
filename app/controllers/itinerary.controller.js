const ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require("mongoose");

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
            if (mongoose.Types.ObjectId.isValid(id)) {
                const data = await new ItineraryModel(body).save();
                return __res_.out(req, res, {
                    status: true,
                    statusCode: 201,
                    message: "Successfully added!",
                    data: data,
                });
            } else{
                return __res_.out(req, res, {
                    status: true,
                    statusCode: 400,
                    message: "Not a valid id!",
                });
            }
        } catch (error) {
            return __res_.out(req, res, {
                status: true,
                statusCode: 500,
                message: "Internal server error!!!",
                data: error
            });
        }
    },
    getAllItineraryById: async function (req, res) {
        try {
            const id = req.params.id;
            const data = await ItineraryModel.find({user:id});
            return __res_.out(req, res, {
                status: true,
                statusCode: 200,
                data: data,
            });
        } catch (error) {
            return __res_.out(req, res, {
                status: true,
                statusCode: 500,
                message: "Internal server error!!!",
                data: error
            });
        }
    },
    getItineraryById: async function (req, res) {
        try {
            const id = req.params.id;
            const data = await ItineraryModel.find({_id:id});
            return __res_.out(req, res, {
                status: true,
                statusCode: 200,
                data: data,
            });
        } catch (error) {
            return __res_.out(req, res, {
                status: true,
                statusCode: 500,
                message: "Internal server error!!!",
                data: error
            });
        }
    },
    deleteItineraryById: async function (req, res) {
        try {
            const id = req.params.id;
                const deleteStatus = await ItineraryModel.deleteOne({_id:id});
                if(deleteStatus.deletedCount>0){
                    return __res_.out(req, res, {
                        status: true,
                        statusCode: 202,
                        message: "Successfully deleted!"
                    });
                } else {
                    return __res_.out(req, res, {
                        status: false,
                        statusCode: 400,
                        message: "Something went wrong!"
                    });
                }
            
        } catch (error) {
            return __res_.out(req, res, {
                status: true,
                statusCode: 500,
                message: "Internal server error!!!",
                data: error
            });
        }
    }
}