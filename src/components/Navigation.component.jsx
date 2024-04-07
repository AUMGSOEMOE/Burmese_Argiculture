import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const NavigationComponent = () => {
  return (
    <div className="flex ps-1 gap-1">
      {/* logo box */}
      <div className=" bg-main w-[20%] py-4 flex items-center">
        <img className=" w-24 ml-9" src="src/img/header/logo2.png" alt="" />
      </div>
      <div className=" w-full  ">
        {/* icon box */}
        <div className=" bg-main p-2 flex justify-between text-white ">
          <div className=" text-sm  ml-3">
            <p>Orders of $50 or more qualify for free shipping</p>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="flex text-xs items-center pr-4 border-r gap-1 border-r-white">
              <HiOutlineLocationMarker className="text-sm" /> 8502 Preston
              Road.Inglewood,Maine 98380
            </div>
            <div className="flex items-center gap-2   mr-5">
              <button className="hover:text-black duration-500">
                <TiSocialFacebook />
              </button>
              <button className="hover:text-black duration-500">
                <TiSocialTwitter />
              </button>
              <button className="hover:text-black duration-500">
                <TiSocialLinkedin />
              </button>
              <button className="hover:text-black duration-500">
                <FaInstagram className="text-sm" />
              </button>
              <button className="hover:text-black duration-500">
                <FaYoutube className="text-sm" />
              </button>
            </div>
          </div>
        </div>
        {/* nav box */}
        <div className="flex items-center  h-[70%] justify-between ">
          <div className="flex gap-9 text-lg font-normal ">
            <button className="flex items-center gap-1">
              HOME
              <FaPlus className="text-xs text-main" />
            </button>
            <button>ABOUT US</button>
            <button className="flex items-center gap-1">
              SERVICES
              <FaPlus className="text-xs text-main" />
            </button>
            <button className="flex items-center gap-1">
              PAGES
              <FaPlus className="text-xs text-main" />
            </button>
            <button className="flex items-center gap-1">
              BLOGS
              <FaPlus className="text-xs text-main" />
            </button>
            <button>CONTACT</button>
          </div>
          <div className="flex items-center gap-9 mr-5">
            <div className="flex text-2xl opacity-75 gap-5">
              <button>
                <IoSearch />
              </button>
              <button>
                <MdOutlineShoppingCart />
              </button>
            </div>
            <div className=" bg-runner hover:bg-black duration-500 text-white text-xs font-bold px-6 py-3 rounded-full">
              <button className="flex items-center">
                GET A QUOTE <HiChevronDoubleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;
