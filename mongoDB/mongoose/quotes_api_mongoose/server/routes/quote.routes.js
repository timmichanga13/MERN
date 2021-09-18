const QuoteController = require('../controllers/quote.controller');

module.exports = app => {

    // home page
    app.get('/api', QuoteController.helloWorld);

    // create a quote
    app.post('/api/quotes', QuoteController.createNewQuote);

    // see all quotes
    app.get('/api/quotes', QuoteController.findAllQuotes);

    // searches for one quote by id
    app.get('/api/quotes/:id', QuoteController.findOneQuote);

    // updates a quote by id
    app.put('/api/quotes/:id', QuoteController.updateQuote);

    // deletes a quote by id
    app.delete('/api/quotes/:id', QuoteController.deleteQuote);
}
