import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Form } from "..";
import { CiUser } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";

const BlogDetailed = () => {
  const { Id } = useParams();
  const [item, setItem] = useState(null);
  const { data, error, loading } = useSelector((store) => store.blog);

  useEffect(() => {
    const finder = data?.find((i) => i.Id === Id);
    setItem(finder);
  }, [Id, data]);

  console.log(item);
  return (
    <div>
      <Container>
        <div className="w-[50%] mx-auto">
          <div className=" h-full  shadow-2xl  mt-10">
            <div className=" ">
              <img className="w-full" src={item?.Image} />
            </div>
            <div className="p-6">
              <div className="flex font-thin opacity-60 gap-2 ">
                <div className="flex items-center border-r border-r-main pr-2">
                  <CiUser className="text-main" />
                  <a href="#" className=" ml-1 hover:text-main gap-1">
                    {item?.Author}
                  </a>
                </div>
                <div className="border-r border-r-main pr-2">
                  <a
                    href="#"
                    className="flex items-center hover:text-main gap-1"
                  >
                    {item?.Date}
                  </a>
                </div>
                <div>Comments(0)</div>
              </div>
              <div className="text-xl font-bold mt-3">{item?.Title}</div>
              <div className="opacity-60 mt-3 tracking-wider border-b-2 py-5">
                {item?.Content}
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-4 ">
                  <h3 className=" text-2xl font-bold">Tags:</h3>
                  <button className=" bg-slate-300 py-2 px-6 rounded-full hover:bg-main hover:text-white duration-500">
                    Argiculture
                  </button>
                  <button className=" bg-slate-300 py-2 px-6 rounded-full hover:bg-main hover:text-white duration-500">
                    Organic
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-2 ">
                  <h3 className=" text-2xl font-bold">Share On:</h3>
                  <button className="bg-slate-300 p-2 text-lg rounded-full hover:bg-main hover:text-white duration-500">
                    <TiSocialFacebook />
                  </button>
                  <button className="bg-slate-300 p-2 text-lg rounded-full hover:bg-main hover:text-white duration-500">
                    <TiSocialTwitter />
                  </button>
                  <button className="bg-slate-300 p-2 text-lg rounded-full hover:bg-main hover:text-white duration-500">
                    <TiSocialLinkedin />
                  </button>
                  <button className="bg-slate-300 p-2 text-lg rounded-full hover:bg-main hover:text-white duration-500">
                    <FaInstagram className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 shadow-2xl h-full flex flex-col gap-7 py-8 mt-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold flex gap-3 items-center">
                <IoReturnUpBackOutline className="text-main text-4xl" />
                Leave a Comment
              </h2>
              <p className="opacity-70">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <Form />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetailed;
