import React from "react";
import { Button, FormElement } from ".";
import { IoIosMailOpen } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className="bg-footer">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-44 py-20">
          <div className=" text-3xl font-bold text-white flex items-center gap-7 ">
            <IoIosMailOpen className="text-6xl text-runner" />
            <span>
              Sign Up to Get Updates <br /> & News About Us.
            </span>
          </div>
          <div className="flex items-center gap-5">
            <FormElement
              type={"email"}
              name={"email"}
              style={"rounded-lg w-80 h-14"}
            />
            <Button label={"SUBSCRIBE"} style={"bg-runner rounded-lg"} />
          </div>
        </div>
        <div className="flex gap-20 ">
          <div className="w-[30%] py-5">
            <p className=" text-gray-500 mb-5">
              We provide specialized winterization services to safeguard your
              pool during the off-season, and when spring arrives, we handle the
              thorough opening process.
            </p>
            <div className="flex gap-5">
              <button className="bg-slate-300 p-2 text-lg rounded-full hover:bg-main hover:text-white duration-500">
                <TiSocialFacebook />
              </button>
              <button className="bg-slate-300 p-2 text-lg rounded-full hover:bg-main hover:text-white duration-500">
                <TiSocialTwitter />
              </button>
              <button className="bg-slate-300 p-2 text-lg rounded-full hover:bg-main hover:text-white duration-500">
                <TiSocialLinkedin />
              </button>
            </div>
          </div>
          <div className=" text-gray-500 mb-5">
            <h4 className="text-white text-2xl font-semibold mb-5">
              Categories
            </h4>
            <ul className="text-lg flex flex-col gap-2">
              <li className="hover:text-runner duration-500">
                <a href="">Fresh Vegetable</a>
              </li>
              <li className="hover:text-runner duration-500">
                <a href="">Natural Fruits</a>
              </li>
              <li className="hover:text-runner duration-500">
                <a href="">Dairy Products</a>
              </li>
              <li className="hover:text-runner duration-500">
                <a href="">Tea & Coffee</a>
              </li>
              <li className="hover:text-runner duration-500">
                <a href="">Meat & Fish</a>
              </li>
            </ul>
          </div>
          <div className=" text-gray-500 mb-5">
            <h4 className="text-white text-2xl font-semibold mb-5">
              Categories
            </h4>
            <ul className="text-lg flex flex-col gap-2">
              <li className="hover:text-runner duration-500">
                <a href="">About Us</a>
              </li>
              <li className="hover:text-runner duration-500">
                <a href="">Portfolios</a>
              </li>
              <li className="hover:text-runner duration-500">
                <a href="">Help and FAQs</a>
              </li>
              <li className="hover:text-runner duration-500">
                <a href="">Blog</a>
              </li>
              <li className="hover:text-runner duration-500">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className=" text-gray-500 mb-5">
            <h4 className="text-white text-2xl font-semibold mb-5">
              Contact Us
            </h4>
            <ul className="text-lg flex flex-col gap-2">
              <li>
                <a href="" className=" pointer-events-none">
                  8502 Preston Rd. Inglewood, Maine 98380
                </a>
              </li>
              <li className=" flex flex-col">
                <a href="" className="hover:text-runner duration-500">
                  +959-770770788
                </a>
                <a href="" className="hover:text-runner duration-500">
                  +959-770770777
                </a>
              </li>
              <li>
                <a href="" className="hover:text-runner duration-500">
                  help24/7@frutin.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
