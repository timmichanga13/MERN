const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Quote content is required."]
    },
    rating: Number
});

// registers the data in a table
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;
