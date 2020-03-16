import React from "react";

import "./sing-in.styles.scss";

import { singInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

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
                    <CustomButton type="submit" value="Submit Form">SING IN</CustomButton>
                    <CustomButton onClick={singInWithGoogle}>
                        {' '}
                        Sing in with Google{' '}
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SingIn;