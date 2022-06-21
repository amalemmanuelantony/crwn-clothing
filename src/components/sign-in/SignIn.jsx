import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: "", password: "" })
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                        label="Email"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange}
                        label="Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{" "} Sign In With Google {" "}</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn;