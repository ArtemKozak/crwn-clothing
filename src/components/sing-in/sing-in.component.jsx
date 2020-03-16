import React from "react";

import "./sing-in.styles.scss";

class SingIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    };

    render() {
        return(
            <div className='sing-in'>
                <h2>I have already have an account</h2>
                <span>Sin in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input
                        name='email'
                        type="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <label>Email</label>
                    <input
                        name='password'
                        type="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <label>Password</label>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
};

export default SingIn;