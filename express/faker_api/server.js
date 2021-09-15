const express = require("express");
const app = express();
const port = 8000;

const faker = require('faker');


// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


class User {
    constructor(id) {
        this._id = id;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.pasword = faker.internet.password();
    }
}

class Company {
    constructor(id) {
        this._id = id;
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(this.adress[state]),
            country: faker.address.country()
        }
    }
}


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


app.get("/api/users", (req, res) => {
    res.json(users);
});


app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
});

app.post("/api/users/new", (req, res) => {
    console.log(req.body);
    let newUser = new User();
    users.push(newUser);
    res.json({status: "ok"});
});


// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.id]);
});


app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json({ status: "ok" });
});


app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json({ status: "ok" });
});




// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));