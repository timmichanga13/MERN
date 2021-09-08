import React, { useState } from 'react';


const HookForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "This is the hard way to say 'Thank you for submitting the form!'";
    //     }
    //     else {
    //         return "This is the hard way to say 'Welcome, please submit the form.'";
    //     }
    // };

    return (
        <div class="container">
            <form onSubmit={createUser}>
                {/* <h3>{formMessage()}</h3> */}
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    {
                        firstName.length<3 && firstName.length != 0?
                            <p style={{ color: 'red' }}>First name must be at least 3 characters!</p>:
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    {
                        lastName.length < 3 && lastName.length != 0?
                            <p style={{ color: 'red' }}>Last name must be at least 3 characters!</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    {
                        email.length < 5 && email.length != 0?
                            <p style={{ color: 'red' }}>Email must be at least 5 characters!</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    {
                        password.length < 8 && password.length != 0?
                            <p style={{ color: 'red' }}>Password must be at least 8 characters!</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                    {
                        password != confirmPassword && confirmPassword.length != 0?
                            <p style={{ color: 'red' }}>Password and confirm password must match!</p> :
                            ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h2>Your Form Data:</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default HookForm;
