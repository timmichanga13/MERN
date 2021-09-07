import React, { Component } from 'react';


class PersonCard extends Component {
    // this allows us to change the age using state
    constructor(props) {
        super(props);
        this.state = { currentAge: this.props.age };
    }


    // this shows the person's info in App.js
    render() {

        //function to age a year
        const birthday = () => {
            this.setState({ currentAge: this.state.currentAge + 1 });
        }

        return <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.state.currentAge}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={birthday}>Happy Birthday, {this.props.firstName} {this.props.lastName}!</button>
        </div>;
    }
}

export default PersonCard;
