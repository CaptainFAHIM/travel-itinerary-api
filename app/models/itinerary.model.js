const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  aName: String,
  description: String,
});

const itinerarySchema = new Schema({
  iName: {
    type: String,
    required: true
  },
  dates: {
    type: {
      start: Date,
      end: Date
    },
    required: true
  },
  destinations: [String],
  activities: [activitySchema],
  transportationDetails: String,
  accommodationDetails: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
