import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { GiLeafSwirl } from "react-icons/gi";
import { BlogList } from "..";

const BlogComponent = () => {
  return (
    <div>
      <div className="h-screen mt-14 ">
        <div className="flex items-center gap-3 ">
          <GiLeafSwirl className="text-main text-4xl" />
          <h4 className=" font-serif font-extrabold text-runner tracking-widest">
            Blog & News
          </h4>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Latest Updates & News</h1>
          <button className="flex items-center justify-center bg-main hover:bg-black duration-500 text-white font-semibold text-lg w-44 h-14 rounded-full">
            <span>View More Posts</span>
            <HiChevronDoubleRight className="text-xl mt-1" />
          </button>
        </div>
        <div>
          <BlogList />
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
