import React, { useState } from "react";
import { Menu, X } from "lucide-react";
//import  Link  from "react-router-dom";
import Link from "next/link";
import PrimaryBtn from "../Buttons/buttoncomp";


export const Navbar = () => {
  console.log("PrimaryBtn:", PrimaryBtn);
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      {/*<nav className="w-full h-auto bg-[#7d7c7c] shadow-none lg:px-24 md:px-16 sm:px-14 px-12 py-3">*/}
      <nav className="fixed top-0 left-0 w-full h-auto bg-[#e8d5d5] shadow-none lg:px-24 md:px-16 sm:px-14 px-12 py-3 z-50">
      {/* Navbar content */}
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              {/* Logo section */}
              <Link href="/" className="text-3xl text-orange-500 font-semibold tracking-[0.1rem]">
                Navbar
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X className="text-gray-400 cursor-pointer" size={24} />
                  ) : (
                    <Menu className="text-gray-400 cursor-pointer" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* NAvbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            } md:flex justify-between items-center`}
          >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <PrimaryBtn>Become Member</PrimaryBtn>
              {/* <button className="bg-indigo-600 text-base font-normal text-white rounded px-4 py-1.5">
                Become Member
              </button> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

//export default Navbar;
