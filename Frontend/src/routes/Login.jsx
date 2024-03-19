import React, { useState } from "react";
import loginStyle from "../componentsCss/Login.module.css";
import LoginForm from "../components/LoginForm";
import Signup from "../components/Signup";

function Login() {
  const signupState = false;
  const [initialState, setState] = useState(signupState);
  const onClickDisplay = () => {
    setState(true);
  };
  const onClickHide = () => {
    setState(false);
  };

  return (
    <div className={`${loginStyle["loginContainer"]}`}>
      <div className={`${loginStyle["mainLoginContainer"]}`}>
        <div className={`${loginStyle["logoContainer"]}`}>
          <img
            className={`${loginStyle["loginImgContainer"]}`}
            src="./FaceBook.svg"
            alt="FaceBook"
          />
          <h2 className={`${loginStyle["loginPContainer"]}`}>
            Facebook helps you connect and share with the people in your life
          </h2>
        </div>
      </div>
      <LoginForm handleSignup={onClickDisplay} />

      {initialState ? <Signup closeSignupForm={onClickHide} /> : null}
    </div>
  );
}

export default Login;
