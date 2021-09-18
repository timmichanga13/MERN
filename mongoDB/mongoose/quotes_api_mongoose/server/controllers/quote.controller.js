const Quote = require("../models/quote.model");

module.exports.helloWorld = (req, res) => {
    res.json({ message: "Hello World of MERN" });
};

module.exports.createNewQuote = (req, res) => {
    Quote.create(req.body)
        .then(newlyCreatedQuote => res.json({ 
            result: newlyCreatedQuote }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findAllQuotes = (req, res) => {
    Quote.find()
        .then(allQuotes => res.json({ result: allQuotes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneQuote = (req, res) => {
    Quote.findOne({ _id: req.params.id })
        .then(oneSingleQuote => res.json({ Result: oneSingleQuote }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateQuote = (req, res) => {
    Quote.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedQuote => res.json({ result: updatedQuote }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteQuote = (req, res) => {
    Quote.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}