import React, { useState } from "react";
import { Form } from "react-router-dom";
import signupStyle from "../componentsCss/Signup.module.css";
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup({ closeSignupForm }) {
  const date = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
    2024,
  ];
  const years = year.reverse();

  const [viewPass, setViewPass] = useState("password");
  const [view, setView] = useState(false);
  const handlePasswordView = () => {
    setViewPass("text");
    setView(true);
  };
  const handlePasswordHide = () => {
    setViewPass("password");
    setView(false);
  };

  return (
    <div className={`${signupStyle["mainContainer"]}`}>
      <div className={`${signupStyle["mainSegment"]}`}>
        <RxCross2 onClick={closeSignupForm} />
        <div className={`${signupStyle["headerContainer"]}`}>
          <h1 className={`${signupStyle["heading"]}`}>Sign Up</h1>
          <h5 className={`${signupStyle["heading2"]}`}>It's quick and easy.</h5>
        </div>
        <div className={`${signupStyle["hrContainer"]}`}></div>
        <Form method="post" className={`${signupStyle["form"]}`}>
          <input
            className={`${signupStyle["inputSegment"]}`}
            type="text"
            name="first"
            placeholder="First name"
          />
          <input
            className={`${signupStyle["inputSegment"]}`}
            type="text"
            name="second"
            placeholder="Surname"
          />

          <input
            className={`${signupStyle[("inputSegment", "larger")]}  `}
            type="text"
            name="email"
            placeholder="Mobile number or email address"
          />
          <div className={`${signupStyle["inputContainer"]}`}>
            <input
              type={viewPass}
              name="password"
              placeholder="New password"
              className={`${signupStyle["passSegment"]}`}
            ></input>
            <div className={`${signupStyle["iconContainer"]}`}>
              {!view ? (
                <FaEye onClick={handlePasswordView} />
              ) : (
                <FaEyeSlash onClick={handlePasswordHide} />
              )}
            </div>
          </div>

          <div className={`${signupStyle["dobContainer"]} `}>
            <h6 className={`${signupStyle["h6Container"]}`}>Date of birth ?</h6>
            <div className={`${signupStyle["dobInputs"]}`}>
              <select
                className={`${signupStyle["inputSegmentdob"]}`}
                name="date"
                id="day"
              >
                {date.map((date, index) => {
                  return (
                    <option key={index} value={date}>
                      {date}
                    </option>
                  );
                })}
              </select>
              <select
                className={`${signupStyle["inputSegmentdob"]}`}
                name="month"
                id="month"
              >
                {month.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select
                className={`${signupStyle["inputSegmentdob"]}`}
                name="years"
                id="years"
              >
                {years.map((years, index) => {
                  return (
                    <option key={index} value={years}>
                      {years}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={`${signupStyle["genderContainer"]} `}>
            <h6 className={`${signupStyle["h6Container"]}`}>Gender ?</h6>
            <div className={`${signupStyle["genderInput"]}`}>
              <div className={`${signupStyle["femaleInput"]}`}>
                <span>Female</span>
                <input
                  type="checkbox"
                  className={`${signupStyle["checkbox"]}`}
                  name="female"
                  id="female"
                />
              </div>
              <div className={`${signupStyle["maleInput"]}`}>
                <span>Male</span>
                <input
                  type="checkbox"
                  className={`${signupStyle["checkbox"]}`}
                  name="male"
                  id="male"
                />
              </div>
            </div>
          </div>
          <div className={`${signupStyle["infoContainer"]} `}>
            <p className={`${signupStyle["pContainer"]}`}>
              People who use our service may have uploaded your contact
              information to Facebook. Learn more.
            </p>
            <p className={`${signupStyle["pContainer"]}`}>
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
          </div>
          <button type="submit" className={` ${signupStyle["submitBtn"]}`}>
            Sign Up
          </button>
        </Form>
      </div>
    </div>
  );
}
export const redirectToLogin = async (data) => {
  const formData = await data.request.formData();
  const postData = await Object.fromEntries(formData);

  return redirect("/");
};
export default Signup;
