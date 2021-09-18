const Joke = require("../models/joke.model");

module.exports.helloWorld = (req, res) => {
    res.json({ message: "Welcome to Funny Jokes!" });
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ 
            result: newJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ result: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ Result: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findRandomJoke = (req, res) => {
    Joke.aggregate([{ $sample: { size: 1 } }])
    .then(randomJoke => res.json({Result: randomJoke}))
    .catch(err => res.json({message: 'Something went wrong', error: err}));
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ result: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}