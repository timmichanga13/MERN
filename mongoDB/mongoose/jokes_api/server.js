const express = require("express");
const app = express();
const port = 8000;


// require the modularized server config file to get the moongose info
require("./server/config/mongoose.config");

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// link to routes
require("./server/routes/joke.routes")(app);



// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );