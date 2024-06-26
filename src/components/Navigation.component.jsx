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
import { Button, MenuButton } from ".";

const NavigationComponent = () => {
  return (
    <div className="flex ps-1 gap-1 bg-white">
      {/* logo box */}
      <div className=" bg-main w-[20%] py-4 flex items-center">
        <img
          className=" w-24 h-20 ml-9"
          src="/src/img/header/logo2.png"
          alt=""
        />
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
          <div className="flex gap-9 text-md font-semibold ">
            <MenuButton
              name={`HOME`}
              data={["Organic Farm", "Organic Shop", "Mega Shop"]}
            />

            <button>ABOUT US</button>
            <MenuButton
              name={`SERVICES`}
              data={["Services", "Services Detailed"]}
            />

            <MenuButton
              name={`SERVICES`}
              data={[
                "Team",
                "Team detailed",
                "Projects Gallery",
                "Projects Detailed",
                "FAQ Page",
                "Error Page",
              ]}
            />
            <MenuButton name={`Blog`} data={["Blog", "Blog Detailed"]} />
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
            <div>
              <Button
                style={"bg-runner hover:bg-black text-white text-xs px-6 py-3"}
                label={"GET A QUOTE"}
                icon={<HiChevronDoubleRight />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;
