import React from "react";
import "./signin.style.scss";
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.components"

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange=e=>{
    const {value, name} = e.target
    this.setState({[name]:value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            required
          />

          <CustomButton type="submit">Sign In </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
