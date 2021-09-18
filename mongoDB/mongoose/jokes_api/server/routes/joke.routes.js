const JokeController = require('../controllers/joke.controller');

module.exports = app => {

    // home page
    app.get('/api', JokeController.helloWorld);

    // create a quote
    app.post('/api/jokes', JokeController.createJoke);

    // see all quotes
    app.get('/api/jokes', JokeController.findAllJokes);

    // searches for a random quote
    app.get('/api/jokes/random', JokeController.findRandomJoke);


    // routes that take specific info must come after ones that don't (random has to come before one)? like the exact route from before, otherwise it thinks teh id is 'random'



    // searches for one quote by id
    app.get('/api/jokes/:id', JokeController.findOneJoke);

    // updates a quote by id
    app.put('/api/jokes/:id', JokeController.updateJoke);

    // deletes a quote by id
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}
