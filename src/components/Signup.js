import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { gender, date } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {
  onSignupEmailChange,
  onSignupConfirmEmailChange,
  onSignupPasswordChange,
  onSignupUsernameChange,
} from "../store/actions";
const Signup = () => {
  const entries = useSelector((state) => state.signupReducer);

  return (
    <header className="flex flex-col items-center overflow-hidden">
      <main className="w-80 sm:97 md:98">
        <div className="flex justify-center items-center pt-8">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
            alt=""
            className="w-24 sm:w-28 md:w-32"
          />
        </div>
        <div className="flex flex-col items-center pt-8 w-max">
          <h1 className="sm:text-2xl text-xl font-sans font-bold sm:-ml-8  ">
            Sign up for free to start listening.
          </h1>
        </div>

        <div className="flex justify-center items-center pt-8">
          <div
            className="flex justify-center bg-blue-500 text-white 
       hover:cursor-pointer
         transition-all duration-300 ease-linear 
       hover:bg-blue-600 
       font-bold text-2xl
        font-sans  py-3 w-60 rounded-3xl mb-2 h-12"
          >
            <h2
              className="pl-2 text-sm tracking-widest 
       hover:cursor-pointer
        
        "
            >
              Sign up with Facebook
            </h2>
          </div>
        </div>

        <div className="flex justify-center ">
          <h1 className="font-normal text-gray-400 bg-white w-8 pl-2 pt-1">
            or
          </h1>
        </div>
        <div className="h-px w-80  bg-gray-300 -mt-2 "></div>

        <form className="flex flex-col items-center justify-center">
          <Survey />

          <div className="flex flex-col  w-97 pb-2 ">
            <h3 className="pt-4 font-bold pb-2 text-sm sm:ml-0 ml-14">
              What's your date of birth?
            </h3>

            <div className="flex justify-between">
              {date.map((item) => {
                const { id } = item;
                return <Date {...item} key={id} />;
              })}
            </div>
          </div>

          <div className="flex flex-col  w-97 pb-2 ">
            <h3 className="pt-4 font-bold pb-2 text-sm sm:ml-0 ml-14">
              What's your gender?
            </h3>

            <div className="flex justify-between pt-2 sm:mr-0 mr-7">
              {gender.map((item, index) => {
                return (
                  <>
                    <div key={index} className="ml-14 sm:ml-0">
                      <input type="radio" name="gender" required />
                    </div>
                    <h1 className="sm:-ml-20 sm:mr-0 mr-2 -ml-1 ">{item}</h1>
                  </>
                );
              })}
            </div>

            <div className="flex  pt-5 -ml-3 ">
              <div className=" sm:pl-3 sm:pr-3 pl-14 sm:mr-0 mr-3">
                <input type="checkbox" required />
              </div>
              <h1 className="sm:text-sm text-xs sm:mr-0 mr-10  font-semibold">
                I would prefer not to receive marketing messages from Spotify
              </h1>
            </div>
            <div className="flex  pt-1 ">
              <div className="sm:pl-3 sm:pr-3 pl-12 sm:mr-0 mr-3">
                <input type="checkbox" required />
              </div>
              <h1 className="sm:text-sm text-xs sm:mr-0 mr-5 font-semibold">
                Share my registration data with Spotify's content providers for
                marketing purposes.
              </h1>
            </div>

            <Instructions text="text-center" />

            <div className="flex justify-center items-center">
              {entries.username &&
              entries.confirmEmail &&
              entries.password &&
              entries.email &&
              entries.email === entries.confirmEmail ? (
                <Link
                  to="/home"
                  className="flex justify-center bg-green-450  
       hover:cursor-pointer
         transition-all duration-300 ease-linear 

       font-bold 
        font-sans  py-3 w-36 rounded-3xl mb-2 h-12 "
                >
                  <input
                    type="submit"
                    value="SIGN UP"
                    className="pl-2  tracking-widest bg-green-450 font-bold 
       hover:cursor-pointer
        
        "
                  />
                </Link>
              ) : (
                <div
                  className="flex justify-center bg-green-450  
       hover:cursor-pointer
         transition-all duration-300 ease-linear 

       font-bold 
        font-sans  py-3 w-36 rounded-3xl mb-2 h-12 "
                >
                  <input
                    type="submit"
                    value="SIGN UP"
                    className="pl-2  tracking-widest bg-green-450 font-bold 
       hover:cursor-pointer
        
        "
                  />
                </div>
              )}
            </div>

            <div className="flex justify-center items-center">
              <h1 className="pb-32 pt-8 font-semibold">
                Have an account?
                <Link to="/login" className="pl-2 underline text-green-450">
                  Log in
                </Link>
              </h1>
            </div>
          </div>
        </form>
      </main>
    </header>
  );
};

const Instructions = ({ text }) => {
  return (
    <div className="flex justify-center pt-3 pb-5">
      <div className="flex flex-col " className={text}>
        <p className="text-xs sm:pr-12 ml-10 mr-10 font-semibold sm:mr-0 sm:ml-0">
          By clicking on sign-up, you agree to Spotify's
          <a href="#" className="underline pl-1 text-green-450">
            Terms and Conditions of Use
          </a>
          .
        </p>
        <p className="text-xs pt-3 sm:pr-12 ml-10 mr-10 font-semibold sm:mr-0 sm:ml-0">
          To learn more about how Spotify collects, uses, shares and protects
          your personal data, please see
          <a href="#" className="underline pl-1 text-green-450">
            Spotify's Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
};

const Date = ({ heading, placeholder, type, width }) => {
  return (
    <div className="sm:ml-0 sm:mr-0 ml-10 mr-10">
      <h1 className="pb-1">{heading}</h1>
      <input
        type={type}
        placeholder={placeholder}
        className={`border border-gray-400 px-3 py-3 ${width} focus:outline-none placeholder-gray-700 hover:border-8 rounded-md
              hover:border-gray-600 `}
        required
      />
    </div>
  );
};

const Survey = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.signupReducer);
  return (
    <div className="flex flex-col justify-center items-start sm:w-97 w-80 pb-2 ">
      <h3 className="pt-4 font-bold pb-2 text-sm">Whats Your Email?</h3>
      <input
        type="email"
        placeholder="Enter Your Email"
        className="border border-gray-400 px-3 py-3 sm:w-97 w-80 focus:outline-none placeholder-gray-700 hover:border-8 rounded-md
              hover:border-gray-600"
        required
        value={state.email}
        onChange={(e) => dispatch(onSignupEmailChange(e))}
      />
      <div>
        <h1
          className=" 
            text-sm underline "
        >
          <a href="#" className="text-green-700">
            Use phone number instead.
          </a>
        </h1>
      </div>
      <h3 className="pt-4 font-bold pb-2 text-sm">Confirm Your Email</h3>
      <input
        type="email"
        placeholder="Enter Your Email again"
        value={state.confirmEmail}
        className="border border-gray-400 px-3 py-3 sm:w-97 w-80 focus:outline-none placeholder-gray-700 hover:border-8 rounded-md
              hover:border-gray-600"
        required
        onChange={(e) => dispatch(onSignupConfirmEmailChange(e))}
      />
      <h3 className="pt-4 font-bold pb-2 text-sm">Create a password</h3>
      <input
        type="password"
        placeholder="Create a password"
        value={state.password}
        className="border border-gray-400 px-3 py-3 sm:w-97 w-80 focus:outline-none placeholder-gray-700 hover:border-8 rounded-md
              hover:border-gray-600"
        required
        onChange={(e) => dispatch(onSignupPasswordChange(e))}
      />
      <h3 className="pt-4 font-bold pb-2 text-sm">What should we call you?</h3>
      <input
        type="text"
        placeholder="Enter a profile name"
        value={state.usename}
        className="border border-gray-400 px-3 py-3 sm:w-97 w-80 focus:outline-none placeholder-gray-700 hover:border-8 rounded-md
              hover:border-gray-600"
        required
        onChange={(e) => dispatch(onSignupUsernameChange(e))}
      />
    </div>
  );
};

export default Signup;
