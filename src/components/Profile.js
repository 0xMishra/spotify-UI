import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Home from "./Home";
import HomeIcon from "@material-ui/icons/Home";
import { useSelector } from "react-redux";
const Profile = () => {
  const state1 = useSelector((state) => state.signupReducer);
  const state2 = useSelector((state) => state.loginReducer);
  return (
    <>
      <div className="flex flex-col bg-black-900 text-white w-screen  sm:hidden h-screen bg-gradient-to-b from-pink-900 via-black-450 to-black-900 ">
        <div className="flex flex-col text-2xl font-bold mt-28 ml-6 ">
          {state1.username || state2.username ? (
            <div className="flex flex-col">
              <h1 className="hover:underline">
                {state1.username || state2.username}
              </h1>
            </div>
          ) : (
            <div className="flex flex-col">
              <Link to="/login" className="hover:underline">
                Log In
              </Link>
              <Link to="/signup" className="hover:underline">
                Sign Up
              </Link>
            </div>
          )}
          <ul className="pb-4">
            <Link to="/home" className="flex items-center py-1 ">
              <div className="pr-5">
                <HomeIcon />
              </div>
              <h3 className="pr-14 sm:pr-32 font-bold cursor-pointer text-sm ">
                Home
              </h3>
            </Link>

            <li className="flex items-center  rounded-sm py-1 ">
              <div className="pr-5">
                <SearchIcon />
              </div>
              <h3 className=" font-bold text-gray-300 text-sm cursor-pointer hover:text-white">
                Search
              </h3>
            </li>

            <li className="flex items-center rounded-sm py-1 ">
              <div className="pr-5">
                <LibraryBooksIcon />
              </div>
              <h3 className="font-bold text-gray-300 cursor-pointer text-sm hover:text-white">
                Your Library
              </h3>
            </li>
          </ul>

          <ul className="flex flex-col items-start">
            <li className="flex items-center  rounded-sm py-2 ">
              <div className="pr-3 mr-2 flex  items-center justify-center ">
                <h1 className=" text-black-900 bg-gray-300 w-6 h-6 pl-2 cursor-pointer pb-2 text-sm ">
                  +
                </h1>
              </div>
              <h3 className="font-bold cursor-pointer text-sm text-gray-300 hover:text-white">
                Create Playlist
              </h3>
            </li>

            <li className="flex items-center  rounded-sm py-2 ">
              <div className="mr-5  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
                <FavoriteIcon />
              </div>
              <h3 className=" font-bold text-gray-300 text-sm cursor-pointer hover:text-white">
                Liked Songs
              </h3>
            </li>
          </ul>

          <div className="bg-transparent mt-6">
            <p className="text-xs hover:underline pb-2 text-gray-300">
              <a href="#">Cookies</a>
            </p>
            <p className="text-xs hover:underline text-gray-300">
              <a href="#">Privacy</a>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <Home />
      </div>
    </>
  );
};

export default Profile;
