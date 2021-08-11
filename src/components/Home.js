import React from "react";
import "../index.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import { albumLists } from "../data";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { MusicNote } from "@material-ui/icons";
const Home = () => {
  const state1 = useSelector((state) => state.signupReducer);
  const state2 = useSelector((state) => state.loginReducer);
  console.log(state1, state2);
  return (
    <header className="overflow-x-hidden">
      <main className="flex bg-black-450 w-screen h-screen overflow-x-hidden text-white transition-all">
        <Sidebar />
        <section className="sm:ml-64 z-10   bg-gradient-to-b from-green-900 via-black-450 to-black-900 w-full h-full overflow-x-hidden ">
          <div className="sm:flex  md:justify-between sm:fixed sm:top-0 hidden w-full left-64 bg-black-450">
            <div className=" sm:items-center hidden sm:flex">
              <div className="text-5xl font-light pb-2 pl-2 mr-2  ml-3">
                <ArrowBackIosIcon />
              </div>
              <div className="text-5xl font-light pb-2 xs:hidden md:block mr-2 ml-3">
                <ArrowForwardIosIcon />
              </div>
            </div>

            {state1.username || state2.username ? (
              <div className="flex items-center justify-between py-2 pr-96  -ml-36 z-0  sm:mr-64 sm:pr-8 bg-black-450">
                <h1 className="ml-32 font-bold cursor-pointer text-xs ">
                  {state1.username || state2.username}
                </h1>
              </div>
            ) : (
              <div className="flex items-center justify-between py-2 pr-96  -ml-36 z-0  sm:mr-64 sm:pr-8 bg-black-450">
                <Link to="/signup">
                  <h1 className="ml-32 font-bold cursor-pointer text-xs ">
                    SIGN UP
                  </h1>
                </Link>
                <Link to="/login">
                  <button className="ml-4 mr-2 font-bold cursor-pointer text-xs bg-white text-black-900 px-2 py-2 md:px-8 md:py-3  rounded-3xl">
                    LOG IN
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center sm:hidden">
            <div className="w-11/12"></div>
            <Link to="/profile" className="mt-2 mr-4">
              <SettingsIcon />
            </Link>
          </div>
          {albumLists.map((item) => {
            const { id } = item;
            return <Albums {...item} key={id} />;
          })}
          <div className="pb-20"></div>
        </section>
      </main>
      <BottomNavbar />
    </header>
  );
};

const Albums = ({ Heading, para, photoIndex }) => {
  return (
    <main className="-mt-4">
      <div className="ml-3 sm:mt-6 sm:ml-8 ">
        <h1 className="sm:text-2xl font-bold sm:hover:underline text-md cursor-pointer sm:mt-20 mt-10 w-max">
          {Heading}
        </h1>
        <p className="sm:text-sm sm:block hidden sm:mt-1 text-xs text-gray-300  ">
          {para}
        </p>
      </div>

      <div className="flex flex-wrap  mt-8 sm:ml-20 md:ml-10 lg:ml-8 sm:overflow-x-hidden  pb-1">
        {photoIndex.map((item) => {
          return (
            <div
              key={item.id}
              className="sm:px-4 sm:py-4 sm:bg-black-450 sm:hover:bg-black-350 sm:transition-all sm:delay-75 sm:ease-out sm:my-2 sm:mx-2 my-2 mx-4 sm:w-max w-30 h-30   sm:h-max"
            >
              <img
                src={item.img}
                alt=""
                className="sm:h-52 sm:w-48 w-28 h-28 object-cover sm:-mt-0 -mt-2"
              />
              <h1 className="font-bold pt-3 cursor-pointer hidden sm:block">
                {item.title}
              </h1>
              <p className="sm:text-sm text-xs  text-gray-300 cursor-pointer w-20 sm:w-max sm:pt-0 pt-2">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
};
const Sidebar = () => {
  return (
    <section className="w-44 sm:w-64 h-screen fixed bg-black-900  top-0 left-0 sm:flex sm:flex-col sm:items-start hidden z-20">
      <div className="flex justify-center items-center ml-7 mt-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRWOPdB_ZBJWFcA8htNL-MpC0vnLTgGcKoA&usqp=CAU"
          alt=""
          className="w-32"
        />
      </div>

      <ul className="flex flex-col items-start">
        <li className="flex items-center ml-2 bg-black-350 mt-7 pl-5 rounded-sm py-2 ">
          <div className="pr-5">
            <HomeIcon />
          </div>
          <h3 className="pr-14 sm:pr-32 font-bold cursor-pointer text-sm ">
            Home
          </h3>
        </li>

        <li className="flex items-center ml-2  pl-5 rounded-sm py-2 ">
          <div className="pr-5">
            <SearchIcon />
          </div>
          <h3 className=" font-bold text-gray-300 text-sm cursor-pointer hover:text-white">
            Search
          </h3>
        </li>

        <li className="flex items-center ml-2  pl-5 rounded-sm py-2 ">
          <div className="pr-5">
            <LibraryBooksIcon />
          </div>
          <h3 className="font-bold text-gray-300 cursor-pointer text-sm hover:text-white">
            Your Library
          </h3>
        </li>
      </ul>

      <ul className="flex flex-col items-start">
        <li className="flex items-center ml-2  mt-7 pl-5 rounded-sm py-2 ">
          <div className="pr-3 mr-2 flex  items-center justify-center ">
            <h1 className=" text-black-900 bg-gray-300 w-6 h-6 pl-2 cursor-pointer pb-2 text-sm ">
              +
            </h1>
          </div>
          <h3 className="font-bold cursor-pointer text-sm text-gray-300 hover:text-white">
            Create Playlist
          </h3>
        </li>

        <li className="flex items-center ml-2  pl-5 rounded-sm py-2 ">
          <div className="mr-5  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
            <FavoriteIcon />
          </div>
          <h3 className=" font-bold text-gray-300 text-sm cursor-pointer hover:text-white">
            Liked Songs
          </h3>
        </li>
      </ul>

      <div className="absolute bottom-28 left-8">
        <p className="text-xs hover:underline pb-2 text-gray-300">
          <a href="#">Cookies</a>
        </p>
        <p className="text-xs hover:underline text-gray-300">
          <a href="#">Privacy</a>
        </p>
      </div>
    </section>
  );
};

export const BottomNavbar = () => {
  return (
    <main className="h-16 text-white bg-black-450 w-full sm:hidden overflow-x-hidden fixed bottom-0 left-0 z-50">
      <ul className="flex  items-center justify-between">
        <li className="flex flex-col justify-center items-center mx-3 my-2">
          <div className="">
            <HomeIcon />
          </div>
          <h3 className=" sm:pr-32 font-bold cursor-pointer text-sm ">Home</h3>
        </li>

        <li className="flex items-center flex-col text-black-550 hover:text-white">
          <div className="">
            <SearchIcon />
          </div>
          <h3 className=" font-bold  text-sm cursor-pointer ">Search</h3>
        </li>

        <li className="flex items-center flex-col text-black-550 hover:text-white">
          <div className="">
            <LibraryBooksIcon />
          </div>
          <h3 className="font-bold  cursor-pointer text-sm ">Your Library</h3>
        </li>
        <li className="listItem">
          <div className="icon">
            <MusicNote />
          </div>
          <h3 className="font-bold  cursor-pointer text-sm bg-black-450">
            Premium
          </h3>
        </li>
      </ul>
    </main>
  );
};
export default Home;
