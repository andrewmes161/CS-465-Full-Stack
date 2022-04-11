const mongoose = require('mongoose');

// Define the trip Schema 
const tripSchema = new mongoose.schema({
    code: { type: String, required: true, index: true},
    name: { type: String, required: true, index: true},
    length: { type: String, required: true},
    start: { type: Date, required: true},
    resort: { type: String, required: true},
    perPerson: { type: String, required: true}, // easier to store as strings, and then convert to an decimal...
    image: { type: String, required: true},
    description: { type: String, required: true}
});

mongoose.model('trips', tripSchema);