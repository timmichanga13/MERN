const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Quote content is required."],
        min: [10, "Setup must be at least 10 characters."]
    },
    punchline: {
        type: String,
        required: [true, "Quote content is required."],
        min: [3, "Punchline must be at least 3 characters."]
    }
});

// registers the data in a table
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
