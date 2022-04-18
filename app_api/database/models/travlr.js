const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the trip Schema 
const tripSchema = new Schema({
    code: { type: String, required: true, index: true},
    name: { type: String, required: true, index: true},
    length: { type: String, required: true},
    start: { type: Date, required: true},
    resort: { type: String, required: true},
    perPerson: { type: String, required: true}, // easier to store as strings, and then convert to an decimal...
    image: { type: String, required: true},
    description: { type: String, required: true} // not sure why this isn't showing up in the code
});

// mongoose.model('trips', tripSchema);

module.exports = mongoose.model("trips", tripSchema);