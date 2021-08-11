import React from "react";
import "../index.css";
import { options } from "../data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLoginPasswordChange, onLoginUsernameChange } from "../store/actions";

const Login = () => {
  return (
    <header className="overflow-x-hidden">
      <main className="flex flex-col justify-center items-center pt-3 pb-3 md:pb-8 md:pt-8">
        <div className="pb-3">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
            alt=" spotify logo"
            className="w-32 md:w-52"
          />
        </div>
        <div className="w-full h-px bg-gray-300"></div>
      </main>
      <article className="flex flex-col items-center ">
        <h3 className="text-center pt-4 font-bold pb-2">
          To continue, log in to Spotify
        </h3>
      </article>

      {options.map((item) => {
        const { id } = item;
        return <LoginOptions key={id} {...item} />;
      })}
      <section>
        <div className="flex justify-center items-center">
          <div className="w-full md:w-98 h-px mt-4 bg-gray-300"></div>
        </div>
        <div className="flex justify-center items-center">
          <h3 className="text-center -mt-4 font-semibold pt-1 bg-white w-12 text-sm">
            OR
          </h3>
        </div>
      </section>
      <LoginForm />
    </header>
  );
};

const LoginOptions = ({
  bgColor,
  text,
  textColor,
  icon,
  hoverBgcolor,
  hoverTextColor,
  borderColor,
  borderWidth,
}) => {
  return (
    <article className="flex flex-col items-center ">
      <div
        className={`flex justify-center  border-2 ${textColor}
              transition-all duration-300 ease-linear
       ${hoverTextColor} ${hoverBgcolor}
       hover:cursor-pointer ${bgColor} ${borderColor} ${borderWidth}
      font-sans font-bold py-3 sm:w-98 w-80 rounded-3xl mb-2 h-12`}
      >
        <h2
          className="pl-2 text-sm tracking-widest
       hover:cursor-pointer
        
        "
        >
          {icon}
          CONTINUE WITH {text}
        </h2>
      </div>
    </article>
  );
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginReducer);

  return (
    <form className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-start sm:w-98 w-80 ">
        <h3 className="pt-4 font-bold pb-2">Email address or username</h3>
        <input
          type="email"
          value={state.username}
          placeholder="Email address or username"
          required
          className="border border-gray-400 px-2 py-2 sm:w-98 w-80 focus:outline-none placeholder-gray-700"
          onChange={(e) => dispatch(onLoginUsernameChange(e))}
        />
      </div>
      <div className="flex flex-col justify-center items-start sm:w-98 w-80 ">
        <h3 className="pt-4 font-bold pb-2">Password</h3>
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          required
          className="border border-gray-400 px-2 py-2 sm:w-98 w-80 focus:outline-none placeholder-gray-700"
          onChange={(e) => dispatch(onLoginPasswordChange(e))}
        />
      </div>
      <h3 className="pt-4 underline pb-8 sm:mr-72 mr-36  -ml-2 ">
        <a href="#" className="hover:text-green-450 text-gray-700">
          Forgot your password?
        </a>
      </h3>

      <div className="flex">
        <div>
          <input
            type="checkbox"
            className="checked:bg-green-450 checked:border-green-450 sm:mr-2"
          />
        </div>
        <h3 className=" pb-2 pl-1 sm:mr-80 mr-44">Remember me</h3>
      </div>

      {state.username && state.password ? (
        <Link to="/home">
          <div
            className="flex justify-center bg-green-450 
   text-white font-sans font-bold py-3 sm:w-98 w-80 rounded-3xl mb-4 h-12"
          >
            <input
              type="submit"
              value="LOG IN"
              className="pl-2 text-sm tracking-widest bg-green-450         transition-all duration-200 ease-linear "
            />
          </div>
        </Link>
      ) : (
        <div
          className="flex justify-center bg-green-450 
   text-white font-sans font-bold py-3 sm:w-98 w-80 rounded-3xl mb-4 h-12"
        >
          <input
            type="submit"
            value="LOG IN"
            className="pl-2 text-sm tracking-widest bg-green-450         transition-all duration-200 ease-linear "
          />
        </div>
      )}

      <div>
        <h3 className="pt-4 font-bold pb-2">Don't have an account?</h3>
      </div>
      <Link to="/signup">
        <div
          className="flex justify-center bg-white border-2 
              transition-all duration-300 ease-linear
       hover:bg-gray-600 hover:text-white
        border-black-900 text-gray-500 font-sans font-bold py-3 sm:w-98 w-80 rounded-3xl mb-2 h-12"
        >
          <h2 className="pl-2 text-sm tracking-widest">SIGN UP FOR SPOTIFY</h2>
        </div>
      </Link>
    </form>
  );
};

export default Login;
