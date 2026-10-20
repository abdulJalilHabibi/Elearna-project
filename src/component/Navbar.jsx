import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Navabr() {
  return (
    <nav className="absolute px-4 top-0 left-0 z-10  py-5 w-full text-white  flex justify-between items-center ">
      <Logo />
      <div className="flex gap-16 font-normal text-[17px] ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className=" flex gap-5 items-center">
        <img src="./bag.png" alt="bag" />
        <button className="font-normal text-[17px] cursor-pointer">
          Login
        </button>
        <button className="font-normal text-[17px] cursor-pointer">
          Register
        </button>
      </div>
    </nav>
  );
}
