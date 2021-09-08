import React, { Component } from 'react';


class PersonCard extends Component {
    // this allows us to change the age using state
    constructor(props) {
        super(props);
        this.state = { currentAge: this.props.age };
    }
}


//function to age a year
const birthday = () => {
    this.setState({ currentAge: this.state.currentAge + 1 });
}

const PersonCard = props => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={birthday}>Happy Birthday, {props.firstName} {props.lastName}!</button>
        </div>
    );
}
export default PersonCard;


