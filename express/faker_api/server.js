const express = require("express");
const app = express();
const port = 8000;

var faker = require('faker');


// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const users = [];
const companies = [];

class User {
    constructor(id) {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.pasword = faker.internet.password();
    }
}

class Company {
    constructor(id) {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
}


app.get("/api/users", (req, res) => {
    res.json(users);
});

app.get("/api/users/new", (req, res) => {
    let newUser = new User();
    users.push(newUser);
    res.json({data: newUser});
});

app.get("/api/companies", (req, res) => {
    res.json(companies);
});

app.get("/api/companies/new", (req, res) => {
    let newComp = new Company();
    companies.push(newComp);
    res.json({data: newComp});
});

app.get("/api/user/company", (req, res) => {
    let newUser = new User();
    users.push(newUser);
    let newComp = new Company();
    companies.push(newComp);
    res.json({user: newUser, company: newComp});
})

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));