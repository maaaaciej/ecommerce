import React from "react";
import "./forms.style.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.components";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
