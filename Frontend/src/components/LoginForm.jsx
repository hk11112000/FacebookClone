import React from "react";
import loginFormStyle from "../componentsCss/LoginForm.module.css";
import { Form, Link, redirect } from "react-router-dom";

function LoginForm({ handleSignup }) {
  return (
    <div className={`${loginFormStyle["loginFormContainer"]}`}>
      <div className={`${loginFormStyle["formContainer"]}`}>
        <Form method="post" className={`${loginFormStyle["form"]}`}>
          <input
            className={`${loginFormStyle["inputContainer"]}`}
            name="emailId"
            placeholder="Email address or Phone Number"
            type="email"
            required
          ></input>
          <input
            className={`${loginFormStyle["inputContainer"]}`}
            name="password"
            placeholder="Password"
            type="password"
            required
          />
          <Link to="/home" className={`${loginFormStyle["link"]}`}>
            <button
              className={`${loginFormStyle["btnContainer"]}`}
              type="submit"
            >
              Log in
            </button>
          </Link>
          <h6 className={`${loginFormStyle["h6Container"]}`}>
            Forgot password?
          </h6>
        </Form>
        <div className={`${loginFormStyle["signupContainer"]}`}>
          <div className={`${loginFormStyle["hrContainer"]}`}></div>
          <button
            onClick={handleSignup}
            className={`${loginFormStyle["signInBtnContainer"]}`}
          >
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}
export const redirectToHome = async (data) => {
  const formData = await data.request.formData();
  const postData = await Object.fromEntries(formData);
  console.log("submitted");
  console.log(postData);
  return redirect("/home");
};

export default LoginForm;
