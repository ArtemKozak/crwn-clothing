import React from "react";

import "./sing-in.styles.scss";

import FormInput from "../form-input/form-input.component";

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
                    <FormInput
                        name='email'
                        type="email"
                        handleChange={this.handleChange}
                        label='email'
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name='password'
                        type="password"
                        handleChange={this.handleChange}
                        label='password'
                        value={this.state.password}
                        required
                    />
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
}

export default SingIn;